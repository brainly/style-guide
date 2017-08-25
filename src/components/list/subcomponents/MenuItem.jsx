import React from 'react';
import PropTypes from 'prop-types';

const MenuItem = ({text, href}) =>
  <li className="sg-menu-list__element">
    <a className="sg-menu-list__link" href={href}>{text}</a>
  </li>;

MenuItem.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default MenuItem;
