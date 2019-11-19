import React from 'react';
import DocsBlock from 'components/DocsBlock';
import OverlayedBox from '../OverlayedBox';
import Avatar from 'avatar/Avatar';
import Counter from 'counters/Counter';

const overlayedBoxs = () => (
  <div>
    <DocsBlock info="Standard overlay box">
      <OverlayedBox overlay={<Counter size="small">1</Counter>}>
        <Avatar />
      </OverlayedBox>
      &nbsp;
      <OverlayedBox overlay={<Counter size="small">456</Counter>}>
        <Avatar imgSrc="https://source.unsplash.com/64x64/?man" />
      </OverlayedBox>
    </DocsBlock>
  </div>
);

export default overlayedBoxs;
