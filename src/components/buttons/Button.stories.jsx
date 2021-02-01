import * as React from 'react';
import Button from './Button';

export default {
  title: 'Components/Button',
  parameters: {
    component: Button,
  },
};

export const Default = () => <Button>Button</Button>;
export const Outline = () => <Button type="outline">Button</Button>;
