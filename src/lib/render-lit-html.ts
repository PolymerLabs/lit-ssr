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

import {TemplateResult, nothing, noChange} from 'lit-html';
import {
  marker,
  markerRegex,
  TemplatePart,
  boundAttributeSuffix,
  AttributeTemplatePart,
} from 'lit-html/lib/template.js';

// types only
import {DefaultTreeDocumentFragment} from 'parse5';

import {
  depthFirst,
  parseFragment,
  isCommentNode,
  isElement,
} from './util/parse5-utils.js';
import {LitElement, CSSResult} from 'lit-element';
import StyleTransformer from '@webcomponents/shadycss/src/style-transformer.js';
// import {LitElementRenderer} from './lit-element-renderer.js';
import {isRepeatDirective, RepeatPreRenderer} from './directives/repeat.js';
import {
  isClassMapDirective,
  ClassMapPreRenderer,
} from './directives/class-map.js';
// import {reflectedAttributeName} from './reflected-attributes.js';
import {isRenderLightDirective} from 'lit-element/lib/render-light.js';

const templateCache = new Map<
  TemplateStringsArray,
  {html: string; ast: DefaultTreeDocumentFragment; parts: TemplatePart[], ops: Array<Op>}
>();

type TextOp = {
  type: 'text',
  value: string,
};

type NodePartOp = {
  type: 'node-part',
};

type AttributePartOp = {
  type: 'attribute-part',
};

type CustomElementOp = {
  type: 'custom-element',
  tagName: string,
  ctor: any,
};

type Op = TextOp | NodePartOp | AttributePartOp | CustomElementOp;

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

  const ops: Array<Op> = [];

  /* The last offset of html written to the stream */
  let lastOffset: number | undefined = 0;

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

  /**
   * Creates or appends to a text opcode with a substring of the html from the
   * `lastOffset` flushed to `offset`.
   */
  const flushTo = (offset?: number) => {
    if (lastOffset === undefined) {
      throw new Error('lastOffset is undefined');
    }
    const previousLastOffset = lastOffset;
    lastOffset = offset;
    const value = html.substring(previousLastOffset, offset);
    const op = ops[ops.length - 1];
    if (op !== undefined && op.type === 'text') {
      op.value += value;
    } else {
      ops.push({
        type: 'text',
        value
      });
    }
  };

  const flush = (value: string) => {
    const op = ops[ops.length - 1];
    if (op !== undefined && op.type === 'text') {
      op.value += value;
    } else {
      ops.push({
        type: 'text',
        value
      });
    }
  };

  // Depth-first node index. Initialized to -1 so that the first child node is
  // index 0, to match client-side lit-html.
  let nodeIndex = -1;
  for (const node of depthFirst(ast)) {
    if (isCommentNode(node)) {
      if (node.data === marker) {
        parts.push({
          type: 'node',
          index: nodeIndex,
        });
        flushTo(node.sourceCodeLocation!.startOffset);
        skipTo(node.sourceCodeLocation!.endOffset);
        ops.push({
          type: 'node-part'
        });
        // There will be two comments per part (open+close) in the rendered
        // output and on the client, so increment again for that
        nodeIndex++;
      }
    } else if (isElement(node)) {
      // Whether to flush the start tag. This is neccessary if we're changing
      // any of the attributes in the tag, so it's true for custom-elements
      // which might reflect their own state, or any element with a binding.
      let writeTag = false;
      let boundAttrsCount = 0;

      const tagName = node.tagName;
      let ctor;

      if (tagName.indexOf('-') !== -1) {
        // Looking up the constructor here means that custom elements must be
        // registered before rendering the first template that contains them.
        ctor = customElements.get(tagName);
        if (ctor !== undefined) {
          // Write the start tag
          writeTag = true;
        }
      }
      if (node.attrs.length > 0) {
        for (const attr of node.attrs) {
          if (attr.name.endsWith(boundAttributeSuffix)) {
            writeTag = true;
            boundAttrsCount += 1;
            // Note that although we emit a lit-bindings comment marker for any
            // nodes with bindings, we don't account for it in the nodeIndex because
            // that will not be injected into the client template
            const name = attr.name.substring(
              0,
              attr.name.length - boundAttributeSuffix.length
            );
            const strings = attr.value.split(markerRegex);
            const attrSourceLocation = node.sourceCodeLocation!.attrs[attr.name];
            const attrNameStartOffset = attrSourceLocation.startOffset;
            const attrEndOffset = attrSourceLocation.endOffset;
            parts.push({
              type: 'attribute',
              index: nodeIndex,
              name,
              strings,
            });
            flushTo(attrNameStartOffset);
            ops.push({
              type: 'attribute-part'
            });
            skipTo(attrEndOffset);
          }
        }
      }

      if (writeTag) {
        flushTo(node.sourceCodeLocation!.startTag.endOffset);
      }

      if (boundAttrsCount > 0) {
        flush(`<!--lit-bindings ${nodeIndex}-->`);
      }

      if (ctor !== undefined) {
        ops.push({
          type: 'custom-element',
          tagName,
          ctor,
        });
      }

    }
    nodeIndex++;
  }
  flushTo();
  const t = {html, ast, parts, ops};
  templateCache.set(result.strings, t);
  return t;
};

