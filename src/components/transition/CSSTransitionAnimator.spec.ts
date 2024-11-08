import {createCSSTransitionAnimator} from './CSSTransitionAnimator';

const classNamesRegistry = {
  register: jest.fn(),
  toString: jest.fn(),
};

const createMockedElement = () => {
  const element = document.createElement('div');
  // @ts-ignore TS7034
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
    // @ts-ignore TS7005
    styleChanges,
  };
};

describe('createCSSTransitionAnimator()', () => {
  it('animates based on given PropertyObjects', () => {
    const animator = createCSSTransitionAnimator(classNamesRegistry);
    const {element, styleChanges} = createMockedElement();

    animator.animate(
      element,
      {
        transform: {
          translateY: 24,
        },
        opacity: 0,
      },
      {
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
      }
    );
    expect(styleChanges).toEqual([
      {
        willChange: 'transform, opacity',
      },
      {
        transform: 'translate3d(0px, 24px, 0px) scale3d(1, 1, 1)',
      },
      {
        transformOrigin: 'center',
      },
      {
        opacity: '0',
      }, // repaint
      {
        willChange: 'transform, opacity',
      },
      {
        transitionProperty: 'transform, opacity',
      },
      {
        transitionDuration: '260ms, 120ms',
      },
      {
        transitionTimingFunction: 'cubic-bezier(0.1, 0, 0, 1), linear',
      },
      {
        transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1)',
      },
      {
        transformOrigin: 'center',
      },
      {
        opacity: '1',
      },
    ]);
  });
  it('animates progressively without "from" argument', () => {
    const animator = createCSSTransitionAnimator(classNamesRegistry);
    const {element, styleChanges} = createMockedElement();

    animator.animate(element, undefined, {
      transform: {
        translateY: 10,
        duration: 'moderate1',
      },
    });
    animator.animate(element, undefined, {
      transform: {
        translateY: 20,
        duration: 'moderate1',
      },
    });
    expect(styleChanges).toEqual([
      {
        willChange: 'transform',
      },
      {
        transitionProperty: 'transform',
      },
      {
        transitionDuration: '180ms',
      },
      {
        transitionTimingFunction: 'cubic-bezier(0.35, 0, 0.1, 1)',
      },
      {
        transform: 'translate3d(0px, 10px, 0px) scale3d(1, 1, 1)',
      },
      {
        transformOrigin: 'center',
      }, // second animate
      {
        willChange: 'transform',
      },
      {
        transitionProperty: 'transform',
      },
      {
        transitionDuration: '180ms',
      },
      {
        transitionTimingFunction: 'cubic-bezier(0.35, 0, 0.1, 1)',
      },
      {
        transform: 'translate3d(0px, 20px, 0px) scale3d(1, 1, 1)',
      },
      {
        transformOrigin: 'center',
      },
    ]);
  });
  it('applies "from" progressively without "to" argument', () => {
    const animator = createCSSTransitionAnimator(classNamesRegistry);
    const {element, styleChanges} = createMockedElement();

    animator.animate(element, {
      transform: {
        translateY: 10,
        duration: 'moderate1',
      },
    });
    animator.animate(element, {
      transform: {
        translateY: 20,
        duration: 'moderate1',
      },
    });
    expect(styleChanges).toEqual([
      {
        willChange: 'transform',
      },
      {
        transform: 'translate3d(0px, 10px, 0px) scale3d(1, 1, 1)',
      },
      {
        transformOrigin: 'center',
      }, // second animate
      {
        willChange: 'transform',
      },
      {
        transform: 'translate3d(0px, 20px, 0px) scale3d(1, 1, 1)',
      },
      {
        transformOrigin: 'center',
      },
    ]);
  });
  it('applies styles after cleanup', () => {
    const animator = createCSSTransitionAnimator(classNamesRegistry);
    const {element, styleChanges} = createMockedElement();
    const props = {
      transform: {
        translateY: 24,
      },
      opacity: 0,
    };

    animator.animate(element, props);
    animator.cleanup(element);
    animator.animate(element, props);
    expect(styleChanges).toEqual([
      {
        willChange: 'transform, opacity',
      },
      {
        transform: 'translate3d(0px, 24px, 0px) scale3d(1, 1, 1)',
      },
      {
        transformOrigin: 'center',
      },
      {
        opacity: '0',
      }, // cleanup
      {
        willChange: '',
      },
      {
        transitionProperty: '',
      },
      {
        transitionDuration: '',
      },
      {
        transitionTimingFunction: '',
      },
      {
        transform: '',
      },
      {
        transformOrigin: '',
      },
      {
        width: '',
      },
      {
        height: '',
      },
      {
        opacity: '',
      }, // second animate
      {
        willChange: 'transform, opacity',
      },
      {
        transform: 'translate3d(0px, 24px, 0px) scale3d(1, 1, 1)',
      },
      {
        transformOrigin: 'center',
      },
      {
        opacity: '0',
      },
    ]);
  });
  it('calls onFinish callback after transition of the last property', () => {
    const callback = jest.fn();
    const animator = createCSSTransitionAnimator(classNamesRegistry);
    const element = document.createElement('div');

    animator.onFinish(callback);
    animator.animate(
      element,
      {
        transform: {
          translateY: 24,
        },
        opacity: 0,
      },
      {
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
      }
    );
    animator.propertyTransitionEnd();
    animator.propertyTransitionEnd();
    expect(callback).toHaveBeenCalledTimes(1);
  });
  it('calls onFinish callback after transition of a single property', () => {
    const callback = jest.fn();
    const animator = createCSSTransitionAnimator(classNamesRegistry);
    const element = document.createElement('div');

    animator.onFinish(callback);
    animator.animate(
      element,
      {
        opacity: 0,
      },
      {
        opacity: {
          value: 1,
          easing: 'linear',
          duration: 'quick2',
        },
      }
    );
    animator.propertyTransitionEnd();
    expect(callback).toHaveBeenCalledTimes(1);
  });
  it('calls onFinish callback after changing the animation', () => {
    const callback = jest.fn();
    const animator = createCSSTransitionAnimator(classNamesRegistry);
    const element = document.createElement('div');

    animator.onFinish(callback);
    animator.animate(
      element,
      {
        opacity: 0,
      },
      {
        opacity: {
          value: 1,
          easing: 'linear',
          duration: 'quick2',
        },
      }
    );
    animator.animate(
      element,
      {
        transform: {
          translateY: 24,
        },
        opacity: 0,
      },
      {
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
      }
    );
    animator.propertyTransitionEnd();
    expect(callback).toHaveBeenCalledTimes(0);
    animator.propertyTransitionEnd();
    expect(callback).toHaveBeenCalledTimes(1);
  });
  it('calls onFinish callback only once after each animation', () => {
    const callback = jest.fn();
    const animator = createCSSTransitionAnimator(classNamesRegistry);
    const element = document.createElement('div');

    animator.onFinish(callback);
    animator.animate(
      element,
      {
        transform: {
          translateY: 24,
        },
        opacity: 0,
      },
      {
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
      }
    );
    animator.propertyTransitionEnd();
    animator.propertyTransitionEnd();
    animator.propertyTransitionEnd();
    animator.propertyTransitionEnd();
    expect(callback).toHaveBeenCalledTimes(1);
  });
  it('calls onFinish callback after instant animation', () => {
    const callback = jest.fn();
    const animator = createCSSTransitionAnimator(classNamesRegistry);
    const element = document.createElement('div');

    animator.onFinish(callback);
    animator.animate(
      element,
      {
        transform: {
          translateY: 24,
        },
        opacity: 0,
      },
      {
        transform: {
          translateY: 0,
        },
        opacity: {
          value: 1,
        },
        duration: 'instant',
      }
    );
    // the propertyTransitionEnd callback shouldn't be fired
    expect(callback).toHaveBeenCalledTimes(1);
  });
  it('does not fire onFinish callback after many apply methods', () => {
    const callback = jest.fn();
    const animator = createCSSTransitionAnimator(classNamesRegistry);
    const element = document.createElement('div');

    animator.onFinish(callback);
    animator.apply(element, {
      opacity: 0,
      duration: 'quick2',
    });
    animator.apply(element, {
      opacity: 0.5,
      duration: 'quick2',
    });
    animator.apply(element, {
      opacity: 1,
      duration: 'quick2',
    });
    animator.propertyTransitionEnd();
    animator.propertyTransitionEnd();
    animator.propertyTransitionEnd();
    animator.propertyTransitionEnd();
    expect(callback).toHaveBeenCalledTimes(0);
  });
});
