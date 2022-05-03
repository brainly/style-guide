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

    animator.animate(
      element,
      {
        transform: {translateY: 24},
        opacity: 0,
      },
      {
        transform: {translateY: 0, easing: 'entry', duration: 'moderate2'},
        opacity: {value: 1, easing: 'linear', duration: 'quick2'},
      }
    );

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

  it('returns finished after transition of the last property', () => {
    const animator = createCSSTransitionAnimator(classNamesRegistry);
    const element = document.createElement('div');

    animator.animate(
      element,
      {
        transform: {translateY: 24},
        opacity: 0,
      },
      {
        transform: {translateY: 0, easing: 'entry', duration: 'moderate2'},
        opacity: {value: 1, easing: 'linear', duration: 'quick2'},
      }
    );

    expect(animator.finished()).toBe(false); // opacity property
    expect(animator.finished()).toBe(true); // transform property
    expect(animator.finished()).toBe(true);
  });

  it('returns finished after transition of a single property', () => {
    const animator = createCSSTransitionAnimator(classNamesRegistry);
    const element = document.createElement('div');

    animator.animate(
      element,
      {opacity: 0},
      {opacity: {value: 1, easing: 'linear', duration: 'quick2'}}
    );

    expect(animator.finished()).toBe(true);
    expect(animator.finished()).toBe(true);
  });

  it('returns finished after changing the animation', () => {
    const animator = createCSSTransitionAnimator(classNamesRegistry);
    const element = document.createElement('div');

    animator.animate(
      element,
      {opacity: 0},
      {opacity: {value: 1, easing: 'linear', duration: 'quick2'}}
    );

    animator.animate(
      element,
      {
        transform: {translateY: 24},
        opacity: 0,
      },
      {
        transform: {translateY: 0, easing: 'entry', duration: 'moderate2'},
        opacity: {value: 1, easing: 'linear', duration: 'quick2'},
      }
    );

    expect(animator.finished()).toBe(false);
    expect(animator.finished()).toBe(true);
    expect(animator.finished()).toBe(true);
  });
});
