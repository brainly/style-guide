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
  title: 'Layout/Dialog',
  component: Dialog,
  parameters: {
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

export const Default = (args: any) => (
  <Dialog {...args}>
    <DialogBody>{contentExample}</DialogBody>
  </Dialog>
);

export const CloseButton = (args: any) => (
  <Dialog {...args}>
    <DialogCloseButton onClick={args.onDismiss} />
    <DialogBody>{contentExample}</DialogBody>
  </Dialog>
);

export const CustomButtons = (args: any) => (
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

export const Header = (args: any) => (
  <Dialog {...args}>
    <DialogCloseButton onClick={args.onDismiss} />
    <DialogHeader>
      <Flex marginBottom="m">
        <Headline>Are you sure you want to stop asking this question?</Headline>
      </Flex>
    </DialogHeader>
    <DialogBody>{longContentExample}</DialogBody>
  </Dialog>
);

export const DismissActions = (args: any) => {
  const [currentId, setCurrentId] = React.useState(null);
  const handleDismiss = () => setCurrentId(null);

  return (
    <>
      <div className="sg-space-x-xs">
        {['A', 'B', 'C', 'D'].map(id => (
          <Button key={id} type="outline" onClick={() => setCurrentId(id)}>
            {id}
          </Button>
        ))}
      </div>

      {currentId !== null && (
        <>
          <Dialog {...args} onDismiss={handleDismiss}>
            <DialogHeader>
              <Flex marginBottom="m">
                <Headline>Title of Dialog {currentId}</Headline>
              </Flex>
            </DialogHeader>
            <DialogBody>
              <Flex marginBottom="m">{contentExample}</Flex>
              <Flex justifyContent="flex-end" className="sg-space-x-s">
                <Button type="outline" onClick={handleDismiss}>
                  cancel
                </Button>
                <Button type="solid">proceed</Button>
              </Flex>
            </DialogBody>
          </Dialog>

          {/* Native keyboard navigation allows the user to leave the window
          at the beginning/end of the DOM tree. Current useFocusTrap doesn't
          change this, but it can be an issue for Storybook iframes. We can
          fix this example by adding a focusable element after the dialog */}
          <a href="/" />
        </>
      )}
    </>
  );
};

const contentExample =
  // eslint-disable-next-line max-len
  'Information you provide to us directly. We may collect personal information, such as your name, address, telephone number, date of birth, payment information, and e-mail address when you when you register for our Service, sign up for our mailing list, enter a contest or sweepstakes, or otherwise communicate with us. We may also collect any communications between you and Brainly and any other information you provide to Brainly';

const longContentExample = contentExample.repeat(3);
