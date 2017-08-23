import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const HeaderMiddle = ({children, className, ...props}) => {
  const headerClass = classnames('sg-header__middle', className);

  return <div {...props} className={headerClass}>
    {children}
  </div>;
};

HeaderMiddle.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export default HeaderMiddle;
