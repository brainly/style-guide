import React from 'react';
import Avatar, {SIZE} from '../Avatar';
import DocsActiveBlock from 'components/DocsActiveBlock';

const Avatars = () => {
  const settings = {
    size: Object.values(SIZE),
    border: Boolean,
    spaced: Boolean,
    imgSrc: String
  };

  return <div>
    <DocsActiveBlock settings={settings}>
      <Avatar size={SIZE.LARGE}/>
    </DocsActiveBlock>
    <DocsActiveBlock settings={settings}>
      <Avatar imgSrc="https://source.unsplash.com/240x240/?cat"/>
    </DocsActiveBlock>
  </div>;
};


export default Avatars;
