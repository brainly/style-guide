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

const animationCycle = [slideFadeInEffect, slideFadeOutEffect];

const increment = (n: number) => n + 1;
const isLastElement = (arr, e) => arr[arr.length - 1] === e;

export function InTextCounter() {
  const [index, setIndex] = React.useState(0);
  const [count, setCount] = React.useState(0);
  const currentEffect = animationCycle[index % animationCycle.length];

  const handleTransitionEnd = effect => {
    setIndex(increment);

    if (isLastElement(animationCycle, effect)) {
      setCount(increment);
    }
  };

  const counter = (
    <Transition
      effect={currentEffect}
      onTransitionEnd={handleTransitionEnd}
      inline
      active
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
}

InTextCounter.parameters = {
  layout: 'centered',
};
