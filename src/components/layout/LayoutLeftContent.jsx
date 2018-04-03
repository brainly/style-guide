import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const LayoutLeftContent = ({children, className, ...props}) => {

  const layoutClass = classnames('sg-layout__left-content', className);

  return (
    <div {...props} className={layoutClass}>
      {children}
    </div>
  );
};

LayoutLeftContent.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

export default LayoutLeftContent;
