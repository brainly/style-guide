import * as React from 'react';
import {StoryVariant} from '../../../.storybook/utils';
import Flex from '../flex/Flex';
import MobileIcon, {TYPE, ICON_COLOR} from './MobileIcon';

export default {
  title: 'Components/MobileIcon',
  parameters: {
    component: MobileIcon,
  },
  argTypes: {
    color: {
      control: {
        type: 'select',
        options: ICON_COLOR,
      },
    },
  },
  args: {
    type: TYPE.ANSWER_BUBBLE,
    color: ICON_COLOR.ADAPTIVE,
    size: 'medium',
  },
};

export const Default = args => <MobileIcon {...args} />;

export const Types = args => (
  <Flex wrap>
    {Object.values(TYPE).map(type => (
      <StoryVariant label={`type - ${type}`} width={200} key={type}>
        <MobileIcon {...args} type={type} />
      </StoryVariant>
    ))}
  </Flex>
);
