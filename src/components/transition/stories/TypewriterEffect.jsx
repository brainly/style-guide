// @flow strict

import * as React from 'react';
import Flex from '../../flex/Flex';
import Text from '../../text/Text.vanilla';
import Button from '../../buttons/Button';
import Transition from '../Transition';

const delayOffset = 240;

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
        toggle={active ? 'red' : undefined}
      >
        {active ? 'erase' : 'enter'}
      </Button>

      <Text whiteSpace="pre-wrap">
        {[...message].map((letter, index) => (
          <Transition
            key={index}
            active={active}
            effect={typingEffect}
            delay={delayOffset * index}
            inline
          >
            <Text inherited>{letter}</Text>
          </Transition>
        ))}
      </Text>
    </Flex>
  );
};

TypewriterEffect.parameters = {
  layout: 'centered',
};
