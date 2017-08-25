import React from 'react';
import DocsBlock from 'components/DocsBlock';
import ContrastBox from 'components/ContrastBox';
import IconAsButton, {TYPE, COLOR} from 'icon-as-button/IconAsButton';
import OverlayedBox from '../OverlayedBox';
import Avatar from 'avatar/Avatar';
import Badge, {COLOR as BADGE_COLOR} from 'badges/Badge';
import Sticker, {TYPE as STICKER_TYPE} from 'stickers/Sticker';


const overlayedBoxs = () =>
  <div>
    <DocsBlock info="Icon as button with overlay-box">
      <IconAsButton type={TYPE.MESSAGES}
        overlay={<Badge color={BADGE_COLOR.PEACH} rounded>1</Badge>} />
      <ContrastBox>
        <IconAsButton color={COLOR.LIGHT} type={TYPE.PROFILE}
          overlay={<Badge color={BADGE_COLOR.MUSTARD} rounded>!</Badge>} />
      </ContrastBox>
    </DocsBlock>
    <DocsBlock info="Standard overlay box">
      <ContrastBox>
        <OverlayedBox overlay={<Sticker type={STICKER_TYPE.PENCIL} />}>
          <Avatar />
        </OverlayedBox>
        <OverlayedBox overlay={<Sticker type={STICKER_TYPE.SEARCH} />}>
          <Avatar imgSrc="https://source.unsplash.com/64x64/?man" />
        </OverlayedBox>
        <OverlayedBox overlay={<Sticker type={STICKER_TYPE.COMMENT} />}>
          <Avatar />
        </OverlayedBox>
        <OverlayedBox overlay={<Sticker type={STICKER_TYPE.COMMENT} />}>
          <Avatar imgSrc="https://source.unsplash.com/64x64/?cat" />
        </OverlayedBox>
        <OverlayedBox overlay={<Sticker type={STICKER_TYPE.FRIENDS} />}>
          <Avatar />
        </OverlayedBox>
        <OverlayedBox overlay={<Sticker type={STICKER_TYPE.FRIENDS} />}>
          <Avatar imgSrc="https://source.unsplash.com/64x64/?dog" />
        </OverlayedBox>
        <OverlayedBox overlay={<Badge rounded>1</Badge>}>
          <Avatar />
        </OverlayedBox>
        <OverlayedBox overlay={<Badge color={BADGE_COLOR.PEACH} rounded>456</Badge>}>
          <Avatar imgSrc="https://source.unsplash.com/64x64/?man" />
        </OverlayedBox>
      </ContrastBox>
    </DocsBlock>
  </div>;


export default overlayedBoxs;
