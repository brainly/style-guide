import React from 'react';
import Logo, {TYPE} from '../Logo';
import DocsActiveBlock from 'components/DocsActiveBlock';

const Logos = () => {
  const settings = [
    {
      name: 'type',
      values: TYPE
    }
  ];

  return <div>
    <DocsActiveBlock settings={settings}>
      <Logo/>
    </DocsActiveBlock>
  </div>;
};

export default Logos;
