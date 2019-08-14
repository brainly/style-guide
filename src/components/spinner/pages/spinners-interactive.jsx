import React from 'react';
import Spinner, {SPINNER_SIZE} from '../Spinner';
import DocsActiveBlock from 'components/DocsActiveBlock';

const Spinners = () => {
  const settings = [
    {
      name: 'size',
      values: SPINNER_SIZE,
    },
    {
      name: 'light',
      values: Boolean,
    },
  ];

  return (
    <div>
      <DocsActiveBlock settings={settings} backgroundColor="light">
        <Spinner />
      </DocsActiveBlock>
    </div>
  );
};

export default Spinners;
