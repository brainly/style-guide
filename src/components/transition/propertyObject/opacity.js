// @flow strict

import type {TransitionPropertyObjectType} from '../Transition';
import type {ParsedPropertyType} from './parser';

const DEFAULT_VALUE = '1';

function getOpacityValue(opacity?: number) {
  return opacity === undefined ? DEFAULT_VALUE : String(opacity);
}

export function getOpacity(
  props: TransitionPropertyObjectType
): ParsedPropertyType<number> {
  const value = getOpacityValue(props.opacity);

  return {
    initial: props.opacity,
    default: DEFAULT_VALUE,
    computed: parseFloat(value),
    value,
  };
}
