import React from 'react';
import './App.css';
import { data  as mail} from './data.js';

function App() {
  return (
<div className="main">
  <div className="main-nav">
    <div className="compose-fab-container">
      <mwc-fab class="compose-mail-fab" extended><mwc-icon>add</mwc-icon><label slot="label">Compose</label></mwc-fab>
    </div>
    <ul className="folder-list">
      <li className="mdc-list-item">
        <mwc-icon graphic>inbox</mwc-icon>Inbox
      </li>
      <li className="mdc-list-item">
        <mwc-icon graphic>star</mwc-icon>Starred
      </li>
      <li className="mdc-list-item">
        <mwc-icon graphic>snooze</mwc-icon>Snoozed
      </li>
      <li className="mdc-list-item">
        <mwc-icon graphic>send</mwc-icon>Sent
      </li>
      <li className="mdc-list-item">
        <mwc-icon graphic>drafts</mwc-icon>Drafts
      </li>
    </ul>
  </div>
  <div className="main-body">
    <div className="main-body-header">
      <mwc-checkbox></mwc-checkbox>
      <mwc-icon-button>refresh</mwc-icon-button>
      <mwc-icon-button>more_vert</mwc-icon-button>
      <div className="flex"></div>
      <span className="mail-last-range">1–{mail.length}</span>
      <mwc-icon-button disabled>chevron_left</mwc-icon-button>
      <mwc-icon-button>chevron_right</mwc-icon-button>
      <mwc-icon-button>settings</mwc-icon-button>
    </div>
    <div className="main-body-content">
      <mwc-tab-bar class="mail-tabs">
        <mwc-tab active>Primary</mwc-tab>
        <mwc-tab>Social</mwc-tab>
      </mwc-tab-bar>

      <div className="mail-list">
        {mail.map(({sender, subject, date, unread, favorite, star, important}, i) => (
          <div key={i} className={i % 2 ? 'mail-item' : 'mail-item odd'}>
            <mwc-icon-button class={unread ? 'unread' : ''}>{unread ? 'radio_button_checked' : 'radio_button_unchecked'}</mwc-icon-button>
            <mwc-icon-button class={star ? 'star' : ''}>{star ? 'star' : 'star_border'}</mwc-icon-button>
            <mwc-icon-button class={favorite ? 'favorite' : ''}>{favorite ? 'favorite' : 'favorite_border' }</mwc-icon-button>
            <mwc-icon-button class={important ? 'important' : ''}>{important ? 'bookmark' : 'bookmark_border'}</mwc-icon-button>
            <div className="sender">{sender}</div>
            <div className="subject">{subject}</div>
            <div className="date">{date}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>
  );
}

export default App;
