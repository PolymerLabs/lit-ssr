export {}

declare global {
  interface ImportMeta {
    url: string;
  }
}

declare module 'vm' {
  class SourceTextModule {
    url: string;
    namespace: any;
    context: any;

    constructor(source: string, options: any);

    link(linker: (specifier: string, referencingModule: SourceTextModule) => SourceTextModule | Promise<SourceTextModule>): Promise<void>;
    instantiate(): void;
    evaluate(): Promise<{result: unknown}>;
  }
}
