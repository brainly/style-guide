import * as React from 'react';
import HomeButton, {TYPE} from './HomeButton';

export default {
  title: 'Components/HomeButton',
  parameters: {
    component: HomeButton,
  },
  argTypes: {
    type: {
      control: {
        defaultValue: TYPE.BRAINLY,
        type: 'select',
        options: TYPE,
      },
    },
  },
};

export const Default = args => {
  return <HomeButton {...args} />;
};

Default.args = {
  type: TYPE.BRAINLY,
  href: 'https://brainly.com',
};
