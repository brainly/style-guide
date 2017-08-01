import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const HeaderRight = ({children, className}) => {
  const headerClass = classnames('sg-header__right', className);

  return <div className={headerClass}>
    {children}
  </div>;
};

HeaderRight.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export default HeaderRight;
