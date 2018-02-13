import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const MenuItem = ({text, href, type = 'a', className, ...restProps}) => {
  const Type = type;
  const elementClass = classnames('sg-menu-list__link', className);

  return (
    <li className="sg-menu-list__element">
      <Type className={elementClass} href={href} {...restProps}>{text}</Type>
    </li>
  );
};

MenuItem.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string,
  text: PropTypes.node.isRequired,
  type: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
};

export default MenuItem;
