import React from 'react';
import Avatar, {SIZE} from '../Avatar';
import DocsBlock from 'components/DocsBlock';
import ContrastBox from 'components/ContrastBox';

const Avatars = () =>
  <div>
    <DocsBlock info='Default avatars' toBottom={true}>
      {Object.values(SIZE).map(
        (size, index) => <Avatar key={index} size={size}/>
      )}
    </DocsBlock>
    <DocsBlock info='Default with border'>
      <ContrastBox toBottom={true}>
        {Object.values(SIZE).map(
          (size, index) => <Avatar key={index} size={size} border={true}/>
        )}
      </ContrastBox>
    </DocsBlock>
    <DocsBlock info='Default avatars' toBottom={true}>
      {Object.values(SIZE).map(
        (size, index) => <Avatar key={index} size={size} imgSrc="https://source.unsplash.com/240x240/?cat"/>
      )}
    </DocsBlock>
    <DocsBlock info='Default with border'>
      <ContrastBox toBottom={true}>
        {Object.values(SIZE).map(
          (size, index) =>
            <Avatar key={index} size={size} border={true} imgSrc="https://source.unsplash.com/240x240/?dog"/>
        )}
      </ContrastBox>
    </DocsBlock>
  </div>;

export default Avatars;
