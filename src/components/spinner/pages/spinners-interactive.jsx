import * as React from 'react';
import Spinner, {SPINNER_SIZE, SPINNER_COLOR} from '../Spinner';
import DocsActiveBlock from 'components/DocsActiveBlock';

const Spinners = () => {
  const settings = [
    {
      name: 'size',
      values: SPINNER_SIZE,
    },
    {
      name: 'color',
      values: SPINNER_COLOR,
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
