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
import {render, renderValue, RenderInfo} from './render-lit-html.js';

export type Constructor<T> = {new (): T};

/**
 * An object that renders elements of a certain type.
 */
export class LitElementRenderer implements ElementRenderer {
  constructor(public element: LitElement) {}

  *renderElement(): IterableIterator<string> {
    const renderResult = ((this.element as unknown) as {
      render(): TemplateResult;
    }).render();
    yield '<template shadowroot="open">';
    // Render styles.
    const ctor = customElements.get(this.element.tagName!);
    const styles = [(ctor as any).styles].flat(Infinity);
    let hasCssResult = false;
    for (const style of styles) {
      if (style instanceof CSSResult) {
        if (!hasCssResult) {
          hasCssResult = true;
          yield '<style>';
        }
        // TODO(sorvell): support ShadyCSS transformed styles. These should
        // be written once.
        //const scoped = StyleTransformer.css(style.cssText, tagName);
        yield style.cssText;
      }
    }
    if (hasCssResult) {
      yield '</style>';
    }
    yield* render(renderResult);
    yield '</template>';
  }

  setProperty(name: string, value: unknown) {
    (this.element as any)[name] = value;
  }

  setAttribute(name: string, value: string | null) {
    // Note, this should always exist for LitElement, but we're not yet
    // explicitly checking for LitElement.
    if (this.element.attributeChangedCallback) {
      this.element.attributeChangedCallback(name, null, value as string);
    }
  }

  renderLight(renderInfo: RenderInfo) {
    const templateResult = (this.element as any)?.renderLight();
    return templateResult ? renderValue(templateResult, renderInfo) : '';
  }
}
