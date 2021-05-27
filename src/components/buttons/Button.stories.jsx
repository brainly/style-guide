import * as React from 'react';
import Button from './Button';
import Icon, {TYPE as ICON_TYPES, ICON_COLOR} from 'icons/Icon';

const allIcons = Object.entries(ICON_TYPES).reduce(
  (acc, [key, type]) => ({
    ...acc,
    [key]: <Icon type={type} color={ICON_COLOR.ADAPTIVE} size={24} />,
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

export const Default = args => <Button {...args} />;

Default.args = {
  children: 'Button',
};
export const Outline = () => <Button type="outline">Button</Button>;
