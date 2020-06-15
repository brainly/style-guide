import React from 'react';
import Avatar, {SIZE} from '../Avatar';
import DocsActiveBlock from 'components/DocsActiveBlock';

const Avatars = () => {
  const settings = [
    {
      name: 'size',
      values: SIZE,
    },
    {
      name: 'border',
      values: Boolean,
    },
    {
      name: 'spaced',
      values: Boolean,
    },
    {
      name: 'imgSrc',
      values: String,
    },
  ];

  return (
    <div>
      <DocsActiveBlock settings={settings}>
        <Avatar size={SIZE.L} />
      </DocsActiveBlock>
      <DocsActiveBlock settings={settings}>
        <Avatar imgSrc="https://source.unsplash.com/240x240/?cat" />
      </DocsActiveBlock>
    </div>
  );
};

export default Avatars;
