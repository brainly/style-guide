import React from 'react';
import Avatar, {SIZE} from './Avatar';

export default {
  title: 'Components/Avatar',
  parameters: {
    component: Avatar,
  },
};

export const Default = args => <Avatar {...args} />;

Default.args = {};

Default.argTypes = {
  size: {control: {type: 'select', options: SIZE}},
  border: {control: 'boolean'},
  spaced: {control: 'boolean'},
  imgSrc: {
    control: {
      type: 'select',
      options: ['', 'https://source.unsplash.com/240x240/?cat'],
    },
  },
};
