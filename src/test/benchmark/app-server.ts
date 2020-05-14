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

import { render} from '../../lib/render-lit-html.js';
import { template } from './module.js';
import { data } from './data.js';

export async function* renderApp() {

  yield `
    <!doctype html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>Mail (MWC)</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="/test/benchmark/app.css">
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    </head>
    <body>`;
  yield* render(template(data), undefined, false);
  yield `<script src="./test/benchmark/app-client.build.js"></script>`;
  // yield `
  //   <script type="module">
  //     import {template} from './test/benchmark/module.js';
  //     import { data } from './test/benchmark/data.js';
  //     import {render} from './node_modules/lit-html/lit-html.js';
  //     import {hydrate} from './node_modules/lit-html/lib/hydrate.js';

  //     const params = new URLSearchParams(window.location.search);
  //     const benchmark = params.get('benchmark');

  //     const measure = (callback, startAt) => {
  //       const start = startAt !== undefined ? startAt : performance.now();
  //       callback && callback();
  //       window.tachometerResult = performance.now() - start;
  //       document.title = window.tachometerResult.toFixed(2) + 'ms';
  //     }

  //     const doRender = () => {
  //       document.body.innerHTML = '';
  //       render(template(data), document.body);
  //     }

  //     const doHydrate = () => {
  //       hydrate(template(data), window.document.body);
  //     }

  //     const benchmarks = {
  //       render() {
  //         measure(doRender);
  //       },

  //       hydrate() {
  //         measure(doHydrate);
  //       },

  //       ssr() {
  //         measure(null, 0);
  //       },

  //       ['ssr-hydrate']() {
  //         measure(doHydrate, 0);
  //       }
  //     }

  //     const test = benchmarks[benchmark];
  //     if (test) {
  //       test();
  //     } else {
  //       console.error('Benchmark', benchmark, 'not found');
  //     }
  //   </script>`;
  yield `</body>
    </html>`;
};