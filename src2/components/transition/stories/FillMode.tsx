import * as React from 'react';
import hex from '../../colors/hex';
import Flex from '../../flex/Flex';
import Text from '../../text/Text';
import Button from '../../buttons/Button';
import Transition from '../Transition';
const fillModes = ['none', 'forwards', 'backwards', 'both'];
const shrinkFadeEffect = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transform: {
      scale: 0.25,
    },
    duration: 1000,
    easing: 'entry',
  },
  exit: {
    opacity: 0,
    duration: 1000,
    easing: 'exit',
  },
};
export const FillMode = () => {
  const [active, setActive] = React.useState(false);
  return (
    <Flex
      className="sg-space-y-s"
      direction="column"
      alignItems="center"
      style={{
        width: 'min-content',
      }}
    >
      <Flex className="sg-space-x-l" marginBottom="m">
        {fillModes.map(mode => (
          <Container key={mode} description={mode}>
            <Transition
              active={active}
              effect={shrinkFadeEffect}
              fillMode={mode}
              delay={1000}
            >
              <Circle />
            </Transition>
          </Container>
        ))}
      </Flex>

      <Button variant="solid" onClick={() => setActive(b => !b)} fullWidth>
        {active ? 'hide' : 'show'}
      </Button>

      <Text size="small" color="text-gray-50" align="to-center">
        Activating transition spawns a shrinking circle inside the parent
        container with a 1s delay.
      </Text>
    </Flex>
  );
};

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
  description: string;
  children: React.ReactNode;
}) => (
  <Flex direction="column" alignItems="center" className="sg-space-y-m">
    <div
      style={{
        position: 'relative',
        width: 64,
        height: 64,
      }}
    >
      <div
        style={{
          outline: `1px solid ${hex['indigo-50']}`,
        }}
      >
        {children}
      </div>
    </div>
    <Text size="small">{description}</Text>
  </Flex>
);

FillMode.parameters = {
  layout: 'centered',
};