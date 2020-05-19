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

import {ElementRenderer} from './element-renderer.js';
import {LitElement, TemplateResult, CSSResult} from 'lit-element';
import {render, RenderInfo} from './render-lit-html.js';
import StyleTransformer from '@webcomponents/shadycss/src/style-transformer.js';

export type Constructor<T> = {new (): T};

/**
 * An object that renders elements of a certain type.
 */
export class LitElementRenderer implements ElementRenderer {
  *renderElement(
    instance: LitElement,
    _renderInfo: RenderInfo
  ): IterableIterator<string> {
    const renderResult = ((instance as unknown) as {
      render(): TemplateResult;
    }).render();
    yield '<template shadowroot="open">';
    yield* render(renderResult);
    yield '</template>';
  }

  *renderStyles(
    _elementClass: Constructor<HTMLElement>
  ): Iterator<string> {
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
