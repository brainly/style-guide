import React from 'react';
import Counter, {COUNTER_TYPE, COUNTER_SIZE} from '../Counter';
import DocsActiveBlock from 'components/DocsActiveBlock';

const Counters = () => {
  const settings = [
    {
      name: 'type',
      values: COUNTER_TYPE,
    },
    {
      name: 'size',
      values: COUNTER_SIZE,
    },
    {
      name: 'withAnimation',
      values: Boolean,
    },
  ];

  return (
    <div>
      <DocsActiveBlock settings={settings} backgroundColor="dark">
        <Counter type="basic" size="normal">
          1
        </Counter>
      </DocsActiveBlock>
    </div>
  );
};

export default Counters;
