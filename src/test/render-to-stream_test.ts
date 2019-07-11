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

import module from 'module';
import {importModule} from '../lib/import-module.js';
import {window} from '../lib/dom-shim.js';
// type-only import
import * as tapelib from 'tape'

const { createRequire } = module as any;
const require = createRequire(import.meta.url);

const tape = require('tape') as typeof tapelib;
const tapePromise = require('tape-promise').default;
const streams = require('memory-streams');

const test = tapePromise(tape);

test('basic', async (t: tapelib.Test) => {
  const writer = new streams.WritableStream();
  const appModule = await importModule('./render-to-stream-test-module.js', import.meta.url, window);
  const render = appModule.namespace.render;
  render('foo', writer);
  t.equal(writer.toString(), '<div><!--lit-part-->foo<!--/lit-part--></div>');
  t.end();
});
