// @flow strict

import type {PropertyObjectType} from './Transition';

export interface PropertyObjectAnimatorType {
  apply(element: HTMLElement, props?: PropertyObjectType): void;
  animate(
    element: HTMLElement,
    from?: PropertyObjectType,
    to?: PropertyObjectType,
    speed?: number
  ): void;
  cleanup(element: HTMLElement): void;
  finished(): boolean;
}
