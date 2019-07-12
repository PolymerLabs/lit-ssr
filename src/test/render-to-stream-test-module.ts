import {html} from 'lit-html';
import {LitElement} from 'lit-element';

import { renderToStream } from '../lib/render-to-stream.js';
import { Writable } from 'stream';


export class XFoo extends LitElement {
  render() {
    return html`<main></main>`;
  }
}
customElements.define('x-foo', XFoo);

export const template = (s: string) => html`<div><x-foo></x-foo>${s}</div>`;

export const render = (s: string, stream: Writable) => {
  renderToStream(template(s), stream);
};
