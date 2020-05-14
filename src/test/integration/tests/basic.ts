/**
 * @license
 * Copyright (c) 2020 The Polymer Project Authors. All rights reserved.
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

import {html, noChange, nothing} from 'lit-html';
import {repeat} from 'lit-html/directives/repeat.js';
import {guard} from 'lit-html/directives/guard.js';
import {cache} from 'lit-html/directives/cache.js';

import { SSRTest } from './ssr-test';

const filterNodes = (nodes: ArrayLike<Node>, nodeType: number) =>
  Array.from(nodes).filter(n => n.nodeType === nodeType);

const testSymbol = Symbol();
const testObject = {};
const testArray = [1,2,3];
const testFunction = () => 'test function';

let guardedCallCount = 0;
const guardedTemplate = (bool: boolean) => {
  guardedCallCount++;
  return html`value is ${bool ? true : false}`;
}

export const tests: {[name: string] : SSRTest} = {

  // TODO: add suites (for now, delineating with comments)

  /******************************************************
   * NodePart tests
   ******************************************************/

  'NodePart accepts a string': {
    render(x: any) {
      return html`<div>${x}</div>`;
    },
    expectations: [
      {
        args: ['foo'],
        html: '<div>foo</div>'
      },
      {
        args: ['foo2'],
        html: '<div>foo2</div>'
      }
    ],
    stableSelectors: ['div'],
  },

  'NodePart accepts a number': {
    render(x: any) {
      return html`<div>${x}</div>`;
    },
    expectations: [
      {
        args: [123],
        html: '<div>123</div>'
      },
      {
        args: [456.789],
        html: '<div>456.789</div>'
      }
    ],
    stableSelectors: ['div'],
  },

  'NodePart accepts undefined': {
    render(x: any) {
      return html`<div>${x}</div>`;
    },
    expectations: [
      {
        args: [undefined],
        html: '<div></div>'
      },
      {
        args: ['foo'],
        html: '<div>foo</div>'
      }
    ],
    stableSelectors: ['div'],
  },

  'NodePart accepts null': {
    render(x: any) {
      return html`<div>${x}</div>`;
    },
    expectations: [
      {
        args: [null],
        html: '<div></div>'
      },
      {
        args: ['foo'],
        html: '<div>foo</div>'
      }
    ],
    stableSelectors: ['div'],
  },

  'NodePart accepts noChange': {
    render(x: any) {
      return html`<div>${x}</div>`;
    },
    expectations: [
      {
        args: [noChange],
        html: '<div></div>'
      },
      {
        args: ['foo'],
        html: '<div>foo</div>'
      }
    ],
    stableSelectors: ['div'],
  },

  'NodePart accepts nothing': {
    render(x: any) {
      return html`<div>${x}</div>`;
    },
    expectations: [
      {
        args: [nothing],
        html: '<div></div>'
      },
      {
        args: ['foo'],
        html: '<div>foo</div>'
      }
    ],
    stableSelectors: ['div'],
  },

  'NodePart accepts a symbol': {
    render(x: any) {
      return html`<div>${x}</div>`;
    },
    expectations: [
      {
        args: [Symbol()],
        html: '<div>Symbol()</div>'
      },
      {
        args: [Symbol()],
        html: '<div>Symbol()</div>'
      }
    ],
    stableSelectors: ['div'],
  },

  'NodePart accepts a symbol with a description': {
    render(x: any) {
      return html`<div>${x}</div>`;
    },
    expectations: [
      {
        args: [Symbol('description!')],
        html: '<div>Symbol(description!)</div>'
      },
      {
        args: [Symbol('description2!')],
        html: '<div>Symbol(description2!)</div>'
      }
    ],
    stableSelectors: ['div'],
  },

  'NodePart accepts an object': {
    render(x: any) {
      return html`<div>${x}</div>`;
    },
    expectations: [
      {
        args: [{}],
        html: '<div>[object Object]</div>'
      },
      {
        args: [{}],
        html: '<div>[object Object]</div>'
      }
    ],
    // Objects are not dirty-checked before being toString()'ed
    expectMutationsOnFirstRender: true,
    stableSelectors: ['div'],
  },

  'NodePart accepts an object with a toString method': {
    render(x: any) {
      return html`<div>${x}</div>`;
    },
    expectations: [
      {
        args: [{toString() { return 'toString!'; }}],
        html: '<div>toString!</div>'
      },
      {
        args: [{toString() { return 'toString2!'; }}],
        html: '<div>toString2!</div>'
      }
    ],
    // Objects are not dirty-checked before being toString()'ed
    expectMutationsOnFirstRender: true,
    stableSelectors: ['div'],
  },

  'NodePart accepts a function': {
    render(x: any) {
      return html`<div>${x}</div>`;
    },
    expectations: [
      {
        args: [() => { throw new Error(); }],
        html: '<div>() => { throw new Error(); }</div>'
      },
      {
        args: [() => { throw new Error("2"); }],
        html: '<div>() => { throw new Error("2"); }</div>'
      }
    ],
    // Functions are not dirty-checked before being toString()'ed
    expectMutationsOnFirstRender: true,
    stableSelectors: ['div'],
  },

  'NodePart accepts TemplateResult': {
    render(x: any) {
      return html`<div>${html`<span>${x}</span>`}</div>`;
    },
    expectations: [
      {
        args: ['A'],
        html: '<div><span>A</span></div>'
      },
      {
        args: ['B'],
        html: '<div><span>B</span></div>'
      }
    ],
    stableSelectors: ['div', 'span'],
  },

  'multiple NodeParts, adjacent primitive values': {
    render(x: any, y: any) {
      return html`<div>${x}${y}</div>`;
    },
    expectations: [
      {
        args: ['A', 'B'],
        html: '<div>A\n  B</div>'
      },
      {
        args: ['C', 'D'],
        html: '<div>C\n  D</div>'
      }
    ],
    stableSelectors: ['div'],
  },

  'multiple NodeParts, adjacent primitive & TemplateResult': {
    render(x: any, y: any) {
      return html`<div>${x}${html`<span>${y}</span>`}</div>`;
    },
    expectations: [
      {
        args: ['A', 'B'],
        html: '<div>A\n  <span>B</span></div>'
      },
      {
        args: ['C', 'D'],
        html: '<div>C\n  <span>D</span></div>'
      }
    ],
    stableSelectors: ['div', 'span'],
  },

  'multiple NodeParts, adjacent TemplateResults': {
    render(x: any, y: any) {
      return html`<div>${html`<span>${x}</span>`}${html`<span>${y}</span>`}</div>`;
    },
    expectations: [
      {
        args: ['A', 'B'],
        html: '<div><span>A</span><span>B</span></div>'
      },
      {
        args: ['C', 'D'],
        html: '<div><span>C</span><span>D</span></div>'
      }
    ],
    stableSelectors: ['div', 'span'],
  },

  'multiple NodeParts with whitespace': {
    render(x: any, y: any) {
      return html`<div>${x} ${y}</div>`;
    },
    expectations: [
      {
        args: ['A', 'B'],
        html: '<div>A\n  B</div>',
        check(assert: Chai.Assert, dom: HTMLElement) {
          const childNodes = dom.querySelector('div')!.childNodes;
          const textContent = filterNodes(childNodes, Node.TEXT_NODE)
            .map(n => n.textContent);
          assert.deepEqual(textContent, ['A', ' ', 'B']);
        }
      },
      {
        args: ['C', 'D'],
        html: '<div>C\n  D</div>',
        check(assert: Chai.Assert, dom: HTMLElement) {
          const childNodes = dom.querySelector('div')!.childNodes;
          const textContent = filterNodes(childNodes, Node.TEXT_NODE)
            .map(n => n.textContent);
          assert.deepEqual(textContent, ['C', ' ', 'D']);
        }
      }
    ],
    stableSelectors: ['div'],
  },

  'NodePart with trailing whitespace': {
    render(x: any) {
      return html`<div>${x} </div>`;
    },
    expectations: [
      {
        args: ['A'],
        html: '<div>A\n  </div>',
        check(assert: Chai.Assert, dom: HTMLElement) {
          const childNodes = dom.querySelector('div')!.childNodes;
          const textContent = filterNodes(childNodes, Node.TEXT_NODE)
            .map(n => n.textContent);
          assert.deepEqual(textContent, ['A', ' ']);
        }
      },
      {
        args: ['B'],
        html: '<div>B\n  </div>',
        check(assert: Chai.Assert, dom: HTMLElement) {
          const childNodes = dom.querySelector('div')!.childNodes;
          const textContent = filterNodes(childNodes, Node.TEXT_NODE)
            .map(n => n.textContent);
          assert.deepEqual(textContent, ['B', ' ']);
        }
      }
    ],
    stableSelectors: ['div'],
  },

  'NodePart accepts array with strings': {
    render(words: string[]) {
      return html`<div>${words}</div>`;
    },
    expectations: [
      {
        args: [['A', 'B', 'C']],
        html: '<div>A\n  B\n  C</div>'
      },
      {
        args: [['D', 'E', 'F']],
        html: '<div>D\n  E\n  F</div>'
      }
    ],
    stableSelectors: ['div'],
  },

  'NodePart accepts array with strings, updated with fewer items': {
    render(words: string[]) {
     return html`<div>${words}</div>`;
    },
    expectations: [
      {
        args: [['A', 'B', 'C']],
        html: '<div>A\n  B\n  C</div>'
      },
      // Attribute hydration not working yet
      {
        args: [['D', 'E']],
        html: '<div>D\n  E</div>'
      }
    ],
    stableSelectors: ['div'],
  },

  'NodePart accepts array with strings, updated with more items': {
    render(words: string[]) {
      return html`<div>${words}</div>`;
    },
    expectations: [
      {
        args: [['A', 'B', 'C']],
        html: '<div>A\n  B\n  C</div>'
      },
      // Attribute hydration not working yet
      {
        args: [['D', 'E', 'F', 'G']],
        html: '<div>D\n  E\n  F\n  G</div>'
      }
    ],
    stableSelectors: ['div'],
  },

  'NodePart accepts array with templates': {
    render(words: string[]) {
      return html`<ol>${words.map((w) => html`<li>${w}</li>`)}</ol>`;
    },
    expectations: [
      {
        args: [['A', 'B', 'C']],
        html: '<ol><li>A</li>\n  <li>B</li>\n  <li>C</li></ol>'
      },
      {
        args: [['D', 'E', 'F']],
        html: '<ol><li>D</li>\n  <li>E</li>\n  <li>F</li></ol>'
      }
    ],
    stableSelectors: ['ol', 'li'],
  },

  'NodePart accepts directive: repeat with strings': {
    render(words: string[]) {
      return html`${repeat(words, (word, i) => `(${i} ${word})`)}`;
    },
    expectations: [
      {
        args: [['foo', 'bar', 'qux']],
        html: '(0 foo)\n(1 bar)\n(2 qux)\n'
      },
      {
        args: [['A', 'B', 'C']],
        html: '(0 A)\n(1 B)\n(2 C)\n'
      }
    ],
    stableSelectors: [],
  },

  'NodePart accepts directive: repeat with templates': {
    render(words: string[]) {
      return html`${repeat(words, (word, i) => html`<p>${i}) ${word}</p>`)}`;
    },
    expectations: [
      {
        args: [['foo', 'bar', 'qux']],
        html: '<p>\n  0\n  )\n  foo\n</p>\n<p>\n  1\n  )\n  bar\n</p>\n<p>\n  2\n  )\n  qux\n</p>\n'
      },
      {
        args: [['A', 'B', 'C']],
        html: '<p>\n  0\n  )\n  A\n</p>\n<p>\n  1\n  )\n  B\n</p>\n<p>\n  2\n  )\n  C\n</p>\n'
      }
    ],
    stableSelectors: ['p'],
  },

  'NodePart accepts directive: cache': {
    render(bool: boolean) {
      return html`${cache(bool ? html`<p>true</p>` : html`<b>false</b>` )}`;
    },
    expectations: [
      {
        args: [true],
        html: '<p>true</p>'
      },
      {
        args: [false],
        html: '<b>false</b>'
      },
      {
        args: [true],
        html: '<p>true</p>'
      }
    ],
    stableSelectors: [],
  },

  'NodePart accepts directive: guard': {
    render(bool: boolean) {
      return html`<div>${guard([bool], () => guardedTemplate(bool))}</div>`
    },
    expectations: [
      {
        args: [true],
        html: '<div>value is\n  true</div>',
        check(assert: Chai.Assert) {
          assert.equal(guardedCallCount, 1);
        }
      },
      {
        args: [true],
        html: '<div>value is\n  true</div>',
        check(assert: Chai.Assert) {
          assert.equal(guardedCallCount, 1);
        }
      },
      {
        args: [false],
        html: '<div>value is\n  false</div>',
        check(assert: Chai.Assert) {
          assert.equal(guardedCallCount, 2);
        }
      }
    ],
    stableSelectors: ['div'],
  },

  /******************************************************
   * AttributePart tests
   ******************************************************/

  'AttributePart accepts a string': {
    render(x: any) {
      return html`<div class=${x}></div>`;
    },
    expectations: [
      {
        args: ['TEST'],
        html: '<div class="TEST"></div>'
      },
      {
        args: ['TEST2'],
        html: '<div class="TEST2"></div>'
      }
    ],
    stableSelectors: ['div'],
  },

  'AttributePart accepts a number': {
    render(x: any) {
      return html`<div class=${x}></div>`;
    },
    expectations: [
      {
        args: [123],
        html: '<div class="123"></div>'
      },
      {
        args: [456.789],
        html: '<div class="456.789"></div>'
      }
    ],
    stableSelectors: ['div'],
  },

  'AttributePart accepts undefined': {
    render(x: any) {
      return html`<div class=${x}></div>`;
    },
    expectations: [
      {
        args: [undefined],
        html: '<div class="undefined"></div>'
      },
      {
        args: ['TEST'],
        html: '<div class="TEST"></div>'
      }
    ],
    stableSelectors: ['div'],
  },

  'AttributePart accepts null': {
    render(x: any) {
      return html`<div class=${x}></div>`;
    },
    expectations: [
      {
        args: [null],
        html: '<div class="null"></div>'
      },
      {
        args: ['TEST'],
        html: '<div class="TEST"></div>'
      }
    ],
    stableSelectors: ['div'],
  },

  'AttributePart accepts noChange': {
    // TODO: Test currently fails: `noChange` causes class="[object Object]"
    // to be rendered; to be investigated
    skip: true,
    render(x: any) {
      return html`<div class=${x}></div>`;
    },
    expectations: [
      {
        args: [noChange],
        html: '<div class="undefined"></div>'
      },
      {
        args: ['TEST'],
        html: '<div class="TEST"></div>'
      }
    ],
    stableSelectors: ['div'],
  },

  'AttributePart accepts nothing': {
    // TODO: Test currently fails: `nothing` causes unexpected DOM mutation on
    // first render; to be investigated
    skip: true,
    render(x: any) {
      return html`<div class=${x}></div>`;
    },
    expectations: [
      {
        args: [nothing],
        html: '<div class="[object Object]"></div>'
      },
      {
        args: ['TEST'],
        html: '<div class="TEST"></div>'
      }
    ],
    stableSelectors: ['div'],
  },

  'AttributePart accepts a symbol': {
    render(x: any) {
      return html`<div class=${x}></div>`;
    },
    expectations: [
      {
        args: [Symbol()],
        html: '<div class="Symbol()"></div>'
      },
      {
        args: [Symbol()],
        html: '<div class="Symbol()"></div>'
      }
    ],
    stableSelectors: ['div'],
  },

  'AttributePart accepts a symbol with description': {
    render(x: any) {
      return html`<div class=${x}></div>`;
    },
    expectations: [
      {
        args: [Symbol('description!')],
        html: '<div class="Symbol(description!)"></div>'
      },
      {
        args: [Symbol('description2!')],
        html: '<div class="Symbol(description2!)"></div>'
      }
    ],
    stableSelectors: ['div'],
  },

  'AttributePart accepts an array': {
    // TODO: Test currently fails: the default array.toString is being used
    // during SSR, causing commas between values to be rendered. To be fixed.
    skip: true,
    render(x: any) {
      return html`<div class=${x}></div>`;
    },
    expectations: [
      {
        args: [['a', 'b', 'c']],
        html: '<div class="abc"></div>'
      },
      {
        args: [['d', 'e', 'f']],
        html: '<div class="def"></div>'
      }
    ],
    stableSelectors: ['div'],
  },

  'multiple AttributeParts on same node': {
    render(x: any, y: any) {
      return html`<div class=${x} foo=${y}></div>`;
    },
    expectations: [
      {
        args: ['A', 'B'],
        html: '<div class="A" foo="B"></div>'
      },
      {
        args: ['C', 'D'],
        html: '<div class="C" foo="D"></div>'
      }
    ],
    stableSelectors: ['div'],
  },

  'multiple AttributeParts in same attribute': {
    render(x: any, y: any) {
      return html`<div class="${x} ${y}"></div>`;
    },
    expectations: [
      {
        args: ['A', 'B'],
        html: '<div class="A B"></div>'
      },
      {
        args: ['C', 'D'],
        html: '<div class="C D"></div>'
      }
    ],
    stableSelectors: ['div'],
  },

  'multiple AttributeParts across multiple attributes': {
    render(a: any, b: any, c: any, d: any, e: any, f: any) {
      return html`<div ab="${a} ${b}" x c="${c}" y de="${d} ${e}" f="${f}" z></div>`;
    },
    expectations: [
      {
        args: ['a', 'b', 'c', 'd', 'e', 'f'],
        html: '<div ab="a b" x c="c" y de="d e" f="f" z></div>'
      },
      {
        args: ['A', 'B', 'C', 'D', 'E', 'F'],
        html: '<div ab="A B" x c="C" y de="D E" f="F" z></div>'
      }
    ],
    stableSelectors: ['div'],
  },

  /******************************************************
   * PropertyPart tests
   ******************************************************/

  'PropertyPart accepts a string': {
    render(x: any) {
      return html`<div .foo=${x}></div>`;
    },
    expectations: [
      {
        args: ['foo'],
        html: '<div></div>',
        check(assert: Chai.Assert, dom: HTMLElement) {
          assert.strictEqual((dom.querySelector('div') as any).foo, 'foo');
        }
      },
      {
        args: ['foo2'],
        html: '<div></div>',
        check(assert: Chai.Assert, dom: HTMLElement) {
          assert.strictEqual((dom.querySelector('div') as any).foo, 'foo2');
        }
      }
    ],
    stableSelectors: ['div'],
  },

  'PropertyPart accepts a number': {
    render(x: any) {
      return html`<div .foo=${x}></div>`;
    },
    expectations: [
      {
        args: [1],
        html: '<div></div>',
        check(assert: Chai.Assert, dom: HTMLElement) {
          assert.strictEqual((dom.querySelector('div') as any).foo, 1);
        }
      },
      {
        args: [2],
        html: '<div></div>',
        check(assert: Chai.Assert, dom: HTMLElement) {
          assert.strictEqual((dom.querySelector('div') as any).foo, 2);
        }
      }
    ],
    stableSelectors: ['div'],
  },

  'PropertyPart accepts a boolean': {
    render(x: any) {
      return html`<div .foo=${x}></div>`;
    },
    expectations: [
      {
        args: [false],
        html: '<div></div>',
        check(assert: Chai.Assert, dom: HTMLElement) {
          assert.strictEqual((dom.querySelector('div') as any).foo, false);
        }
      },
      {
        args: [true],
        html: '<div></div>',
        check(assert: Chai.Assert, dom: HTMLElement) {
          assert.strictEqual((dom.querySelector('div') as any).foo, true);
        }
      }
    ],
    stableSelectors: ['div'],
  },

  'PropertyPart accepts undefined': {
    render(x: any) {
      return html`<div .foo=${x}></div>`;
    },
    expectations: [
      {
        args: [undefined],
        html: '<div></div>',
        check(assert: Chai.Assert, dom: HTMLElement) {
          assert.strictEqual((dom.querySelector('div') as any).foo, undefined);
        }
      },
      {
        args: [1],
        html: '<div></div>',
        check(assert: Chai.Assert, dom: HTMLElement) {
          assert.strictEqual((dom.querySelector('div') as any).foo, 1);
        }
      }
    ],
    stableSelectors: ['div'],
  },

  'PropertyPart accepts null': {
    render(x: any) {
      return html`<div .foo=${x}></div>`;
    },
    expectations: [
      {
        args: [null],
        html: '<div></div>',
        check(assert: Chai.Assert, dom: HTMLElement) {
          assert.strictEqual((dom.querySelector('div') as any).foo, null);
        }
      },
      {
        args: [1],
        html: '<div></div>',
        check(assert: Chai.Assert, dom: HTMLElement) {
          assert.strictEqual((dom.querySelector('div') as any).foo, 1);
        }
      }
    ],
    stableSelectors: ['div'],
  },

  'PropertyPart accepts noChange': {
    // TODO: Test currently fails: SSR does not currently accept noChange in 
    // property position. To fix.
    skip: true,
    render(x: any) {
      return html`<div .foo=${x}></div>`;
    },
    expectations: [
      {
        args: [noChange],
        html: '<div></div>',
        check(assert: Chai.Assert, dom: HTMLElement) {
          assert.notProperty(dom.querySelector('div'), 'foo');
        }
      },
      {
        args: [1],
        html: '<div></div>',
        check(assert: Chai.Assert, dom: HTMLElement) {
          assert.strictEqual((dom.querySelector('div') as any).foo, 1);
        }
      }
    ],
    stableSelectors: ['div'],
  },

  'PropertyPart accepts nothing': {
    // TODO: the current client-side does nothing special with `nothing`, just
    // passes it on to the property; is that what we want?
    render(x: any) {
      return html`<div .foo=${x}></div>`;
    },
    expectations: [
      {
        args: [nothing],
        html: '<div></div>',
        check(assert: Chai.Assert, dom: HTMLElement) {
          assert.strictEqual((dom.querySelector('div') as any).foo, nothing);
        }
      },
      {
        args: [1],
        html: '<div></div>',
        check(assert: Chai.Assert, dom: HTMLElement) {
          assert.strictEqual((dom.querySelector('div') as any).foo, 1);
        }
      }
    ],
    stableSelectors: ['div'],
  },

  'PropertyPart accepts a symbol': {
    render(x: any) {
      return html`<div .foo=${x}></div>`;
    },
    expectations: [
      {
        args: [testSymbol],
        html: '<div></div>',
        check(assert: Chai.Assert, dom: HTMLElement) {
          assert.strictEqual((dom.querySelector('div') as any).foo, testSymbol);
        }
      },
      {
        args: [1],
        html: '<div></div>',
        check(assert: Chai.Assert, dom: HTMLElement) {
          assert.strictEqual((dom.querySelector('div') as any).foo, 1);
        }
      }
    ],
    stableSelectors: ['div'],
  },

  'PropertyPart accepts an object': {
    render(x: any) {
      return html`<div .foo=${x}></div>`;
    },
    expectations: [
      {
        args: [testObject],
        html: '<div></div>',
        check(assert: Chai.Assert, dom: HTMLElement) {
          assert.strictEqual((dom.querySelector('div') as any).foo, testObject);
        }
      },
      {
        args: [1],
        html: '<div></div>',
        check(assert: Chai.Assert, dom: HTMLElement) {
          assert.strictEqual((dom.querySelector('div') as any).foo, 1);
        }
      }
    ],
    stableSelectors: ['div'],
  },

  'PropertyPart accepts an array': {
    render(x: any) {
      return html`<div .foo=${x}></div>`;
    },
    expectations: [
      {
        args: [testArray],
        html: '<div></div>',
        check(assert: Chai.Assert, dom: HTMLElement) {
          assert.strictEqual((dom.querySelector('div') as any).foo, testArray);
        }
      },
      {
        args: [1],
        html: '<div></div>',
        check(assert: Chai.Assert, dom: HTMLElement) {
          assert.strictEqual((dom.querySelector('div') as any).foo, 1);
        }
      }
    ],
    stableSelectors: ['div'],
  },

  'PropertyPart accepts a function': {
    render(x: any) {
      return html`<div .foo=${x}></div>`;
    },
    expectations: [
      {
        args: [testFunction],
        html: '<div></div>',
        check(assert: Chai.Assert, dom: HTMLElement) {
          assert.strictEqual((dom.querySelector('div') as any).foo, testFunction);
        }
      },
      {
        args: [1],
        html: '<div></div>',
        check(assert: Chai.Assert, dom: HTMLElement) {
          assert.strictEqual((dom.querySelector('div') as any).foo, 1);
        }
      }
    ],
    stableSelectors: ['div'],
  },

  'multiple PropertyParts on same node': {
    render(x: any, y: any) {
      return html`<div .foo=${x} .bar=${y}></div>`;
    },
    expectations: [
      {
        args: [1, true],
        html: '<div></div>',
        check(assert: Chai.Assert, dom: HTMLElement) {
          assert.strictEqual((dom.querySelector('div') as any).foo, 1);
          assert.strictEqual((dom.querySelector('div') as any).bar, true);
        }
      },
      {
        args: [2, false],
        html: '<div></div>',
        check(assert: Chai.Assert, dom: HTMLElement) {
          assert.strictEqual((dom.querySelector('div') as any).foo, 2);
          assert.strictEqual((dom.querySelector('div') as any).bar, false);
        }
      }
    ],
    stableSelectors: ['div'],
  },

  'multiple PropertyParts in one property': {
    render(x: any, y: any) {
      return html`<div .foo="${x},${y}"></div>`;
    },
    expectations: [
      {
        args: [1, true],
        html: '<div></div>',
        check(assert: Chai.Assert, dom: HTMLElement) {
          assert.strictEqual((dom.querySelector('div') as any).foo, '1,true');
        }
      },
      {
        args: [2, false],
        html: '<div></div>',
        check(assert: Chai.Assert, dom: HTMLElement) {
          assert.strictEqual((dom.querySelector('div') as any).foo, '2,false');
        }
      }
    ],
    stableSelectors: ['div'],
  },

  /******************************************************
   * EventPart tests
   ******************************************************/

  'EventPart': {
    render(listener: (e: Event) => void) {
      return html`<button @click=${listener}>X</button>`;
    },
    expectations: [
      {
        args: [(e: Event) => (e.target as any).__wasClicked = true],
        html: '<button>X</button>',
        check(assert: Chai.Assert, dom: HTMLElement) {
          const button = dom.querySelector('button')!;
          button.click();
          assert.strictEqual((button as any).__wasClicked, true);
        }
      },
      {
        args: [(e: Event) => (e.target as any).__wasClicked2 = true],
        html: '<button>X</button>',
        check(assert: Chai.Assert, dom: HTMLElement) {
          const button = dom.querySelector('button')!;
          button.click();
          assert.strictEqual((button as any).__wasClicked2, true);
        }
      }
    ],
    stableSelectors: ['button'],
  },

  /******************************************************
   * BooleanAttributePart tests
   ******************************************************/

  'BooleanAttributePart, initially true': {
    render(hide: boolean) {
      return html`<div ?hidden=${hide}></div>`;
    },
    expectations: [
      {
        args: [true],
        html: '<div hidden></div>',
      },
      {
        args: [false],
        html: '<div></div>',
      }
    ],
    stableSelectors: ['div'],
  },

  'BooleanAttributePart, initially truthy (number)': {
    render(hide: boolean) {
      return html`<div ?hidden=${hide}></div>`;
    },
    expectations: [
      {
        args: [1],
        html: '<div hidden></div>',
      },
      {
        args: [false],
        html: '<div></div>',
      }
    ],
    stableSelectors: ['div'],
  },

  'BooleanAttributePart, initially truthy (object)': {
    render(hide: boolean) {
      return html`<div ?hidden=${hide}></div>`;
    },
    expectations: [
      {
        args: [{}],
        html: '<div hidden></div>',
      },
      {
        args: [false],
        html: '<div></div>',
      }
    ],
    stableSelectors: ['div'],
  },

  'BooleanAttributePart, initially false': {
    render(hide: boolean) {
      return html`<div ?hidden=${hide}></div>`;
    },
    expectations: [
      {
        args: [false],
        html: '<div></div>',
      },
      {
        args: [true],
        html: '<div hidden></div>',
      }
    ],
    stableSelectors: ['div'],
  },

  'BooleanAttributePart, initially falsey (number)': {
    render(hide: boolean) {
      return html`<div ?hidden=${hide}></div>`;
    },
    expectations: [
      {
        args: [0],
        html: '<div></div>',
      },
      {
        args: [true],
        html: '<div hidden></div>',
      }
    ],
    stableSelectors: ['div'],
  },

  'BooleanAttributePart, initially falsey (null)': {
    render(hide: boolean) {
      return html`<div ?hidden=${hide}></div>`;
    },
    expectations: [
      {
        args: [null],
        html: '<div></div>',
      },
      {
        args: [true],
        html: '<div hidden></div>',
      }
    ],
    stableSelectors: ['div'],
  },

  'BooleanAttributePart, initially falsey (undefined)': {
    render(hide: boolean) {
      return html`<div ?hidden=${hide}></div>`;
    },
    expectations: [
      {
        args: [undefined],
        html: '<div></div>',
      },
      {
        args: [true],
        html: '<div hidden></div>',
      }
    ],
    stableSelectors: ['div'],
  },

  'BooleanAttributePart, initially nothing': {
    // TODO: Test currently fails: `nothing` causes attribute to be rendered
    // (both on client & server; fix in lit-html?)
    skip: true,
    render(hide: boolean) {
      return html`<div ?hidden=${hide}></div>`;
    },
    expectations: [
      {
        args: [nothing],
        html: '<div></div>',
      },
      {
        args: [true],
        html: '<div hidden></div>',
      }
    ],
    stableSelectors: ['div'],
  },

  'BooleanAttributePart, initially noChange': {
    // TODO: Test currently fails: `noChange` causes attribute to be rendered
    skip: true,
    render(hide: boolean) {
      return html`<div ?hidden=${hide}></div>`;
    },
    expectations: [
      {
        args: [noChange],
        html: '<div></div>',
      },
      {
        args: [true],
        html: '<div hidden></div>',
      }
    ],
    stableSelectors: ['div'],
  },

};
