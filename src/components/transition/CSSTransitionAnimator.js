// @flow strict

import {parsePropertyObject} from './propertyObject';
import type {ClassNamesRegistryType} from './classNamesRegistry';
import type {ParsedPropertyObjectType} from './propertyObject';
import type {PropertyObjectAnimatorType} from './propertyObjectAnimator';
import type {PropertyObjectType} from './Transition';

type WillChangePropsType = $ReadOnly<{
  transform: boolean,
  width: boolean,
  height: boolean,
  opacity: boolean,
}>;

export function createCSSTransitionAnimator(
  classNamesRegistry: ClassNamesRegistryType
): PropertyObjectAnimatorType {
  const DEFAULT_PARSED_PROPS = parsePropertyObject({});

  /**
   * The amount of actual CSS `transition-properties` that
   * will change during a single transition motion.
   *
   * @example
   * ```css
   * transition-property: transform, opacity;
   * ```
   */
  let remainingPropsToChange = 0;

  function animate(
    element: HTMLElement,
    from?: PropertyObjectType,
    to?: PropertyObjectType
  ) {
    const fromParsedProps =
      from !== undefined ? parsePropertyObject(from) : DEFAULT_PARSED_PROPS;

    const toParsedProps =
      to !== undefined ? parsePropertyObject(to) : DEFAULT_PARSED_PROPS;

    const willChangeValue = (prop: string) =>
      fromParsedProps[prop].value !== toParsedProps[prop].value;

    const willChangeProps = {
      transform: willChangeValue('transform'),
      width: willChangeValue('width'),
      height: willChangeValue('height'),
      opacity: willChangeValue('opacity'),
    };

    remainingPropsToChange = Object.keys(willChangeProps).reduce(
      (sum, prop) => sum + Number(willChangeProps[prop]),
      0
    );

    if (remainingPropsToChange > 0) {
      if (from !== undefined) {
        addElementStyles(element, fromParsedProps, willChangeProps);

        // between phases to trigger the transition
        forceRepaint(element);
      }

      if (to !== undefined) {
        addElementStyles(element, toParsedProps, willChangeProps);
      }
    }
  }

  function addElementStyles(
    element: HTMLElement,
    parsedProps: ParsedPropertyObjectType,
    willChangeProps: WillChangePropsType
  ) {
    const {className, transform, width, height, opacity} = parsedProps;
    const transitionProperty = [];
    const transitionDuration = [];
    const transitionTimingFunction = [];

    /**
     * The transition values should follow the order
     * of properties in each CSS Transition array, which
     * is ensured by arrays in a loop.
     */
    Object.keys(willChangeProps).forEach(prop => {
      if (willChangeProps[prop]) {
        transitionProperty.push(prop);
        transitionDuration.push(parsedProps[prop].duration);
        transitionTimingFunction.push(parsedProps[prop].easing);
      }
    });

    const combine = (a: Array<string>) => a.join(', ');

    classNamesRegistry.register('transition', className);
    element.className = classNamesRegistry.toString();
    element.style.willChange = combine(transitionProperty);
    element.style.transitionProperty = combine(transitionProperty);
    element.style.transitionDuration = combine(oneOrAll(transitionDuration));
    element.style.transitionTimingFunction = combine(
      oneOrAll(transitionTimingFunction)
    );

    if (willChangeProps.transform) {
      element.style.transform = transform.value;
      element.style.transformOrigin = transform.origin;
    }

    if (willChangeProps.width) {
      element.style.width = width.value === 'auto' ? '' : width.value;
    }

    if (willChangeProps.height) {
      element.style.height = height.value === 'auto' ? '' : height.value;
    }

    if (willChangeProps.opacity) {
      element.style.opacity = opacity.value;
    }
  }

  function removeElementStyles(element: HTMLElement) {
    classNamesRegistry.register('transition', '');
    element.className = classNamesRegistry.toString();
    element.style.willChange = '';
    element.style.transitionProperty = '';
    element.style.transitionDuration = '';
    element.style.transitionTimingFunction = '';
    element.style.transform = '';
    element.style.transformOrigin = '';
    element.style.width = '';
    element.style.height = '';
    element.style.opacity = '';
  }

  function forceRepaint(element: HTMLElement) {
    element.offsetHeight;
  }

  /**
   * We can reduce multiple transition values,
   * but only if they are all the same.
   */
  function oneOrAll(values: Array<string>): Array<string> {
    const unique = [...new Set(values)];

    return unique.length === 1 ? unique : values;
  }

  return {
    animate,
    cleanup: (element: HTMLElement) => removeElementStyles(element),
    finished: () => --remainingPropsToChange <= 0,
  };
}
