/**
 * This is a client-only file used to boot the page.
 */

import {render} from 'lit-html';
import {hydrate} from 'lit-html/lib/hydrate.js';
import {template} from './module.js';

declare var window: any;

console.log('hydrating');
// The hydrate() function is run with the same data as used in the server
// render. It doesn't update the DOM, and just updates the lit-html part values
// so that future renders() will do the minimal DOM updates.
hydrate(
  template('SSR', 'This is a test.', ['foo', 'bar', 'qux']),
  window.document.body
);

window.setTimeout(() => {
  console.log('updating');
  // The first call to render() can use new data, and will only update the DOM
  // where this data differs from that passed to hydrate().
  render(
    template('Hydration', 'This is a test.', ['hy', 'dra', 'ted']),
    window.document.body
  );
}, 0);
