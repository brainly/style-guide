import React from 'react';
import Modal from './Modal';

export default {
  title: 'Components/Modal',
  parameters: {
    component: Modal,
    actions: {argTypesRegex: '^closeModal|on.*'},
  },
  // we need this for functions with default value until this bug is fixed
  // https://github.com/storybookjs/storybook/issues/12120
  argTypes: {
    closeModal: {defaultValue: null},
    onOverlayClick: {defaultValue: null},
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
};

Default.argTypes = {
  children: {
    control: null,
  },
};
