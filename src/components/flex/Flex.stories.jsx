import * as React from 'react';
import Flex from './Flex';

export default {
  title: 'Components/Flex',
  parameters: {
    component: Flex,
  },
  argTypes: {
    children: {
      control: {
        disable: true,
      },
    },
    htmlTag: {
      defaultValue: 'div',
      table: {
        defaultValue: {summary: 'div'},
      },
    },
  },
};

export const Default = args => {
  return <Flex {...args} />;
};

Default.args = {
  children: [
    <div key="1">This is a element 1.</div>,
    <div key="2">This is a element 2.</div>,
  ],
};
