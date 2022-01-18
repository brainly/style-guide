import * as React from 'react';
import Overlay, {COLOR} from './Overlay';
import Box from '../box/Box';
import Flex from '../flex/Flex';

export default {
  title: 'Components/Overlay',
  component: Overlay,
  argTypes: {
    color: {
      control: {
        type: 'select',
        options: COLOR,
      },
    },
    children: {
      control: {
        disable: true,
      },
    },
  },
  args: {
    children: (
      <Flex fullHeight alignItems="center">
        <Box color="white">content example</Box>
      </Flex>
    ),
  },
};

export const Default = args => (
  <div>
    Mollit commodo eu sit aute cillum do nostrud elit ex excepteur. Eu minim
    dolore quis laborum labore. Eu eiusmod aute tempor dolor incididunt.
    <Overlay {...args} />
  </div>
);

export const Black = args => (
  <div>
    Mollit commodo eu sit aute cillum do nostrud elit ex excepteur. Eu minim
    dolore quis laborum labore. Eu eiusmod aute tempor dolor incididunt.
    <Overlay {...args} color="black" />
  </div>
);
