export {}

declare global {
  interface ImportMeta {
    url: string;
  }
}

declare module 'vm' {
  class SourceTextModule {
    status: string;
    identifier: string;
    namespace: any;
    context: any;
    error?: any;
    dependencySpecifiers: ReadonlyArray<string>;

    constructor(source: string, options: any);

    link(linker: (specifier: string, referencingModule: SourceTextModule) => SourceTextModule | Promise<SourceTextModule>): Promise<void>;
    instantiate(): void;
    evaluate(): Promise<{result: unknown}>;
  }
}
