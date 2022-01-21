import * as React from 'react';
import Media, {COLORS_MAP} from './Media';
import Text from '../text/Text';
import Avatar from '../avatar/Avatar';
import Flex from '../flex/Flex';
import {StoryVariant} from '../../_docs/utils';

export default {
  title: 'Components/Media',
  component: Media,
  parameters: {
    backgrounds: {
      default: 'gray-40',
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

export const Colors = args => (
  <Flex alignItems="flex-end" wrap="true">
    {Object.values(COLORS_MAP).map(color => (
      <StoryVariant label={color} width={200} key={color}>
        <Media {...args} key={color} color={color} />
      </StoryVariant>
    ))}
  </Flex>
);

export const Clickable = args => <Media {...args} color="gray-20" clickable />;
