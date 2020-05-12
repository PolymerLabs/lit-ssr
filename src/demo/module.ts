/**
 * This is a shared client/server module.
 */

import {html} from 'lit-html';
import {LitElement} from 'lit-element';
import {repeat} from 'lit-html/directives/repeat.js';

export class MyElement extends LitElement {
  render() {
    return html`
      <h2>I'm a my-element</h2>
    `;
  }
}
customElements.define('my-element', MyElement);

export const header = (name: string) =>
  html`
    <h1>Hello ${name}!</h1>
  `;

export const template = (name: string, message: string, items: Array<string>) =>
  html`
    ${header(name)}
    <p>${message}</p>
    <h4>repeating:</h4>
    <div>
      ${repeat(
        items,
        (item, i) =>
          html`
            <p>${i}) ${item}</p>
          `
      )}
    </div>
    <my-element></my-element>
  `;
