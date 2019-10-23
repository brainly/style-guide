import React from 'react';
import DocsBlock from 'components/DocsBlock';
import Counter from '../Counter';

const Counters = () => (
  <div>
    <DocsBlock info="Default">
      <Counter textCounter color="peach">
        1
      </Counter>
    </DocsBlock>
  </div>
);

export default Counters;
