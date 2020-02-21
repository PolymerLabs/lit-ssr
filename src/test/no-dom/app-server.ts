import { render, getScopedStyles } from '../../lib/render.js';
import {template} from './module.js';

export async function* renderApp(data: any) {

  yield* getScopedStyles();

  yield `
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
        <div>`;
  yield* render(template(data.name, data.message, data.items), undefined, false);
  yield `
        </div>
      </body>
    </html>`;
};
