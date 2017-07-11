import React from 'react';
import TopLayer, {SIZE} from '../TopLayer';
import Icon, {TYPE as ICON_TYPE, COLOR as ICON_COLOR} from '../../icons/Icon';
import ButtonPrimary, {TYPE as BUTTON_TYPE} from '../../buttons/ButtonPrimary';
import ContentBox from '../../content-box/ContentBox';
import ContentBoxContent, {SIZE as SPACING_SIZE} from '../../content-box/ContentBoxContent';
import Text, {WEIGHT} from '../../text/Text';
import HeaderSecondary, {TYPE as HEADER_TYPE} from '../../text/HeaderSecondary';
import TextBit, {COLOR as TB_COLOR, TYPE as TB_TYPE} from '../../text/TextBit';

const content = <ContentBox>
  <ContentBoxContent spacedBottom={SPACING_SIZE.LARGE}>
    <TextBit color={TB_COLOR.ALT} type={TB_TYPE.H1}>
      The world's largest learning community
    </TextBit>
  </ContentBoxContent>

  <ContentBoxContent spacedBottom={SPACING_SIZE.LARGE}>
    <HeaderSecondary type={HEADER_TYPE.H2}>
      Why join Brainly?
    </HeaderSecondary>
    <ul className="sg-list">
      <li className="sg-list__element">
        <div className="sg-list__icon sg-list__icon----spacing-right-small">
          <Icon type={ICON_TYPE.PLUS} size={14} color={ICON_COLOR.GRAY_SECONDARY}/>
        </div>
        <Text weight={WEIGHT.BOLD}>ask questions about your assignment</Text>
      </li>
      <li className="sg-list__element">
        <div className="sg-list__icon sg-list__icon----spacing-right-small">
          <Icon type={ICON_TYPE.PLUS} size={14} color={ICON_COLOR.GRAY_SECONDARY}/>
        </div>
        <Text weight={WEIGHT.BOLD}>get answer with explanation</Text>
      </li>
      <li className="sg-list__element">
        <div className="sg-list__icon sg-list__icon----spacing-right-small">
          <Icon type={ICON_TYPE.PLUS} size={14} color={ICON_COLOR.GRAY_SECONDARY}/>
        </div>
        <Text weight={WEIGHT.BOLD}>find similar questions</Text>
      </li>
    </ul>
  </ContentBoxContent>

  <ContentBoxContent spacedBottom={SPACING_SIZE.LARGE}>
    <ButtonPrimary type={BUTTON_TYPE.ALT}>Join us</ButtonPrimary>
  </ContentBoxContent>
</ContentBox>;

const NotLoggedTopLayer = () =>
  <html>
    <head>
      <meta charSet="utf-8"/>
      <link rel="stylesheet" href="../../../style-guide.css"/>
    </head>
    <body>
      <div className="sg-overlay">
        <TopLayer modal={true} size={SIZE.MEDIUM} lead={true} withBugbox={true}>
          {content}
        </TopLayer>
      </div>
      <script src="images/icons.js"></script>
    </body>
  </html>;

export default NotLoggedTopLayer;
