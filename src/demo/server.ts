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

import {createRequire} from 'module';
import Koa from 'koa';
import staticFiles from 'koa-static';
import koaNodeResolve from 'koa-node-resolve';
import {URL} from 'url';
import * as path from 'path';

import {window} from '../lib/dom-shim.js';
import {importModule} from '../lib/import-module.js';
import {AsyncIterableReader} from '../lib/async-iterator-readable.js';

const {nodeResolve} = koaNodeResolve;

const moduleUrl = new URL(import.meta.url);
const packageRoot = path.resolve(moduleUrl.pathname, '../..');

// We need to give window a require to load CJS modules used by the SSR
// implementation. If we had only JS module dependencies, we wouldn't need this.
(window as any).require = createRequire(import.meta.url);

const port = 8080;

// This is a fairly standard Koa server that represents how the SSR API might
// be used.
const app = new Koa();
app.use(async (ctx: Koa.Context, next: Function) => {
  // Pass through anything not the root path to static file serving
  if (ctx.URL.pathname !== '/') {
    await next();
    return;
  }

  // Import the server-side entry point into a new VM context
  const appModule = importModule('./app-server.js', import.meta.url, window);
  const renderApp = (await appModule).namespace.renderApp;
  ctx.type = 'text/html';
  ctx.body = new AsyncIterableReader(
    renderApp({
      name: 'SSR',
      message: 'This is a test.',
      items: ['foo', 'bar', 'qux'],
    })
  );
});
app.use(nodeResolve());
app.use(staticFiles(packageRoot));
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
