import {html} from 'lit-html';
import {LitElement, property, customElement} from 'lit-element';

export { renderToStream } from '../lib/render-to-stream.js';

// Scratch pad...

@customElement('x-foo')
export class XFoo extends LitElement {
  @property() x?: string = '42';

  render() {
    return html`<main>${this.x}<slot></slot></main>`;
  }
}
export const workTemplate = (s: string) => html`<div><x-foo><p>woot</p></x-foo>${s}</div>`;

// Real tests...

export const simpleTemplateResult = html`<div></div>`;

export const templateWithTextExpression = (x: any) => html`<div>${x}</div>`;

export const templateWithAttributeExpression = (x: any) => html`<div class=${x}></div>`;

export const nestedTemplate = html`<div>${html`<p>Hi</p>`}</div>`;

@customElement('test-simple')
export class TestSimple extends LitElement {
  render() {
    return html`<main></main>`;
  }
}

export const simpleTemplateWithElement = html`<test-simple></test-simple>`;

@customElement('test-simple-slot')
export class TestSlot extends LitElement {
  render() {
    return html`<main><slot></slot></main>`;
  }
}

export const slotWithStaticChild = html`<test-simple-slot><p>Hi</p></test-simple-slot>`;


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
