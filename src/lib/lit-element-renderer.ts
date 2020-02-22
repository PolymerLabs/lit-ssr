/**
 * @license
 * Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

import {ElementRenderer, ChildRenderer} from './element-renderer.js';
import {LitElement, TemplateResult, CSSResult} from 'lit-element';
import {render, renderTemplateResult, RenderInfo} from './render.js';
import StyleTransformer from '@webcomponents/shadycss/src/style-transformer.js';
import {Node, DefaultTreeNode} from 'parse5';
import {isCommentNode, getAttr} from './parse5-utils.js';
import {marker} from 'lit-html/lib/template';

export type Constructor<T> = {new (): T};

/**
 * An object that renders elements of a certain type.
 */
export class LitElementRenderer implements ElementRenderer {
  async *renderElement(
    instance: LitElement,
    childRenderer: ChildRenderer,
    renderInfo: RenderInfo
  ): AsyncIterableIterator<string> {
    const renderResult = ((instance as unknown) as {
      render(): TemplateResult;
    }).render();
    if (renderInfo.flattened) {
      yield* render(renderResult, childRenderer, renderInfo.flattened);
    } else {
      yield '<shadow-root>';
      yield* render(renderResult, childRenderer, renderInfo.flattened);
      yield '</shadow-root>';
    }
  }

  async *renderStyles(
    _elementClass: Constructor<HTMLElement>
  ): AsyncIterator<string> {
    const scopedStyles = [];
    for (const [tagName, definition] of (customElements as any).__definitions) {
      const styles = [(definition.ctor as any).styles].flat(Infinity);
      for (const style of styles) {
        if (style instanceof CSSResult) {
          const scoped = StyleTransformer.css(style.cssText, tagName);
          scopedStyles.push(scoped);
        }
      }
    }
    return scopedStyles;
  }
}

export class LitHtmlChildRenderer {
  private readonly nodes: DefaultTreeNode[];
  private readonly html: string;
  private readonly result: TemplateResult;

  /**
   * The starting partIndex within the template result
   */
  private readonly partIndex: number;

  /**
   * The maximum partIndex rendered from calls to renderChildren()
   */
  renderedPartIndex: number;

  private readonly claimedNodes: Set<Node>;

  constructor(
    nodes: DefaultTreeNode[],
    html: string,
    result: TemplateResult,
    partIndex: number,
    claimedNodes: Set<Node>
  ) {
    this.nodes = nodes;
    this.html = html;
    this.result = result;
    this.partIndex = partIndex;
    this.claimedNodes = claimedNodes;
    this.renderedPartIndex = partIndex;
  }

  async *renderChildren(
    slotName: string | undefined
  ): AsyncIterableIterator<string> {
    if (this.nodes.length === 0) {
      return;
    }
    let childPartIndex = this.partIndex;
    for (const child of this.nodes) {
      // All these children are from the same template
      // While rendering nested templates, we may create children from
      // other templates, so we can't render them by slicing the current
      // html string. We'll have to evaluate the sub templates and stream
      // them here...
      if (isCommentNode(child) && child.data === marker) {
        // TODO: render sub-template, pull in slotted chlidren here
        // What do we need to do to render children from another templates?
        //  - increment the partIndex from where the child marker node came from
        //  - get the TemplateResult value
        //  - render the template
        //  - iterate through the rendered result...
        const childValue = this.result.values[childPartIndex++];
        // TODO: this renders the child value in this slot, but we need
        // to render the part marker at the original location at [1]
        if (childValue instanceof TemplateResult) {
          // renderChildren is only called when flattened = true, so it's ok to
          // hardcode that value here.
          // TODO: instances: [] might not be what we want?
          yield* renderTemplateResult(
            childValue,
            undefined,
            this.claimedNodes,
            {slot: {slotName}, flattened: true, instances: []}
          );
        } else {
          if (childValue === null || childValue === undefined) {
            // do nothing
          } else {
            yield String(childValue);
          }
        }
      } else {
        const childSlotName = getAttr(child, 'slot');
        if (slotName === childSlotName) {
          const startOffset = (child as any).sourceCodeLocation!.startOffset;
          const endOffset = (child as any).sourceCodeLocation!.endOffset;
          yield this.html.substring(startOffset, endOffset);
          this.claimedNodes.add(child);
          // TODO: add an attribute for the placeholder comment id
        }
      }
    }
    this.renderedPartIndex = childPartIndex;
  }
}
