import React from 'react';
import HomeButton, {TYPE} from '../HomeButton';
import DocsActiveBlock from 'components/DocsActiveBlock';

const HomeButtons = () => {
  const settings = [
    {
      name: 'type',
      values: TYPE
    },
    {
      name: 'href',
      values: String
    }
  ];

  return <div>
    <DocsActiveBlock settings={settings}>
      <HomeButton href="https://brainly.com"/>
    </DocsActiveBlock>
  </div>;
};

export default HomeButtons;
