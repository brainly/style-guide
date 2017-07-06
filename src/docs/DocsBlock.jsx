import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

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
const CONTENT_BOX_CLASS = 'docs-block__content-box';
const ContentBlock = ({children, toBottom, centered}) => {
  const contentClass = classnames('docs-block__content', {
    'docs-block__content--to-bottom': toBottom,
    'docs-block__content--centered': centered
  });

  return <div className={contentClass}>
    {children}
  </div>;
};

ContentBlock.propTypes = {
  children: PropTypes.node,
  centered: PropTypes.bool,
  toBottom: PropTypes.bool
};


const DocsBlock = ({info, additionalInfo, children, multiContent = [], toBottom, centered}) =>
  <section className="docs-block">
    <InfoBlock info={info} additionalInfo={additionalInfo}/>
    <ContentBlock toBottom={toBottom} centered={centered}>{children}</ContentBlock>
    {multiContent.map((extraChild, i) =>
      <ContentBlock toBottom={toBottom} centered={centered} key={i}>{extraChild}</ContentBlock>
    )}
  </section>;

DocsBlock.propTypes = {
  toBottom: PropTypes.bool,
  centered: PropTypes.bool,
  multiContent: PropTypes.arrayOf(PropTypes.node),
  children: PropTypes.node,
  additionalInfo: PropTypes.node,
  info: PropTypes.node
};

export default DocsBlock;
export {CONTENT_BOX_CLASS};
