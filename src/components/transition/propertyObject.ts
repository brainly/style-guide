import type {
  PropertyObjectType,
  PredefinedEasingType,
  PredefinedDurationType,
  PredefinedTranslateType,
} from './Transition';

const EASING_VALUES: Record<PredefinedEasingType, string> = {
  regular: 'cubic-bezier(0.35, 0, 0.1, 1)',
  entry: 'cubic-bezier(0.1, 0, 0, 1)',
  exit: 'cubic-bezier(0.3, 0, 1, 0.8)',
  linear: 'linear',
};
const DURATION_VALUES: Record<PredefinedDurationType, string> = {
  instant: '0ms',
  quick1: '80ms',
  quick2: '120ms',
  moderate1: '180ms',
  moderate2: '260ms',
  gentle1: '320ms',
  gentle2: '400ms',
};
const TRANSLATE_VALUES: Record<PredefinedTranslateType, string> = {
  xxs: '4px',
  xs: '8px',
  s: '16px',
  m: '24px',
  l: '40px',
  xl: '64px',
  '-xxs': '-4px',
  '-xs': '-8px',
  '-s': '-16px',
  '-m': '-24px',
  '-l': '-40px',
  '-xl': '-64px',
};
const DEFAULT_EASING_VALUE = EASING_VALUES['regular'];
const DEFAULT_DURATION_VALUE = DURATION_VALUES['instant'];
const DEFAULT_OPACITY_VALUE = '1';
const DEFAULT_TRANSLATE_VALUE = '0px';
const DEFAULT_SCALE_VALUE = '1';
const DEFAULT_TRANSFORM_ORIGIN_VALUE = 'center';
const DEFAULT_WIDTH_HEIGHT_VALUE = 'auto';

type CommonFieldsType = Readonly<{
  value: string;
  duration: string;
  easing: string;
}>;
export type ParsedPropertyObjectType = Readonly<{
  className: string;
  transform: CommonFieldsType & {
    origin: string;
    translateX: string;
    translateY: string;
    scaleX: string;
    scaleY: string;
  };
  width: CommonFieldsType;
  height: CommonFieldsType;
  opacity: CommonFieldsType;
}>;
export function parsePropertyObject({
  className,
  duration,
  easing,
  transform,
  width,
  height,
  opacity,
}: PropertyObjectType): ParsedPropertyObjectType {
  const translateX = getTranslateValue(transform?.translateX);
  const translateY = getTranslateValue(transform?.translateY);
  const scaleX = getScaleValue(transform?.scaleX ?? transform?.scale);
  const scaleY = getScaleValue(transform?.scaleY ?? transform?.scale);

  return {
    className: className || '',
    transform: {
      value: getTransformValue({
        translateX,
        translateY,
        scaleX,
        scaleY,
      }),
      duration: getDurationValue(transform?.duration || duration),
      easing: getEasingValue(transform?.easing || easing),
      origin: getTransformOriginValue(transform),
      translateX,
      translateY,
      scaleX,
      scaleY,
    },
    width: {
      value: getWidthHeightValue(
        typeof width === 'object' ? width.value : width
      ),
      duration: getDurationValue(
        (typeof width === 'object' && width.duration) || duration
      ),
      easing: getEasingValue(
        (typeof width === 'object' && width.easing) || easing
      ),
    },
    height: {
      value: getWidthHeightValue(
        typeof height === 'object' ? height.value : height
      ),
      duration: getDurationValue(
        (typeof height === 'object' && height.duration) || duration
      ),
      easing: getEasingValue(
        (typeof height === 'object' && height.easing) || easing
      ),
    },
    opacity: {
      value: getOpacityValue(
        typeof opacity === 'object' ? opacity.value : opacity
      ),
      duration: getDurationValue(
        (typeof opacity === 'object' && opacity.duration) || duration
      ),
      easing: getEasingValue(
        (typeof opacity === 'object' && opacity.easing) || easing
      ),
    },
  };
}

// @ts-ignore TS7006
function getDurationValue(duration) {
  if (duration === undefined) {
    return DEFAULT_DURATION_VALUE;
  }

  if (typeof duration === 'number') {
    return `${duration}ms`;
  }

  // @ts-ignore TS7053
  if (DURATION_VALUES[duration] !== undefined) {
    // @ts-ignore TS7053
    return DURATION_VALUES[duration];
  }

  return DEFAULT_DURATION_VALUE;
}

// @ts-ignore TS7006
function getEasingValue(easing) {
  if (easing === undefined) {
    return DEFAULT_EASING_VALUE;
  }

  // @ts-ignore TS7053
  return EASING_VALUES[easing];
}

// @ts-ignore TS7006
function getTranslateValue(translate) {
  if (translate === undefined) {
    return DEFAULT_TRANSLATE_VALUE;
  }

  if (typeof translate === 'number') {
    return `${translate}px`;
  }

  // $FlowFixMe: could be TransitionTranslateType or a string
  // @ts-ignore TS7053
  if (TRANSLATE_VALUES[translate] !== undefined) {
    // @ts-ignore TS7053
    return TRANSLATE_VALUES[translate];
  }

  return translate;
}

// @ts-ignore TS7006
function getScaleValue(scale) {
  return scale === undefined ? DEFAULT_SCALE_VALUE : String(scale);
}

// @ts-ignore TS7031
function getTransformValue({translateX, translateY, scaleX, scaleY}) {
  return `translate3d(${translateX}, ${translateY}, 0px) scale3d(${scaleX}, ${scaleY}, 1)`;
}

// @ts-ignore TS7006
function getTransformOriginValue(transform) {
  return (transform && transform.origin) || DEFAULT_TRANSFORM_ORIGIN_VALUE;
}

// @ts-ignore TS7006
function getOpacityValue(opacity) {
  return opacity === undefined ? DEFAULT_OPACITY_VALUE : String(opacity);
}

// @ts-ignore TS7006
function getWidthHeightValue(widthHeight) {
  if (widthHeight === undefined) {
    return DEFAULT_WIDTH_HEIGHT_VALUE;
  }

  if (typeof widthHeight === 'number') {
    return `${widthHeight}px`;
  }

  return widthHeight;
}
