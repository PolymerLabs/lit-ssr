import {html} from 'lit-html';
import {LitElement, property} from 'lit-element';

import { renderToStream } from '../lib/render-to-stream.js';
import { Writable } from 'stream';


export class XFoo extends LitElement {
  @property() x?: string = '42';

  render() {
    return html`<main>${this.x}<slot></slot></main>`;
  }
}
customElements.define('x-foo', XFoo);

export const template = (s: string) => html`<div><x-foo><p>woot</p></x-foo>${s}</div>`;

export const render = (s: string, stream: Writable) => {
  renderToStream(template(s), stream);
};
