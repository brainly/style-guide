import React from 'react';
import DocsBlock from '../../../docs/DocsBlock';
import Logo, {TYPE} from '../Logo';

const Logos = () =>
  <div>
    <DocsBlock info="Brainly - default">
      <Logo/>
    </DocsBlock>
    <DocsBlock info="Eodev">
      <Logo type={TYPE.EODEV}/>
    </DocsBlock>
    <DocsBlock info="Nosdevoirs">
      <Logo type={TYPE.NOSDEVOIRS}/>
    </DocsBlock>
    <DocsBlock info="Znanija">
      <Logo type={TYPE.ZNANIJA}/>
    </DocsBlock>
  </div>;

export default Logos;
