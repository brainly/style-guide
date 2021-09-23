import * as React from 'react';
import {StoryVariant} from '../../_docs/utils';
import FlashMessage from './FlashMessage';

export default {
  title: 'Components/FlashMessage',
  parameters: {
    component: FlashMessage,
  },
  args: {
    text: 'I have never seen a code like this before...',
  },
};

export const Default = args => {
  return <FlashMessage {...args} />;
};

export const Types = args => (
  <div>
    {['default', 'success', 'error', 'info'].map(type => (
      <StoryVariant label={`type - ${type}`} key={type}>
        <FlashMessage {...args} type={type} />
      </StoryVariant>
    ))}
  </div>
);
