import * as React from 'react';
import Button from '../buttons/Button';
import Flex from '../flex/Flex';
import Headline from '../text/Headline';

import Dialog from './Dialog';
import DialogHeader from './DialogHeader';
import DialogContent from './DialogContent';

export default {
  title: 'Layout/Dialog',
  parameters: {
    component: Dialog,
  },
};

export const Default = args => {
  return (
    <Dialog {...args}>
      <DialogContent>{contentExample}</DialogContent>
    </Dialog>
  );
};

export const DefaultCloseButton = args => {
  return (
    <Dialog {...args}>
      <DialogHeader onCloseButtonClick={() => undefined} />
      <DialogContent>{contentExample}</DialogContent>
    </Dialog>
  );
};

export const CustomCloseButton = args => {
  return (
    <Dialog {...args}>
      <DialogContent>
        <Flex marginBottom="m">{contentExample}</Flex>
        <Flex justifyContent="flex-end" className="sg-space-x-s">
          <Button type="outline">CANCEL</Button>
          <Button type="solid">PROCEED</Button>
        </Flex>
      </DialogContent>
    </Dialog>
  );
};

export const Header = args => {
  return (
    <Dialog {...args}>
      <DialogHeader onCloseButtonClick={() => undefined}>
        <Flex marginBottom="m">
          <Headline>
            Are you sure you want to stop asking this question?
          </Headline>
        </Flex>
      </DialogHeader>
      <DialogContent>{contentExample}</DialogContent>
    </Dialog>
  );
};

const contentExample =
  // eslint-disable-next-line max-len
  'Information you provide to us directly. We may collect personal information, such as your name, address, telephone number, date of birth, payment information, and e-mail address when you when you register for our Service, sign up for our mailing list, enter a contest or sweepstakes, or otherwise communicate with us. We may also collect any communications between you and Brainly and any other information you provide to Brainly';