// const globalMarkerRegex = new RegExp(markerRegex, `${markerRegex.flags}g`);

export type RenderInfo = {
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
export function* render(value: unknown): IterableIterator<string> {
  yield* renderValue(value, {instances: []});
}

export function* renderValue(
  value: unknown,
  renderInfo: RenderInfo
): IterableIterator<string> {
  if (value instanceof TemplateResult) {
    yield `<!--lit-part ${value.digest}-->`;
    yield* renderTemplateResult(value, renderInfo);
  } else {
    yield `<!--lit-part-->`;
    if (value === undefined || value === null) {
      // do nothing
    } else if (isRepeatDirective(value)) {
      yield* (value as RepeatPreRenderer)(renderInfo);
    } else if (isRenderLightDirective(value)) {
      // If a value was produced with renderLight(), we want to call and render
      // the renderLight() method.
      const instance = renderInfo.instances[renderInfo.instances.length - 1];
      // TODO, move out of here into something LitElement specific
      if (instance.instance !== undefined) {
        const templateResult = (instance.instance as any).renderLight();
        yield* renderValue(templateResult, renderInfo);
      }
    } else if (value === nothing || value === noChange) {
      // yield nothing
    } else if (Array.isArray(value)) {
      for (const item of value) {
        yield* renderValue(item, renderInfo);
      }
    } else {
      // TODO: convert value to string, handle arrays, directives, etc.
      yield String(value);
    }
  }
  yield `<!--/lit-part-->`;
}

export function* renderTemplateResult(
  result: TemplateResult,
  renderInfo: RenderInfo
): IterableIterator<string> {
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

  const {ops, parts: templateParts} = getTemplate(result);

  /* The next value in result.values to render */
  let partIndex = 0;

  /* 
    The the template part index, which is different from the part index as
    multiple-binding attribute expressions are combined into one template part.
   */
  let templatePartIndex = -1;

  console.log('ops', ops);

  for (const op of ops) {
    switch (op.type) {
      case 'text':
        console.log('text', op.value);
        yield op.value;
        break;
      case 'node-part': {
        console.log('node-part');
        const value = result.values[partIndex++];
        templatePartIndex++;
        yield* renderValue(value, renderInfo);
        break;
      }
      case 'attribute-part': {
        templatePartIndex++;
        const templatePart = templateParts[templatePartIndex] as AttributeTemplatePart;
        console.log('attribute-part', templatePartIndex, templatePart);
        // const stringForPart = result.strings[partIndex];
        // const name = lastAttributeNameRegex.exec(stringForPart)![2];
        const statics = templatePart.strings;
        let attributeName = templatePart.name;
        const attributeString = `${attributeName}="${getAttrValue(statics, result, partIndex)}"`;
        // attr.value has the raw attribute value, which may contain multiple
        // bindings. Replace the markers with their resolved values.
        partIndex += statics.length - 1;
        yield attributeString;
        break;
      }
      case 'custom-element':
        break;
    }
  }

  if (partIndex !== result.values.length) {
    throw new Error(
      `unexpected final partIndex: ${partIndex} !== ${result.values.length}`
    );
  }
}

const getAttrValue = (
  strings: ReadonlyArray<string>,
  result: TemplateResult,
  startIndex: number
) => {
  let s = strings[0];
  for (let i = 0; i < strings.length - 1; i++) {
    const value = result.values[startIndex + i];
    if (isClassMapDirective(value)) {
      s += (value as ClassMapPreRenderer)();
    } else {
      s += String(value);
    }
    s += strings[i + 1];
  }
  return s;
};
