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
  DIV: 'div'
};

export const SIZE = {
  STANDOUT: 'standout',
  OBSCURE: 'obscure',
  SMALL: 'small',
  XSMALL: 'xsmall',
  LARGE: 'large',
  HEADLINE: 'headline'
};

export const COLOR = {
  GRAY: 'gray',
  GRAY_SECONDARY: 'gray-secondary',
  MINT: 'mint',
  PEACH: 'peach',
  LIGHT: 'light',
  BLUE: 'blue',
  MUSTARD: 'mustard',
  FINE_PRINT: 'for-fine-print',
  FINE_PRINT_LIGHT: 'for-fine-print-light'
};

export const WEIGHT = {
  REGULAR: 'regular',
  BOLD: 'emphasised'
};

export const TEXT_TRANSFORM = {
  UPPERCASE: 'uppercase',
  LOWERCASE: 'lowercase',
  CAPITALIZE: 'capitalize'
};

export const TEXT_ALIGN = {
  LEFT: 'to-left',
  CENTER: 'to-center',
  RIGHT: 'to-right'
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
  full: PropTypes.bool,
  breakWords: PropTypes.bool,
  className: PropTypes.string
};

export default Text;
