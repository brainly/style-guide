import React from 'react';
import PropTypes from 'prop-types';

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

const contrastBlockCssClass = 'docs-block__contrast-box';
const DocsBlock = ({info, additionalInfo, children}) =>
  <section className="docs-block">
    <InfoBlock info={info} additionalInfo={additionalInfo}/>
    <div className="docs-block__content">
      {children}
    </div>
  </section>;

DocsBlock.propTypes = {
  children: PropTypes.node.isRequired,
  additionalInfo: PropTypes.node,
  info: PropTypes.node
};

export default DocsBlock;
export {contrastBlockCssClass};
