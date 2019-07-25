import {html} from 'lit-html';
import {LitElement} from 'lit-element';

export class MyElement extends LitElement {
  render() {
    return html`
      <h2>I'm a my-element</h2>
    `;
  }
}
customElements.define('my-element', MyElement);

export const header = (name: string) => html`<h1>Hello ${name}!</h1>`;

export const template = (name: string, message: string) => 
    html`
      ${header(name)}
      <p>${message}</p>
      <my-element></my-element>
    `;
