import * as React from 'react';
import {StoryVariant} from '../../../.storybook/utils';
import Search, {SIZE, COLOR} from './Search';

export default {
  title: 'Components/Search',
  parameters: {
    component: Search,
  },
  argTypes: {
    className: {
      control: {
        type: 'text',
      },
    },
    fullWidth: {
      control: {
        type: 'boolean',
      },
    },
    size: {control: {type: 'select', options: SIZE}},
    color: {control: {type: 'select', options: COLOR}},
    placeholder: {control: {type: 'text'}},
  },
  args: {
    placeholder: 'Find all the answers...',
  },
};

export const Default = args => <Search {...args} />;

export const Sizes = args => (
  <div>
    {Object.values(SIZE).map(size => (
      <StoryVariant label={`size - ${size}`} key={size}>
        <Search {...args} size={size} />
      </StoryVariant>
    ))}
  </div>
);

export const RoundedButton = args => <Search {...args} withRoundButton />;
