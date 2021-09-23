import * as React from 'react';
import Counter, {COUNTER_SIZE} from './Counter';
import {TYPE as ICON_TYPE} from '../icons/Icon';
import Flex from '../flex/Flex';
import {StoryVariant} from '../../_docs/utils';

export default {
  title: 'Components/Counter',
  parameters: {
    component: Counter,
  },
  args: {
    children: '25',
    size: 'xs',
  },
  argTypes: {
    size: {control: {type: 'select', options: COUNTER_SIZE}},
    withAnimation: {control: 'boolean'},
    icon: {control: {type: 'select', options: Object.values(ICON_TYPE)}},
  },
};

export const Default = args => <Counter {...args} />;

export const Sizes = args => (
  <div>
    {Object.values(COUNTER_SIZE).map(size => (
      <StoryVariant key={size} label={`size - ${size}`}>
        <Counter {...args} size={size}>
          1
        </Counter>
        <Counter {...args} size={size}>
          12345
        </Counter>
      </StoryVariant>
    ))}
  </div>
);

export const WithIcon = args => (
  <Flex wrap>
    {Object.values(ICON_TYPE).map(icon => (
      <StoryVariant width={200} label={`icon - ${icon}`} key={icon}>
        <Counter {...args} icon={icon}>
          123
        </Counter>
      </StoryVariant>
    ))}
  </Flex>
);
