import * as React from 'react';
import Logo from './Logo';

export default {
  title: 'Components/Logo',
  parameters: {
    component: Logo,
  },
};

export const Default = args => {
  return <Logo {...args} />;
};
