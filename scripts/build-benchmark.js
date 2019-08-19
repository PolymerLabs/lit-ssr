/**
 * Pre-render the gmail benchmark application and insert a script
 * for measuring hydration performance.
 * 
 * Outputs: ./test/benchmark/build.html.
 * When build.html is served and run by tachometer, the hydration
 * time for the page is measured.
 */

import * as util from 'util';
import * as fs from 'fs';
import del from 'del';
const writeFile = util.promisify(fs.writeFile);
import rollup from 'rollup';
import nodeResolve from 'rollup-plugin-node-resolve';

const jsFile = './temp.js';
const rollupOptions = {
  input: jsFile,
  inlineDynamicImports: true,
  plugins: [
    nodeResolve()
  ],
};
const outputOptions = {
  format: 'iife',
  name: 'bundle',
};

/**
 * Rollup the given script string by inlining module imports.
 */
async function build(scriptContent) {
  await writeFile(jsFile, scriptContent, 'utf-8');
  const bundle = await rollup.rollup(rollupOptions);
  const {output} = await bundle.generate(outputOptions);
  let code = '';
  for (const chunkOrAsset of output) {
    code += chunkOrAsset.code;
  }
  await del(jsFile);
  return code;
}

import { AsyncIterableReader } from '../lib/async-iterator-readable.js';
import parse5 from 'parse5';
import dom5 from 'dom5';
import { window } from '../lib/dom-shim.js';
import module from 'module';

const { createRequire } = module;
const require = createRequire(import.meta.url);
window.require = require;

/**
 * Pre-render the gmail benchmark application. Add a script to that pre-rendered
 * page that measures the hydration time.
 */
(async () => {
  const importModule = await import('../lib/import-module.js');
  const appModule = importModule.importModule('../test/benchmark/app-server.js', import.meta.url, window);
  const renderApp = (await appModule).namespace.renderApp;
  const stream = new AsyncIterableReader(renderApp());
  let page = "";
  for await (const chunk of stream) {
    page += chunk
  }

  let document = parse5.parse(page);
  const tachometerMeasurementScript = dom5.constructors.element('script');
  tachometerMeasurementScript.type = 'module';
  const bundledScript = await build("\
    import { render, hydrate } from 'lit-html';\
    import { template } from './test/benchmark/module.js';\
    import {data} from './test/benchmark/data.js';\
    const start = performance.now();\
    hydrate(template(data), window.document.body);\
    window.tachometerResult = performance.now() - start;\
  ");

  dom5.setTextContent(
    tachometerMeasurementScript,
    bundledScript
  );
  const body = dom5.query(document, dom5.predicates.hasTagName('body'));
  dom5.append(body, tachometerMeasurementScript);
  
  await writeFile('./test/benchmark/build.html', parse5.serialize(document), 'utf-8');
})();