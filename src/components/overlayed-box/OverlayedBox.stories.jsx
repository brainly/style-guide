import * as React from 'react';
import OverlayedBox from './OverlayedBox';
import Avatar from '../avatar/Avatar';
import Counter from '../counters/Counter';
import ComponentTop from 'blocks/ComponentTop';

export default {
  title: 'Components/OverlayedBox',
  component: OverlayedBox,
  argTypes: {
    children: {
      control: {
        disable: true,
      },
    },
    overlay: {
      control: {
        disable: true,
      },
    },
  },
};

export const Default = args => {
  return <OverlayedBox {...args} />;
};

Default.args = {
  children: <Avatar />,
  overlay: <Counter>10</Counter>,
};
