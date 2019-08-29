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

const reflectedAttributes: Map<string, Map<string, string>> = new Map([
  ['input', new Map([
    ['value', 'value']
  ])]
]);

const reflectedGlobalAttributes: Map<string, string> = new Map([
  ['classname', 'class'],
  ['id', 'id'],
]);

export const reflectedAttributeName = (tag: string, property: string): string|undefined => {
  const attributes = reflectedAttributes.get(tag);
  if (attributes !== undefined && attributes.has(property)) {
    return attributes.get(property);
  } else {
    return reflectedGlobalAttributes.get(property);
  }
}