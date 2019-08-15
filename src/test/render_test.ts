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

const test = tapePromise(tape);

(window as any).require = require;

const appModuleImport = importModule('./render-test-module.js', import.meta.url, window);

/* Scratch Space */

test.skip('work', async () => {
  const {render, workTemplate} = await setup();
  const result = await render(workTemplate('foo'));
  console.log(result);
});


/* Real Tests */

const setup = async () => {
  const appModule = await appModuleImport;
  const collectResult = async (iterable: AsyncIterable<string>) => {
    let result = '';
    for await (const chunk of iterable) {
      result += chunk;
    }
    return result;
  }
  return {
    ...appModule.namespace,
    render: (r: any) => collectResult(appModule.namespace.render(r)),
  };
};

test('simple TemplateResult', async (t: tapelib.Test) => {
  const {render, simpleTemplateResult} = await setup();
  const result = await render(simpleTemplateResult);
  t.equal(result, `<!--lit-part 9gmR7dlj0Ak=--><div></div><!--/lit-part-->`);
});


/* Text Expressions */

test('text expression with string value', async (t: tapelib.Test) => {
  const {render, templateWithTextExpression} = await setup();
  const result = await render(templateWithTextExpression('foo'));
  t.equal(result, `<!--lit-part AEmR7W+R0Ak=--><div><!--lit-part-->foo<!--/lit-part--></div><!--/lit-part-->`);
});

test('text expression with undefined value', async (t: tapelib.Test) => {
  const {render, templateWithTextExpression} = await setup();
  const result = await render(templateWithTextExpression(undefined));
  t.equal(result, `<!--lit-part AEmR7W+R0Ak=--><div><!--lit-part--><!--/lit-part--></div><!--/lit-part-->`);
});

test('text expression with null value', async (t: tapelib.Test) => {
  const {render, templateWithTextExpression} = await setup();
  const result = await render(templateWithTextExpression(null));
  t.equal(result, `<!--lit-part AEmR7W+R0Ak=--><div><!--lit-part--><!--/lit-part--></div><!--/lit-part-->`);
});


/* Attribute Expressions */

test('attribute expression with string value', async (t: tapelib.Test) => {
  const {render, templateWithAttributeExpression} = await setup();
  const result = await render(templateWithAttributeExpression('foo'));
  // TODO: test for the marker comment for attribute binding
  t.equal(result, `<!--lit-part FAR9hgjJqTI=--><div class="foo" __lit-attr="1"></div><!--/lit-part-->`);
});

test('multiple attribute expressions with string value', async (t: tapelib.Test) => {
  const {render, templateWithMultipleAttributeExpressions} = await setup();
  const result = await render(templateWithMultipleAttributeExpressions('foo', 'bar'));
  // Has marker attribute for number of bound attributes.
  t.equal(result, `<!--lit-part FQlA2/EioQk=--><div x="foo" y="bar" __lit-attr="2" z="not-dynamic"></div><!--/lit-part-->`);
});

test('attribute expression with multiple bindings', async (t: tapelib.Test) => {
  const {render, templateWithMultiBindingAttributeExpression} = await setup();
  const result = await render(templateWithMultiBindingAttributeExpression('foo', 'bar'));
  t.equal(result, `<!--lit-part D+PQMst9obo=--><div test="a foo b bar c" __lit-attr="1"></div><!--/lit-part-->`);
});

/* Nested Templates */

test('nested template', async (t: tapelib.Test) => {
  const {render, nestedTemplate} = await setup();
  const result = await render(nestedTemplate);
  t.equal(result, `<!--lit-part AEmR7W+R0Ak=--><div><!--lit-part P/cIB3F0dnw=--><p>Hi</p><!--/lit-part--></div><!--/lit-part-->`);
});


/* Custom Elements */

test('simple custom element', async (t: tapelib.Test) => {
  const {render, simpleTemplateWithElement} = await setup();
  const result = await render(simpleTemplateWithElement);
  t.equal(result, `<!--lit-part tjmYe1kHIVM=--><test-simple><!--lit-part UNbWrd8S5FY=--><main></main><!--/lit-part--></test-simple><!--/lit-part-->`);
});

