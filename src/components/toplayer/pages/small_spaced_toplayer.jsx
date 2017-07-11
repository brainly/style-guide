import React from 'react';
import TopLayer from '../TopLayer';
import Icon, {TYPE as icoTypes, COLOR as icoColors} from '../../icons/Icon';
import ButtonPrimary, {TYPE as buttonTypes} from '../../buttons/ButtonPrimary';
import ContentBox from '../../content-box/ContentBox';
import ContentBoxContent, {SIZE as SPACING_SIZE} from '../../content-box/ContentBoxContent';

const content = <ContentBox>
  <ContentBoxContent spacedBottom={SPACING_SIZE.LARGE}>
    <h2 className="sg-header-secondary">
      Why join Brainly?
    </h2>
    <ul className="sg-list">
      <li className="sg-list__element">
        <div className="sg-list__icon sg-list__icon----spacing-right-small">
          <Icon type={icoTypes.PLUS} size={14} color={icoColors.GRAY_SECONDARY}/>
        </div>
        <div className="sg-text sg-text--emphasised">ask questions about your assignment</div>
      </li>
      <li className="sg-list__element">
        <div className="sg-list__icon sg-list__icon----spacing-right-small">
          <Icon type={icoTypes.PLUS} size={14} color={icoColors.GRAY_SECONDARY}/>
        </div>
        <div className="sg-text sg-text--emphasised">get answer with explanation</div>
      </li>
      <li className="sg-list__element">
        <div className="sg-list__icon sg-list__icon----spacing-right-small">
          <Icon type={icoTypes.PLUS} size={14} color={icoColors.GRAY_SECONDARY}/>
        </div>
        <div className="sg-text sg-text--emphasised">find similar questions</div>
      </li>
    </ul>
  </ContentBoxContent>

  <ContentBoxContent spacedBottom={SPACING_SIZE.LARGE}>
    <ButtonPrimary type={buttonTypes.alt}>Join us</ButtonPrimary>
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
