import * as React from 'react';
import Counter, {COUNTER_SIZE, COUNTER_COLOR} from '../Counter';
import DocsActiveBlock from 'components/DocsActiveBlock';

const Counters = () => {
  const settings = [
    {
      name: 'size',
      values: COUNTER_SIZE,
    },
    {
      name: 'color',
      values: COUNTER_COLOR,
    },
    {
      name: 'withAnimation',
      values: Boolean,
    },
  ];

  return (
    <div>
      <DocsActiveBlock settings={settings} backgroundColor="dark">
        <Counter size="xs">1</Counter>
      </DocsActiveBlock>
    </div>
  );
};

export default Counters;
