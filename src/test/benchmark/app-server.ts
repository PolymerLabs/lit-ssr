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

import { render, timing} from '../../lib/render-lit-html.js';
import { render as renderSync, timing as timingSync} from '../../lib/render-lit-html-sync.js';
import { template } from './module.js';
import { data } from './data.js';

export function renderAppSync() {
  return `
    <!doctype html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>Mail (MWC)</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="/test/benchmark/app.css">
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    </head>
    <body>
  ${renderSync(template(data))}
  <script>window.ssrTiming = ${JSON.stringify(timingSync)};</script>
  <script src="./test/benchmark/app-client.build.js"></script>
  </body>
  </html>`;
};

export function* renderApp() {
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
  yield* render(template(data));
  yield `<script>window.ssrTiming = ${JSON.stringify(timing)};</script>`
  yield `<script src="./test/benchmark/app-client.build.js"></script>`;
  yield `</body>
    </html>`;
};