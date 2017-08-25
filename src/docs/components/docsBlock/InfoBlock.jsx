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
  return (
    <aside className="docs-block__info">
      {header}
      {additionalInfo}
    </aside>
  );
};

InfoBlock.propTypes = {
  additionalInfo: PropTypes.node,
  info: PropTypes.node
};

export default InfoBlock;
