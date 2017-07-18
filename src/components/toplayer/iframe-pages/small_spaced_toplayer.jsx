import React from 'react';
import TopLayer from '../TopLayer';
import Icon, {TYPE as ICON_TYPE, COLOR as ICON_COLOR} from '../../icons/Icon';
import ButtonPrimary, {TYPE as BUTTON_TYPE} from '../../buttons/ButtonPrimary';
import ContentBox from '../../content-box/ContentBox';
import ContentBoxContent, {SIZE as SPACING_SIZE} from '../../content-box/ContentBoxContent';
import Text, {WEIGHT} from '../../text/Text';
import HeaderSecondary, {TYPE as HEADER_TYPE} from '../../text/HeaderSecondary';

const content = <ContentBox>
  <ContentBoxContent spacedBottom={SPACING_SIZE.LARGE}>
    <HeaderSecondary type={HEADER_TYPE.H2}>
      Why join Brainly?
    </HeaderSecondary>
    <ul className="sg-list">
      <li className="sg-list__element">
        <div className="sg-list__icon sg-list__icon----spacing-right-small">
          <Icon type={ICON_TYPE.PLUS} size={14} color={ICON_COLOR.GRAY_SECONDARY}/>
        </div>
        <div className="sg-text sg-text--emphasised">ask questions about your assignment</div>
      </li>
      <li className="sg-list__element">
        <div className="sg-list__icon sg-list__icon----spacing-right-small">
          <Icon type={ICON_TYPE.PLUS} size={14} color={ICON_COLOR.GRAY_SECONDARY}/>
        </div>
        <div className="sg-text sg-text--emphasised">get answer with explanation</div>
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

const SmallSpacedTopLayer = () =>
  <html>
    <head>
      <meta charSet="utf-8"/>
      <link rel="stylesheet" href="../../../style-guide.css"/>
    </head>
    <body>
      <div className="sg-overlay">
        <TopLayer modal={true} smallSpaced={true}>
          {content}
        </TopLayer>
      </div>
      <script src="images/icons.js"></script>
    </body>
  </html>;

export default SmallSpacedTopLayer;
