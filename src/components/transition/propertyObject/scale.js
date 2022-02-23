// @flow strict

import type {TransitionPropertyObjectType} from '../Transition';
import type {ParsedPropertyType} from './parser';

const DEFAULT_VALUE = '1';

function getScaleValue(scale?: number) {
  return scale === undefined ? DEFAULT_VALUE : String(scale);
}

export function getScale(
  props: TransitionPropertyObjectType
): ParsedPropertyType<number> {
  const value = getScaleValue(props.scale);

  return {
    initial: props.scale,
    default: DEFAULT_VALUE,
    computed: parseFloat(value),
    value,
  };
}
