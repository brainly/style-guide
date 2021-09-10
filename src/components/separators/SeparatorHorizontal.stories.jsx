import * as React from 'react';
import SeparatorHorizontal, {TYPE} from './SeparatorHorizontal';
import {StoryVariant} from '../../../.storybook/utils';

export default {
  title: 'Components/separators/SeparatorHorizontal',
  parameters: {
    component: SeparatorHorizontal,
  },
};

export const Default = args => {
  return (
    <div>
      above
      <SeparatorHorizontal {...args} />
      below
    </div>
  );
};

export const Types = args => (
  <div>
    {Object.values(TYPE).map(type => (
      <StoryVariant label={`type - ${type}`} key={type}>
        <div>
          above
          <SeparatorHorizontal {...args} type={type} />
          below
        </div>
      </StoryVariant>
    ))}
  </div>
);

export const Colors = args => (
  <div>
    <StoryVariant label="color - white">
      <div className="sg-story-variant-dark-box">
        above
        <SeparatorHorizontal {...args} white />
        below
      </div>
    </StoryVariant>
    <StoryVariant label="color - gray dark">
      <div>
        above
        <SeparatorHorizontal {...args} grayDark />
        below
      </div>
    </StoryVariant>
  </div>
);
