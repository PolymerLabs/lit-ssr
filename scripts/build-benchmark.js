/**
 * Pre-render the gmail benchmark application and insert a script
 * for measuring hydration performance.
 *
 * Outputs: ./test/benchmark/build.html.
 * When build.html is served and run by tachometer, the hydration
 * time for the page is measured.
 */

import {rollup} from 'rollup';
import nodeResolve from 'rollup-plugin-node-resolve';

//rollup --file=test/benchmark/app-server.build.js test/benchmark/app-server.js --plugin=node-resolve
//rollup --file=test/benchmark/app-client.build.js test/benchmark/app-client.js --plugin=node-resolve

const rollupOptions = {
  inlineDynamicImports: true,
  plugins: [
    nodeResolve()
  ],
};
const outputOptions = {
  //format: 'iife',
  name: 'bundle',
};

/**
 * Rollup the given script path.
 */
async function build(inputFile, outputFile) {
  rollupOptions.input = inputFile;
  const bundle = await rollup(rollupOptions);
  outputOptions.file = outputFile;
  await bundle.generate(outputOptions);
  bundle.write(outputOptions);
}

build('./test/benchmark/app-client.js', './test/benchmark/app-client.build.js');
build('./test/benchmark/app-server.js', './test/benchmark/app-server.build.js');