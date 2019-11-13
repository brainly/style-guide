import React from 'react';
import DocsBlock from 'components/DocsBlock';
import Counter from '../Counter';

const Counters = () => (
  <div>
    <DocsBlock info="Basic counter">
      <Counter type="basic">1</Counter>
      <Counter type="basic">123455</Counter>
      <Counter type="basic" withAnimation>
        12
      </Counter>
    </DocsBlock>
    <DocsBlock info="Basic counter small">
      <Counter type="basic" size="small">
        5
      </Counter>
      <Counter type="basic" size="small">
        55
      </Counter>
      <Counter type="basic" size="small" withAnimation>
        5
      </Counter>
    </DocsBlock>

    <DocsBlock info="Points counter">
      <Counter type="points">+5 pts</Counter>
    </DocsBlock>
    <DocsBlock info="Points counter small">
      <Counter type="points" size="small">
        +10
      </Counter>
    </DocsBlock>
  </div>
);

export default Counters;
