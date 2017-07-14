import React from 'react';
import DocsBlock from '../../../docs/DocsBlock';
import Header from '../Header';
import HomeButton from '../../home-button/HomeButton';

const Headers = () =>
  <div>
    <DocsBlock info="Standard">
      <Header left="left" middle="middle" right="right"/>
    </DocsBlock>
    <DocsBlock info="Example usage">
      <Header left={<HomeButton/>}/>
    </DocsBlock>
    <DocsBlock info="Light">

    </DocsBlock>
    <DocsBlock info="Fixed header">

    </DocsBlock>
  </div>;

export default Headers;
