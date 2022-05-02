// @flow strict

import * as React from 'react';
import hex from '../../colors/hex';
import Flex from '../../flex/Flex';
import Text from '../../text/Text';
import Button from '../../buttons/Button';
import Transition from '../Transition';

const shrinkFadeEffect = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transform: {scale: 0.25},
    duration: 1000,
    easing: 'entry',
  },
  exit: {
    opacity: 0,
    duration: 1000,
    easing: 'exit',
  },
};

const fillModes = ['none', 'forwards', 'backwards', 'both'];

export function FillMode() {
  const [isActive, setIsActive] = React.useState(false);

  return (
    <Flex>
      <Flex className="sg-space-y-s" direction="column" alignItems="center">
        <Flex className="sg-space-x-l" marginBottom="m">
          {fillModes.map(mode => (
            <Container key={mode} description={mode}>
              <Transition
                active={isActive}
                effect={shrinkFadeEffect}
                fillMode={mode}
                delay={1000}
              >
                <Circle />
              </Transition>
            </Container>
          ))}
        </Flex>

        <Button type="solid" onClick={() => setIsActive(b => !b)} fullWidth>
          {isActive ? 'inactive' : 'active'}
        </Button>

        <Text size="small" color="text-gray-50">
          An active effect appears a shrinking circle with a 1s delay.
        </Text>
      </Flex>
    </Flex>
  );
}

const Circle = () => (
  <div
    style={{
      width: 64,
      height: 64,
      backgroundColor: hex['blue-40'],
      borderRadius: '50%',
    }}
  />
);

const Container = ({
  description,
  children,
}: {
  description: string,
  children: React.Node,
}) => (
  <Flex direction="column" alignItems="center" className="sg-space-y-m">
    <div style={{position: 'relative', width: 64, height: 64}}>
      <div style={{outline: `1px solid ${hex['indigo-50']}`}}>{children}</div>
    </div>
    <Text size="small">{description}</Text>
  </Flex>
);

FillMode.parameters = {
  layout: 'centered',
};
