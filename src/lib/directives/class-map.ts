export type ClassMapPreRenderer = () => string;

const directives = new WeakMap<ClassMapPreRenderer, true>();

export interface ClassInfo {
  readonly [name: string]: string|boolean|number;
}

/**
 * Whether the given value is a classMap directive.
 */
export const isClassMapDirective = (value: unknown): boolean => {
  return directives.has(value as ClassMapPreRenderer);
}

/**
 * classMap directive factory for server-side pre-rendering.
 */
export const classMap = (classInfo: ClassInfo): ClassMapPreRenderer => {
  /**
   * Returns a string of class names whose values in classInfo are truthy.
   */
  const doClassMap = function(): string {
    // We explicitly want a loose truthy check here to match the lit-html
    // classMap implementation.
    return Object.keys(classInfo).filter((name) => classInfo[name]).join(' ');
  }
  directives.set(doClassMap, true);
  return doClassMap;
}
