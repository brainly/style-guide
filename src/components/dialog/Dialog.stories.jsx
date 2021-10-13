// @flow strict

import * as React from 'react';
import Button from '../buttons/Button';
import Flex from '../flex/Flex';
import Headline from '../text/Headline';

import Dialog from './Dialog';
import DialogHead from './DialogHead';
import DialogBody from './DialogBody';
import DialogCloseButton from './DialogCloseButton';
import type {DialogPropsType} from './Dialog';

export default {
  title: 'Layout/Dialog',
  parameters: {
    component: Dialog,
    docs: {
      inlineStories: false,
    },
  },
  argTypes: {
    children: {
      control: {
        disable: true,
      },
    },
    onDismiss: {
      action: 'onDismiss',
    },
  },
};

export const Default = (args: DialogPropsType) => (
  <Dialog {...args}>
    <DialogBody>{contentExample}</DialogBody>
  </Dialog>
);

export const CloseButton = (args: DialogPropsType) => (
  <Dialog {...args}>
    <DialogCloseButton onClick={args.onDismiss || noop} />
    <DialogBody>{contentExample}</DialogBody>
  </Dialog>
);

export const CustomButtons = (args: DialogPropsType) => (
  <Dialog {...args}>
    <DialogBody>
      <Flex marginBottom="m">{contentExample}</Flex>
      <Flex justifyContent="flex-end" className="sg-space-x-s">
        <Button type="outline">cancel</Button>
        <Button type="solid">proceed</Button>
      </Flex>
    </DialogBody>
  </Dialog>
);

export const Head = (args: DialogPropsType) => (
  <Dialog {...args}>
    <DialogCloseButton onClick={() => undefined} />
    <DialogHead>
      <Flex marginBottom="m">
        <Headline>Are you sure you want to stop asking this question?</Headline>
      </Flex>
    </DialogHead>
    <DialogBody>{contentExample}</DialogBody>
  </Dialog>
);

const contentExample =
  // eslint-disable-next-line max-len
  'Information you provide to us directly. We may collect personal information, such as your name, address, telephone number, date of birth, payment information, and e-mail address when you when you register for our Service, sign up for our mailing list, enter a contest or sweepstakes, or otherwise communicate with us. We may also collect any communications between you and Brainly and any other information you provide to Brainly';

const noop = () => undefined;
