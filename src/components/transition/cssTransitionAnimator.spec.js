import {createCSSTransitionAnimator} from './cssTransitionAnimator';

const createMockedElement = () => {
  const REPAINT_PROPERTY = 'offsetHeight';
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
    getStylesHistory: () => {
      update();
      return history;
    },
  };
};

describe('createCSSTransitionAnimator()', () => {
  it('animates element based on given PropertyObjects', () => {
    const animator = createCSSTransitionAnimator();
    const {element, getStylesHistory} = createMockedElement();

    const from = {translateY: 24, opacity: 0};
    const to = [
      {translateY: 0, easing: 'entry', duration: 'moderate2'},
      {opacity: 1, easing: 'linear', duration: 'quick2'},
    ];

    animator.animate(element, from, to);
    expect(getStylesHistory()).toEqual([
      {
        transform: 'translate3d(0px, 24px, 0px) scale3d(1, 1, 1)',
        opacity: '0',
        transitionProperty: 'transform, opacity',
        transitionDuration: '0ms',
        transitionTimingFunction: 'cubic-bezier(0.35, 0, 0.1, 1)',
      },
      {
        transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1)',
        opacity: '1',
        transitionProperty: 'transform, opacity',
        transitionDuration: '260ms, 120ms',
        transitionTimingFunction: 'cubic-bezier(0.1, 0, 0, 1), linear',
      },
    ]);
  });

  it('merges PropertyObjects where next may override the previous one', () => {
    const animator = createCSSTransitionAnimator();
    const {element, getStylesHistory} = createMockedElement();

    const from = {translateY: 24};
    const to = [
      {translateX: 10, duration: 'moderate2'},
      {translateY: 10, duration: 'quick2'},
    ];

    animator.animate(element, from, to);
    expect(getStylesHistory()).toEqual([
      {
        transform: 'translate3d(0px, 24px, 0px) scale3d(1, 1, 1)',
        opacity: '1',
        transitionProperty: 'transform, opacity',
        transitionDuration: '0ms',
        transitionTimingFunction: 'cubic-bezier(0.35, 0, 0.1, 1)',
      },
      {
        transform: 'translate3d(10px, 10px, 0px) scale3d(1, 1, 1)',
        opacity: '1',
        transitionProperty: 'transform, opacity',
        transitionDuration: '120ms, 0ms',
        transitionTimingFunction: 'cubic-bezier(0.35, 0, 0.1, 1)',
      },
    ]);
  });
});
