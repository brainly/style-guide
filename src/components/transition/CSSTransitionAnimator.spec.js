import {
  createCSSTransitionAnimator,
  REPAINT_PROPERTY,
} from './CSSTransitionAnimator';

/**
 * The idea is to pass the history state
 * every time element calls repaint property.
 */
const createMockedElement = () => {
  const element = document.createElement('div');

  let current = {};
  const history = [];
  const update = () => {
    history.push(current);
    current = {};
  };

  Object.defineProperty(element, 'style', {
    get: () => current,
  });

  Object.defineProperty(element, REPAINT_PROPERTY, {
    get: () => {
      update();
      return 0;
    },
  });

  return {
    element,
    history,
  };
};

const classNamesRegistry = {
  register: jest.fn(),
  toString: jest.fn(),
};

describe('createCSSTransitionAnimator()', () => {
  it('animates element based on given PropertyObjects', () => {
    const animator = createCSSTransitionAnimator(classNamesRegistry);
    const {element, history} = createMockedElement();

    const from = {
      transform: {translateY: 24},
      opacity: 0,
    };
    const to = {
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

    animator.animate(element, from, to);
    expect(history).toEqual([
      {
        willChange: 'transform, opacity',
        transitionProperty: 'transform, opacity',
        transitionDuration: '0ms',
        transitionTimingFunction: 'cubic-bezier(0.35, 0, 0.1, 1)',
        transform: 'translate3d(0px, 24px, 0px) scale3d(1, 1, 1)',
        transformOrigin: 'center',
        opacity: '0',
      },
      {
        willChange: 'transform, opacity',
        transitionProperty: 'transform, opacity',
        transitionDuration: '260ms, 120ms',
        transitionTimingFunction: 'cubic-bezier(0.1, 0, 0, 1), linear',
        transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1)',
        transformOrigin: 'center',
        opacity: '1',
      },
    ]);
  });
});
