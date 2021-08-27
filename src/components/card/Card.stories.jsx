import * as React from 'react';
import Card from './Card';
import CardHole, {CARD_HOLE_COLOR} from './CardHole';

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
      <CardHole color={CARD_HOLE_COLOR.GRAY_SECONDARY_LIGHTEST}>
        This is card content bottom
      </CardHole>
    </Card>
  );
};

Default.args = {};
