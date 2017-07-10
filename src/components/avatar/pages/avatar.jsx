import React from 'react';
import Avatar, {SIZE, ICON_TYPE, ICON_COLOR} from '../Avatar';
import DocsActiveBlock from '../../../docs/DocsActiveBlock';

const Avatars = () => {
  const settings = {
    size: Object.values(SIZE),
    border: Boolean,
    spaced: Boolean,
    imgSrc: String,
    iconType: Object.values(ICON_TYPE),
    iconColor: Object.values(ICON_COLOR)
  };

  return <DocsActiveBlock settings={settings}>
    <Avatar iconType={ICON_TYPE.profile}/>
    <Avatar imgSrc="https://source.unsplash.com/240x240/?cat"/>
  </DocsActiveBlock>;
};

export default Avatars;
