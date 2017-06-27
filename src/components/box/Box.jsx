import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const colors = {
  adaptive: 'adaptive',
  gray: 'gray',
  gray_secondary: 'gray-secondary',
  gray_light: 'gray-light',
  blue: 'blue',
  mustard: 'mustard',
  lavender: 'lavender',
  peach: 'peach',
  dark: 'dark',
  mint: 'mint'
};

//todo implement
const paddings = {
  normal: 1,
  small: 2,
  large: 3
};

const Box = ({color, children}) => {
  const boxClass = classNames('sg-box', {
    [`sg-box--${color}`]: color
  });

  return <div className={boxClass}>
    {children}
  </div>;
};

Box.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOf(Object.values(colors)),
  border: PropTypes.bool
};

export default Box;
export {colors, paddings};
