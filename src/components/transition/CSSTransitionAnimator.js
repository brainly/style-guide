// @flow strict

import {parsePropertyObject} from './propertyObject';
import type {ClassNamesRegistryType} from './classNamesRegistry';
import type {ParsedPropertyObjectType} from './propertyObject';
import type {PropertyObjectAnimatorType} from './propertyObjectAnimator';
import type {PropertyObjectType} from './Transition';

export const REPAINT_PROPERTY: $Keys<HTMLElement> = 'offsetHeight';

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
   * A tuple of parsed Property Objects in an applying
   * order that is required to track possible changes.
   *
   * @example
   * [prevState, nextState]
   */
  const parsedPropsHistory: [
    ParsedPropertyObjectType,
    ParsedPropertyObjectType
  ] = [DEFAULT_PARSED_PROPS, DEFAULT_PARSED_PROPS];

  const pushHistoryState = (nextParsedProps: ParsedPropertyObjectType) => {
    parsedPropsHistory[0] = parsedPropsHistory[1];
    parsedPropsHistory[1] = nextParsedProps;
  };

  const hasChangedValue = (prop: string) =>
    parsedPropsHistory[0][prop].value !== parsedPropsHistory[1][prop].value;

  /**
   * The amount of actual CSS `transition-properties` that
   * will change during a single transition motion.
   *
   * @example
   * ```css
   * transition-property: transform, opacity;
   * ```
   */
  let remainingPropsToChange: number = 0;

  function apply(element: HTMLElement, props?: PropertyObjectType) {
    if (props !== undefined) {
      const parsedProps = parsePropertyObject(props);

      pushHistoryState(parsedProps);
      addElementStyles(element, parsedProps, {
        transform: hasChangedValue('transform'),
        width: hasChangedValue('width'),
        height: hasChangedValue('height'),
        opacity: hasChangedValue('opacity'),
      });
    }
  }

  function animate(
    element: HTMLElement,
    from?: PropertyObjectType,
    to?: PropertyObjectType
  ) {
    if (from !== undefined) {
      pushHistoryState(parsePropertyObject(from));
    }
    if (to !== undefined) {
      pushHistoryState(parsePropertyObject(to));
    }

    const willChangeProps = {
      transform: hasChangedValue('transform'),
      width: hasChangedValue('width'),
      height: hasChangedValue('height'),
      opacity: hasChangedValue('opacity'),
    };

    remainingPropsToChange = Object.keys(willChangeProps).reduce(
      (sum, prop) => sum + Number(willChangeProps[prop]),
      0
    );

    if (from !== undefined) {
      addElementStyles(element, parsedPropsHistory[0], willChangeProps);
    }
    if (to !== undefined) {
      addElementStyles(element, parsedPropsHistory[1], willChangeProps);
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

    // repaint in case of further changes
    forceRepaint(element);
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

  /**
   * https://www.phpied.com/rendering-repaint-reflowrelayout-restyle/
   */
  function forceRepaint(element: HTMLElement) {
    // $FlowFixMe
    element[REPAINT_PROPERTY];
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
    apply,
    animate,
    cleanup: (element: HTMLElement) => removeElementStyles(element),
    finished: () => --remainingPropsToChange <= 0,
  };
}
