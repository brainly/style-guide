import * as React from 'react';
import Button from './Button';
import Icon, {TYPE as ICON_TYPES, ICON_COLOR} from 'icons/Icon';

const allIcons = Object.entries(ICON_TYPES).reduce(
  (acc, [key, type]) => ({
    ...acc,
    [key]: type,
  }),
  {}
);

export default {
  title: 'Components/Button',
  parameters: {
    component: Button,
  },
  argTypes: {
    icon: {
      control: {
        type: 'select',
        options: allIcons,
      },
    },
  },
};

export const Default = ({icon, ...args}) => (
  <Button
    icon={icon && <Icon type={icon} color={ICON_COLOR.ADAPTIVE} size={24} />}
    {...args}
  />
);

Default.args = {
  children: 'Button',
};
