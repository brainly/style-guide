import React from 'react';
import Radio from '../Radio';
import DocsActiveBlock from 'components/DocsActiveBlock';

const Radios = () => {
  const settings = [
    {
      name: 'checked',
      values: Boolean
    }
  ];

  return (
    <div>
      <DocsActiveBlock settings={settings}>
        <Radio />
      </DocsActiveBlock>
    </div>
  );
};

export default Radios;
