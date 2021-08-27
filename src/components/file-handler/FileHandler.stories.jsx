import * as React from 'react';
import FileHandler from './FileHandler';
import {TYPE} from '../icons/Icon';

export default {
  title: 'Components/FileHandler',
  parameters: {
    component: FileHandler,
  },
  argTypes: {
    children: {
      control: {
        disable: true,
      },
    },
    textRef: {
      control: {
        disable: true,
      },
    },
    iconType: {
      control: {
        type: 'select',
        options: TYPE,
      },
    },
  },
};

export const Default = args => {
  return <FileHandler {...args} />;
};

Default.args = {
  children: 'text',
};
