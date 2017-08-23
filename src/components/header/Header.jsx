import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const Header = ({children, light, fixed, className, ...props}) => {

  const headerClass = classnames('sg-header', {
    'sg-header--light': light,
    'sg-header--fixed': fixed
  }, className);

  return <header {...props} className={headerClass}>
    <div className="sg-header__container">
      {children}
    </div>
  </header>;
};

Header.propTypes = {
  children: PropTypes.node.isRequired,
  light: PropTypes.bool,
  fixed: PropTypes.bool,
  className: PropTypes.string
};

export default Header;
