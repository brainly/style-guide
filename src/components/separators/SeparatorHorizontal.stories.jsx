import * as React from 'react';
import SeparatorHorizontal, {TYPE, COLORS_MAP} from './SeparatorHorizontal';
import {StoryVariant} from '../../docs/utils';

export default {
  title: 'Components/separators/SeparatorHorizontal',
  component: SeparatorHorizontal,
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
    {Object.values(COLORS_MAP).map(color => (
      <StoryVariant label={`color - ${color}`} key={color}>
        {color === 'white' ? (
          <div className="sg-story-variant-dark-box">
            above
            <SeparatorHorizontal {...args} color={color} />
            below
          </div>
        ) : (
          <div>
            above
            <SeparatorHorizontal {...args} color={color} />
            below
          </div>
        )}
      </StoryVariant>
    ))}
  </div>
);
