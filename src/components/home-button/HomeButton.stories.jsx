import * as React from 'react';
import {StoryVariant} from '../../../.storybook/utils';
import Flex from '../flex/Flex';
import HomeButton, {TYPE} from './HomeButton';

export default {
  title: 'Components/HomeButton',
  parameters: {
    component: HomeButton,
  },
  argTypes: {
    type: {
      control: {
        defaultValue: TYPE.BRAINLY,
        type: 'select',
        options: TYPE,
      },
    },
  },
  args: {
    type: TYPE.BRAINLY,
    href: 'https://brainly.com',
  },
};

export const Default = args => <HomeButton {...args} />;

export const Types = args => (
  <Flex wrap>
    {Object.values(TYPE).map(type => (
      <StoryVariant width={200} label={`type - ${type}`} key={type}>
        <HomeButton {...args} type={type} />
      </StoryVariant>
    ))}
  </Flex>
);
