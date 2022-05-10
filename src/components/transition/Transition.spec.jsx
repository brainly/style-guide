import * as React from 'react';
import {mount} from 'enzyme';
import {act} from 'react-dom/test-utils';
import Transition from './Transition';

// https://github.com/jsdom/jsdom/issues/1781
// https://github.com/testing-library/dom-testing-library/pull/865
class TransitionEvent extends global.Event {
  constructor(type, init = {}) {
    super(type, init);
    this.elapsedTime = init.elapsedTime || 0.0;
    this.propertyName = init.propertyName || '';
    this.pseudoElement = init.pseudoElement || '';
  }
}

const DEFAULT_OPACITY = ''; // unassigned
const INITIAL_OPACITY = '0.1';
const ANIMATE_OPACITY = '0.2';
const EXIT_OPACITY = '0.3';

const testEffect = {
  initial: {opacity: INITIAL_OPACITY},
  animate: {opacity: ANIMATE_OPACITY},
  exit: {opacity: EXIT_OPACITY},
};

describe('<Transition />', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.useFakeTimers();
    global.TransitionEvent = TransitionEvent;
  });

  it('renders children', () => {
    const wrapper = mount(
      <Transition effect={testEffect} active>
        test content
      </Transition>
    );

    expect(wrapper.containsMatchingElement('test content')).toBe(true);
  });

  it('does not apply any style when not support transition', () => {
    global.TransitionEvent = undefined;

    const wrapper = mount(<Transition effect={testEffect} active />);

    expect(wrapper.getDOMNode().style.opacity).toBe(DEFAULT_OPACITY);
  });

  it('fires onTransitionStart as a fallback when not support transition', () => {
    global.TransitionEvent = undefined;
    const onTransitionStart = jest.fn();

    mount(
      <Transition
        effect={testEffect}
        onTransitionStart={onTransitionStart}
        active
      />
    );

    expect(onTransitionStart).toHaveBeenCalled();
  });

  it('fires onTransitionEnd as a fallback when not support transition', () => {
    global.TransitionEvent = undefined;
    const onTransitionEnd = jest.fn();

    mount(
      <Transition
        effect={testEffect}
        onTransitionEnd={onTransitionEnd}
        active
      />
    );

    expect(onTransitionEnd).toHaveBeenCalled();
  });

  it.each`
    delay  | fillMode       | before             | after
    ${0}   | ${'none'}      | ${ANIMATE_OPACITY} | ${DEFAULT_OPACITY}
    ${0}   | ${'forwards'}  | ${ANIMATE_OPACITY} | ${ANIMATE_OPACITY}
    ${0}   | ${'backwards'} | ${ANIMATE_OPACITY} | ${DEFAULT_OPACITY}
    ${0}   | ${'both'}      | ${ANIMATE_OPACITY} | ${ANIMATE_OPACITY}
    ${100} | ${'none'}      | ${null}            | ${DEFAULT_OPACITY}
    ${100} | ${'forwards'}  | ${null}            | ${ANIMATE_OPACITY}
    ${100} | ${'backwards'} | ${INITIAL_OPACITY} | ${DEFAULT_OPACITY}
    ${100} | ${'both'}      | ${INITIAL_OPACITY} | ${ANIMATE_OPACITY}
  `(
    'fills $delay ms delayed transition with "$fillMode" mode',
    ({delay, fillMode, before, after}) => {
      const wrapper = mount(
        <Transition
          effect={testEffect}
          delay={delay}
          fillMode={fillMode}
          active
        />
      );

      if (before !== null) {
        expect(wrapper.getDOMNode().style.opacity).toBe(before);
      }

      act(() => {
        jest.runAllTimers();
        wrapper.update();
        wrapper.simulate('transitionEnd');
      });

      expect(wrapper.getDOMNode().style.opacity).toBe(after);
    }
  );

  it('accepts effect prop as a function that returns an effect', () => {
    const effectFunction = jest.fn(() => testEffect);
    const wrapper = mount(<Transition effect={effectFunction} active />);

    expect(wrapper.getDOMNode().style.opacity).toBe(ANIMATE_OPACITY);
    expect(effectFunction).toHaveBeenCalledWith(false);
  });
});
