// @flow strict

import * as React from 'react';
import Flex from '../../flex/Flex';
import Text from '../../text/Text';
import Button from '../../buttons/Button';
import Transition from '../Transition';

const typingEffect = {
  initial: {opacity: 0, transform: {translateY: '-xs'}},
  animate: {opacity: 1, duration: 'quick2', easing: 'entry'},
  exit: {opacity: 0, duration: 'quick2', easing: 'exit'},
};

export const TypewriterEffect = () => {
  const message = 'hello world';
  const [active, setActive] = React.useState(false);

  return (
    <Flex className="sg-space-x-xs" alignItems="center">
      <Button
        type="solid-light"
        onClick={() => setActive(b => !b)}
        toggle={active ? 'peach' : 'blue'}
      >
        {active ? 'erase' : 'enter'}
      </Button>

      <div>
        {[...message].map((letter, index) => (
          <Transition
            key={index}
            active={active}
            effect={typingEffect}
            delay={index * 240}
            inline
          >
            <Text whiteSpace="pre-wrap">{letter}</Text>
          </Transition>
        ))}
      </div>
    </Flex>
  );
};

TypewriterEffect.parameters = {
  layout: 'centered',
};
