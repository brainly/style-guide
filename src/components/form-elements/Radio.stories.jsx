import React from 'react';
import Radio from './Radio';

export default {
  title: 'Components/Form/Radio',
  parameters: {
    component: Radio,
  },
};

export const Default = args => <Radio {...args} />;

Default.args = {
  children: 'Radio',
};

Default.argsTypes = {};