test('element with property', async (t: tapelib.Test) => {
  const {render, elementWithProperty} = await setup();
  const result = await render(elementWithProperty);
  // TODO: we'd like to remove the extra space in the start tag
  t.equal(result, `<!--lit-part v2CxGIW+qHI=--><test-property  __lit-attr="1"><!--lit-part UNbWrd8S5FY=--><main><!--lit-part-->bar<!--/lit-part--></main><!--/lit-part--></test-property><!--/lit-part-->`);
});


/* Slots and Distribution */

test('no slot', async (t: tapelib.Test) => {
  const {render, noSlot} = await setup();
  const result = await render(noSlot);
  // TODO: this is probably a bit wrong, because we don't want to display
  // non-slotted children, but we do need to put them somewhere. We probably
  // need to hide them via styling
  t.equal(result, `<!--lit-part OpS0yFtM48Q=--><test-simple><!--lit-part UNbWrd8S5FY=--><main></main><!--/lit-part--><p>Hi</p></test-simple><!--/lit-part-->`);
});

test('slot and static child', async (t: tapelib.Test) => {
  const {render, slotWithStaticChild} = await setup();
  const result = await render(slotWithStaticChild);
  t.equal(result, `<!--lit-part rHUlXG22yCs=--><test-simple-slot><!--lit-part LLTdYazTGBk=--><main><p>Hi</p></main><!--/lit-part--></test-simple-slot><!--/lit-part-->`);
});

test('slot and two static children', async (t: tapelib.Test) => {
  const {render, slotWithStaticChildren} = await setup();
  const result = await render(slotWithStaticChildren);
  t.equal(result, `<!--lit-part LZW0XJWbf+0=--><test-simple-slot><!--lit-part LLTdYazTGBk=--><main><h1>Yo</h1><p>Hi</p></main><!--/lit-part--></test-simple-slot><!--/lit-part-->`);
});

test('slot and dynamic child', async (t: tapelib.Test) => {
  const {render, slotWithDynamicChild} = await setup();
  const result = await render(slotWithDynamicChild);
  t.equal(result, `<!--lit-part x6hMzcii6DY=--><test-simple-slot><!--lit-part LLTdYazTGBk=--><main><p>Hi</p></main><!--/lit-part--><!--lit-part P/cIB3F0dnw=--><!--/lit-part--></test-simple-slot><!--/lit-part-->`);
});

test('slot and dynamic child and more bindings', async (t: tapelib.Test) => {
  const {render, slotWithDynamicChildAndMore} = await setup();
  const result = await render(slotWithDynamicChildAndMore);
  t.equal(result, `<!--lit-part x6hMzcii6DY=--><test-simple-slot><!--lit-part LLTdYazTGBk=--><main><p>Hi</p></main><!--/lit-part--><!--lit-part P/cIB3F0dnw=--><!--/lit-part--></test-simple-slot><!--lit-part-->42<!--/lit-part--><!--/lit-part-->`);
});

test('slot and reused dynamic child', async (t: tapelib.Test) => {
  const {render, slotWithReusedDynamicChild} = await setup();
  const result = await render(slotWithReusedDynamicChild);
  t.equal(result, `<!--lit-part x6hMzcii6DY=--><test-simple-slot><!--lit-part LLTdYazTGBk=--><main><p>Hi</p></main><!--/lit-part--><!--lit-part P/cIB3F0dnw=--><!--/lit-part--></test-simple-slot><!--lit-part P/cIB3F0dnw=--><p>Hi</p><!--/lit-part--><!--/lit-part-->`);
});

test('two slots and static children', async (t: tapelib.Test) => {
  const {render, twoSlotsWithStaticChildren} = await setup();
  const result = await render(twoSlotsWithStaticChildren);
  t.equal(result, `<!--lit-part fsyeGt7exVM=--><test-two-slots><!--lit-part /ndb6GrWB0A=--><main><h1>Yo</h1></main><p slot="a">Hi</p><!--/lit-part--></test-two-slots><!--/lit-part-->`);
});

test('two slots and static children out of order', async (t: tapelib.Test) => {
  const {render, twoSlotsWithStaticChildrenOutOfOrder} = await setup();
  const result = await render(twoSlotsWithStaticChildrenOutOfOrder);
  t.equal(result, `<!--lit-part aEEMZuiFlNA=--><test-two-slots><!--lit-part /ndb6GrWB0A=--><main><h1>Yo</h1></main><p slot="a">Hi</p><!--/lit-part--></test-two-slots><!--/lit-part-->`);
});

