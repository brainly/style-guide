import React from 'react';
import TopLayer, {SIZE} from '../TopLayer';
import ButtonPrimary, {BUTTON_PRIMARY_TYPE} from 'buttons/ButtonPrimary';
import ContentBox from '../../content-box/ContentBox';
import ContentBoxContent, {SIZE as SPACING_SIZE} from 'content-box/ContentBoxContent';
import Text, {WEIGHT} from 'text/Text';
import HeaderSecondary, {HEADER_TYPE} from 'text/HeaderSecondary';
import TextBit, {COLOR as TB_COLOR, TYPE as TB_TYPE} from 'text/TextBit';
import List, {ICON_TYPE, ICON_COLOR} from 'list/List';
import Overlay from 'overlay/Overlay';

const content =
  <ContentBox>
    <ContentBoxContent spacedBottom={SPACING_SIZE.LARGE}>
      <TextBit color={TB_COLOR.ALT} type={TB_TYPE.H1}>
        The world&apos;s largest learning community
      </TextBit>
    </ContentBoxContent>

    <ContentBoxContent spacedBottom={SPACING_SIZE.LARGE}>
      <HeaderSecondary type={HEADER_TYPE.H2}>
        Why join Brainly?
      </HeaderSecondary>
      <List iconType={ICON_TYPE.PLUS} iconColor={ICON_COLOR.GRAY_SECONDARY} items={[
        <Text key={1} weight={WEIGHT.BOLD}>ask questions about your assignment</Text>,
        <Text key={2} weight={WEIGHT.BOLD}>get answer with explanation</Text>,
        <Text key={3} weight={WEIGHT.BOLD}>find similar questions</Text>
      ]} />
    </ContentBoxContent>

    <ContentBoxContent spacedBottom={SPACING_SIZE.LARGE}>
      <ButtonPrimary buttonType={BUTTON_PRIMARY_TYPE.ALT}>Join us</ButtonPrimary>
    </ContentBoxContent>
  </ContentBox>;

const NotLoggedTopLayer = () =>
  <html>
    <head>
      <meta charSet="utf-8" />
      <link rel="stylesheet" href="../../../style-guide.css" />
    </head>
    <body>
      <Overlay>
        <TopLayer modal size={SIZE.MEDIUM} lead withBugbox>
          {content}
        </TopLayer>
      </Overlay>
      <script src="images/icons.js"></script>
    </body>
  </html>;

export default NotLoggedTopLayer;
