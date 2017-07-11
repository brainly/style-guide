import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const COLOR = {
  GRAY: 'gray',
  MINT: 'mint',
  PEACH: 'peach',
  LIGHT: 'light',
  MUSTARD: 'mustard',
  FINE_PRINT: 'for-fine-print',
  FINE_PRINT_LIGHT: 'for-fine-print-light'
};

const SIZE = {
  NORMAL: 'normal',
  SMALL: 'small',
  OBSCURE: 'obscure'
};

const Link = ({children, href = '#', color, size = SIZE.NORMAL, unstyled, underlined, emphasised, disabled}) => {

  const linkClass = classNames('sg-link', {
    [`sg-link--${size}`]: size !== SIZE.NORMAL,
    [`sg-link--${color}`]: color,
    'sg-link--emphasised': emphasised,
    'sg-link--underlined': underlined,
    'sg-link--unstyled': unstyled,
    'sg-link--disabled': disabled
  });

  if (disabled) {
    return <span className={linkClass}>
      {children}
    </span>;
  }

  return <a className={linkClass} href={href}>
    {children}
  </a>;
};

Link.propTypes = {
  children: PropTypes.node,
  color: PropTypes.oneOf(Object.values(COLOR)),
  size: PropTypes.oneOf(Object.values(SIZE)),
  href: PropTypes.string,
  unstyled: PropTypes.bool,
  underlined: PropTypes.bool,
  emphasised: PropTypes.bool,
  disabled: PropTypes.bool
};

export default Link;
export {COLOR, SIZE};
