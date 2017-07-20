import React from 'react';
import DocsBlock from 'DocsBlock';
import ContrastBox from 'ContrastBox';
import HomeButton, {TYPE} from '../HomeButton';

const Logos = () =>
  <div>
    <DocsBlock info="Brainly - default">
      <ContrastBox smallPadding={true}>
        <HomeButton/>
      </ContrastBox>
    </DocsBlock>
    <DocsBlock info="Eodev">
      <ContrastBox smallPadding={true}>
        <HomeButton type={TYPE.EODEV}/>
      </ContrastBox>
    </DocsBlock>
    <DocsBlock info="Nosdevoirs">
      <ContrastBox smallPadding={true}>
        <HomeButton type={TYPE.NOSDEVOIRS}/>
      </ContrastBox>
    </DocsBlock>
    <DocsBlock info="Znanija">
      <ContrastBox smallPadding={true}>
        <HomeButton type={TYPE.ZNANIJA}/>
      </ContrastBox>
    </DocsBlock>
  </div>;

export default Logos;
