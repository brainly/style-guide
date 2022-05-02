// @flow

import * as React from 'react';
import Box from '../box/Box';
import Text from '../text/Text';

import Transition from './Transition';

export default {
  title: 'Components/Transition',
  component: Transition,
  argTypes: {
    children: {
      control: {
        disable: true,
      },
    },
    onTransitionStart: {
      action: 'onTransitionStart',
      table: {
        category: 'Events',
      },
    },
    onTransitionEnd: {
      action: 'onTransitionEnd',
      table: {
        category: 'Events',
      },
    },
  },
  args: {
    effect: {
      initial: {
        transform: {
          translateY: 24,
        },
        opacity: 0,
      },
      animate: {
        transform: {
          translateY: 0,
          duration: 'moderate2',
          easing: 'entry',
        },
        opacity: {
          value: 1,
          duration: 'quick2',
          easing: 'linear',
        },
      },
      exit: {
        opacity: 0,
        duration: 'quick2',
        easing: 'exit',
      },
    },
  },
};

export const Default = (args: any) => (
  <Transition {...args}>
    <Box color="blue-40" padding="m">
      <Text color="text-white" weight="bold">
        hello world
      </Text>
    </Box>
  </Transition>
);

export * from './stories';
