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
  small: 'small-padding',
  large: 'large-padding'
};

const Box = ({color, padding, full, children, border = !color, imgSrc}) => {
  const boxClass = classNames('sg-box', {
    [`sg-box--${color}`]: color,
    'sg-box--no-border': !border,
    'sg-box--full': full,
    [`sg-box--${padding}`]: padding,
    'sg-box--image-wrapper': imgSrc
  });

  let img;

  if (imgSrc) {
    img = <img className="sg-box__image" src={imgSrc}/>;
  }

  let boxHole;

  if (children) {
    boxHole = <div className="sg-box__hole">{children}</div>;
  }

  return <div className={boxClass}>
    {img}
    {boxHole}
  </div>;
};

Box.propTypes = {
  children: PropTypes.node,
  color: PropTypes.oneOf(Object.values(colors)),
  border: PropTypes.bool,
  full: PropTypes.bool,
  padding: PropTypes.oneOf(Object.values(paddings)),
  imgSrc: PropTypes.string
};

export default Box;
export {colors, paddings};
