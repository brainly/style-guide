import {parsePropertyObject} from './propertyObject';
import type {ClassNamesRegistryType} from './classNamesRegistry';
import type {ParsedPropertyObjectType} from './propertyObject';
import type {PropertyObjectAnimatorType} from './propertyObjectAnimator';
import type {PropertyObjectType} from './Transition';

type CSSTransitionedPropsType = Readonly<{
  transform: boolean;
  width: boolean;
  height: boolean;
  opacity: boolean;
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
  const history: [ParsedPropertyObjectType, ParsedPropertyObjectType] = [
    DEFAULT_PARSED_PROPS,
    DEFAULT_PARSED_PROPS,
  ];

  const pushState = (current: ParsedPropertyObjectType) => {
    history[0] = history[1];
    history[1] = current;
  };

  const hasLastChangedValue = (prop: string) =>
    // @ts-ignore TS7053
    history[0][prop].value !== history[1][prop].value;

  const getWillChangeProps = () => ({
    transform: hasLastChangedValue('transform'),
    width: hasLastChangedValue('width'),
    height: hasLastChangedValue('height'),
    opacity: hasLastChangedValue('opacity'),
  });

  /**
   * A single animation may include multiple CSS transitions
   * of different properties and the animator should invoke
   * finish callback only after all of them.
   *
   * @example
   * ```css
   * transition-property: transform, opacity;
   * ```
   */
  let remainingPropsToChange: number = 0;
  let finishCallbackRef: () => void;

  function addElementStyles({
    element,
    transitioned,
    parsedProps,
    willChangeProps,
    speed,
  }: {
    element: HTMLElement;
    transitioned: boolean;
    parsedProps: ParsedPropertyObjectType;
    willChangeProps: CSSTransitionedPropsType;
    speed?: number;
  }) {
    const {className, transform, width, height, opacity} = parsedProps;

    const combine = (a: Array<string>) => a.join(', ');

    const willChangePropsArray = Object.keys(willChangeProps).filter(
      // @ts-ignore TS7053
      prop => willChangeProps[prop]
    );

    classNamesRegistry.register('transition', className);
    element.className = classNamesRegistry.toString();
    element.style.willChange = combine(willChangePropsArray);

    if (transitioned) {
      const transitionProperty: string[] = [];
      const transitionDuration: string[] = [];
      // @ts-ignore TS7034
      const transitionTimingFunction = [];

      /**
       * The order of transitioned values should be the same
       * in each array, which is ensured by a loop.
       */
      willChangePropsArray.forEach(prop => {
        transitionProperty.push(prop);
        // @ts-ignore TS7053
        transitionDuration.push(applySpeed(parsedProps[prop].duration, speed));
        // @ts-ignore TS7053
        transitionTimingFunction.push(parsedProps[prop].easing);
      });
      element.style.transitionProperty = combine(transitionProperty);
      element.style.transitionDuration = combine(oneOrAll(transitionDuration));
      element.style.transitionTimingFunction = combine(
        // @ts-ignore TS7005
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

  /**
   * The instant transition is that defined
   * with a zero duration that won't trigger
   * a native transitionEnd event.
   */
  function isInstantTransition(
    parsedProps: ParsedPropertyObjectType | undefined,
    willChangeProps: CSSTransitionedPropsType
  ) {
    if (parsedProps !== undefined) {
      return !Object.keys(willChangeProps).some(
        // @ts-ignore TS7053
        prop => parsedProps[prop].duration !== '0ms'
      );
    }

    return true;
  }

  return {
    animate(
      element: HTMLElement,
      from?: PropertyObjectType,
      to?: PropertyObjectType,
      speed?: number
    ) {
      let fromParsedProps, toParsedProps;

      if (from !== undefined) {
        fromParsedProps = parsePropertyObject(from);
        pushState(fromParsedProps);
      }

      if (to !== undefined) {
        toParsedProps = parsePropertyObject(to);
        pushState(toParsedProps);
      }

      /**
       * We can determine which properties will actually
       * change after pushing them into the history.
       */
      const willChangeProps = getWillChangeProps();

      remainingPropsToChange = Object.keys(willChangeProps).reduce(
        // @ts-ignore TS7053
        (sum, prop) => sum + Number(willChangeProps[prop]),
        0
      );

      if (fromParsedProps !== undefined) {
        addElementStyles({
          element,
          transitioned: false,
          parsedProps: fromParsedProps,
          willChangeProps,
        });
        // repaint between synchronized styles change
        forceRepaint(element);
      }

      if (toParsedProps !== undefined) {
        addElementStyles({
          element,
          transitioned: true,
          parsedProps: toParsedProps,
          willChangeProps,
          speed,
        });
      }

      /**
       * Only the optional "to" props are "transitioned" and
       * defined can try to execute an animation with a zero
       * duration that won't trigger a transitionEnd event.
       */
      if (isInstantTransition(toParsedProps, willChangeProps)) {
        remainingPropsToChange = 0;

        if (finishCallbackRef) {
          finishCallbackRef();
        }
      }
    },

    apply(element: HTMLElement, props?: PropertyObjectType) {
      if (props !== undefined) {
        const parsedProps = parsePropertyObject(props);

        pushState(parsedProps);
        addElementStyles({
          element,
          transitioned: false,
          parsedProps,
          willChangeProps: getWillChangeProps(),
        });
      }
    },

    cleanup(element: HTMLElement) {
      pushState(DEFAULT_PARSED_PROPS);
      removeElementStyles(element);
    },

    propertyTransitionEnd() {
      if (--remainingPropsToChange === 0 && finishCallbackRef) {
        finishCallbackRef();
      }
    },

    onFinish(callback: () => void) {
      finishCallbackRef = callback;
    },
  };
}
