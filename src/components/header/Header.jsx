import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const Header = ({children, fixed, className, ...props}) => {

  const headerClass = classnames('sg-header', {
    'sg-header--fixed': fixed
  }, className);

  return (
    <header {...props} className={headerClass}>
      {children}
    </header>
  );
};

Header.propTypes = {
  children: PropTypes.node.isRequired,
  fixed: PropTypes.bool,
  className: PropTypes.string
};

export default Header;
