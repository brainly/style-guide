import React from 'react';
import DocsBlock from 'components/DocsBlock';
import ContrastBox from 'components/ContrastBox';
import IconAsButton, {TYPE, ICON_COLOR} from 'icon-as-button/IconAsButton';
import OverlayedBox from '../OverlayedBox';
import Avatar from 'avatar/Avatar';
import TextBadge, {TEXT_BADGE_COLOR} from 'badges/TextBadge';
import Sticker, {TYPE as STICKER_TYPE} from 'stickers/Sticker';

const overlayedBoxs = () => (
  <div>
    <DocsBlock info="Icon as button with overlay-box">
      <IconAsButton
        type={TYPE.MESSAGES}
        overlay={
          <TextBadge color={TEXT_BADGE_COLOR.PEACH} rounded>
            1
          </TextBadge>
        }
      />
      <ContrastBox>
        <IconAsButton
          color={ICON_COLOR.LIGHT}
          type={TYPE.PROFILE}
          overlay={
            <TextBadge color={TEXT_BADGE_COLOR.MUSTARD} rounded>
              !
            </TextBadge>
          }
        />
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
        <OverlayedBox overlay={<TextBadge rounded>1</TextBadge>}>
          <Avatar />
        </OverlayedBox>
        <OverlayedBox
          overlay={
            <TextBadge color={TEXT_BADGE_COLOR.PEACH} rounded>
              456
            </TextBadge>
          }
        >
          <Avatar imgSrc="https://source.unsplash.com/64x64/?man" />
        </OverlayedBox>
      </ContrastBox>
    </DocsBlock>
  </div>
);

export default overlayedBoxs;
