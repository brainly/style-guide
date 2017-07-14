import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const Header = ({left, middle, right, light, fixed}) => {

  const headerClass = classnames('sg-header', {
    'sg-header--light': light,
    'sg-header--fixed': fixed
  });

  return <div className={headerClass}>
    <div className="sg-header__container">
      <div className="sg-header__left">{left}</div>
      <div className="sg-header__middle">{middle}</div>
      <div className="sg-header__right">{right}</div>
    </div>
  </div>;
};

Header.propTypes = {
  left: PropTypes.node,
  middle: PropTypes.node,
  right: PropTypes.node,
  light: PropTypes.bool,
  fixed: PropTypes.bool
};

export default Header;
