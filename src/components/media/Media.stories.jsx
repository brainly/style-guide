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
    {Object.keys(COLORS_MAP).map(colorType => (
      <StoryVariant
        label={`${colorType} (${COLORS_MAP[colorType]})`}
        width={200}
        key={colorType}
      >
        <Media {...args} key={colorType} color={COLORS_MAP[colorType]} />
      </StoryVariant>
    ))}
  </Flex>
);

export const Clickable = args => <Media {...args} color="gray-20" clickable />;
