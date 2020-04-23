/// <reference lib="dom" />

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

import {TemplateResult, nothing} from 'lit-html';
import {
  marker,
  markerRegex,
  lastAttributeNameRegex,
  TemplatePart,
  boundAttributeSuffix,
} from 'lit-html/lib/template.js';

// types only
import {Node, DefaultTreeDocumentFragment, DefaultTreeNode} from 'parse5';

import {
  depthFirst,
  parseFragment,
  isCommentNode,
  isElement,
  getAttr,
  isTextNode,
} from './util/parse5-utils.js';
import {LitElement, CSSResult} from 'lit-element';
import StyleTransformer from '@webcomponents/shadycss/src/style-transformer.js';
import {
  LitHtmlChildRenderer,
  LitElementRenderer,
} from './lit-element-renderer.js';
import {ChildRenderer} from './element-renderer.js';
import {isRepeatDirective, RepeatPreRenderer} from './directives/repeat.js';
import {
  isClassMapDirective,
  ClassMapPreRenderer,
} from './directives/class-map.js';
import {reflectedAttributeName} from './reflected-attributes.js';
import {isRenderLightDirective} from 'lit-element/lib/render-light.js';

const traverse = require('parse5-traverse');

const templateCache = new Map<
  TemplateStringsArray,
  {html: string; ast: DefaultTreeDocumentFragment; parts: TemplatePart[]}
>();

const getTemplate = (result: TemplateResult) => {
  const template = templateCache.get(result.strings);
  if (template !== undefined) {
    return template;
  }
  const html = result.getHTML();
  const ast = parseFragment(html, {
    sourceCodeLocationInfo: true,
  }) as DefaultTreeDocumentFragment;
  const parts: Array<TemplatePart> = [];

  // Initialized to -1 so that the first child node is index 0, to match
  // client-side lit-html.
  let index = -1;
  for (const node of depthFirst(ast)) {
    if (isCommentNode(node)) {
      if (node.data === marker) {
        parts.push({
          type: 'node',
          index,
        });
      }
    } else if (isElement(node) && node.attrs.length > 0) {
      for (const attr of node.attrs) {
        if (attr.name.endsWith(boundAttributeSuffix)) {
          const name = attr.name.substring(
            0,
            attr.name.length - boundAttributeSuffix.length
          );
          const strings = attr.value.split(markerRegex);
          parts.push({
            type: 'attribute',
            index,
            name,
            strings,
          });
        }
      }
    }
    index++;
  }
  const t = {html, ast, parts};
  templateCache.set(result.strings, t);
  return t;
};

const globalMarkerRegex = new RegExp(markerRegex, `${markerRegex.flags}g`);

type SlotInfo = {
  slotName: string | undefined;
};

export type RenderInfo = {
  slot?: SlotInfo;
  flattened: boolean;
  instances: Array<{tagName: string; instance?: LitElement}>;
};

declare global {
  interface Array<T> {
    flat(depth: number): Array<T>;
  }
}

/**
 * Returns the scoped style sheets required by all elements currently defined.
 */
export const getScopedStyles = () => {
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
};
export async function* render(
  value: unknown,
  childRenderer: ChildRenderer | undefined,
  flattened: boolean = false
): AsyncIterableIterator<string> {
  yield* renderValue(value, childRenderer, {flattened, instances: []});
}

export async function* renderValue(
  value: unknown,
  childRenderer: ChildRenderer | undefined,
  renderInfo: RenderInfo
): AsyncIterableIterator<string> {
  // flattened = flattened ?? true;

  // console.log('render', {
  //   isTemplateResult: value instanceof TemplateResult,
  //   isRepeat: isRepeatDirective(value),
  //   isDirective: isDirective(value),
  // });
  // if (isDirective(value)) {
  //   console.log('directive', value, isRenderLightDirective(value));
  // }
  if (value instanceof TemplateResult) {
    yield `<!--lit-part ${value.digest}-->`;
    yield* renderTemplateResult(value, childRenderer, new Set(), renderInfo);
  } else {
    yield `<!--lit-part-->`;
    if (value === undefined || value === null) {
      // do nothing
    } else if (isRepeatDirective(value)) {
      yield* (value as RepeatPreRenderer)(childRenderer, renderInfo);
    } else if (isRenderLightDirective(value)) {
      // If a value was produced with renderLight(), we want to call and render
      // the renderLight() method.
      const instance = renderInfo.instances[renderInfo.instances.length - 1];
      // TODO, move out of here into something LitElement specific
      if (instance.instance !== undefined) {
        const templateResult = (instance.instance as any).renderLight();
        yield* renderValue(templateResult, childRenderer, renderInfo);
      }
    } else if (value === nothing) {
      // yield nothing
    } else if (Array.isArray(value)) {
      for (const item of value) {
        yield* renderValue(item, childRenderer, renderInfo);
      }
    } else {
      // TODO: convert value to string, handle arrays, directives, etc.
      yield String(value);
    }
  }
  yield `<!--/lit-part-->`;
}

