import React from 'react';
import Search, {SIZE, COLOR} from '../Search';
import DocsBlock from 'components/DocsBlock';
import ContrastBox from 'components/ContrastBox';

const searches = () => (
  <div>
    <DocsBlock info="Standard">
      <Search placeholder="Find all the answers..." />
    </DocsBlock>
    <DocsBlock info="Large size">
      <Search placeholder="Find all the answers..." size={SIZE.LARGE} />
    </DocsBlock>
    <DocsBlock info="Full width">
      <Search placeholder="Find all the answers..." fullWidth />
    </DocsBlock>
    <DocsBlock info="Light">
      <ContrastBox fullWidth>
        <Search
          placeholder="Find all the answers..."
          fullWidth
          color={COLOR.LIGHT}
          adaptiveIco
        />
      </ContrastBox>
    </DocsBlock>
    <DocsBlock info="No border">
      <Search placeholder="Find all the answers..." fullWidth noBorder />
    </DocsBlock>
  </div>
);

export default searches;
