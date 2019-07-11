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

import { TemplateResult } from 'lit-html';
import { Writable } from 'stream';

// import { depthFirst, parseFragment } from './parse5-utils.js';

// const templateCache = new Map();

// const getTemplate = (result: TemplateResult) => {
//   const template = templateCache.get(result.strings);
//   if (template !== undefined) {
//     return template;
//   }
//   const html = result.getHTML();
//   const ast = parseFragment(html);
//   // console.log({ast});
//   templateCache.set(result.strings, ast);
// };

export const renderToStream = (result: TemplateResult, stream: Writable) => {
  // const ast = getTemplate(result);

  // for (const node of depthFirst(ast)) {
  //   if (node.tagName !== undefined && node.tagName.indexOf('-') !== -1) {
  //     const ctor = customElements.get(node.tagName);
  //     if (ctor !== undefined) {
        
  //     }
  //   }
  //   console.log(node);
  // }

  stream.write(`<!--lit-part ${result.digest}-->`);
  const l = result.values.length;
  for (let i = 0; i < l; i++) {
    stream.write(result.strings[i]);
    const value = result.values[i];
    if (value instanceof TemplateResult) {
      renderToStream(value, stream);
    } else {
      stream.write(`<!--lit-part-->`);
      stream.write(value);
      stream.write(`<!--/lit-part-->`);
    }
  }
  stream.write(result.strings[l]);
  stream.write(`<!--/lit-part-->`);
};
