import * as React from 'react';
import Dropdown from './Dropdown';
import {StoryVariantBorderBox} from '../../_docs/utils';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
  argTypes: {
    links: {
      control: {
        disable: true,
      },
    },
  },
  args: {
    name: 'foo dropdown',
    links: [
      {
        label: 'brainly.pl',
        url: 'http://brainly.pl',
      },
      {
        label: 'brainly.com',
        url: 'http://brainly.com',
      },
    ],
  },
};

export const Default = args => <Dropdown {...args} />;

export const Colors = args => (
  <div>
    {['default', 'white'].map(color => (
      <div className="sg-story-variant" key={color}>
        <div className="sg-story-variant__name">color - {color}</div>
        <Dropdown {...args} color={color} />
      </div>
    ))}
  </div>
);

export const FullWidth = args => (
  <StoryVariantBorderBox>
    <Dropdown {...args} fullWidth />
  </StoryVariantBorderBox>
);

export const Opened = (args = {}) => (
  <div style={{paddingTop: 100}}>
    <Dropdown {...args} />
  </div>
);

Opened.args = {
  initiallyOpened: true,
};
