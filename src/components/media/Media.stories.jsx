import * as React from 'react';
import Media from './Media';
import Text from '../text/Text';
import Avatar from '../avatar/Avatar';

export default {
  title: 'Components/Media',
  parameters: {
    component: Media,
    backgrounds: {
      default: 'dark',
    },
  },
  argTypes: {
    aside: {
      control: {
        disable: true,
      },
    },
    contentArray: {
      control: {
        disable: true,
      },
    },
  },
  args: {
    aside: <Avatar />,
    contentArray: [
      <Text key="1" weight="bold">
        The Goat
      </Text>,
      'Master',
    ],
  },
};

export const Default = args => <Media {...args} />;

export const ToRight = args => <Media {...args} toRight />;

export const Focused = args => <Media {...args} focused />;

export const GraySecondaryLightClickable = args => (
  <Media {...args} graySecondaryLight clickable />
);

GraySecondaryLightClickable.parameters = {
  backgrounds: {
    default: 'light',
  },
};
