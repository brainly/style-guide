import React from 'react';
import Spinner from '../Spinner';
import DocsActiveBlock from 'components/DocsActiveBlock';

const Spinners = () => {
  const settings = [
    {
      name: 'gray',
      values: Boolean
    }
  ];

  return (
    <div>
      <DocsActiveBlock settings={settings} backgroundColor="none">
        <Spinner />
      </DocsActiveBlock>
    </div>
  );
};

export default Spinners;
