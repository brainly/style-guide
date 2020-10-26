import React from 'react';
import Label, {ICON_TYPE, LABEL_COLORS_SET, LABEL_TYPE} from './Label';

export default {
  title: 'Components/Label',
  parameters: {
    component: Label,
  },
};

export const Default = args => {
  const {children} = args;

  return <Label {...args}>{children}</Label>;
};

Default.args = {
  iconType: 'heart',
  color: 'blue',
  type: 'default',
  children: 'label',
};

Default.argTypes = {
  iconType: {control: {type: 'select', options: ICON_TYPE}},
  color: {control: {type: 'select', options: LABEL_COLORS_SET}},
  type: {control: {type: 'select', options: LABEL_TYPE}},
  onClose: {control: null},
};
