import * as React from 'react';
import {StoryVariant, StoryVariantBorderBox} from '../../_docs/utils';
import Bubble, {DIRECTION, ALIGNMENT, BUBBLE_COLOR} from './Bubble';

export default {
  title: 'Layout/Bubble',
  parameters: {
    component: Bubble,
  },
  argTypes: {
    direction: {control: {type: 'select', options: DIRECTION}},
    color: {control: {type: 'select', options: BUBBLE_COLOR}},
    alignment: {control: {type: 'select', options: ALIGNMENT}},
    full: {control: 'boolean'},
    noShadow: {control: 'boolean'},
    children: {
      control: {disable: true},
    },
  },
  args: {
    direction: DIRECTION.TOP,
    alignment: ALIGNMENT.CENTER,
    children: (
      <span>
        Hi there!!
        <br />
        Just wondering if you have any problems with your school work.
      </span>
    ),
  },
};

export const Default = args => <Bubble {...args} full />;

export const Colors = args => (
  <div>
    {Object.values(BUBBLE_COLOR).map(color => (
      <StoryVariant key={color} label={`color - ${color}`}>
        <Bubble {...args} color={color} />
      </StoryVariant>
    ))}
  </div>
);

export const Directions = args => (
  <div>
    {Object.values(DIRECTION).map(direction => (
      <StoryVariant label={`direction - ${direction}`} key={direction}>
        <Bubble {...args} direction={direction} />
      </StoryVariant>
    ))}
  </div>
);

Directions.args = {
  color: BUBBLE_COLOR.BLUE,
};

export const Alignments = args => (
  <div>
    {Object.values(ALIGNMENT).map(alignment => (
      <StoryVariant label={`alignment - ${alignment}`} key={alignment}>
        <Bubble {...args} alignment={alignment} />
      </StoryVariant>
    ))}
  </div>
);

Alignments.args = {
  color: BUBBLE_COLOR.BLUE,
};

export const FullHeight = args => (
  <StoryVariantBorderBox height="250px">
    <Bubble {...args} full />
  </StoryVariantBorderBox>
);

FullHeight.args = {
  color: BUBBLE_COLOR.BLUE,
};

export const NoShadow = args => <Bubble {...args} noShadow />;

NoShadow.args = {
  color: BUBBLE_COLOR.BLUE,
};
