import {window} from '../lib/dom-shim.js';
import {importModule} from './import-module.js';
import {createRequire} from 'module';

// We need to give window a require to load CJS modules used by the SSR
// implementation. If we had only JS module dependencies, we wouldn't need this.
(window as any).require = createRequire(import.meta.url);

/**
 * Imports a module into a web-like rendering VM content and calls the function
 * exported as `functionName`.
 *
 * @param specifier
 * @param referrer
 * @param functionName
 * @param args
 */
export const renderModule = async (
  specifier: string,
  referrer: string,
  functionName: string,
  args: any[]
) => {
  const module = await importModule(specifier, referrer, window);
  const f = module.namespace[functionName] as Function;
  // TODO: should we require the result be an AsyncIterable?
  return f.apply(undefined, args);
};
