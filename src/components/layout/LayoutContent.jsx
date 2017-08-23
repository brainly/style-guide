import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const LayoutContent = ({children, noMaxWidth, className, ...props}) => {
  const layoutContentClass = classNames('sg-layout__content', {
    'sg-layout__content--no-max-width': noMaxWidth
  }, className);

  return <div {...props} className={layoutContentClass}>
    {children}
  </div>;
};

LayoutContent.propTypes = {
  children: PropTypes.node.isRequired,
  noMaxWidth: PropTypes.bool,
  className: PropTypes.string
};

export default LayoutContent;
