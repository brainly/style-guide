import * as React from 'react';
import {StoryVariant} from '../../_docs/utils';
import Radio, {RADIO_SIZE} from './Radio';

export default {
  title: 'Components/Form/Radio',
  parameters: {
    component: Radio,
  },
  args: {
    children: 'Radio',
  },
};

export const Default = args => <Radio {...args} />;

export const Checked = args => <Radio {...args} checked />;

export const Sizes = args => (
  <div>
    {Object.values(RADIO_SIZE).map(size => (
      <StoryVariant label={`size - ${size}`} key={size}>
        <Radio {...args} size={size} />
      </StoryVariant>
    ))}
  </div>
);
