// @flow strict

import type {PropertyObjectType} from './Transition';

export interface EffectAnimatorType {
  animate(
    element: HTMLElement,
    from?: PropertyObjectType,
    to?: PropertyObjectType
  ): void;
  cleanup(element: HTMLElement): void;
  finished(): boolean;
}
