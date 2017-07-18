import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const LayoutContent = ({children, noMaxWidth}) => {
  const layoutContentClass = classNames('sg-layout__content', {
    'sg-layout__content--no-max-width': noMaxWidth
  });

  return <div className={layoutContentClass}>
    {children}
  </div>;
};

LayoutContent.propTypes = {
  children: PropTypes.node.isRequired,
  noMaxWidth: PropTypes.bool
};

export default LayoutContent;
