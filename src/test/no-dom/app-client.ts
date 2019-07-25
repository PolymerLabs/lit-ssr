import {render, hydrate} from 'lit-html';
import {template} from './module.js';

declare var window: any;

console.log('hydrating');
hydrate(template('SSR', 'This is a test.'), window.document.body);

window.setTimeout(() => {
  console.log('updating');
  render(template('Hydration', 'This is a test.'), window.document.body);
}, 1000);
