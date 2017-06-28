import React from 'react';
import PropTypes from 'prop-types';

const contrastBlockCssClass = 'docs-block__contrast-box';
const contrastBlockFullWidthCssClass = 'docs-block__contrast-box--full-width';

const InfoBlock = ({info, additionalInfo}) => {
  if (!info && !additionalInfo) {
    return null;
  }

  let header;

  if (info) {
    header = <h3 className="docs-block__header">{info}</h3>;
  }
  return <aside className="docs-block__info">
    {header}
    {additionalInfo}
  </aside>;
};

InfoBlock.propTypes = {
  additionalInfo: PropTypes.node,
  info: PropTypes.node
};

const ContentBlock = ({children}) => <div className="docs-block__content">
  {children}
</div>;

ContentBlock.propTypes = {children: PropTypes.node};


const DocsBlock = ({info, additionalInfo, children, multiContent = []}) =>
  <section className="docs-block">
    <InfoBlock info={info} additionalInfo={additionalInfo}/>
    <ContentBlock>{children}</ContentBlock>
    {multiContent.map((extraChild, i) => <ContentBlock key={i}>{extraChild}</ContentBlock>)}
  </section>;

DocsBlock.propTypes = {
  multiContent: PropTypes.arrayOf(PropTypes.node),
  children: PropTypes.node,
  additionalInfo: PropTypes.node,
  info: PropTypes.node
};

export default DocsBlock;
export {contrastBlockCssClass, contrastBlockFullWidthCssClass};
