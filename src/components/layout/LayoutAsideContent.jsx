import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const LayoutAsideContent = ({children, className}) => {

  const layoutClass = classnames('sg-layout__aside-content', className);

  return <div className={layoutClass}>
    {children}
  </div>;
};

LayoutAsideContent.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

export default LayoutAsideContent;
