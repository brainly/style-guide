import * as React from 'react';
import Icon, {TYPE, ICON_TAG_TYPE, ICON_COLOR, SIZE} from './Icon';
import Flex from '../flex/Flex';
import {StoryVariant} from '../../_docs/utils';

export default {
  title: 'Components/Icon',
  parameters: {
    component: Icon,
  },
  argTypes: {
    type: {control: {type: 'select', options: TYPE}},
    tagType: {control: {type: 'select', options: ICON_TAG_TYPE}},
    size: {control: {type: 'select', options: SIZE}},
    color: {control: {type: 'select', options: ICON_COLOR}},
    className: {control: {type: 'text'}},
  },
  args: {
    type: TYPE.ACADEMIC_CAP,
    color: ICON_COLOR.ADAPTIVE,
  },
};

export const Default = args => <Icon {...args} />;

export const Colors = args => (
  <Flex wrap>
    {Object.values(ICON_COLOR).map(color => (
      <StoryVariant label={`color - ${color}`} width={200} key={color}>
        {color === 'LIGHT' ? (
          <div className="sg-story-variant-dark-box">
            <Icon {...args} color={color} />
          </div>
        ) : (
          <Icon {...args} color={color} />
        )}
      </StoryVariant>
    ))}
  </Flex>
);

export const Sizes = args => (
  <div>
    {Object.values(SIZE).map(size => (
      <StoryVariant label={`size - ${size}`} width={200} key={size}>
        <Icon {...args} size={size} />
      </StoryVariant>
    ))}
  </div>
);

export const Types = args => (
  <Flex wrap>
    {Object.values(TYPE).map(type => (
      <StoryVariant label={`type- ${type}`} width={200} key={type}>
        <Icon {...args} type={type} />
      </StoryVariant>
    ))}
  </Flex>
);
