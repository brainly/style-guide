// @flow strict

import type {TransitionEffectStateType} from './Transition';

export interface TransitionEffectAnimatorType {
  animate(
    element: HTMLElement,
    from?: TransitionEffectStateType,
    to?: TransitionEffectStateType
  ): void;
  cleanup(element: HTMLElement): void;
  finished(element: HTMLElement): boolean;
}
