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

import {LitElement, CSSResult} from 'lit-element';
import {render} from './render-lit-html.js';

function *renderChildren(element: LitElement, result: any, useShadowRoot: boolean): IterableIterator<string> {
  if (useShadowRoot) {
    yield '<template shadowroot="open">';
  }
  // Render styles
  const styles = [(element.constructor as typeof LitElement).styles]
    .flat(Infinity)
    .filter(style => style instanceof CSSResult);
  if (styles.length) {
    yield '<style>';
    for (const style of styles) {
      yield (style as CSSResult).cssText;
    }
    yield '</style>';
  }

  // Render html
  yield* render(result);
  if (useShadowRoot) {
    yield '</template>';
  }
}

// Install SSR render hook
LitElement.render = function(result: unknown, container: Element | DocumentFragment, _options: any) {
  const instance = (container as ShadowRoot).host ? (container as ShadowRoot).host : container;
  if (!(instance instanceof LitElement)) {
    throw new Error('For compatibiltiy with SSR, renderRoot must either be the shadowRoot of the LitElement or the LitElement itself.')
  }
  instance.ssrRenderChildren = renderChildren(instance, result, Boolean((container as ShadowRoot).host));
};

// Make rendering synchronous to connectedCallback()
const connectedCallback = LitElement.prototype.connectedCallback;
LitElement.prototype.connectedCallback = function() {
  connectedCallback.call(this);
  this.performUpdate(true);
}
