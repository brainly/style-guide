import React from 'react';
import Box, {PADDING} from './Box';

export default {
  title: 'Layout/Box',
  parameters: {
    component: Box,
    description:
      'Container for grouping elements. It provides padding, background color, border and shadow.',
  },
  argTypes: {
    children: {
      control: {
        disable: true,
      },
    },
    className: {
      control: {
        disable: true,
      },
    },
    border: {
      control: {
        type: 'boolean',
      },
    },
    padding: {
      control: {
        type: 'select',
        options: PADDING,
      },
    },
  },
};

export const Default = args => {
  return <Box {...args} />;
};

Default.args = {
  children: 'Text inside default Box',
};

export const WithBorder = args => {
  return <Box {...args} />;
};

WithBorder.args = {
  border: true,
  children: 'Text inside Box with border',
};
