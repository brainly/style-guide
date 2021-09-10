import * as React from 'react';
import Textarea, {TEXTAREA_COLOR, SIZE} from './Textarea';
import {StoryVariant, StoryVariantBorderBox} from '../../../.storybook/utils';

export default {
  title: 'Components/Textarea',
  parameters: {
    component: Textarea,
  },
  argTypes: {
    type: {
      control: {
        disable: true,
      },
    },
    value: {
      control: {
        type: 'text',
      },
    },
    errorMessage: {
      control: {
        type: 'text',
      },
    },
  },
  args: {
    value: '',
    placeholder: 'placeholder',
  },
};

export const Default = args => <Textarea {...args} />;

export const Colors = args => (
  <div>
    {Object.values(TEXTAREA_COLOR).map(color => (
      <StoryVariant label={`color - ${color}`} key={color}>
        {color === 'WHITE' ? (
          <div className="sg-story-variant-dark-box">
            <Textarea {...args} color={color} />
          </div>
        ) : (
          <Textarea {...args} color={color} />
        )}
      </StoryVariant>
    ))}
  </div>
);

export const Sizes = args => (
  <div>
    {Object.values(SIZE).map(size => (
      <StoryVariant label={`size - ${size}`} key={size}>
        <Textarea {...args} size={size} />
      </StoryVariant>
    ))}
  </div>
);

export const Valid = args => <Textarea {...args} valid />;

export const Invalid = args => (
  <Textarea {...args} invalid errorMessage="some error" />
);

export const FullWidth = args => (
  <StoryVariantBorderBox>
    <Textarea {...args} fullWidth />
  </StoryVariantBorderBox>
);

export const Simple = args => <Textarea {...args} simple />;

export const NoPadding = args => <Textarea {...args} noPadding />;

export const AutoHeight = args => <Textarea {...args} autoHeight />;
