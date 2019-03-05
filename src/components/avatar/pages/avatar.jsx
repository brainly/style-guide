import React from 'react';
import Avatar, {SIZE} from '../Avatar';
import DocsBlock from 'components/DocsBlock';
import ContrastBox from 'components/ContrastBox';

// this are actual sizes currently used - refactor of the namespaces is needed to remove XXLARGE
const sizesToShow = [SIZE.SMALL, SIZE.NORMAL, SIZE.LARGE, SIZE.XLARGE, SIZE.XXXLARGE];

const Avatars = () => (
  <div>
    <DocsBlock info="Default avatars" toBottom>
      {Object.values(sizesToShow).map(
        (size, index) => <Avatar key={index} size={size} />
      )}
    </DocsBlock>
    <DocsBlock info="Default with border">
      <ContrastBox toBottom>
        {Object.values(sizesToShow).map(
          (size, index) => <Avatar key={index} size={size} border />
        )}
      </ContrastBox>
    </DocsBlock>
    <DocsBlock info="Default avatars" toBottom>
      {Object.values(sizesToShow).map(
        (size, index) => <Avatar key={index} size={size} imgSrc="https://source.unsplash.com/240x240/?cat" />
      )}
    </DocsBlock>
    <DocsBlock info="Default with border">
      <ContrastBox toBottom>
        {Object.values(sizesToShow).map(
          (size, index) =>
            <Avatar key={index} size={size} border imgSrc="https://source.unsplash.com/240x240/?dog" />
        )}
      </ContrastBox>
    </DocsBlock>
  </div>
);

export default Avatars;
