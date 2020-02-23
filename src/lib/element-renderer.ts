/// <reference lib="dom" />

import {RenderInfo} from './render.js';

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

export type Constructor<T> = {new (): T};

/**
 * An object that renders elements of a certain type.
 */
export interface ElementRenderer {
  /**
   * Render a single element's ShadowRoot contents.
   *
   * @param e The element instance to render
   * @param childRenderer A `ChildRenderer` that can be used to render children
   *     into slots.
   */
  renderElement(
    e: HTMLElement,
    childRenderer: ChildRenderer,
    renderInfo: RenderInfo
  ): AsyncIterableIterator<string>;

  /**
   * Render the pre-scoped styles for an element definition.
   *
   * @param c The element _class_ to render styles for.
   */
  renderStyles(c: Constructor<HTMLElement>): AsyncIterator<string>;
}

/**
 * Renders child content from within a host element, associated with a
 * particular slot name.
 *
 * ChildRenderer's are expected to be stateful and created by a template-system
 * renderer library before calling into ElementRenderer.renderElement(). They
 * both render an element's children and inform the hosting template renderer
 * what parts of the template were consumed when rendering children.
 */
export interface ChildRenderer {
  /**
   * Render the children that should be projected to the slot `slotName`.
   */
  renderChildren(slotName: string | undefined): AsyncIterableIterator<string>;
}
