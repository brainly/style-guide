import React from 'react';
import Checkbox from '../Checkbox';
import DocsActiveBlock from 'components/DocsActiveBlock';

const Checkboxes = () => {
  const settings = [
    {
      name: 'checked',
      values: Boolean
    }
  ];

  return <div>
    <DocsActiveBlock settings={settings}>
      <Checkbox/>
    </DocsActiveBlock>
  </div>;
};

export default Checkboxes;
