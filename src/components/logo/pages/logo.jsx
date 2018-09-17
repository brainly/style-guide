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
    <DocsBlock info="Brainly Plus">
      <Logo type={TYPE.BRAINLY_PLUS} />
    </DocsBlock>
    <DocsBlock info="Brainly Plus White">
      <Logo type={TYPE.BRAINLY_PLUS_WHITE} />
    </DocsBlock>
    <DocsBlock info="Brainly Plus Large">
      <Logo type={TYPE.BRAINLY_PLUS_LARGE} />
    </DocsBlock>
  </div>
);

export default Logos;
