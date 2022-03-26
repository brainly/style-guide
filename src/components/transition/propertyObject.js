// @flow strict

import type {
  PropertyObjectType,
  PredefinedEasingType,
  PredefinedDurationType,
  PredefinedTranslateType,
} from './Transition';

const EASING_VALUES: {[key: PredefinedEasingType]: string, ...} = {
  regular: 'cubic-bezier(0.35, 0, 0.1, 1)',
  entry: 'cubic-bezier(0.1, 0, 0, 1)',
  exit: 'cubic-bezier(0.3, 0, 1, 0.8)',
  linear: 'linear',
};

const DURATION_VALUES: {[key: PredefinedDurationType]: string, ...} = {
  instant: '0ms',
  quick1: '80ms',
  quick2: '120ms',
  moderate1: '180ms',
  moderate2: '260ms',
  gentle1: '320ms',
  gentle2: '400ms',
};

const TRANSLATE_VALUES: {[key: PredefinedTranslateType]: string, ...} = {
  xxs: '4px',
  xs: '8px',
  s: '16px',
  m: '24px',
  l: '40px',
  xl: '64px',
};

const DEFAULT_EASING_VALUE = EASING_VALUES['regular'];
const DEFAULT_DURATION_VALUE = DURATION_VALUES['instant'];
const DEFAULT_OPACITY_VALUE = '1';
const DEFAULT_TRANSLATE_VALUE = '0px';
const DEFAULT_SCALE_VALUE = '1';

export type ParsedPropertyObjectType = $ReadOnly<{
  className: string,
  transform: {
    easing: string,
    duration: string,
    translateX: string,
    translateY: string,
    scale: string,
    value: string,
  },
  opacity: {
    easing: string,
    duration: string,
    value: string,
  },
}>;

export function parsePropertyObject(
  props: PropertyObjectType
): ParsedPropertyObjectType {
  const {easing, duration, className, transform, opacity} = props;
  const translateX = getTranslateValue(transform && transform.translateX);
  const translateY = getTranslateValue(transform && transform.translateY);
  const scale = getScaleValue(transform && transform.scale);

  return {
    className: className || '',
    transform: {
      value: getTransformValue({translateX, translateY, scale}),
      easing: getEasingValue((transform && transform.easing) || easing),
      duration: getDurationValue((transform && transform.duration) || duration),
      translateX,
      translateY,
      scale,
    },
    opacity: {
      value: getOpacityValue(
        typeof opacity === 'object' ? opacity.value : opacity
      ),
      easing: getEasingValue(
        (typeof opacity === 'object' && opacity.easing) || easing
      ),
      duration: getDurationValue(
        (typeof opacity === 'object' && opacity.duration) || duration
      ),
    },
  };
}

function getDurationValue(duration) {
  if (duration === undefined) {
    return DEFAULT_DURATION_VALUE;
  }

  if (typeof duration === 'number') {
    return `${duration}ms`;
  }

  if (DURATION_VALUES[duration] !== undefined) {
    return DURATION_VALUES[duration];
  }

  return DEFAULT_DURATION_VALUE;
}

function getEasingValue(easing) {
  if (easing === undefined) {
    return DEFAULT_EASING_VALUE;
  }

  return EASING_VALUES[easing];
}

function getTranslateValue(translate) {
  if (translate === undefined) {
    return DEFAULT_TRANSLATE_VALUE;
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

function getScaleValue(scale) {
  return scale === undefined ? DEFAULT_SCALE_VALUE : String(scale);
}

function getTransformValue({translateX, translateY, scale}) {
  return `translate3d(${translateX}, ${translateY}, 0px) scale3d(${scale}, ${scale}, 1)`;
}

function getOpacityValue(opacity) {
  return opacity === undefined ? DEFAULT_OPACITY_VALUE : String(opacity);
}
