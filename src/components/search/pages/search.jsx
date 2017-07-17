import React from 'react';
import Search, {SIZE, COLOR} from '../Search';
import DocsBlock from '../../../docs/DocsBlock';
import ContrastBox from '../../../docs/ContrastBox';

const searches = () => <div>
  <DocsBlock info="Standard">
    <Search placeholder="Find all the answers..."/>
  </DocsBlock>
  <DocsBlock info="Large size">
    <Search placeholder="Find all the answers..." size={SIZE.LARGE}/>
  </DocsBlock>
  <DocsBlock info="Full width">
    <Search placeholder="Find all the answers..." fullWidth={true}/>
  </DocsBlock>
  <DocsBlock info="Light">
    <ContrastBox fullWidth={true}>
      <Search placeholder="Find all the answers..." fullWidth={true} color={COLOR.LIGHT} adaptiveIco={true}/>
    </ContrastBox>
  </DocsBlock>
  <DocsBlock info="No border">
    <Search placeholder="Find all the answers..." fullWidth={true} noBorder={true}/>
  </DocsBlock>
</div>;

export default searches;
