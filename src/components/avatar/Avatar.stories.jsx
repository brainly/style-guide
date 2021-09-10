import * as React from 'react';
import {StoryVariant} from '../../../.storybook/utils';
import Avatar, {SIZE} from './Avatar';

export default {
  title: 'Components/Avatar',
  parameters: {
    component: Avatar,
  },
  argTypes: {
    size: {control: {type: 'select', options: SIZE}},
    border: {control: 'boolean'},
    spaced: {control: 'boolean'},
    imgSrc: {
      control: {
        type: 'select',
        options: ['', 'https://source.unsplash.com/240x240/?cat'],
      },
    },
  },
};

export const Default = args => <Avatar {...args} />;

export const Sizes = () => (
  <div>
    {Object.values(SIZE).map(size => (
      <StoryVariant key={size} label={`size - ${size}`}>
        <Avatar size={size} />
      </StoryVariant>
    ))}
  </div>
);

export const WithBorder = () => <Avatar size="l" border />;

WithBorder.parameters = {
  backgrounds: {default: 'dark'},
};

export const CustomImage = () => (
  <Avatar size="l" imgSrc="https://source.unsplash.com/240x240/?cat" />
);
