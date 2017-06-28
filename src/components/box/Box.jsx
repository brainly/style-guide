import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const colors = {
  blue: 'blue',
  lavender: 'lavender',
  dark: 'dark',
  mint: 'mint',
  mint_secondary: 'mint-secondary',
  navyblue_secondary: 'navyblue-secondary',
  blue_secondary_light: 'blue-secondary-light'
};

const paddings = {
  small: 'small-padding',
  large: 'large-padding'
};

const Box = ({color, padding, full, children, border = !color, imgSrc, noMinHeight}) => {
  const boxClass = classNames('sg-box', {
    [`sg-box--${color}`]: color,
    'sg-box--no-border': !border,
    'sg-box--full': full,
    [`sg-box--${padding}`]: padding,
    'sg-box--image-wrapper': imgSrc,
    'sg-box--no-min-height': noMinHeight
  });

  let content;

  if (imgSrc) {
    content = <img className="sg-box__image" src={imgSrc}/>;
  } else {
    content = <div className="sg-box__hole">{children}</div>;
  }

  return <div className={boxClass}>
    {content}
  </div>;
};

Box.propTypes = {
  children: PropTypes.node,
  color: PropTypes.oneOf(Object.values(colors)),
  border: PropTypes.bool,
  noMinHeight: PropTypes.bool,
  full: PropTypes.bool,
  padding: PropTypes.oneOf(Object.values(paddings)),
  imgSrc: PropTypes.string
};

export default Box;
export {colors, paddings};
