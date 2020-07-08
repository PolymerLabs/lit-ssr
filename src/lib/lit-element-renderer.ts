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
import {LitElement, CSSResult} from 'lit-element';
import {render, renderValue, RenderInfo} from './render-lit-html.js';

export type Constructor<T> = {new (): T};

// No-op LitElement's client-side render method, since we will call
// `performUpdate` directly on the server
LitElement.render = () => {};

/**
 * ElementRenderer implementation for LitElements
 */
export class LitElementRenderer extends ElementRenderer {
  constructor(public element: LitElement) {
    super(element);
  }

  connectedCallback() {
    (this.element as any).enableUpdating();
    (this.element as any).performUpdate(false);
  }

  attributeChangedCallback(name: string, old: string | null, value: string | null) {
    if (old !== value) {
      (this.element as any)._attributeToProperty(name, value);
    }
  }

  *renderChildren(): IterableIterator<string> {
    // Open shadow root
    yield '<template shadowroot="open">';
    // Render styles.
    const styles = [(this.element.constructor as typeof LitElement).styles]
      .flat(Infinity)
      .filter(style => style instanceof CSSResult);
    if (styles.length) {
      yield '<style>';
      for (const style of styles) {
        yield (style as CSSResult).cssText;
      }
      yield '</style>';
    }
    // Render template
    yield* render((this.element as any).render());
    // Close shadow root
    yield '</template>';
  }

  *renderLight (renderInfo: RenderInfo): IterableIterator<string> {
    const value = (this.element as any)?.renderLight();
    if (value) {
      yield* renderValue(value, renderInfo);
    } else {
      yield '';
    }
  }
}
