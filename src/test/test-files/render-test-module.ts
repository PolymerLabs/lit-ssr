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

import {html, nothing} from 'lit-html';
import {repeat} from '../../lib/directives/repeat.js';
import {classMap} from '../../lib/directives/class-map.js';
import {LitElement, css, property, customElement} from 'lit-element';

export {render, getScopedStyles} from '../../lib/render.js';

/* Real Tests */

export const simpleTemplateResult = html`<div></div>`;


/* Text Expressions */

export const templateWithTextExpression = (x: any) => html`<div>${x}</div>`;


/* Attribute Expressions */

export const templateWithAttributeExpression = (x: any) => html`<div class=${x}></div>`;
export const templateWithMultipleAttributeExpressions = (x: any, y: any) => html`<div x=${x} y=${y} z="not-dynamic"></div>`
export const templateWithMultiBindingAttributeExpression = (x: string, y: string) => html`<div test="a ${x} b ${y} c"></div>`;

/* Reflected Property Expressions */

export const inputTemplateWithValueProperty = (x: any) => html`<input .value=${x}>`;
export const elementTemplateWithClassNameProperty = (x: any) => html`<div .className=${x}></div>`;
export const elementTemplateWithClassnameProperty = (x: any) => html`<div .classname=${x}></div>`;
export const elementTemplateWithIDProperty = (x: any) => html`<div .id=${x}></div>`;

/* Nested Templates */

export const nestedTemplate = html`<div>${html`<p>Hi</p>`}</div>`;


/* Custom Elements */

@customElement('test-simple')
export class TestSimple extends LitElement {
  render() {
    return html`<main></main>`;
  }
}

export const simpleTemplateWithElement = html`<test-simple></test-simple>`;

@customElement('test-property')
export class TestProperty extends LitElement {
  @property() foo?: string;

  render() {
    return html`<main>${this.foo}</main>`;
  }
}

export const elementWithProperty = html`<test-property .foo=${'bar'}></test-property>`;


/* Slots and Distribution */

export const noSlot = html`<test-simple><p>Hi</p></test-simple>`;

@customElement('test-simple-slot')
export class TestSlot extends LitElement {
  render() {
    return html`<main><slot></slot></main>`;
  }
}

export const slotWithStaticChild = html`<test-simple-slot><p>Hi</p></test-simple-slot>`;

export const slotWithStaticChildren = html`<test-simple-slot><h1>Yo</h1><p>Hi</p></test-simple-slot>`;

const dynamicChild = html`<p>Hi</p>`;
export const slotWithDynamicChild = html`<test-simple-slot>${dynamicChild}</test-simple-slot>`;

export const slotWithDynamicChildAndMore = html`<test-simple-slot>${dynamicChild}</test-simple-slot>${42}`;

export const slotWithReusedDynamicChild =
  html`<test-simple-slot>${dynamicChild}</test-simple-slot>${dynamicChild}`;

@customElement('test-two-slots')
export class TestTwoSlots extends LitElement {
  render() {
    return html`<main><slot></slot></main><slot name="a"></slot>`;
  }
}
  
export const twoSlotsWithStaticChildren = html`<test-two-slots><h1>Yo</h1><p slot="a">Hi</p></test-two-slots>`;

export const twoSlotsWithStaticChildrenOutOfOrder = html`<test-two-slots><p slot="a">Hi</p><h1>Yo</h1></test-two-slots>`;

export const twoSlotsWithDynamicChildren = html`<test-two-slots>${html`<h1>Yo</h1><p slot="a">Hi</p>`}</test-two-slots>`;

export const twoSlotsWithDynamicChildrenOutOfOrder = html`<test-two-slots>${html`<p slot="a">Hi</p><h1>Yo</h1>`}</test-two-slots>`;

@customElement('test-dynamic-slot')
export class TestDynamicSlot extends LitElement {
  @property({type: Boolean}) renderSlot = true;
  render() {
    return html`${this.renderSlot ? html`<slot></slot>` : nothing}`;
  }
}
export const dynamicSlot = (renderSlot: boolean) => html`<test-dynamic-slot .renderSlot=${renderSlot}><p>Hi</p></test-dynamic-slot>`;

@customElement('test-styles')
export class TestStyles extends LitElement {
  static styles = css`
    :host {
      display: block;
    }
  `;
}


/* Directives */

export const repeatDirectiveWithTemplateResult = html`<div>${repeat(['foo', 'bar', 'qux'], (name: string, i: number) => html`<p>${i}) ${name}</p>`)}</div>`;

export const repeatDirectiveWithString = html`${repeat(['foo', 'bar', 'qux'], (name: string) => name)}`;

export const classMapDirective = html`<div class="${classMap({a: true, b: false, c: true})}"></div>`;

export const classMapDirectiveMultiBinding = html`<div class="z ${'hi'} ${classMap({a: true, b: false, c: true})}"></div>`;

// Tests to do:
//  - simple template, no expressions
//  - simple template, text expressions
//  - simple template, attribute expressions
//  - compound template
//  - hydration of above
//  - template w/ custom element, no expressions
//  - template w/ custom element, expressions in outer and element templates
//  - template w/ custom element, <slot>, static children in outer template
//  - template w/ custom element, named <slot>, static children in outer template
//  - template w/ custom element, named <slot>, children in nested template
//  - dynamic <slot>s

// This setup tests
//  - that we render and slot children from deeply nested templates
//  - that we keep distributed node state per TemplateResult _value_, not per
//    TemplateResult, because of the reuse of the inner result.
export const nestedTemplateResult = html`<div></div>`;
export const trickyNestedDynamicChildren = html`<test-simple-slot>${html`${nestedTemplateResult}${nestedTemplateResult}`}</test-simple-slot>`;
