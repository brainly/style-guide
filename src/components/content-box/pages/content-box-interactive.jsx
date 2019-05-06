import React from 'react';
import ContentBox from '../ContentBox';
import ContentBoxActions from '../ContentBoxActions';
import ContentBoxTitle from '../ContentBoxTitle';
import ContentBoxContent from '../ContentBoxContent';
import ButtonSecondary, {BUTTON_SECONDARY_TYPE} from 'buttons/ButtonSecondary';
import Avatar, {SIZE as AVATAR_SIZE} from 'avatar/Avatar';
import Sticker, {TYPE as STICKER_TYPE} from 'stickers/Sticker';
import Text from 'text/Text';
import Headline, {HEADLINE_TYPE} from 'text/Headline';
import SeparatorVertical from 'separators/SeparatorVertical';
import OverlayedBox from 'overlayed-box/OverlayedBox';
import DocsActiveBlock from 'components/DocsActiveBlock';

const ContentBoxes = () => {
  const settings = [
    {
      name: 'spaced',
      values: Boolean
    },
    {
      name: 'spacedSmall',
      values: Boolean
    },
    {
      name: 'full',
      values: Boolean
    }
  ];

  return (
    <div>
      <DocsActiveBlock settings={settings}>
        <ContentBox>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel dui porttitor, tincidunt lorem quis,
          gravida ex. Phasellus semper orci nulla, sit amet egestas orci mattis sit amet. Aenean laoreet, dolor ac
          aliquet porta, velit libero
          euismod purus, quis dignissim ante sem vel eros.
        </ContentBox>
      </DocsActiveBlock>
      <DocsActiveBlock settings={settings}>
        <ContentBox>
          <ContentBoxTitle>
            <Headline type={HEADLINE_TYPE.H2}>This is a title for context box</Headline>
          </ContentBoxTitle>
          <ContentBoxActions>
            <ButtonSecondary>Search!</ButtonSecondary>
          </ContentBoxActions>
          <ContentBoxContent>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel dui porttitor, tincidunt
              lorem quis, gravida ex. Phasellus semper orci nulla, sit amet egestas orci mattis sit amet.
              Aenean laoreet, dolor ac aliquet porta, velit libero euismod purus, quis dignissim ante sem
              vel eros.
            </Text>
          </ContentBoxContent>
          <ContentBoxActions>
            <OverlayedBox overlay={<Sticker type={STICKER_TYPE.ANSWER} />}>
              <Avatar imgSrc="https://source.unsplash.com/64x64/?dog" />
            </OverlayedBox>
            <SeparatorVertical />
            <Avatar size={AVATAR_SIZE.SMALL} imgSrc="https://source.unsplash.com/64x64/?dog" />
            <ButtonSecondary small buttonType={BUTTON_SECONDARY_TYPE.INVERSE}>Answer</ButtonSecondary>
          </ContentBoxActions>
        </ContentBox>
      </DocsActiveBlock>
    </div>
  );
};

export default ContentBoxes;
