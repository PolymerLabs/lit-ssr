const reflectedAttributes: Map<string, Map<string, string>> = new Map([
  ['input', new Map([
    ['value', 'value']
  ])]
]);

const reflectedGlobalAttributes: Map<string, string> = new Map([
  ['classname', 'class'],
  ['id', 'id'],
]);

export const reflectedAttributeName = (tag: string, property: string): string|undefined => {
  const attributes = reflectedAttributes.get(tag);
  if (attributes !== undefined && attributes.has(property)) {
    return attributes.get(property);
  } else {
    return reflectedGlobalAttributes.get(property);
  }
}