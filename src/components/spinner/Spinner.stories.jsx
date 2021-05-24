import * as React from 'react';
import Spinner from './Spinner';

export default {
  title: 'Components/Spinner',
  parameters: {
    component: Spinner,
  },
};

export const Default = args => <Spinner {...args} />;

export const Light = args => <Spinner {...args} />;

Light.args = {
  light: true,
};

Light.parameters = {
  backgrounds: {default: 'dark'},
};
