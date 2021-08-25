import * as React from 'react';
import TopLayer from './TopLayer';

export default {
  title: 'Components/TopLayer',
  parameters: {
    component: TopLayer,
  },
  argTypes: {
    children: {
      control: {
        disable: true,
      },
    },
  },
};

export const Default = args => {
  return <TopLayer {...args} />;
};

Default.args = {
  children:
    'Consequat mollit id tempor ullamco nostrud dolor officia eiusmod ad.',
};
