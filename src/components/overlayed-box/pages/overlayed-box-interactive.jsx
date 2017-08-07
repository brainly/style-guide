import React from 'react';
import DocsActiveBlock from 'components/DocsActiveBlock';
import OverlayedBox from '../OverlayedBox';
import Avatar from 'avatar/Avatar';
import Badge, {COLOR as BADGE_COLOR} from 'badges/Badge';
import Sticker, {TYPE as STICKER_TYPE} from 'stickers/Sticker';

const OverlayedBoxes = () => {
  const settings = [];

  return <div>
    <DocsActiveBlock settings={settings}>
      <OverlayedBox overlay={<Sticker type={STICKER_TYPE.PENCIL}/>}>
        <Avatar/>
      </OverlayedBox>
    </DocsActiveBlock>
    <DocsActiveBlock settings={settings}>
      <OverlayedBox overlay={<Badge color={BADGE_COLOR.PEACH} rounded={true}>3</Badge>}>
        <Avatar imgSrc="https://source.unsplash.com/64x64/?cat"/>
      </OverlayedBox>
    </DocsActiveBlock>
  </div>;
};

export default OverlayedBoxes;
