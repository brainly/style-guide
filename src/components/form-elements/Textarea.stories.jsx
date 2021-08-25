import * as React from 'react';
import Textarea from './Textarea';

export default {
  title: 'Components/Textarea',
  parameters: {
    component: Textarea,
  },
  argTypes: {
    type: {
      control: {
        disable: true,
      },
    },
    value: {
      control: {
        type: 'text',
      },
    },
    errorMessage: {
      control: {
        type: 'text',
      },
    },
  },
};

export const Default = args => {
  return <Textarea {...args} />;
};

Default.args = {};
