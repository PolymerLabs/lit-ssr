import {html} from 'lit-html';

import { renderToStream } from '../lib/render-to-stream.js';
import { Writable } from 'stream';

export const template = (s: string) => html`<div>${s}</div>`;

export const render = (s: string, stream: Writable) => {
  renderToStream(template(s), stream);
};
