import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const COLOR = {
  BLUE: 'blue',
  LAVENDER: 'lavender',
  DARK: 'dark',
  MINT: 'mint',
  MINT_SECONDARY: 'mint-secondary',
  NAVYBLUE_SECONDARY: 'navyblue-secondary',
  BLUE_SECONDARY_LIGHT: 'blue-secondary-light',
  PEACH: 'peach'
};

const PADDING = {
  NO_PADDING: 'no-padding',
  XSMALL: 'xsmall-padding',
  SMALL: 'small-padding',
  LARGE: 'large-padding'
};

const Box = ({color, padding, full, children, border = !color, imgSrc, noMinHeight, shadow, className}) => {
  const boxClass = classNames('sg-box', className, {
    [`sg-box--${color}`]: color,
    'sg-box--no-border': !border,
    'sg-box--full': full,
    [`sg-box--${padding}`]: padding,
    'sg-box--image-wrapper': imgSrc,
    'sg-box--no-min-height': noMinHeight,
    'sg-box--with-shadow': shadow
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
  color: PropTypes.oneOf(Object.values(COLOR)),
  border: PropTypes.bool,
  noMinHeight: PropTypes.bool,
  full: PropTypes.bool,
  padding: PropTypes.oneOf(Object.values(PADDING)),
  imgSrc: PropTypes.string,
  shadow: PropTypes.bool,
  className: PropTypes.string
};

export default Box;
export {COLOR, PADDING};
