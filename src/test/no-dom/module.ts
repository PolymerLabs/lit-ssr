import {html} from 'lit-html';
import {LitElement} from 'lit-element';

export class MyElement extends LitElement {

}
customElements.define('my-element', MyElement);

export const header = (name: string) => html`<h1>Hello ${name}!</h1>`;

export const template = (name: string, message: string) => 
    html`
      ${header(name)}
      <p>${message}</p>
      <my-element></my-element>
    `;