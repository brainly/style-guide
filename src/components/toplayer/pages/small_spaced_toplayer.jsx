import React from 'react';
import TopLayer from '../TopLayer';
import Icon, {TYPE as icoTypes, colors as icoColors} from '../../icons/Icon';
import ButtonPrimary, {types as buttonTypes} from '../../buttons/ButtonPrimary';

const content = <div className="sg-content-box">
  <div className="sg-content-box__content sg-content-box__content--spaced-bottom-large">
    <h2 className="sg-header-secondary">
      Why join Brainly?
    </h2>
    <ul className="sg-list">
      <li className="sg-list__element">
        <div className="sg-list__icon sg-list__icon----spacing-right-small">
          <Icon type={icoTypes.plus} size={14} color={icoColors.gray_secondary}/>
        </div>
        <div className="sg-text sg-text--emphasised">ask questions about your assignment</div>
      </li>
      <li className="sg-list__element">
        <div className="sg-list__icon sg-list__icon----spacing-right-small">
          <Icon type={icoTypes.plus} size={14} color={icoColors.gray_secondary}/>
        </div>
        <div className="sg-text sg-text--emphasised">get answer with explanation</div>
      </li>
      <li className="sg-list__element">
        <div className="sg-list__icon sg-list__icon----spacing-right-small">
          <Icon type={icoTypes.plus} size={14} color={icoColors.gray_secondary}/>
        </div>
        <div className="sg-text sg-text--emphasised">find similar questions</div>
      </li>
    </ul>
  </div>

  <div className="sg-content-box__content sg-content-box__content--spaced-bottom-large">
    <ButtonPrimary type={buttonTypes.alt}>Join us</ButtonPrimary>
  </div>
</div>;

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
