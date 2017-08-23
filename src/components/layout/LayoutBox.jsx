import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const LayoutBox = ({children, className, ...props}) => {

  const layoutClass = classnames('sg-layout__box', className);

  return <div {...props} className={layoutClass}>
    {children}
  </div>;
};

LayoutBox.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

export default LayoutBox;
