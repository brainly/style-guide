// @flow

import * as React from 'react';
import Button from '../buttons/Button';
import Flex from '../flex/Flex';
import Headline from '../text/Headline';
import Link from '../text/Link';

import Dialog from './Dialog';
import DialogHeader from './DialogHeader';
import DialogBody from './DialogBody';
import DialogCloseButton from './DialogCloseButton';
import A11yDocs from './Dialog.a11y.md';

export default {
  title: 'Components/Dialog',
  component: Dialog,
  parameters: {
    docs: {
      /**
       * inlineStories=false causes an issue with DocsPage Controls
       * https://github.com/storybookjs/storybook/issues/11908
       */
      inlineStories: false,
      iframeHeight: 500,
    },
    a11yDocs: A11yDocs,
  },
  args: {
    open: true,
    reduceMotion: false,
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

export const Default = (args: any) => {
  const [open, setOpen] = React.useState(false);
  const [anotherOpen, setAnotherOpen] = React.useState(false);
  const handleDismiss = () => setOpen(false);
  const handleDismissAnother = () => setAnotherOpen(false);
  const headerId = 'dialog-header';
  const anotherHeaderId = 'another-dialog-header';

  return (
    <div>
      <Button type="solid-mint" onClick={() => setOpen(true)}>
        open dialog
      </Button>

      <Dialog
        {...args}
        open={open}
        onDismiss={handleDismiss}
        labelledBy={headerId}
      >
        <DialogCloseButton onClick={handleDismiss} />
        <DialogHeader id={headerId}>
          <Flex marginBottom="m">
            <Headline>
              Are you sure you want to stop asking this question?
            </Headline>
          </Flex>
        </DialogHeader>
        <DialogBody>
          <Flex marginBottom="m">
            Information you provide to us directly. We may collect personal
            information, such as your name, address, telephone number, date of
            birth, payment information, and e-mail address when you when you
            register for our Service, sign up for our mailing list, enter a
            contest or sweepstakes, or otherwise communicate with us. We may
            also collect any communications between you and Brainly and any
            other information you provide to Brainly
          </Flex>
          <Flex marginBottom="m">
            <Link
              tabIndex="0"
              onClick={() => setAnotherOpen(true)}
              onKeyDown={({key}) => key === 'Enter' && setAnotherOpen(true)}
            >
              Open another dialog
            </Link>
          </Flex>
          <Flex justifyContent="flex-end" className="sg-space-x-s">
            <Button type="outline" onClick={handleDismiss}>
              cancel
            </Button>
            <Button type="solid">proceed</Button>
          </Flex>
        </DialogBody>
      </Dialog>

      <Dialog
        {...args}
        size="s"
        open={anotherOpen}
        onDismiss={handleDismissAnother}
        labelledBy={anotherHeaderId}
      >
        <DialogCloseButton onClick={handleDismissAnother} />
        <DialogHeader id={anotherHeaderId}>
          <Flex marginBottom="m">
            <Headline>
              Are you really sure you want to stop asking this question?
            </Headline>
          </Flex>
        </DialogHeader>
        <DialogBody>
          <Flex justifyContent="flex-end" className="sg-space-x-s">
            <Button type="outline" onClick={handleDismissAnother}>
              cancel
            </Button>
            <Button type="solid">proceed</Button>
          </Flex>
        </DialogBody>
      </Dialog>
    </div>
  );
};

Default.args = {
  open: false,
};

Default.argTypes = {
  open: {
    control: {
      disable: true,
    },
  },
};
