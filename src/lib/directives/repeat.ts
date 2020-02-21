import { renderValue, RenderInfo } from '../render.js';
import { ChildRenderer } from '../element-renderer.js';

export type RepeatPreRenderer = (childRenderer: ChildRenderer|undefined, renderInfo: RenderInfo) => AsyncIterableIterator<string>;

const directives = new WeakMap<RepeatPreRenderer, true>();

/**
 * Whether the given value is a repeat directive and can be called
 * to pre-render its previously given items.
 */
export const isRepeatDirective = (value: unknown): boolean => {
  return directives.has(value as RepeatPreRenderer);
}

type KeyFn<T> = (item: T, index: number) => unknown;
type ItemTemplate<T> = (item: T, index: number) => unknown;

/**
 * The repeat directive factory for server-side pre-rendering. The directive
 * is only used once per TemplateResult during pre-rending, so we do not need
 * to make optimizations for reordering.
 */
export const repeat = <T>(items: Iterable<T>,
  keyFnOrTemplate: KeyFn<T>|ItemTemplate<T>,
  template?: ItemTemplate<T>): RepeatPreRenderer => {
  if (template === undefined) {
    template = keyFnOrTemplate;
  }

  /**
   * The function that will be called upon to pre-render the list of items using
   * the template function.
   */
  const doRepeat = async function* (childRenderer: ChildRenderer|undefined, renderInfo: RenderInfo): AsyncIterableIterator<string> {
    let i = 0;
    for (const item of items) {
      yield* renderValue(template!(item, i), childRenderer, renderInfo);
      i++;
    }
  }
  directives.set(doRepeat, true);
  return doRepeat;
}
