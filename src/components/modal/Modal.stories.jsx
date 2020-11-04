import React from 'react';
import Modal from './Modal';

export default {
  title: 'Components/Modal',
  parameters: {
    component: Modal,
  },
};

// For iframe stories like this one, args controls don't update underlying component
// https://github.com/storybookjs/storybook/issues/11908

export const Default = args => <Modal {...args} />;

Default.parameters = {
  docs: {
    inlineStories: false,
    iframeHeight: '300px',
  },
};

Default.args = {
  children: 'Modal window',
  lead: true,
  closeModal: () => null,
};

Default.argTypes = {
  children: {
    control: null,
  },
};
