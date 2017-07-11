import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const TYPE = {
  H1: 'h1',
  H2: 'h2',
  H3: 'h3',
  H4: 'h4',
  H5: 'h5',
  H6: 'h6',
  DIV: 'div'
};

const SIZE = {
  SMALL: 'small',
  LARGE: 'large',
  XLARGE: 'xlarge',
  XXLARGE: 'xxlarge'
};

const COLOR = {
  ALT: 'alt',
  LIGHT: 'light',
  DARK: 'dark',
  GRAY: 'gray',
  WARNING: 'warning'
};

const TextBit = ({children, type = TYPE.H1, color, size}) => {

  const ChosenType = type;
  const textClass = classNames('sg-text-bit', {
    [`sg-text-bit--${size}`]: size,
    [`sg-text-bit--${color}`]: color
  });

  return <ChosenType className={textClass}>
    {children}
  </ChosenType>;
};

TextBit.propTypes = {
  children: PropTypes.node,
  size: PropTypes.oneOf(Object.values(SIZE)),
  color: PropTypes.oneOf(Object.values(COLOR)),
  type: PropTypes.oneOf(Object.values(TYPE))
};

export default TextBit;
export {TYPE, SIZE, COLOR};
