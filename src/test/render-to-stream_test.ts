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

(window as any).require = require;

const appModuleImport = importModule('./render-to-stream-test-module.js', import.meta.url, window);

/* Scratch Space */

test.skip('work', async () => {
  const {getResult, render, workTemplate} = await setup();
  render(workTemplate('foo'));
  console.log(getResult());
});


/* Real Tests */

const setup = async () => {
  const appModule = await appModuleImport;
  const writer = new streams.WritableStream();
  return {
    ...appModule.namespace,
    getResult: () => writer.toString(),
    render: (r: any) => appModule.namespace.renderNodePartToStream(r, writer),
  };
};

test('simple TemplateResult', async (t: tapelib.Test) => {
  const {getResult, render, simpleTemplateResult} = await setup();
  render(simpleTemplateResult);
  t.equal(getResult(), `<!--lit-part 9gmR7dlj0Ak=--><div></div><!--/lit-part-->`);
});


/* Text Expressions */

test('text expression with string value', async (t: tapelib.Test) => {
  const {getResult, render, templateWithTextExpression} = await setup();
  render(templateWithTextExpression('foo'));
  t.equal(getResult(), `<!--lit-part AEmR7W+R0Ak=--><div><!--lit-part-->foo<!--/lit-part--></div><!--/lit-part-->`);
});

test('text expression with undefined value', async (t: tapelib.Test) => {
  const {getResult, render, templateWithTextExpression} = await setup();
  render(templateWithTextExpression(undefined));
  t.equal(getResult(), `<!--lit-part AEmR7W+R0Ak=--><div><!--lit-part--><!--/lit-part--></div><!--/lit-part-->`);
});

test('text expression with null value', async (t: tapelib.Test) => {
  const {getResult, render, templateWithTextExpression} = await setup();
  render(templateWithTextExpression(null));
  t.equal(getResult(), `<!--lit-part AEmR7W+R0Ak=--><div><!--lit-part--><!--/lit-part--></div><!--/lit-part-->`);
});


/* Attribute Expressions */

test('attribute expression with string value', async (t: tapelib.Test) => {
  const {getResult, render, templateWithAttributeExpression} = await setup();
  render(templateWithAttributeExpression('foo'));
  // TODO: test for the marker comment for attribute binding
  t.equal(getResult(), `<!--lit-part FAR9hgjJqTI=--><div class="foo"></div><!--/lit-part-->`);
});


/* Nested Templates */

test('nested template', async (t: tapelib.Test) => {
  const {getResult, render, nestedTemplate} = await setup();
  render(nestedTemplate);
  t.equal(getResult(), `<!--lit-part AEmR7W+R0Ak=--><div><!--lit-part P/cIB3F0dnw=--><p>Hi</p><!--/lit-part--></div><!--/lit-part-->`);
});


/* Custom Elements */

test('simple custom element', async (t: tapelib.Test) => {
  const {getResult, render, simpleTemplateWithElement} = await setup();
  render(simpleTemplateWithElement);
  t.equal(getResult(), `<!--lit-part tjmYe1kHIVM=--><test-simple><!--lit-part UNbWrd8S5FY=--><main></main><!--/lit-part--></test-simple><!--/lit-part-->`);
});

test('element with property', async (t: tapelib.Test) => {
  const {getResult, render, elementWithProperty} = await setup();
  render(elementWithProperty);
  // TODO: we'd like to remove the space in the start tag
  t.equal(getResult(), `<!--lit-part v2CxGIW+qHI=--><test-property ><!--lit-part UNbWrd8S5FY=--><main><!--lit-part-->bar<!--/lit-part--></main><!--/lit-part--></test-property><!--/lit-part-->`);
});


/* Slots and Distribution */

test('no slot', async (t: tapelib.Test) => {
  const {getResult, render, noSlot} = await setup();
  render(noSlot);
  // TODO: this is probably a bit wrong, because we don't want to display
  // non-slotted children, but we do need to put them somewhere. We probably
  // need to hide them via styling
  t.equal(getResult(), `<!--lit-part OpS0yFtM48Q=--><test-simple><!--lit-part UNbWrd8S5FY=--><main></main><!--/lit-part--><p>Hi</p></test-simple><!--/lit-part-->`);
});

test('slot and static child', async (t: tapelib.Test) => {
  const {getResult, render, slotWithStaticChild} = await setup();
  render(slotWithStaticChild);
  t.equal(getResult(), `<!--lit-part rHUlXG22yCs=--><test-simple-slot><!--lit-part LLTdYazTGBk=--><main><p>Hi</p></main><!--/lit-part--></test-simple-slot><!--/lit-part-->`);
});

test('slot and two static children', async (t: tapelib.Test) => {
  const {getResult, render, slotWithStaticChildren} = await setup();
  render(slotWithStaticChildren);
  t.equal(getResult(), `<!--lit-part LZW0XJWbf+0=--><test-simple-slot><!--lit-part LLTdYazTGBk=--><main><h1>Yo</h1><p>Hi</p></main><!--/lit-part--></test-simple-slot><!--/lit-part-->`);
});

