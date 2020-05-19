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

export type Constructor<T> = {new (): T};

/**
 * An object that renders elements of a certain type.
 */
export interface ElementRenderer {
  element: HTMLElement;

  /**
   * Render a single element's ShadowRoot contents.
   *
   */
  renderElement(): IterableIterator<string>;

  /**
   * Handles setting a property.
   * @param name Name of the property
   * @param value Value of the property
   */
  setProperty(name: string, value: unknown): void;

  /**
   * Handles setting an attribute on an element.
   * @param name Name of the attribute
   * @param value Value of the attribute
   */
  setAttribute(name: string, value: string | null): void;
}
