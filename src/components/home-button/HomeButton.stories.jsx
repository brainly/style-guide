import * as React from 'react';
import {StoryVariant} from '../../_docs/utils';
import Flex from '../flex/Flex';
import HomeButton, {TYPE} from './HomeButton';
import A11yDocs from './HomeButton.a11y.md';

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
  parameters: {
    a11yDocs: A11yDocs,
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
