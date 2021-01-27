import * as React from 'react';
import Radio, {RADIO_SIZE} from '../Radio';
import DocsActiveBlock from 'components/DocsActiveBlock';

const Radios = () => {
  const settings = [
    {
      name: 'checked',
      values: Boolean,
    },
    {
      name: 'size',
      values: RADIO_SIZE,
    },
  ];

  return (
    <div>
      <DocsActiveBlock settings={settings}>
        <Radio>Radio</Radio>
      </DocsActiveBlock>
    </div>
  );
};

export default Radios;
