type ItemTemplate<T> = (item: T, index: number) => unknown;

type DirectiveInfo = {
  type: 'directive';
  directive: Directive;
  data: any;
}

export enum Directive {
  repeat,
}

export const repeat = <T>(items: Iterable<T>, template: ItemTemplate<T>): DirectiveInfo => {
  return {
    type: 'directive',
    directive: Directive.repeat,
    data: {
      items,
      template,
    }
  };
};

import { render } from '../render.js';
import { ChildRenderer } from '../element-renderer.js';

export async function* doRepeat<T>(items: Iterable<T>, template: ItemTemplate<T>, childRenderer: ChildRenderer|undefined): AsyncIterableIterator<string> {
  let i = 0;
  for (const item of items) {
    yield* render(template(item, i), childRenderer);
    i++;
  }
}
