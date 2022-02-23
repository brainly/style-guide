// @flow strict

import type {
  TransitionEasingType,
  TransitionDurationType,
  TransitionTranslateType,
  TransitionPropertyObjectType,
} from '../Transition';
import {getOpacity} from './opacity';
import {getScale} from './scale';
import {getTransitionDuration} from './transitionDuration';
import {getTransitionTimingFunction} from './transitionTimingFunction';
import {getTranslateX, getTranslateY} from './translate';

export type ParsedPropertyType<T> = $ReadOnly<{
  initial: T | void,
  default: string,
  computed: number,
  value: string,
}>;

export type ParsedPropertyObjectType = $ReadOnly<{
  className: string,
  easing: ParsedPropertyType<TransitionEasingType>,
  duration: ParsedPropertyType<TransitionDurationType>,
  translateX: ParsedPropertyType<TransitionTranslateType>,
  translateY: ParsedPropertyType<TransitionTranslateType>,
  opacity: ParsedPropertyType<number>,
  scale: ParsedPropertyType<number>,
}>;

export const parsePropertyObject = (
  props: TransitionPropertyObjectType
): ParsedPropertyObjectType => ({
  className: props.className || '',
  easing: getTransitionTimingFunction(props),
  duration: getTransitionDuration(props),
  translateX: getTranslateX(props),
  translateY: getTranslateY(props),
  opacity: getOpacity(props),
  scale: getScale(props),
});
