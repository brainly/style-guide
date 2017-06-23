import React from 'react';
import PropTypes from 'prop-types';

const contrastBlockCssClass = 'docs-block__contrast-box';
const DocsBlock = ({info, additionalInfo, children}) => {
  let header;

  if (info) {
    header = <h3 className="docs-block__header">{info}</h3>;
  }

  return (
    <section className="docs-block">
      <aside className="docs-block__info">
        {header}
        {additionalInfo}
      </aside>
      <div className="docs-block__content">
        {children}
      </div>
    </section>
  );
};

DocsBlock.propTypes = {
  children: PropTypes.node.isRequired,
  additionalInfo: PropTypes.node,
  info: PropTypes.node
};

export default DocsBlock;
export {contrastBlockCssClass};
