import React from 'react';
import Counter, {COUNTER_SIZE} from './Counter';
import {TYPE as ICON_TYPE} from '../icons/Icon';
import Flex from '../flex/Flex';

export default {
  title: 'Components/Counter',
  parameters: {
    component: Counter,
  },
};

export const Default = args => {
  const {children} = args;

  return <Counter {...args}>{children}</Counter>;
};

Default.args = {
  children: '25',
};

Default.argTypes = {
  size: {control: {type: 'select', options: COUNTER_SIZE}},
  withAnimation: {control: 'boolean'},
  icon: {control: {type: 'select', options: Object.values(ICON_TYPE)}},
};

export const Sizes = () => (
  <div>
    <Flex alignItems="flex-end">
      <Flex marginLeft="xs">
        <Counter size="xs">1</Counter>
      </Flex>
      <Flex marginLeft="xs">
        <Counter size="xs">12345</Counter>
      </Flex>
      <Flex marginLeft="xs">
        <Counter size="xxs">1</Counter>
      </Flex>
      <Flex marginLeft="xs">
        <Counter size="xxs">12345</Counter>
      </Flex>
    </Flex>
  </div>
);

export const WithIcon = () => (
  <div>
    <Flex alignItems="flex-end">
      <Flex marginLeft="xs">
        <Counter size="xs" icon="points">
          1
        </Counter>
      </Flex>
      <Flex marginLeft="xs">
        <Counter size="xs" icon="points">
          12345
        </Counter>
      </Flex>
      <Flex marginLeft="xs">
        <Counter size="xxs" icon="points">
          1
        </Counter>
      </Flex>
      <Flex marginLeft="xs">
        <Counter size="xxs" icon="points">
          12345
        </Counter>
      </Flex>
    </Flex>
  </div>
);
