// @flow strict

import type {
  TransitionPropertyObjectType,
  TransitionPredefinedTranslateType,
  TransitionTranslateType,
} from '../Transition';
import type {ParsedPropertyType} from './parser';

const TRANSLATE_VALUES: {
  [key: TransitionPredefinedTranslateType]: string,
  ...
} = {
  xxs: '4px',
  xs: '8px',
  s: '16px',
  m: '24px',
  l: '40px',
  xl: '64px',
};

const DEFAULT_VALUE = '0px';

function getTranslateValue(translate?: TransitionTranslateType) {
  if (translate === undefined) {
    return DEFAULT_VALUE;
  }

  if (typeof translate === 'number') {
    return `${translate}px`;
  }

  // $FlowFixMe: could be TransitionTranslateType or a string
  if (TRANSLATE_VALUES[translate] !== undefined) {
    return TRANSLATE_VALUES[translate];
  }

  return translate;
}

export function getTranslateX(
  props: TransitionPropertyObjectType
): ParsedPropertyType<TransitionTranslateType> {
  const value = getTranslateValue(props.translateX);

  return {
    initial: props.translateX,
    default: DEFAULT_VALUE,
    computed: parseInt(value, 10),
    value,
  };
}

export function getTranslateY(
  props: TransitionPropertyObjectType
): ParsedPropertyType<TransitionTranslateType> {
  const value = getTranslateValue(props.translateY);

  return {
    initial: props.translateY,
    default: DEFAULT_VALUE,
    computed: parseInt(value, 10),
    value,
  };
}
