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

import * as path from 'path';

import React from 'react';
import ReactDOMServer from 'react-dom/server';
import fs from 'fs'

import App from '../src/App';

const Koa = require('koa');
const staticFiles = require('koa-static');
const { nodeResolve } = require('koa-node-resolve');

process.on('unhandledRejection', up => { throw up });

const serverRenderer = () => {
  const data = fs.readFileSync(path.resolve('./build/index.html'), 'utf8');
  return data.replace(
        '<div id="root"></div>',
        `<div id="root">${ReactDOMServer.renderToString(<App />)}</div>`
      );
};

const packageRoot = path.resolve(__dirname, '..', 'build');
console.log(packageRoot);


const port = 8090;
new Koa()
  .use((ctx, next) => {
    if (ctx.URL.pathname !== '/') {
      next();
      return;
    }
    const body = serverRenderer();
    ctx.type = 'text/html';
    ctx.body = body;
  })
  // cannot resolve `./mwc-tab-css` to `./mwc-tab-css.js` ??
  .use(nodeResolve())
  .use(staticFiles(packageRoot))
  .listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });

