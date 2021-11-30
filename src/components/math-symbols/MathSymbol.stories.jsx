import * as React from 'react';
import {StoryVariant} from '../../_docs/utils';
import MathSymbol, {MATH_SYMBOL_TYPE, ICON_COLOR, SIZE} from './MathSymbol';
import Flex from '../flex/Flex';

export default {
  title: 'Components/MathSymbol',
  parameters: {
    component: MathSymbol,
  },
  argTypes: {
    color: {
      control: {type: 'select', options: ICON_COLOR},
    },
  },
  args: {
    type: MATH_SYMBOL_TYPE.ALPHA,
    color: ICON_COLOR.ADAPTIVE,
  },
};

export const Default = args => <MathSymbol {...args} />;

export const Types = args => (
  <Flex wrap>
    {Object.values(MATH_SYMBOL_TYPE).map(type => (
      <StoryVariant label={`type - ${type}`} width={200} key={type}>
        <MathSymbol {...args} type={type} />
      </StoryVariant>
    ))}
  </Flex>
);

export const Sizes = args => (
  <div>
    {Object.values(SIZE).map(size => (
      <StoryVariant label={`size - ${size}`} key={size}>
        <MathSymbol {...args} size={size} />
      </StoryVariant>
    ))}
  </div>
);

export const Colors = args => (
  <Flex wrap>
    {Object.values(ICON_COLOR).map(color => (
      <StoryVariant label={color} color={color} width={200} key={color}>
        {color === 'icon-white' ? (
          <div className="sg-story-variant-dark-box">
            <MathSymbol {...args} size={color} />
          </div>
        ) : (
          <MathSymbol {...args} size={color} />
        )}
      </StoryVariant>
    ))}
  </Flex>
);
