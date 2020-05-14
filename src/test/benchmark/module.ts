/**
 * @license
 * Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

import { html } from 'lit-html';
// import { repeat } from 'lit-html/directives/repeat.js';

// import './components/one-bar.js';
// import '@material/mwc-checkbox';
// import '@material/mwc-fab';
// import '@material/mwc-icon';
// import '@material/mwc-icon-button';
// import '@material/mwc-tab';
// import '@material/mwc-tab-bar';

/**
 * Renders the body of a gmail application.
 *
 * Features
 * - rendering LitElements (mwc-*, one-bar)
 * - slot distribution (mwc-tab-bar, mwc-tab, mwc-fab)
 * - repeat directive (mail items)
 */
export const template = (mail: Array<{sender: string, subject: string, date: string,
  unread: boolean, favorite: boolean, star: boolean, important: boolean}>) => html`
<!-- needs scoped styling -->
<!-- <one-bar></one-bar> -->
<div class="main">
<div class="main-nav">
  <div class="compose-fab-container">
    <mwc-fab class="compose-mail-fab" extended>add<label slot="label">Compose</label></mwc-fab>
  </div>
  <ul class="folder-list">
    <li class="mdc-list-item">
      <mwc-icon graphic>inbox</mwc-icon>Inbox
    </li>
    <li class="mdc-list-item">
      <mwc-icon graphic>star</mwc-icon>Starred
    </li>
    <li class="mdc-list-item">
      <mwc-icon graphic>snooze</mwc-icon>Snoozed
    </li>
    <li class="mdc-list-item">
      <mwc-icon graphic>send</mwc-icon>Sent
    </li>
    <li class="mdc-list-item">
      <mwc-icon graphic>drafts</mwc-icon>Drafts
    </li>
  </ul>
</div>
<div class="main-body">
  <div class="main-body-header">
    <mwc-checkbox></mwc-checkbox>
    <mwc-icon-button>refresh</mwc-icon-button>
    <mwc-icon-button>more_vert</mwc-icon-button>
    <div class="flex"></div>
    <span class="mail-last-range">1–${mail.length}</span>
    <mwc-icon-button disabled>chevron_left</mwc-icon-button>
    <mwc-icon-button>chevron_right</mwc-icon-button>
    <mwc-icon-button>settings</mwc-icon-button>
  </div>
  <div class="main-body-content">
    <mwc-tab-bar class="mail-tabs">
      <mwc-tab active>Primary</mwc-tab>
      <mwc-tab>Social</mwc-tab>
    </mwc-tab-bar>

    <div class="mail-list">
      ${mail.map(({sender, subject, date, unread, favorite, star, important}, i) => html`
        <div class="mail-item ${i % 2 ? '' : 'odd'}">
          <mwc-icon-button class="${unread ? 'unread' : ''}">${unread ? 'radio_button_checked' : 'radio_button_unchecked'}</mwc-icon-button>
          <mwc-icon-button class="${star ? 'star' : ''}">${star ? 'star' : 'star_border'}</mwc-icon-button>
          <mwc-icon-button class="${favorite ? 'favorite' : ''}">${favorite ? 'favorite' : 'favorite_border' }</mwc-icon-button>
          <mwc-icon-button class="${important ? 'important' : ''}">${important ? 'bookmark' : 'bookmark_border'}</mwc-icon-button>
          <div class="sender">${sender}</div>
          <div class="subject">${subject}</div>
          <div class="date">${date}</div>
        </div>
      `)}
    </div>
  </div>
</div>
</div>
`;
