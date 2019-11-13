import React from 'react';
import DocsBlock from 'components/DocsBlock';
import Counter from '../Counter';
import Text from '../../text/Text';

const Counters = () => (
  <div>
    <DocsBlock info="Counter">
      <Counter>1</Counter>
      <Counter>123455</Counter>
      <Counter withAnimation>12</Counter>
    </DocsBlock>
    <DocsBlock info="Counter small">
      <Counter size="small">5</Counter>
      <Counter size="small">55</Counter>
      <Counter size="small" withAnimation>
        5
      </Counter>
    </DocsBlock>

    <DocsBlock info="Counter with icon">
      <Counter icon="points">
        +10{' '}
        <Text type="span" size="small" color="gray-secondary" weight="bold">
          pts
        </Text>
      </Counter>
    </DocsBlock>
    <DocsBlock info="Counter small with icon">
      <Counter icon="points" size="small">
        +10
      </Counter>
    </DocsBlock>
  </div>
);

export default Counters;
