import React from 'react';
import Avatar, {sizes, iconTypes} from '../avatar';
import DocsBlock from '../../../docs/DocsBlock';
import ContrastBox from '../../../docs/ContrastBox';

const Avatars = () =>
  <div>
    <DocsBlock info='Default avatars' toBottom={true}>
      {Object.values(sizes).map(
        size => <Avatar key={size} size={size} iconType={iconTypes.friends}/>
      )}
    </DocsBlock>
    <DocsBlock info='Default with border'>
      <ContrastBox toBottom={true}>
        {Object.values(sizes).map(
          size => <Avatar key={size} size={size} iconType={iconTypes.friends} border={true}/>
        )}
      </ContrastBox>
    </DocsBlock>
    <DocsBlock info='Default avatars' toBottom={true}>
      {Object.values(sizes).map(
        size => <Avatar key={size} size={size} imgSrc="https://source.unsplash.com/240x240/?man"/>
      )}
    </DocsBlock>
    <DocsBlock info='Default with border'>
      <ContrastBox toBottom={true}>
        {Object.values(sizes).map(
          size => <Avatar key={size} size={size} border={true} imgSrc="https://source.unsplash.com/240x240/?man"/>
        )}
      </ContrastBox>
    </DocsBlock>
  </div>;


export default Avatars;
