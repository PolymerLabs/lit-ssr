import {html} from 'lit-html';

export const header = (name: string) => html`<h1>Hello ${name}!</h1>`;

export const template = (name: string, message: string) => 
    html`
      ${header(name)}
      <p>${message}</p>
    `;
