import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export const TYPE = {
  H1: 'h1',
  H2: 'h2',
  H3: 'h3',
  H4: 'h4',
  H5: 'h5',
  H6: 'h6',
  DIV: 'div'
};

export const SIZE = {
  SMALL: 'small',
  LARGE: 'large',
  XLARGE: 'xlarge',
  XXLARGE: 'xxlarge'
};

export const COLOR = {
  ALT: 'alt',
  LIGHT: 'light',
  DARK: 'dark',
  GRAY: 'gray',
  WARNING: 'warning'
};

const TextBit = ({children, type = TYPE.H1, color, size, notResponsive, className, ...props}) => {
  const Type = type;
  const textClass = classNames('sg-text-bit', {
    [`sg-text-bit--${size}`]: size,
    [`sg-text-bit--${color}`]: color,
    'sg-text-bit--not-responsive': notResponsive
  }, className);

  return (
    <Type {...props} className={textClass}>
      {children}
    </Type>
  );
};

TextBit.propTypes = {
  children: PropTypes.node,
  size: PropTypes.oneOf(Object.values(SIZE)),
  color: PropTypes.oneOf(Object.values(COLOR)),
  type: PropTypes.oneOf(Object.values(TYPE)),
  notResponsive: PropTypes.bool,
  className: PropTypes.string
};

export default TextBit;
