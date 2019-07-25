import { renderNodePartToStream, getScopedStyles } from '../../lib/render-to-stream.js';
import {template} from './module.js';
import { Writable } from 'stream';

export const render = (data: any, stream: Writable) => {

  getScopedStyles();

  stream.write(`
    <!doctype html>
    <html>
      <head>
        <script type="module">
          const button = document.querySelector('button');
          button.addEventListener('click', () => {
            import('/test/no-dom/app-client.js');
          });
        </script>
      </head>
      <body>
        <button>Hydrate</button>
        <div>`);
      renderNodePartToStream(template(data.name, data.message), stream, new Set, {});
  stream.write(`
        </div>
      </body>
    </html>`);
};
