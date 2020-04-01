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

import '@open-wc/testing';

import {tests} from '../tests/basic.js';
import {render} from 'lit-html';
import {hydrate} from 'lit-html/lib/hydrate.js';

const assert = chai.assert;

suite('basic', () => {
  let container: HTMLElement;

  setup(() => {
    container = document.createElement('div');
  });

  for (const [testName, testSetup] of Object.entries(tests)) {
    const {render: testRender, expectations, stableSelectors} = testSetup;
    test(testName, async () => {
      // Get the SSR result from the server. This path is proxied by Karma to
      // our test server.
      const response = await fetch(`/test/basic/${testName}`);
      container.innerHTML = await response.text();

      // The first expectation args are used in the server render. Check the DOM
      // pre-hydration to make sure they're correct. The DOM is chaned again
      // against the first expectation after hydration in the loop below.
      (assert.lightDom.equal as any)(container, expectations[0].html, {
        ignoreAttributes: ['__lit-attr']
      });
      const stableNodes = stableSelectors.map(
          (selector) => container.querySelector(selector));

      let i = 0;
      for (const {args, html} of expectations) {
        if (i === 0) {
          hydrate(testRender(...args), container);
          // TODO: assert no DOM mutations
        } else {
          render(testRender(...args), container);
        }

        // Check the markup
        (assert.lightDom.equal as any)(container, html, {
          ignoreAttributes: ['__lit-attr']
        });

        // Check that stable nodes didn't change
        const checkNodes = stableSelectors.map(
            (selector) => container.querySelector(selector));
        assert.deepEqual(stableNodes, checkNodes);
        i++;
      }
    });
  
  }

});
