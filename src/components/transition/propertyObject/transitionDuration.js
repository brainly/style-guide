// @flow strict

import type {
  TransitionDurationDefinedType,
  TransitionDurationType,
  TransitionPropertyObjectType,
} from '../Transition';
import type {ParsedPropertyType} from './parser';

const DURATION_VALUES: {[key: TransitionDurationDefinedType]: string, ...} = {
  instant: '0ms',
  quick1: '80ms',
  quick2: '120ms',
  moderate1: '180ms',
  moderate2: '260ms',
  gentle1: '320ms',
  gentle2: '400ms',
};

const DEFAULT_VALUE = DURATION_VALUES['instant'];

function getTransitionDurationValue(duration?: TransitionDurationType) {
  if (duration === undefined) {
    return DEFAULT_VALUE;
  }

  if (typeof duration === 'number') {
    return `${duration}ms`;
  }

  if (DURATION_VALUES[duration] !== undefined) {
    return DURATION_VALUES[duration];
  }

  return DEFAULT_VALUE;
}

export function getTransitionDuration(
  props: TransitionPropertyObjectType
): ParsedPropertyType<TransitionDurationType> {
  const value = getTransitionDurationValue(props.duration);

  return {
    initial: props.duration,
    default: DEFAULT_VALUE,
    computed: parseInt(value, 10),
    value,
  };
}
