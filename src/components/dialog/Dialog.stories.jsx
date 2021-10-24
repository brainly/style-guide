// @flow

import * as React from 'react';
import Button from '../buttons/Button';
import Flex from '../flex/Flex';
import Headline from '../text/Headline';

import Dialog from './Dialog';
import DialogHeader from './DialogHeader';
import DialogBody from './DialogBody';
import DialogCloseButton from './DialogCloseButton';

export default {
  title: 'Components/Dialog',
  component: Dialog,
  parameters: {
    docs: {
      inlineStories: false, // causes an issue with args of Docs
      iframeHeight: 500,
    },
  },
  args: {
    open: true,
  },
  argTypes: {
    children: {
      control: {
        disable: true,
      },
    },
    onDismiss: {
      action: 'onDismiss',
      table: {
        category: 'Events',
      },
    },
    onEntryTransitionEnd: {
      action: 'onEntryTransitionEnd',
      table: {
        category: 'Events',
      },
    },
    onExitTransitionEnd: {
      action: 'onExitTransitionEnd',
      table: {
        category: 'Events',
      },
    },
  },
};

export const Default = (args: any) => (
  <Dialog {...args}>
    <DialogCloseButton onClick={args.onDismiss} />
    <DialogHeader>
      <Flex marginBottom="m">
        <Headline>Are you sure you want to stop asking this question?</Headline>
      </Flex>
    </DialogHeader>
    <DialogBody>
      <Flex marginBottom="m">
        Information you provide to us directly. We may collect personal
        information, such as your name, address, telephone number, date of
        birth, payment information, and e-mail address when you when you
        register for our Service, sign up for our mailing list, enter a contest
        or sweepstakes, or otherwise communicate with us. We may also collect
        any communications between you and Brainly and any other information you
        provide to Brainly
      </Flex>
      <Flex justifyContent="flex-end" className="sg-space-x-s">
        <Button type="outline" onClick={args.onDismiss}>
          cancel
        </Button>
        <Button type="solid">proceed</Button>
      </Flex>
    </DialogBody>
  </Dialog>
);