test('slot and dynamic child', async (t: tapelib.Test) => {
  const {getResult, render, slotWithDynamicChild} = await setup();
  render(slotWithDynamicChild);
  t.equal(getResult(), `<!--lit-part x6hMzcii6DY=--><test-simple-slot><!--lit-part LLTdYazTGBk=--><main><p>Hi</p></main><!--/lit-part--><!--lit-part P/cIB3F0dnw=--><!--/lit-part--></test-simple-slot><!--/lit-part-->`);
});

test('slot and dynamic child and more bindings', async (t: tapelib.Test) => {
  const {getResult, render, slotWithDynamicChildAndMore} = await setup();
  render(slotWithDynamicChildAndMore);
  t.equal(getResult(), `<!--lit-part x6hMzcii6DY=--><test-simple-slot><!--lit-part LLTdYazTGBk=--><main><p>Hi</p></main><!--/lit-part--><!--lit-part P/cIB3F0dnw=--><!--/lit-part--></test-simple-slot><!--lit-part-->42<!--/lit-part--><!--/lit-part-->`);
});

test('slot and reused dynamic child', async (t: tapelib.Test) => {
  const {getResult, render, slotWithReusedDynamicChild} = await setup();
  render(slotWithReusedDynamicChild);
  t.equal(getResult(), `<!--lit-part x6hMzcii6DY=--><test-simple-slot><!--lit-part LLTdYazTGBk=--><main><p>Hi</p></main><!--/lit-part--><!--lit-part P/cIB3F0dnw=--><!--/lit-part--></test-simple-slot><!--lit-part P/cIB3F0dnw=--><p>Hi</p><!--/lit-part--><!--/lit-part-->`);
});

test('two slots and static children', async (t: tapelib.Test) => {
  const {getResult, render, twoSlotsWithStaticChildren} = await setup();
  render(twoSlotsWithStaticChildren);
  t.equal(getResult(), `<!--lit-part fsyeGt7exVM=--><test-two-slots><!--lit-part /ndb6GrWB0A=--><main><h1>Yo</h1></main><p slot="a">Hi</p><!--/lit-part--></test-two-slots><!--/lit-part-->`);
});

test('two slots and static children out of order', async (t: tapelib.Test) => {
  const {getResult, render, twoSlotsWithStaticChildrenOutOfOrder} = await setup();
  render(twoSlotsWithStaticChildrenOutOfOrder);
  t.equal(getResult(), `<!--lit-part aEEMZuiFlNA=--><test-two-slots><!--lit-part /ndb6GrWB0A=--><main><h1>Yo</h1></main><p slot="a">Hi</p><!--/lit-part--></test-two-slots><!--/lit-part-->`);
});

test('two slots and dynamic children', async (t: tapelib.Test) => {
  const {getResult, render, twoSlotsWithDynamicChildren} = await setup();
  render(twoSlotsWithDynamicChildren);
  t.equal(getResult(), `<!--lit-part thp7M3lVHrI=--><test-two-slots><!--lit-part /ndb6GrWB0A=--><main><h1>Yo</h1></main><p slot="a">Hi</p><!--/lit-part--><!--lit-part bSf9M2IgJsk=--><!--/lit-part--></test-two-slots><!--/lit-part-->`);
});

test('two slots and dynamic children out of order', async (t: tapelib.Test) => {
  const {getResult, render, twoSlotsWithDynamicChildrenOutOfOrder} = await setup();
  render(twoSlotsWithDynamicChildrenOutOfOrder);
  t.equal(getResult(), `<!--lit-part thp7M3lVHrI=--><test-two-slots><!--lit-part /ndb6GrWB0A=--><main><h1>Yo</h1></main><p slot="a">Hi</p><!--/lit-part--><!--lit-part O/QniJQm82M=--><!--/lit-part--></test-two-slots><!--/lit-part-->`);
});

test('dynamic slot', async (t: tapelib.Test) => {
  const {getResult, render, dynamicSlot} = await setup();
  render(dynamicSlot(true));
  t.equal(getResult(), `<!--lit-part UB+QgozkbOc=--><test-dynamic-slot ><!--lit-part BRUAAAUVAAA=--><!--lit-part Pz0gobCCM4E=--><p>Hi</p><!--/lit-part--><!--/lit-part--></test-dynamic-slot><!--/lit-part-->`);
});

test('dynamic slot, unrendered', async (t: tapelib.Test) => {
  const {getResult, render, dynamicSlot} = await setup();
  render(dynamicSlot(false));
  // TODO: this is a bit wrong. See the comment in the "no slot" test
  t.equal(getResult(), `<!--lit-part UB+QgozkbOc=--><test-dynamic-slot ><!--lit-part BRUAAAUVAAA=--><!--lit-part Pz0gobCCM4E=--><p>Hi</p><!--/lit-part--><!--/lit-part--></test-dynamic-slot><!--/lit-part-->`);
});


/* Styles */

test('styles', async (t: tapelib.Test) => {
  const {getScopedStyles} = await setup();
  const styles = getScopedStyles() as string;
  t.true(styles[0].includes('test-styles'));
  t.false(styles[0].includes(':host'));
});
