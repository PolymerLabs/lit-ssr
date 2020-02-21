import {directive, NodePart} from 'lit-html';

export const renderLightImpl = (part: NodePart) => {
  const instance = part.startNode.parentNode as any;
  if (typeof instance.renderLight === 'function') {
    return instance.renderLight();
  }
};

export const renderLight = directive(() => renderLightImpl);

export const isRenderLightDirective = (value: unknown): boolean => value === renderLightImpl;
