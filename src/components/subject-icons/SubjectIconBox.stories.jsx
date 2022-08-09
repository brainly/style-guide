import * as React from 'react';
import {StoryVariant} from '../../docs/utils';
import Flex from '../flex/Flex';
import SubjectIconBox, {TYPE, SIZE} from './SubjectIconBox';

export default {
  title: 'Components/SubjectIconBox',
  component: SubjectIconBox,
  argTypes: {
    type: {
      control: {type: 'select', options: TYPE},
    },
    size: {
      control: {type: 'select', options: SIZE},
    },
  },
  args: {
    type: TYPE.ACCOUNTANCY,
  },
};

export const Default = args => <SubjectIconBox {...args} />;

export const Types = args => (
  <Flex wrap>
    {Object.values(TYPE).map(type => (
      <StoryVariant label={`type - ${type}`} width={200} key={type}>
        <SubjectIconBox {...args} type={type} />
      </StoryVariant>
    ))}
  </Flex>
);

export const Sizes = args => (
  <div>
    {Object.values(SIZE).map(size => (
      <StoryVariant label={`size - ${size}`} key={size}>
        <SubjectIconBox {...args} size={size} />
      </StoryVariant>
    ))}
  </div>
);

export const Darker = args => (
  <Flex wrap>
    {Object.values(TYPE).map(type => (
      <StoryVariant label={`type - ${type}`} width={200} key={type}>
        <SubjectIconBox {...args} type={type} darker />
      </StoryVariant>
    ))}
  </Flex>
);
