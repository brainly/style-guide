// @flow strict

import type {PropertyObjectType} from './Transition';

export interface PropertyObjectAnimatorType {
  animate(
    element: HTMLElement,
    from?: PropertyObjectType,
    to?: PropertyObjectType
  ): void;
  cleanup(element: HTMLElement): void;
  finished(): boolean;
}
