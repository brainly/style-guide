import * as React from 'react';
import Checkbox from './Checkbox';

export default {
  title: 'Components/Form/Checkbox',
  parameters: {
    component: Checkbox,
  },
  args: {
    children: 'Checkbox',
  },
};

export const Default = args => <Checkbox {...args} />;

export const Checked = args => <Checkbox {...args} checked />;
