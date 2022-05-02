// @flow strict

import * as React from 'react';
import Transition from '../Transition';
import DummyBox from './common/DummyBox';
import Stage from './common/Stage';

const fadeEffect = {
  initial: {opacity: 0},
  animate: {opacity: 1, duration: 'quick1', easing: 'entry'},
  exit: {opacity: 0, duration: 'quick1', easing: 'exit'},
};

const fadeSlideEffect = {
  initial: {
    opacity: 0,
    transform: {translateY: 'm'},
  },
  animate: {
    opacity: {value: 1, duration: 'quick1'},
    transform: {translateY: 0, duration: 'moderate2'},
    easing: 'entry',
  },
  exit: {
    opacity: 0,
    transform: {translateY: 'm'},
    duration: 'quick2',
    easing: 'exit',
  },
};

export function PrefersReducedMotion() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Stage
      onClick={() => setIsOpen(b => !b)}
      description={`click to ${isOpen ? 'hide' : 'show'}`}
      centered
    >
      <Transition
        active={isOpen}
        effect={reduced => (reduced ? fadeEffect : fadeSlideEffect)}
      >
        <DummyBox size="medium" color="blue" />
      </Transition>
    </Stage>
  );
}

PrefersReducedMotion.parameters = {
  layout: 'centered',
};
