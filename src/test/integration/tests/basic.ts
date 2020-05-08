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

import { SSRTest } from './ssr-test';

const filterNodes = (nodes: ArrayLike<Node>, nodeType: number) =>
  Array.from(nodes).filter(n => n.nodeType === nodeType);

const testSymbol = Symbol();
const testObject = {};
const testArray = [1,2,3];
const testFunction = () => 'test function';

export const tests: {[name: string] : SSRTest} = {

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

  'NodePart accepts an element': {
    // document.createElement is not shimmed in the server environment
    skip: true,
    render(x: any) {
      return html`<div>${x}</div>`;
    },
    expectations: [
      {
        args: [/*document.createElement('span')*/],
        html: '<div><span></span></div>'
      },
      {
        args: [/*document.createElement('section')*/],
        html: '<div><section></section></div>'
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

  'NodePart accepts repeat with strings': {
    skip: true,
    render(words: string[]) {
      return html`${repeat(words, (word, i) => `(${i} ${word})`)}`;
    },
    expectations: [
      {
        args: [['foo', 'bar', 'qux']],
        html: '(0 foo)\n(1 bar)\n(2 qux)'
      },
      // Attribute hydration not working yet
      {
        args: [['A', 'B', 'C']],
        html: '(0 A)(1 B)(2 C)'
      }
    ],
    stableSelectors: [],
  },

  'NodePart accepts repeat with templates': {
    skip: true,
    render(words: string[]) {
      return html`${repeat(words, (word, i) => html`<p>${i}) ${word}</p>`)}`;
    },
    expectations: [
      {
        args: [['foo', 'bar', 'qux']],
        html: '<p>0) foo</p><p>1) bar</p><p>2) qux</p>'
      },
      // Attribute hydration not working yet
      {
        args: [['A', 'B', 'C']],
        html: '<p>0) A</p><p>1) B</p><p>2) C</p>'
      }
    ],
    stableSelectors: ['p'],
  },

  'NodePart accepts nested templates': {
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

  'multiple NodeParts': {
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
    render(x: any, y: any) {
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
    // TODO: Test currently fails: `noChange` causes class="Object] [object"
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
          assert.notProperty((dom.querySelector('div'), 'foo');
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

};
