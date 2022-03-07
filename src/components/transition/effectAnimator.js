// @flow strict

import type {TransitionEffectPhaseType} from './Transition';

export interface TransitionEffectAnimatorType {
  animate(
    element: HTMLElement,
    from?: TransitionEffectPhaseType,
    to?: TransitionEffectPhaseType
  ): void;
  cleanup(element: HTMLElement): void;
  finished(): boolean;
}