test('two slots and dynamic children', async (t: tapelib.Test) => {
  const {render, twoSlotsWithDynamicChildren} = await setup();
  const result = await render(twoSlotsWithDynamicChildren);
  t.equal(result, `<!--lit-part thp7M3lVHrI=--><test-two-slots><!--lit-part /ndb6GrWB0A=--><main><h1>Yo</h1></main><p slot="a">Hi</p><!--/lit-part--><!--lit-part bSf9M2IgJsk=--><!--/lit-part--></test-two-slots><!--/lit-part-->`);
});

test('two slots and dynamic children out of order', async (t: tapelib.Test) => {
  const {render, twoSlotsWithDynamicChildrenOutOfOrder} = await setup();
  const result = await render(twoSlotsWithDynamicChildrenOutOfOrder);
  t.equal(result, `<!--lit-part thp7M3lVHrI=--><test-two-slots><!--lit-part /ndb6GrWB0A=--><main><h1>Yo</h1></main><p slot="a">Hi</p><!--/lit-part--><!--lit-part O/QniJQm82M=--><!--/lit-part--></test-two-slots><!--/lit-part-->`);
});

test('dynamic slot', async (t: tapelib.Test) => {
  const {render, dynamicSlot} = await setup();
  const result = await render(dynamicSlot(true));
  t.equal(result, `<!--lit-part UB+QgozkbOc=--><test-dynamic-slot  __lit-attr="1"><!--lit-part BRUAAAUVAAA=--><!--lit-part Pz0gobCCM4E=--><p>Hi</p><!--/lit-part--><!--/lit-part--></test-dynamic-slot><!--/lit-part-->`);
});

test('dynamic slot, unrendered', async (t: tapelib.Test) => {
  const {render, dynamicSlot} = await setup();
  const result = await render(dynamicSlot(false));
  // TODO: this is a bit wrong. See the comment in the "no slot" test
  t.equal(result, `<!--lit-part UB+QgozkbOc=--><test-dynamic-slot  __lit-attr="1"><!--lit-part BRUAAAUVAAA=--><!--lit-part Pz0gobCCM4E=--><p>Hi</p><!--/lit-part--><!--/lit-part--></test-dynamic-slot><!--/lit-part-->`);
});


/* Styles */

test('styles', async (t: tapelib.Test) => {
  const {getScopedStyles} = await setup();
  const styles = getScopedStyles() as string;
  t.true(styles[0].includes('test-styles'));
  t.false(styles[0].includes(':host'));
});

/* Directives */

test('simple repeat directive', async (t: tapelib.Test) => {
  const {render, repeatDirective} = await setup();
  const result = await render(repeatDirective);
  t.equal(result,
    '<!--lit-part AEmR7W+R0Ak=-->' +
      '<div>' +
        '<!--lit-part-->' + // part that wraps the directive
          '<!--lit-part AgkKByTWdnw=-->' + // part for child template 0
            '<p><!--lit-part-->0<!--/lit-part-->) <!--lit-part-->foo<!--/lit-part--></p>' +
          '<!--/lit-part-->' +
          '<!--lit-part AgkKByTWdnw=-->' + // part for child template 1
            '<p><!--lit-part-->1<!--/lit-part-->) <!--lit-part-->bar<!--/lit-part--></p>' +
          '<!--/lit-part-->' +
          '<!--lit-part AgkKByTWdnw=-->' + // part for child template 2
            '<p><!--lit-part-->2<!--/lit-part-->) <!--lit-part-->qux<!--/lit-part--></p>' +
          '<!--/lit-part-->' +
        '<!--/lit-part-->' +
      '</div>' +
    '<!--/lit-part-->'
  );
});

test('simple class-map directive', async (t: tapelib.Test) => {
  const {render, classMapDirective} = await setup();
  const result = await render(classMapDirective);
  t.equal(result, '<!--lit-part PkF/hiJU4II=--><div class="a c" __lit-attr="1"></div><!--/lit-part-->');
});

test('class-map directive with other bindings', async (t: tapelib.Test) => {
  const {render, classMapDirectiveMultiBinding} = await setup();
  const result = await render(classMapDirectiveMultiBinding);
  t.equal(result, '<!--lit-part pNgepkKFbd0=--><div class="z hi a c" __lit-attr="1"></div><!--/lit-part-->');
});