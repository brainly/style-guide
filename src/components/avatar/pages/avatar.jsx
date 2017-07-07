import React from 'react';
import Avatar, {SIZE, ICON_TYPE} from '../Avatar';
import DocsBlock from '../../../docs/DocsBlock';
import ContrastBox from '../../../docs/ContrastBox';

const Avatars = () =>
  <div>
    <DocsBlock info='Default avatars' toBottom={true}>
      {Object.values(SIZE).map(
        (size, index) => <Avatar key={index} size={size} iconType={ICON_TYPE.friends}/>
      )}
    </DocsBlock>
    <DocsBlock info='Default with border'>
      <ContrastBox toBottom={true}>
        {Object.values(SIZE).map(
          (size, index) => <Avatar key={index} size={size} iconType={ICON_TYPE.friends} border={true}/>
        )}
      </ContrastBox>
    </DocsBlock>
    <DocsBlock info='Default avatars' toBottom={true}>
      {Object.values(SIZE).map(
        (size, index) => <Avatar key={index} size={size} imgSrc="https://source.unsplash.com/240x240/?man"/>
      )}
    </DocsBlock>
    <DocsBlock info='Default with border'>
      <ContrastBox toBottom={true}>
        {Object.values(SIZE).map(
          (size, index) =>
            <Avatar key={index} size={size} border={true} imgSrc="https://source.unsplash.com/240x240/?man"/>
        )}
      </ContrastBox>
    </DocsBlock>
  </div>;


export default Avatars;
