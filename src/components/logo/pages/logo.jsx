import React from 'react';
import DocsBlock from 'components/DocsBlock';
import Logo, {TYPE} from '../Logo';

const Logos = () => (
  <div>
    <DocsBlock info="Brainly - default">
      <Logo />
    </DocsBlock>
    <DocsBlock info="Eodev">
      <Logo type={TYPE.EODEV} />
    </DocsBlock>
    <DocsBlock info="Nosdevoirs">
      <Logo type={TYPE.NOSDEVOIRS} />
    </DocsBlock>
    <DocsBlock info="Znanija">
      <Logo type={TYPE.ZNANIJA} />
    </DocsBlock>
    <DocsBlock info="Znanija Plus">
      <Logo type={TYPE.ZNANIJA_PLUS} />
    </DocsBlock>
    <DocsBlock info="Znanija Plus Inverse">
      <Logo type={TYPE.ZNANIJA_PLUS_INVERSE} />
    </DocsBlock>
    <DocsBlock info="Znanija Plus Small">
      <Logo type={TYPE.ZNANIJA_PLUS_SMALL} />
    </DocsBlock>
    <DocsBlock info="Brainly Plus">
      <Logo type={TYPE.BRAINLY_PLUS} />
    </DocsBlock>
    <DocsBlock info="Brainly Plus Inverse">
      <Logo type={TYPE.BRAINLY_PLUS_INVERSE} />
    </DocsBlock>
    <DocsBlock info="Brainly Plus Small">
      <Logo type={TYPE.BRAINLY_PLUS_SMALL} />
    </DocsBlock>
  </div>
);

export default Logos;
