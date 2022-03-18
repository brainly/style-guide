// @flow strict

import {parsePropertyObject} from './propertyObject';
import type {ParsedPropertyObjectType} from './propertyObject';
import type {EffectAnimatorType} from './effectAnimator';
import type {PropertyObjectType} from './Transition';

export function createCSSTransitionAnimator(): EffectAnimatorType {
  const PROPERTIES = ['transform', 'opacity'];
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
    from?: PropertyObjectType,
    to?: PropertyObjectType
  ) {
    let fromProps = parsePropertyObject({});
    let toProps = parsePropertyObject({});

    if (from !== undefined) {
      fromProps = parsePropertyObject(from);
      addElementStyles(element, fromProps);
      forceRepaint(element);
    }

    if (to !== undefined) {
      toProps = parsePropertyObject(to);
      addElementStyles(element, toProps);
    }

    remainingPropertiesToChange = PROPERTIES.reduce((sum, prop) => {
      const willPropertyChange = fromProps[prop].value !== toProps[prop].value;

      return sum + Number(willPropertyChange);
    }, NO_REMAINING_PROPERTIES);
  }

  function addElementStyles(
    element: HTMLElement,
    props: ParsedPropertyObjectType
  ) {
    const {className, transform, opacity} = props;

    // by using arrays, we keep the same property
    // order in each transition-* related style
    const transitionProperty = [];
    const transitionDuration = [];
    const transitionTimingFunction = [];

    PROPERTIES.forEach(prop => {
      transitionProperty.push(prop);
      transitionDuration.push(props[prop].duration);
      transitionTimingFunction.push(props[prop].easing);
    });

    element.className = className;
    element.style.transform = transform.value;
    element.style.opacity = opacity.value;
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
