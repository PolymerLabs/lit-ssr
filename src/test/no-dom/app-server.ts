import { renderToStream } from '../../lib/render-to-stream.js';
import {template} from './module.js';
import { Writable } from 'stream';

export const render = (data: any, stream: Writable) => {
  stream.write(`
    <!doctype html>
    <html>
      <head>
        <script src="/test/no-dom/app-client.js" type="module"></script>
      </head>
      <body>`);
  renderToStream(template(data.name, data.message), stream);
  stream.write(`
      </body>
    </html>`);
};