export async function* renderTemplateResult(
  result: TemplateResult,
  childRenderer: ChildRenderer | undefined,
  claimedNodes: Set<Node> = new Set(),
  renderInfo: RenderInfo /* = {flattened: true} */
): AsyncIterableIterator<string> {
  const {slot} = renderInfo;

  // In order to render a TemplateResult we have to handle and stream out
  // different parts of the result separately:
  //   - Literal sections of the template
  //   - Defined custom element within the literal sections
  //   - Values in the result
  //
  // This means we can't just iterate through the template literals and values,
  // we must parse and traverse the template's HTML. But we don't want to pay
  // the cost of serializing the HTML node-by-node when we already have the
  // template in string form. So we parse with location info turned on and use
  // that to index into the HTML string generated by TemplateResult.getHTML().
  // During the tree walk we will handle expression marker nodes and custom
  // elements. For each we will record the offset of the node, and output the
  // previous span of HTML.

  const {html, ast, parts: templateParts} = getTemplate(result);

  /* The next value in result.values to render */
  let partIndex = 0;

  /* 
    The the template part index, which is different from the part index as
    multiple-binding attribute expressions are combined into one template part.
   */
  let templatePartIndex = -1;

  /* The index of the last distributed value to be rendered to a slot */
  let distributedIndex = -1;

  /* The last offset of html written to the stream */
  let lastOffset: number | undefined = 0;

  /**
   * Returns a substring of the html from the `lastOffset` flushed to `offset`
   * ready for yielding to the renderTemplateResult iterable.
   */
  const flushTo = (offset?: number) => {
    if (lastOffset === undefined) {
      throw new Error('lastOffset is undefined');
    }
    const previousLastOffset = lastOffset;
    lastOffset = offset;
    return html.substring(previousLastOffset, offset);
  };

  /**
   * Sets `lastOffset` to `offset`, skipping a range of characters. This is
   * useful for skipping <slot>s and distributed nodes in flattened mode, or
   * skipping and re-writting lit-html marker nodes.
   */
  const skipTo = (offset: number) => {
    if (lastOffset === undefined) {
      throw new Error('lastOffset is undefined');
    }
    if (offset < lastOffset) {
      throw new Error(`offset must be greater than lastOffset.
        offset: ${offset}
        lastOffset: ${lastOffset}
      `);
    }
    lastOffset = offset;
  };

  async function* handleNode(node: DefaultTreeNode) {
    if (isCommentNode(node)) {
      if (node.data === marker) {
        yield flushTo(node.sourceCodeLocation!.startOffset);
        skipTo(node.sourceCodeLocation!.endOffset);
        const value = result.values[partIndex++];
        templatePartIndex++;

        if (partIndex <= distributedIndex) {
          // This means we've already consumed this part during distribution
          // into a slot, so we don't want to render the value, but we do want
          // to render the part markers for subsequent hydration.
          // TODO: we also want to render placeholder comments for the
          // distributed nodes
          if (value instanceof TemplateResult) {
            yield `<!--lit-part ${value.digest}--><!--/lit-part-->`;
          } else {
            yield `<!--lit-part--><!--/lit-part-->`;
          }
        } else {
          yield* renderValue(value, childRenderer, renderInfo);
        }
      }
    } else if (isElement(node)) {
      // If the element is custom, this will be the instantiated class
      let instance: LitElement | undefined = undefined;

      // Whether to flush the start tag. This is neccessary if we're changing
      // any of the attributes in the tag, so it's true for custom-elements
      // which might reflect their own state, or any element with a binding.
      let writeTag = false;

      if (claimedNodes.has(node)) {
        // Skip the already distributed node
        yield flushTo(node.sourceCodeLocation!.startOffset);
        skipTo(node.sourceCodeLocation!.endOffset);
        // [1] TODO: write the distributed node placeholder comment
      } else {
        // renderInfo.instances.push({tagName: node.tagName});
        // console.log('start element', renderInfo.instances);
        const tagName = node.tagName;

        if (tagName === 'slot' && renderInfo.flattened) {
          yield flushTo(node.sourceCodeLocation!.startTag.startOffset);
          const slotName = getAttr(node, 'name');

          if (childRenderer !== undefined) {
            yield* childRenderer.renderChildren(slotName);
          }

          skipTo(node.sourceCodeLocation!.endOffset);
        } else if (tagName.indexOf('-') !== -1) {
          const ctor = customElements.get(tagName);
          // console.log('potentially custom element', tagName, ctor !== undefined);
          if (ctor !== undefined) {
            // Write the start tag
            // yield flushTo(node.sourceCodeLocation!.startTag.endOffset);
            writeTag = true;

            // Instantiate the element and stream its render() result
            try {
              instance = new ctor();
              renderInfo.instances[
                renderInfo.instances.length - 1
              ].instance = instance;
            } catch (e) {
              console.error('Exception in custom element constructor', e);
            }
          }
        }

        // Handle attributes

        let boundAttrsCount = 0;
        for (const attr of node.attrs) {
          if (attr.name.endsWith('$lit$')) {
            const attrSourceLocation = node.sourceCodeLocation!.attrs[
              attr.name
            ];
            const attrNameStartOffset = attrSourceLocation.startOffset;
            const attrEndOffset = attrSourceLocation.endOffset;

            yield html.substring(lastOffset!, attrNameStartOffset);

            if (attr.name.startsWith('.')) {
              const propertyName = lastAttributeNameRegex
                .exec(result.strings[partIndex])![2]
                .slice(1);
              // TODO: this only handles one expression, combine with attribute
              // handling to handle multiple expressions
              const value = result.values[partIndex++];
              if (instance !== undefined) {
                (instance as any)[propertyName] = value;
              }
              // Property should be reflected to attribute
              let reflectedName = reflectedAttributeName(tagName, propertyName);
              if (reflectedName !== undefined) {
                yield `${reflectedName}="${value}"`;
              }
            } else {
              const attributeName = attr.name.substring(
                0,
                attr.name.length - 5
              );
              let attributeString = `${attributeName}="`;
              // attr.value has the raw attribute value, which may contain multiple
              // bindings. Replace the markers with their resolved values.
              attributeString += attr.value.replace(globalMarkerRegex, () => {
                const value = result.values[partIndex++];
                if (isClassMapDirective(value)) {
                  return (value as ClassMapPreRenderer)();
                } else {
                  return String(value);
                }
              });
              yield attributeString + '"';
            }
            skipTo(attrEndOffset);
            boundAttrsCount += 1;
            templatePartIndex++;
          }
        }

        if (writeTag || boundAttrsCount > 0) {
          yield flushTo(node.sourceCodeLocation!.startTag.endOffset);
        }

        if (boundAttrsCount > 0) {
          const templatePart = templateParts[templatePartIndex];
          yield `<!--lit-bindings ${templatePart.index}-->`;
        }

        if (instance !== undefined) {
          const childRenderer = new LitHtmlChildRenderer(
            node.childNodes,
            html,
            result,
            partIndex,
            claimedNodes
          );
          // TODO: look up a renderer instead of creating one
          const renderer = new LitElementRenderer();
          yield* renderer.renderElement(
            instance as LitElement,
            childRenderer,
            renderInfo
          );
          distributedIndex = childRenderer.renderedPartIndex;
        }
        // console.log('end element', node.tagName, renderInfo.instances);
        // renderInfo.instances.pop();
      }
    }
  }

  // At the top-level of a TemplateResult we may have nodes that are children of
  // an element with slots, so we need to handle top-level nodes specially in an
  // outer loop. From there we perform a depth-first traversal.
  if (ast.childNodes === undefined) {
    return;
  }
  for (const node of ast.childNodes) {
    if (isElement(node)) {
      renderInfo.instances.push({tagName: node.tagName});
    }
    if (slot !== undefined) {
      if (isElement(node)) {
        const nodeSlotName = getAttr(node, 'slot');
        if (nodeSlotName === slot.slotName) {
          skipTo(node.sourceCodeLocation!.startOffset);
          for (const child of depthFirst(node)) {
            yield* handleNode(child);
          }
          yield flushTo(node.sourceCodeLocation!.endOffset);
        } else {
          skipTo(node.sourceCodeLocation!.endOffset);
        }
      } else if (slot.slotName === undefined && isTextNode(node)) {
        for (const child of depthFirst(node)) {
          yield* handleNode(child);
        }
      }
    } else {
      traverse(node, {
        pre(node: DefaultTreeNode, _parent: DefaultTreeNode) {
          if (isElement(node)) {
            renderInfo.instances.push({tagName: node.tagName});
          }
        },
        post(node: DefaultTreeNode, _parent: DefaultTreeNode) {
          if (isElement(node)) {
            renderInfo.instances.pop();
          }
        },
      });
      for (const child of depthFirst(node)) {
        yield* handleNode(child);
      }
    }
    if (isElement(node)) {
      renderInfo.instances.pop();
    }
  }

  yield flushTo();
  if (partIndex !== result.values.length) {
    throw new Error(
      `unexpected final partIndex: ${partIndex} !== ${result.values.length}`
    );
  }
}
