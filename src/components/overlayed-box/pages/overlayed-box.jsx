import React from 'react';
import DocsBlock from '../../../docs/DocsBlock';
import ContrastBox from '../../../docs/ContrastBox';
import IconAsButton, {TYPE, COLOR} from '../../icon-as-button/IconAsButton';
import OverlayedBox from '../OverlayedBox';
import Avatar from '../../avatar/Avatar';
import Sticker, {TYPE as STICKER_TYPE} from '../../stickers/Sticker';


const overlayedBoxs = () => <div>
  <DocsBlock info="Icon as button with overlay-box">
    <IconAsButton type={TYPE.MESSAGES}
      overlay={<div className="sg-badge sg-badge--rounded sg-badge--peach">
        <div className="sg-text sg-text--emphasised sg-text--xsmall sg-text--light">1</div>
      </div>}/>
    <ContrastBox>
      <IconAsButton color={COLOR.LIGHT} type={TYPE.PROFILE}
        overlay={  <div className="sg-badge sg-badge--rounded sg-badge--mustard">
          <div className="sg-text sg-text--emphasised sg-text--xsmall sg-text--light">!</div>
        </div>}/>
    </ContrastBox>
  </DocsBlock>


  <DocsBlock info="Standard overlay box">
    <ContrastBox>
      <OverlayedBox overlay={<Sticker type={STICKER_TYPE.PENCIL}/>}>
        <Avatar/>
      </OverlayedBox>
      <OverlayedBox overlay={<Sticker type={STICKER_TYPE.SEARCH}/>}>
        <Avatar imgSrc="https://source.unsplash.com/64x64/?man"/>
      </OverlayedBox>
      <OverlayedBox overlay={<Sticker type={STICKER_TYPE.COMMENT}/>}>
        <Avatar/>
      </OverlayedBox>
      <OverlayedBox overlay={<Sticker type={STICKER_TYPE.COMMENT}/>}>
        <Avatar imgSrc="https://source.unsplash.com/64x64/?cat"/>
      </OverlayedBox>
      <OverlayedBox overlay={<Sticker type={STICKER_TYPE.FRIENDS}/>}>
        <Avatar/>
      </OverlayedBox>
      <OverlayedBox overlay={<Sticker type={STICKER_TYPE.FRIENDS}/>}>
        <Avatar imgSrc="https://source.unsplash.com/64x64/?dog"/>
      </OverlayedBox>
      <OverlayedBox overlay={<div className="sg-badge sg-badge--rounded">
        <div className="sg-text sg-text--emphasised sg-text--xsmall">1</div>
      </div>}>
        <Avatar/>
      </OverlayedBox>
      <OverlayedBox overlay={<div className="sg-badge sg-badge--rounded sg-badge--peach">
        <div className="sg-text sg-text--emphasised sg-text--xsmall sg-text--light">456</div>
      </div>}>
        <Avatar imgSrc="https://source.unsplash.com/64x64/?man"/>
      </OverlayedBox>
    </ContrastBox>
  </DocsBlock>
</div>;


export default overlayedBoxs;
