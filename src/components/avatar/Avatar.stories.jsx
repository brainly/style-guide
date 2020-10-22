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

export const Sizes = () => (
  <div>
    {Object.values(SIZE).map((size, index) => (
      <Avatar key={index} size={size} />
    ))}
  </div>
);

export const SizesWithBorder = () => (
  <div>
    {Object.values(SIZE).map((size, index) => (
      <Avatar key={index} size={size} border />
    ))}
  </div>
);

SizesWithBorder.parameters = {
  backgrounds: {default: 'dark'},
};

export const ImageSizes = () => (
  <div>
    {Object.values(SIZE).map((size, index) => (
      <Avatar
        key={index}
        size={size}
        imgSrc="https://source.unsplash.com/240x240/?cat"
      />
    ))}
  </div>
);

export const ImageSizesWithBorder = () => (
  <div>
    {Object.values(SIZE).map((size, index) => (
      <Avatar
        key={index}
        size={size}
        imgSrc="https://source.unsplash.com/240x240/?cat"
        border
      />
    ))}
  </div>
);
