import React from 'react';
import Avatar, {SIZE} from '../Avatar';
import DocsActiveBlock from '../../../docs/DocsActiveBlock';
import ContrastBox from '../../../docs/ContrastBox';

const Avatars = () => {
  const settings = {
    size: Object.values(SIZE),
    border: Boolean,
    spaced: Boolean,
    imgSrc: String
  };

  return <ContrastBox light fullWidth>
    <DocsActiveBlock settings={settings}>
      <Avatar size={SIZE.LARGE}/>
    </DocsActiveBlock>
    <DocsActiveBlock settings={settings}>
      <Avatar imgSrc="https://source.unsplash.com/240x240/?cat"/>
    </DocsActiveBlock>
  </ContrastBox>;
};


export default Avatars;
