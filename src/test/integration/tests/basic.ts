/**
 * @license
 * Copyright (c) 2020 The Polymer Project Authors. All rights reserved.
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

import {html} from 'lit-html';
import { SSRTest } from './ssr-test';

export const tests = {
  'textExpression': {
    render(x: any) {
      return html`<div>${x}</div>`;
    },
    expectations: [
      {
        args: ['TEST'],
        html: '<div>TEST</div>'
      },
      {
        args: ['TEST2'],
        html: '<div>TEST2</div>'
      }
    ],
    stableSelectors: ['div'],
  },
  'attributeExpression': {
    render(x: any) {
      return html`<div class=${x}></div>`;
    },
    expectations: [
      {
        args: ['TEST'],
        html: '<div __lit-attr="1" class="TEST"></div>'
      },
      // Attribute hydration not working yet
      // {
      //   data: ['TEST2'],
      //   html: '<div __lit-attr="1" class="TEST2"></div>'
      // }
    ],
    stableSelectors: ['div'],
  }
} as {[name: string] : SSRTest};
