// @flow strict

import * as React from 'react';
import Text from '../../text/Text';
import Transition from '../Transition';

const slideFadeInEffect = {
  initial: {
    opacity: 0,
    transform: {translateY: '-s'},
  },
  animate: {
    opacity: 1,
    duration: 'gentle2',
    easing: 'entry',
  },
};

const slideFadeOutEffect = {
  animate: {
    opacity: 0,
    transform: {translateY: 's'},
    duration: 'gentle2',
    easing: 'exit',
  },
};

const cycle = [slideFadeInEffect, slideFadeOutEffect];

const increment = (n: number) => n + 1;

export const InTextCounter = () => {
  const [count, setCount] = React.useState(0);
  const [effectIndex, setEffectIndex] = React.useState(0);
  const currentEffect = cycle[effectIndex % cycle.length];

  const handleTransitionEnd = effect => {
    setEffectIndex(increment);

    // increase count value when the counter is hidden
    if (effect === slideFadeOutEffect) {
      setCount(increment);
    }
  };

  const counter = (
    <Transition
      active
      effect={currentEffect}
      onTransitionEnd={handleTransitionEnd}
      inline
    >
      <Text weight="bold" style={{fontVariantNumeric: 'tabular-nums'}}>
        {count}
      </Text>
    </Transition>
  );

  const users = count === 1 ? 'user' : 'users';

  return (
    <div>
      Counters! {counter} {users} love them.
    </div>
  );
};

InTextCounter.parameters = {
  layout: 'centered',
};
