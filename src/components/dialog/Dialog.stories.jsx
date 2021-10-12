// @flow

import * as React from 'react';
import Dialog from './Dialog';
import Button from '../buttons/Button';
// import Flex from '../flex/Flex';

export default {
  title: 'Layout/Dialog',
  component: Dialog,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    children: {
      control: {
        disable: true,
      },
    },
    onClose: {
      table: {
        category: 'Events',
      },
    },
  },
};

export const Default = (args: any) => {
  return (
    <Dialog {...args}>
      <p>content</p>
    </Dialog>
  );
};

export const CustomButton = (args: any) => {
  return (
    <Dialog {...args}>
      <p>content</p>
      <Button type="solid-light">close</Button>
    </Dialog>
  );
};

CustomButton.args = {
  modal: 'events-only',
};

export const CustomAlert = (args: any) => {
  return (
    <Dialog {...args}>
      <p>choose</p>
      <Button type="solid">NO</Button>
      <Button type="outline">YES</Button>
    </Dialog>
  );
};

CustomAlert.args = {
  modal: 'none',
};
