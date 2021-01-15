import React from 'react';
import Checkbox from './Checkbox';

export default {
  title: 'Components/Checkbox',
  parameters: {
    component: Checkbox,
  },
};

export const Default = args => <Checkbox {...args} />;

Default.args = {
  children: 'Checkbox',
};

Default.argsTypes = {};
