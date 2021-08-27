import * as React from 'react';
import FlashMessage from './FlashMessage';

export default {
  title: 'Components/FlashMessage',
  parameters: {
    component: FlashMessage,
  },
};

export const Default = args => {
  return <FlashMessage {...args} />;
};

Default.args = {
  text: 'I have never seen a code like this before...',
};
