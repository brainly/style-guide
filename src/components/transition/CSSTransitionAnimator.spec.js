import {createCSSTransitionAnimator} from './CSSTransitionAnimator';

const classNamesRegistry = {
  register: jest.fn(),
  toString: jest.fn(),
};

const createMockedElement = () => {
  const element = document.createElement('div');
  const styleChanges = [];

  Object.defineProperty(element, 'style', {
    get: () => {
      const current = {};

      styleChanges.push(current);
      return current;
    },
  });

  return {
    element,
    styleChanges,
  };
};

describe('createCSSTransitionAnimator()', () => {
  it('animates element based on given PropertyObjects', () => {
    const animator = createCSSTransitionAnimator(classNamesRegistry);
    const {element, styleChanges} = createMockedElement();

    const fromProps = {
      transform: {translateY: 24},
      opacity: 0,
    };
    const toProps = {
      transform: {
        translateY: 0,
        easing: 'entry',
        duration: 'moderate2',
      },
      opacity: {
        value: 1,
        easing: 'linear',
        duration: 'quick2',
      },
    };

    animator.animate(element, fromProps, toProps);
    expect(styleChanges).toEqual([
      {willChange: 'transform, opacity'},
      {transform: 'translate3d(0px, 24px, 0px) scale3d(1, 1, 1)'},
      {transformOrigin: 'center'},
      {opacity: '0'},

      // repaint
      {willChange: 'transform, opacity'},
      {transitionProperty: 'transform, opacity'},
      {transitionDuration: '260ms, 120ms'},
      {transitionTimingFunction: 'cubic-bezier(0.1, 0, 0, 1), linear'},
      {transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1)'},
      {transformOrigin: 'center'},
      {opacity: '1'},
    ]);
  });

  it('applies styles after cleanup', () => {
    const animator = createCSSTransitionAnimator(classNamesRegistry);
    const {element, styleChanges} = createMockedElement();

    const props = {
      transform: {translateY: 24},
      opacity: 0,
    };

    animator.apply(element, props);
    animator.cleanup(element);
    animator.apply(element, props);

    expect(styleChanges).toEqual([
      {willChange: 'transform, opacity'},
      {transform: 'translate3d(0px, 24px, 0px) scale3d(1, 1, 1)'},
      {transformOrigin: 'center'},
      {opacity: '0'},

      // cleanup
      {willChange: ''},
      {transitionProperty: ''},
      {transitionDuration: ''},
      {transitionTimingFunction: ''},
      {transform: ''},
      {transformOrigin: ''},
      {width: ''},
      {height: ''},
      {opacity: ''},

      // second apply method
      {willChange: 'transform, opacity'},
      {transform: 'translate3d(0px, 24px, 0px) scale3d(1, 1, 1)'},
      {transformOrigin: 'center'},
      {opacity: '0'},
    ]);
  });

  it('returns finished equals true after transition of the last property', () => {
    const animator = createCSSTransitionAnimator(classNamesRegistry);
    const element = document.createElement('div');

    const fromProps = {
      transform: {translateY: 24},
      opacity: 0,
    };
    const toProps = {
      transform: {
        translateY: 0,
        easing: 'entry',
        duration: 'moderate2',
      },
      opacity: {
        value: 1,
        easing: 'linear',
        duration: 'quick2',
      },
    };

    animator.animate(element, fromProps, toProps);
    expect(animator.finished()).toBe(false); // opacity
    expect(animator.finished()).toBe(true); // transform
  });

  it('returns finished equals true after a single property', () => {
    const animator = createCSSTransitionAnimator(classNamesRegistry);
    const element = document.createElement('div');

    const fromProps = {
      opacity: 0,
    };
    const toProps = {
      opacity: {
        value: 1,
        easing: 'linear',
        duration: 'quick2',
      },
    };

    animator.animate(element, fromProps, toProps);
    expect(animator.finished()).toBe(true); // opacity
  });
});
