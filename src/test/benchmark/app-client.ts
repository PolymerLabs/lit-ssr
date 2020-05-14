import {template} from './module.js';
import { data } from './data.js';
import {render} from 'lit-html';
import {hydrate} from 'lit-html/lib/hydrate.js';

const params = new URLSearchParams(window.location.search);
const benchmark = params.get('benchmark');

declare global {
  interface Window {
    tachometerResult: number
  }
}

const measure = (callback: null|(() => void), startAt?: number) => {
  const start = startAt !== undefined ? startAt : performance.now();
  callback && callback();
  window.tachometerResult = performance.now() - start;
  document.title = window.tachometerResult.toFixed(2) + 'ms';
}

const doRender = () => {
  render(template(data), document.body);
}

const doHydrate = () => {
  hydrate(template(data), window.document.body);
}

const benchmarks = {
  render() {
    document.body.innerHTML = '';
    measure(doRender);
  },

  hydrate() {
    measure(doHydrate);
  },

  ssr() {
    measure(null, 0);
  },

  ['ssr-hydrate']() {
    measure(doHydrate, 0);
  }
}

const test = (benchmarks as any)[benchmark!];
if (test) {
  test();
} else {
  console.error('Benchmark', benchmark, 'not found');
}
