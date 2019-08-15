import {render, hydrate} from 'lit-html';
import {template} from './module.js';

declare var window: any;

console.log('hydrating');
hydrate(template('SSR', 'This is a test.', ['foo', 'bar', 'qux']), window.document.body);

window.setTimeout(() => {
  console.log('updating');
  render(template('Hydration', 'This is a test.', ['hy', 'dra', 'ted']), window.document.body);
}, 1000);
