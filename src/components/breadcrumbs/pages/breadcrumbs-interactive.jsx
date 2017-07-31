import React from 'react';
import DocsActiveBlock from 'components/DocsActiveBlock';
import Breadcrumb from '../Breadcrumb';
const elements = ['Comments (9)', 'Report', 'Follow'];

const Breadcrumbs = () => {

  const settings = [
    {
      name: 'short',
      values: Boolean
    },
    {
      name: 'adaptive',
      values: Boolean
    }
  ];

  return <div>
    <DocsActiveBlock settings={settings}>
      <Breadcrumb elements={elements}/>
    </DocsActiveBlock>
  </div>;
};

export default Breadcrumbs;
