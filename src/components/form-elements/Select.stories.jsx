import * as React from 'react';
import {StoryVariant, StoryVariantBorderBox} from '../../_docs/utils';
import Select, {COLOR, SIZE} from './Select';

export default {
  title: 'Components/Form/Select',
  parameters: {
    component: Select,
  },
  argTypes: {
    options: {
      control: {
        disable: true,
      },
    },
  },
  args: {
    options: [
      {
        value: '1',
        text: 'option 1',
      },
      {
        value: '2',
        text: 'option 2',
      },
    ],
  },
};

export const Default = args => <Select {...args} />;

export const Valid = args => <Select {...args} valid />;

export const Invalid = args => <Select {...args} invalid />;

export const Capitalized = args => <Select {...args} capitalized />;

export const Colors = args => (
  <div>
    {Object.values(COLOR).map(color => {
      return (
        <StoryVariant label={`color - ${color}`} key={color}>
          {color === 'WHITE' ? (
            <div className="sg-story-variant-dark-box">
              <Select {...args} color={color} />
            </div>
          ) : (
            <Select {...args} color={color} />
          )}
        </StoryVariant>
      );
    })}
  </div>
);

export const Sizes = args => (
  <div>
    {Object.values(SIZE).map(size => (
      <StoryVariant label={`size - ${size}`} key={size}>
        <Select {...args} size={size} />
      </StoryVariant>
    ))}
  </div>
);

export const FullWidth = args => (
  <StoryVariantBorderBox>
    <Select {...args} fullWidth />
  </StoryVariantBorderBox>
);
