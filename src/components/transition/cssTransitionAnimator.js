// @flow strict

import {parsePropertyObject} from './propertyObject';
import type {ParsedPropertyObjectType} from './propertyObject';
import type {EffectAnimatorType} from './effectAnimator';
import type {PropertyObjectType} from './Transition';
import type {ClassNamesRegistry} from './classNamesRegistry';

export function createCSSTransitionAnimator(
  classNamesRegistry: ClassNamesRegistry
): EffectAnimatorType {
  const PROPERTIES = ['transform', 'opacity'];
  const DEFAULT_PARSED_PROPS = parsePropertyObject({});
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
    let fromParsedProps = DEFAULT_PARSED_PROPS;
    let toParsedProps = DEFAULT_PARSED_PROPS;

    if (from !== undefined) {
      fromParsedProps = parsePropertyObject(from);
      addElementStyles(element, fromParsedProps);

      // required to paint added "from" styles
      // before synchronously adding "to" styles
      forceRepaint(element);
    }

    if (to !== undefined) {
      toParsedProps = parsePropertyObject(to);
      addElementStyles(element, toParsedProps);
    }

    remainingPropertiesToChange = PROPERTIES.reduce((sum, prop) => {
      const willPropertyChange =
        fromParsedProps[prop].value !== toParsedProps[prop].value;

      return sum + Number(willPropertyChange);
    }, NO_REMAINING_PROPERTIES);
  }

  function addElementStyles(
    element: HTMLElement,
    parsedProps: ParsedPropertyObjectType
  ) {
    const {className, transform, opacity} = parsedProps;

    // by using arrays, we keep the same property
    // order in each transition-* related style
    const transitionProperty = [];
    const transitionDuration = [];
    const transitionTimingFunction = [];

    PROPERTIES.forEach(prop => {
      transitionProperty.push(prop);
      transitionDuration.push(parsedProps[prop].duration);
      transitionTimingFunction.push(parsedProps[prop].easing);
    });

    classNamesRegistry.register('transition', className);
    element.className = classNamesRegistry.toString();
    element.style.transform = transform.value;
    element.style.opacity = opacity.value;
    element.style.transitionProperty = buildTransitionValue(transitionProperty);
    element.style.transitionDuration = buildTransitionValue(transitionDuration);
    element.style.transitionTimingFunction = buildTransitionValue(
      transitionTimingFunction
    );
  }

  function removeElementStyles(element: HTMLElement) {
    classNamesRegistry.register('transition', '');
    element.className = classNamesRegistry.toString();
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
    cleanup: (element: HTMLElement) => removeElementStyles(element),
    finished: () => --remainingPropertiesToChange <= NO_REMAINING_PROPERTIES,
  };
}
