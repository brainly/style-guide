import * as React from 'react';
import Card from './Card';
import CardHole from './CardHole';

export default {
  title: 'Components/Card',
  parameters: {
    component: Card,
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
  return (
    <Card {...args}>
      <CardHole>This is card content top</CardHole>
      <CardHole>This is card content bottom</CardHole>
    </Card>
  );
};

Default.args = {};
