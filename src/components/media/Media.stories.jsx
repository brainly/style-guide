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
};

export const Default = args => {
  return <Media {...args} />;
};

Default.args = {
  aside: <Avatar />,
  contentArray: [
    <Text key="1" weight="bold">
      The Goat
    </Text>,
    'Master',
  ],
};
