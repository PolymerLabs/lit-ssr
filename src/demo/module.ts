/**
 * This is a shared client/server module.
 */

import {html} from 'lit-html';
import {LitElement} from 'lit-element';
//import {repeat} from 'lit-html/directives/repeat.js';

export const initialData = {
  name: 'SSR',
  message: 'This is a test.',
  items: ['foo', 'bar', 'qux'],
  prop: 'prop-value',
  attr: 'attr-value'
};

export class MyElement extends LitElement {

  static get properties() {
    return {
      prop: {type: String},
      attr: {type: String}
    }
  }

  prop = 'initial-prop';
  attr = 'initial-attr';

  render() {
    return html`
      <style>
        :host {
          display: inline-block;
          border: 1px dashed gray;
          margin: 4px;
          padding: 4px;
        }

        :host > * {
          padding: 4px;
        }

        header {
          font-weight: bold;
        }
      </style>
      <header>I'm a my-element!</header>
      <div><i>this.prop</i>: ${this.prop}</div>
      <div><i>this.attr</i>: ${this.attr}</div>
    `;
  }
}
customElements.define('my-element', MyElement);

export const header = (name: string) =>
  html`
    <h1>Hello ${name}!</h1>
  `;

export const template = (data: {name: string, message: string, items: Array<string>, prop: string, attr: string}) =>
  html`
    ${header(data.name)}
    <p>${data.message}</p>
    <h4>repeating:</h4>
    <div>
      ${data.items.map(
        (item, i) =>
          html`
            <p>${i}) ${item}</p>
          `
      )}
    </div>
    ${Array(3).fill(1).map((_item, i) => html`
      <my-element .prop=${`${data.prop}: ${i}`} attr=${`${data.attr}: ${i}`}></my-element>
    `)}
  `;
