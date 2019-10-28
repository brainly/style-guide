import React from 'react';
import DocsBlock from 'components/DocsBlock';
import Counter from '../Counter';

const Counters = () => (
  <div>
    <DocsBlock info="Notifications counter">
      <Counter type="basic" size="small">
        1
      </Counter>
      <Counter type="basic">123455</Counter>
      <Counter type="basic" withAnimation>
        12
      </Counter>
    </DocsBlock>

    <DocsBlock info="Points counter">
      <Counter type="points" withPointer>
        5 pts
      </Counter>
      <Counter type="points" size="small">
        10
      </Counter>
    </DocsBlock>
  </div>
);

export default Counters;
