import * as path from 'path';
import * as fs from 'fs';
import { URL } from 'url';
import {promisify} from 'util';
import * as vm from 'vm';

import resolve from 'resolve';

const readFile = promisify(fs.readFile);

type PackageJSON = {main?: string, module?: string, 'jsnext:main'?: string};

const resolveSpecifier = (specifier: string, referrer: string): URL => {
  // console.log('resolveSpecifier', specifier, referrer);

  // if (specifier.endsWith('render-light.js')) {
  //   console.log('resolveSpecifier render-light.js', specifier, referrer);
  // }

  if (referrer === undefined) {
    throw new Error('referrer is undefined');
  }

  let moduleURL! : URL;
  try {
    moduleURL = new URL(specifier);
  } catch (e) {
    if (specifier.match(/^(\.){0,2}\//) !== null) {
      moduleURL = new URL(specifier, referrer);
      return moduleURL;
    } else if (specifier.startsWith('lit-html')) {
      if (specifier.match(/lit-html\/directives\/repeat\.js$/)) {
        // Swap directives when requested.
        return new URL(`file:${path.resolve('lib/directives/repeat.js')}`);
      } else if (specifier.match(/lit-html\/directives\/class-map\.js$/)) {
        return new URL(`file:${path.resolve('lib/directives/class-map.js')}`);
      } else {
        // override where we resolve lit-html from to resolve to a single version
        referrer = import.meta.url;
      }
    }
    const referencingModulePath = new URL(referrer).pathname;
    const modulePath = resolve.sync(specifier, {
      basedir: path.dirname(referencingModulePath),
      moduleDirectory: ['node_modules'],
      extensions: ['.js'],
      // Some packages use a non-standard alternative to the "main" field
      // in their package.json to differentiate their ES module version.
      packageFilter: (packageJson: PackageJSON) => {
        packageJson.main = packageJson.module || packageJson['jsnext:main'] || packageJson.main;
        return packageJson;
      },
    });
    moduleURL = new URL(`file:${modulePath}`);
  }
  // if (specifier.endsWith('render-light.js')) {
  //   console.log('  ', moduleURL.pathname);
  // }
  return moduleURL;
};

const initializeImportMeta = (meta: any, module: vm.SourceTextModule) => {
  meta.url = module.identifier;
};

export const importModule = async (path: string, referrer: string, sandbox: any) => {

  // console.log('importModule', path, referrer);

  const context = vm.createContext(sandbox);
  const moduleCache = new Map<string, Promise<vm.SourceTextModule>>();

  const linker = async (specifier: string, referencingModule: vm.SourceTextModule): Promise<vm.SourceTextModule> => {
    // console.log('linker', {referencingModule});
    return loadModule(specifier, referencingModule.identifier);
  };

  const loadModule = async (specifier: string, referrer: string): Promise<vm.SourceTextModule> => {
    const moduleURL = resolveSpecifier(specifier, referrer);
    if (moduleURL.protocol !== 'file:') {
      throw new Error(`Unsupported protocol: ${moduleURL.protocol}`);
    }
    const modulePath = moduleURL.pathname;
    let modulePromise = moduleCache.get(modulePath);
    if (modulePromise !== undefined) {
      return modulePromise;
    }
    modulePromise = (async () => {
        const source = await readFile(modulePath, 'utf-8');
        return new vm.SourceTextModule(source, {
          initializeImportMeta,
          importModuleDynamically,
          context,
          identifier: moduleURL.toString(),
        });
    })();
    moduleCache.set(modulePath, modulePromise);
    return modulePromise;
  };
  
  const importModuleDynamically = async (specifier: string, referencingModule: vm.SourceTextModule) => {
    const module = await loadModule(specifier, referencingModule.identifier);
    await module.link(linker);
    // module.instantiate();
    await module.evaluate();
    return module;
  };

  const module = await loadModule(path, referrer);

  await module.link(linker);
  // module.instantiate();
  await module.evaluate();
  return module;
};
