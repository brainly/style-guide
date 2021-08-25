import * as React from 'react';
import IconAsButton, {TYPE, ICON_COLOR} from './IconAsButton';

export default {
  title: 'Components/IconAsButton',
  parameters: {
    component: IconAsButton,
  },
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: TYPE,
      },
    },
    color: {
      control: {
        type: 'select',
        options: ICON_COLOR,
      },
    },
    children: {
      control: {
        disable: true,
      },
    },
  },
};

export const Default = args => {
  return <IconAsButton {...args} />;
};

Default.args = {
  type: 'excellent',
};
