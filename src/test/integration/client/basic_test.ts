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
  let observer: MutationObserver;
  let _mutations: Array<MutationRecord>;

  const clearMutations = () => {
    observer.takeRecords();
    _mutations.length = 0;
  };

  const getMutations = () => {
    _mutations.push(...observer.takeRecords());
    return _mutations;
  };

  setup(() => {
    container = document.createElement('div');
    _mutations = [];
    observer = new MutationObserver((records) => {
      _mutations.push(...records);
    });
    clearMutations();
    observer.observe(container, {
      attributes: true,
      characterData: true,
      childList: true,
      subtree: true,
    });
  });


  for (const [testName, testSetup] of Object.entries(tests)) {
    const {render: testRender, expectations, stableSelectors} = testSetup;

    const testFn = testSetup.skip ? test.skip : testSetup.only ? test.only : test;

    testFn(testName, async () => {
      // Get the SSR result from the server. This path is proxied by Karma to
      // our test server.
      const response = await fetch(`/test/basic/${testName}`);
      container.innerHTML = await response.text();

      // The first expectation args are used in the server render. Check the DOM
      // pre-hydration to make sure they're correct. The DOM is chaned again
      // against the first expectation after hydration in the loop below.
      assert.lightDom.equal(container, expectations[0].html);
      const stableNodes = stableSelectors.map(
          (selector) => container.querySelector(selector));
      clearMutations();

      let i = 0;
      for (const {args, html, check} of expectations) {
        if (i === 0) {
          hydrate(testRender(...args), container);
          // Hydration should cause no DOM mutations, because it does not
          // actually update the DOM - it just recreates data structures
          assert.isEmpty(getMutations());
          clearMutations();

          // After hydration, render() will be operable.
          render(testRender(...args), container);
          // The first render should also cause no mutations, since it's using
          // the same data as the server.
          assert.isEmpty(getMutations());
        } else {
          render(testRender(...args), container);
        }

        // Check the markup
        assert.lightDom.equal(container, html);

        // Check that stable nodes didn't change
        const checkNodes = stableSelectors.map(
            (selector) => container.querySelector(selector));
        assert.deepEqual(stableNodes, checkNodes);

        // Custom check
        if (check !== undefined) {
          check(assert, container);
        }
        i++;
      }
    });
  
  }

});
