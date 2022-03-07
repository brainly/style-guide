// @flow strict

import {parseTransitionEffectPhase} from './propertyObject';
import type {ParsedPropertyObjectType} from './propertyObject';
import type {TransitionEffectAnimatorType} from './effectAnimator';
import type {TransitionEffectPhaseType} from './Transition';

type CSSTransitionStylesType = {
  classNames: Array<string>,
  properties: {
    transform: {
      value: string,
      duration: string,
      timingFunction: string,
      translateX: string,
      translateY: string,
      scale: string,
    },
    opacity: {
      value: string,
      duration: string,
      timingFunction: string,
    },
  },
};

export function createCSSTransitionAnimator(): TransitionEffectAnimatorType {
  const IDLE_STYLES = buildTransitionStyles(parseTransitionEffectPhase({}));
  const NO_REMAINING_PROPERTIES = 0;

  /**
   * The amount of actual CSS `transition-properties` that
   * will change during a single transition motion.
   *
   * @example
   * ```css
   * transition-property: transform, opacity;
   * ```
   */
  let remainingPropertiesToChange = NO_REMAINING_PROPERTIES;

  function animate(
    element: HTMLElement,
    from?: TransitionEffectPhaseType,
    to?: TransitionEffectPhaseType
  ) {
    let fromStyles = IDLE_STYLES;
    let toStyles = IDLE_STYLES;

    if (from !== undefined) {
      fromStyles = buildTransitionStyles(parseTransitionEffectPhase(from));
      addElementStyles(element, fromStyles);
      forceRepaint(element);
    }

    if (to !== undefined) {
      toStyles = buildTransitionStyles(parseTransitionEffectPhase(to));
      addElementStyles(element, toStyles);
    }

    remainingPropertiesToChange = Object.keys(IDLE_STYLES.properties).reduce(
      (sum, prop) => {
        const fromProperty = fromStyles.properties[prop];
        const toProperty = toStyles.properties[prop];
        const willPropertyChange = fromProperty.value !== toProperty.value;

        return sum + Number(willPropertyChange);
      },
      NO_REMAINING_PROPERTIES
    );
  }

  function addElementStyles(
    element: HTMLElement,
    styles: CSSTransitionStylesType
  ) {
    const {classNames, properties} = styles;

    // by using arrays, we keep the same property
    // order in each transition-* related style
    const transitionProperty = [];
    const transitionDuration = [];
    const transitionTimingFunction = [];

    Object.keys(properties).forEach(prop => {
      transitionProperty.push(prop);
      transitionDuration.push(properties[prop].duration);
      transitionTimingFunction.push(properties[prop].timingFunction);
    });

    element.className = classNames.join(' ');
    element.style.transform = properties.transform.value;
    element.style.opacity = properties.opacity.value;
    element.style.transitionProperty = buildTransitionValue(transitionProperty);
    element.style.transitionDuration = buildTransitionValue(transitionDuration);
    element.style.transitionTimingFunction = buildTransitionValue(
      transitionTimingFunction
    );
  }

  function removeElementStyles(element: HTMLElement) {
    element.className = '';
    element.style.transform = '';
    element.style.opacity = '';
    element.style.transitionProperty = '';
    element.style.transitionDuration = '';
    element.style.transitionTimingFunction = '';
  }

  function forceRepaint(element: HTMLElement) {
    element.offsetHeight;
  }

  function buildTransitionStyles(
    propertyObjects: Array<ParsedPropertyObjectType>
  ) {
    const [first] = propertyObjects;

    // initialize all fields as default
    const result: CSSTransitionStylesType = {
      classNames: [],
      properties: {
        transform: {
          value: '',
          duration: first.duration.default,
          timingFunction: first.easing.default,
          translateX: first.translateX.default,
          translateY: first.translateY.default,
          scale: first.scale.default,
        },
        opacity: {
          value: first.opacity.default,
          duration: first.duration.default,
          timingFunction: first.easing.default,
        },
      },
    };

    /**
     * CSS Transition does not support composite (additive) mode
     * and all components (e.g. x, y, or scale) should be merged
     * on a single timeline (duration and timing-function).
     *
     * This can be achieved by "moving" all components to the last
     * timeline where the last component occurred.
     *
     * @example
     * const before = [
     *   {translateX: '10px', duration: '10ms'},
     *   {translateY: '20px', duration: '20ms'},
     * ];
     *
     * const after = [
     *   {translateX: '10px', translateY: '20px', duration: '20ms'},
     * ];
     */
    for (let i = 0; i < propertyObjects.length; i++) {
      let shouldUpdateTransformTimeline = false;

      const {
        className,
        easing,
        duration,
        translateX,
        translateY,
        opacity,
        scale,
      } = propertyObjects[i];

      if (className !== '') {
        result.classNames.push(className);
      }

      if (translateX.initial !== undefined) {
        result.properties.transform.translateX = translateX.value;
        shouldUpdateTransformTimeline = true;
      }

      if (translateY.initial !== undefined) {
        result.properties.transform.translateY = translateY.value;
        shouldUpdateTransformTimeline = true;
      }

      if (scale.initial !== undefined) {
        result.properties.transform.scale = scale.value;
        shouldUpdateTransformTimeline = true;
      }

      if (shouldUpdateTransformTimeline) {
        result.properties.transform.duration = duration.value;
        result.properties.transform.timingFunction = easing.value;
      }

      if (opacity.initial !== undefined) {
        result.properties.opacity = {
          value: opacity.value,
          duration: duration.value,
          timingFunction: easing.value,
        };
      }
    }

    result.properties.transform.value = buildTransformValue(
      result.properties.transform
    );

    return result;
  }

  function buildTransformValue({translateX, translateY, scale}) {
    return `translate3d(${translateX}, ${translateY}, 0px) scale3d(${scale}, ${scale}, 1)`;
  }

  function buildTransitionValue(values: Array<string>): string {
    const unique = [...new Set(values)];

    // there can be only one unique value,
    // otherwise the order should be preserved
    return unique.length === 1 ? unique[0] : values.join(', ');
  }

  return {
    animate,
    finished: () => --remainingPropertiesToChange <= NO_REMAINING_PROPERTIES,
    cleanup: (element: HTMLElement) => removeElementStyles(element),
  };
}
