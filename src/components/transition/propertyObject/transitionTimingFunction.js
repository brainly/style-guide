// @flow strict

import type {
  TransitionEasingType,
  TransitionPropertyObjectType,
} from '../Transition';
import type {ParsedPropertyType} from './parser';

const EASING_VALUES: {[key: TransitionEasingType]: string, ...} = {
  regular: 'cubic-bezier(0.35, 0, 0.1, 1)',
  entry: 'cubic-bezier(0.1, 0, 0, 1)',
  exit: 'cubic-bezier(0.3, 0, 1, 0.8)',
  linear: 'linear',
};

const DEFAULT_VALUE = EASING_VALUES['regular'];

function getTransitionTimingFunctionValue(easing?: TransitionEasingType) {
  if (easing === undefined) {
    return DEFAULT_VALUE;
  }

  return EASING_VALUES[easing];
}

export function getTransitionTimingFunction(
  props: TransitionPropertyObjectType
): ParsedPropertyType<TransitionEasingType> {
  const value = getTransitionTimingFunctionValue(props.easing);

  return {
    initial: props.easing,
    default: DEFAULT_VALUE,
    computed: parseInt(value, 10),
    value,
  };
}
