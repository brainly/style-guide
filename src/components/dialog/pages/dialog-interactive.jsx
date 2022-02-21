import * as React from 'react';
import DocsActiveBlock from 'components/DocsActiveBlock';
import {Flex} from '../../../index';

import Headline from '../../text/Headline';
import Button from '../../buttons/Button';
import Dialog from '../Dialog';
import DialogHeader from '../DialogHeader';
import DialogBody from '../DialogBody';
import DialogCloseButton from '../DialogCloseButton';
import IFrame from 'components/IFrame';

const Dialogs = () => {
  const SIZE = {
    s: 's',
    m: 'm',
    l: 'l',
    xl: 'xl',
    fullscreen: 'fullscreen',
  };

  const settings = [
    {
      name: 'open',
      values: Boolean,
    },
    {
      name: 'size',
      values: SIZE,
    },
    {
      name: 'reduceMotion',
      values: Boolean,
    },
  ];

  return (
    <div>
      <DocsActiveBlock
        settings={settings}
        wrapper={<IFrame id="frame-dialog" width="100%" height="400px" />}
      >
        <Dialog>
          <link rel="stylesheet" href="../style-guide.css" />
          <script src="images/icons.js" async />
          <DialogCloseButton />
          <DialogHeader>
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
            <Flex justifyContent="flex-end" className="sg-space-x-s">
              <Button type="outline">cancel</Button>
              <Button type="solid">proceed</Button>
            </Flex>
          </DialogBody>
        </Dialog>
      </DocsActiveBlock>
    </div>
  );
};

export default Dialogs;
