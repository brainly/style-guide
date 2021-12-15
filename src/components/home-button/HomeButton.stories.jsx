import * as React from 'react';
import {StoryVariant} from '../../_docs/utils';
import Flex from '../flex/Flex';
import HomeButton, {TYPE} from './HomeButton';

export default {
  title: 'Components/HomeButton',
  component: HomeButton,
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
    {[
      TYPE.BRAINLY,
      TYPE.EODEV,
      TYPE.NOSDEVOIRS,
      TYPE.ZNANIJA,
      TYPE.BRAINLY_PLUS,
    ].map(type => (
      <StoryVariant width={200} label={`type - ${type}`} key={type}>
        <HomeButton {...args} type={type} />
      </StoryVariant>
    ))}
  </Flex>
);
