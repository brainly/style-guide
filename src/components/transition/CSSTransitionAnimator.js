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
   * A tuple of parsed PropertyObjects in an applying
   * order that is required to track possible changes.
   *
   * @example
   * [prevState, currentState]
   */
  const parsedPropsHistory: [
    ParsedPropertyObjectType,
    ParsedPropertyObjectType
  ] = [DEFAULT_PARSED_PROPS, DEFAULT_PARSED_PROPS];

  const pushState = (currentParsedProps: ParsedPropertyObjectType) => {
    parsedPropsHistory[0] = parsedPropsHistory[1];
    parsedPropsHistory[1] = currentParsedProps;
  };

  const hasLastChangedValue = (prop: string) =>
    parsedPropsHistory[0][prop].value !== parsedPropsHistory[1][prop].value;

  const getLastChangedProps = () => ({
    transform: hasLastChangedValue('transform'),
    width: hasLastChangedValue('width'),
    height: hasLastChangedValue('height'),
    opacity: hasLastChangedValue('opacity'),
  });

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

      pushState(parsedProps);
      addElementStyles({
        element,
        transitioned: false,
        parsedProps,
        willChangeProps: getLastChangedProps(),
      });
    }
  }

  function animate(
    element: HTMLElement,
    from?: PropertyObjectType,
    to?: PropertyObjectType,
    speed?: number
  ) {
    if (from !== undefined) {
      pushState(parsePropertyObject(from));
    }
    if (to !== undefined) {
      pushState(parsePropertyObject(to));
    }

    /**
     * We can establish which props actual will
     * change after pushing them into the history.
     */
    const willChangeProps = getLastChangedProps();

    remainingPropsToChange = Object.keys(willChangeProps).reduce(
      (sum, prop) => sum + Number(willChangeProps[prop]),
      0
    );

    if (from !== undefined) {
      addElementStyles({
        element,
        transitioned: false,
        parsedProps: parsedPropsHistory[0],
        willChangeProps,
      });

      // repaint between synchronized styles change
      forceRepaint(element);
    }

    if (to !== undefined) {
      addElementStyles({
        element,
        transitioned: true,
        parsedProps: parsedPropsHistory[1],
        willChangeProps,
        speed,
      });
    }
  }

  function addElementStyles({
    element,
    transitioned,
    parsedProps,
    willChangeProps,
    speed,
  }: {
    element: HTMLElement,
    transitioned: boolean,
    parsedProps: ParsedPropertyObjectType,
    willChangeProps: WillChangePropsType,
    speed?: number,
  }) {
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
        transitionDuration.push(applySpeed(parsedProps[prop].duration, speed));
        transitionTimingFunction.push(parsedProps[prop].easing);
      }
    });

    const combine = (a: Array<string>) => a.join(', ');

    classNamesRegistry.register('transition', className);
    element.className = classNamesRegistry.toString();
    element.style.willChange = combine(transitionProperty);

    if (transitioned) {
      element.style.transitionProperty = combine(transitionProperty);
      element.style.transitionDuration = combine(oneOrAll(transitionDuration));
      element.style.transitionTimingFunction = combine(
        oneOrAll(transitionTimingFunction)
      );
    }

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

  /**
   * https://www.phpied.com/rendering-repaint-reflowrelayout-restyle/
   */
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

  function applySpeed(duration: string, speed?: number) {
    if (!speed || speed === 1) {
      return duration;
    }
    const value = parseInt(duration, 10);
    const units = duration.slice(-2) === 'ms' ? 'ms' : 's';

    return value / speed + units;
  }

  return {
    apply,
    animate,
    cleanup: (element: HTMLElement) => {
      pushState(DEFAULT_PARSED_PROPS);
      removeElementStyles(element);
    },
    finished: () => --remainingPropsToChange <= 0,
  };
}
