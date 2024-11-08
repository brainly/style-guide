import * as React from 'react';
import Text from '../../text/Text';
import Transition from '../Transition';

const slideFadeInEffect = {
  initial: {
    opacity: 0,
    transform: {
      translateY: '-s',
    },
  },
  animate: {
    opacity: 1,
    duration: 'gentle2',
    easing: 'entry',
  },
} as const;

const slideFadeOutEffect = {
  animate: {
    opacity: 0,
    transform: {
      translateY: 's',
    },
    duration: 'gentle2',
    easing: 'exit',
  },
} as const;

const cycle = [slideFadeInEffect, slideFadeOutEffect];

const increment = (n: number) => n + 1;

export const InTextCounter = () => {
  const [count, setCount] = React.useState(0);
  const [index, setIndex] = React.useState(0);
  const currentEffect = cycle[index % cycle.length];

  // @ts-expect-error TS7006
  const handleTransitionEnd = effect => {
    setIndex(increment);

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
      <Text
        weight="bold"
        style={{
          fontVariantNumeric: 'tabular-nums',
        }}
        inherited
      >
        {count}
      </Text>
    </Transition>
  );
  const users = count === 1 ? 'user' : 'users';

  return (
    <Text>
      Counters! {counter} {users} love them.
    </Text>
  );
};
InTextCounter.parameters = {
  layout: 'centered',
};
