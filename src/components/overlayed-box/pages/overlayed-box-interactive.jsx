import React from 'react';
import DocsActiveBlock from 'components/DocsActiveBlock';
import OverlayedBox from '../OverlayedBox';
import Avatar from 'avatar/Avatar';
import Counter from 'counters/Counter';

const OverlayedBoxes = () => {
  const settings = [];

  return (
    <div>
      <DocsActiveBlock settings={settings}>
        <Avatar />
      </DocsActiveBlock>
      <DocsActiveBlock settings={settings}>
        <OverlayedBox overlay={<Counter>3</Counter>}>
          <Avatar imgSrc="https://source.unsplash.com/64x64/?cat" />
        </OverlayedBox>
      </DocsActiveBlock>
    </div>
  );
};

export default OverlayedBoxes;
