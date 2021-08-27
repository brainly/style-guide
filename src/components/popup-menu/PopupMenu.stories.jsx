import * as React from 'react';
import PopupMenu from './PopupMenu';

export default {
  title: 'Components/PopupMenu',
  parameters: {
    component: PopupMenu,
    backgrounds: {
      default: 'dark',
    },
  },
  argTypes: {
    items: {
      control: {
        disable: true,
      },
    },
  },
};

export const Default = args => {
  return <PopupMenu {...args} />;
};

Default.args = {
  items: ['one', 'two', 'three'],
};
