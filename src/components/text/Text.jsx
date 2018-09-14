import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export const TYPE = {
  SPAN: 'span',
  P: 'p',
  H1: 'h1',
  H2: 'h2',
  H3: 'h3',
  H4: 'h4',
  H5: 'h5',
  H6: 'h6',
  DIV: 'div',
  LABEL: 'label'
};

export const SIZE = {
  XXLARGE: 'xxlarge',
  XLARGE: 'xlarge',
  LARGE: 'large',
  SMALL: 'small',
  XSMALL: 'xsmall'
};

export const COLOR = {
  GRAY: 'gray',
  GRAY_SECONDARY: 'gray-secondary',
  MINT: 'mint',
  PEACH: 'peach',
  WHITE: 'white',
  BLUE: 'blue',
  MUSTARD: 'mustard',
  BLUE_SECONDARY: 'blue-secondary',
  BLUE_SECONDARY_LIGHT: 'blue-secondary-light'
};

export const WEIGHT = {
  REGULAR: 'regular',
  BOLD: 'bold'
};

export const TEXT_TRANSFORM = {
  UPPERCASE: 'uppercase',
  LOWERCASE: 'lowercase',
  CAPITALIZE: 'capitalize'
};

export const TEXT_ALIGN = {
  LEFT: 'to-left',
  CENTER: 'to-center',
  RIGHT: 'to-right',
  JUSTIFY: 'justify'
};

const Text = ({
  children,
  size,
  weight,
  transform,
  align,
  color,
  className,
  type = TYPE.DIV,
  noWrap,
  asContainer,
  full,
  breakWords,
  ...props
}) => {

  const Type = type;
  const textClass = classNames('sg-text', {
    [`sg-text--${size}`]: size,
    [`sg-text--${color}`]: color,
    [`sg-text--${weight}`]: weight,
    [`sg-text--${transform}`]: transform,
    [`sg-text--${align}`]: align,
    'sg-text--container': asContainer,
    'sg-text--full': full,
    'sg-text--no-wrap': noWrap,
    'sg-text--break-words': breakWords
  }, className);

  return (
    <Type {...props} className={textClass}>
      {children}
    </Type>
  );
};

Text.propTypes = {
  children: PropTypes.node,
  size: PropTypes.oneOf(Object.values(SIZE)),
  color: PropTypes.oneOf(Object.values(COLOR)),
  weight: PropTypes.oneOf(Object.values(WEIGHT)),
  transform: PropTypes.oneOf(Object.values(TEXT_TRANSFORM)),
  align: PropTypes.oneOf(Object.values(TEXT_ALIGN)),
  type: PropTypes.oneOf(Object.values(TYPE)),
  noWrap: PropTypes.bool,
  asContainer: PropTypes.bool,
  full: PropTypes.bool,
  breakWords: PropTypes.bool,
  className: PropTypes.string
};

export default Text;
