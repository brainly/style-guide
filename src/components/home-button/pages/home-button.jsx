import React from 'react';
import DocsBlock from 'components/DocsBlock';
import ContrastBox from 'components/ContrastBox';
import HomeButton, {TYPE} from '../HomeButton';

const Logos = () =>
  <div>
    <DocsBlock info="Brainly - default">
      <ContrastBox smallPadding>
        <HomeButton />
      </ContrastBox>
    </DocsBlock>
    <DocsBlock info="Eodev">
      <ContrastBox smallPadding>
        <HomeButton type={TYPE.EODEV} />
      </ContrastBox>
    </DocsBlock>
    <DocsBlock info="Nosdevoirs">
      <ContrastBox smallPadding>
        <HomeButton type={TYPE.NOSDEVOIRS} />
      </ContrastBox>
    </DocsBlock>
    <DocsBlock info="Znanija">
      <ContrastBox smallPadding>
        <HomeButton type={TYPE.ZNANIJA} />
      </ContrastBox>
    </DocsBlock>
    <DocsBlock info="Brainly Plus">
      <ContrastBox smallPadding>
        <HomeButton type={TYPE.BRAINLY_PLUS} />
      </ContrastBox>
    </DocsBlock>
  </div>;

export default Logos;
