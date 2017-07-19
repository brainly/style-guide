import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const TYPE = {
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

const SIZE = {
  STANDOUT: 'standout',
  OBSCURE: 'obscure',
  SMALL: 'small',
  XSMALL: 'xsmall',
  LARGE: 'large',
  HEADLINE: 'headline'
};

const COLOR = {
  DEFAULT: 'default',
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

const WEIGHT = {
  REGULAR: 'regular',
  BOLD: 'emphasised'
};

const Text = ({children, size, weight, color, type = TYPE.DIV, noWrap, breakWords}) => {

  const Type = type;
  const textClass = classNames('sg-text', {
    [`sg-text--${size}`]: size,
    [`sg-text--${color}`]: color !== COLOR.DEFAULT,
    [`sg-text--${weight}`]: weight,
    'sg-text--no-wrap': noWrap,
    'sg-text--break-words': breakWords
  });

  return <Type className={textClass}>
    {children}
  </Type>;
};

Text.propTypes = {
  children: PropTypes.node,
  size: PropTypes.oneOf(Object.values(SIZE)),
  color: PropTypes.oneOf(Object.values(COLOR)),
  weight: PropTypes.oneOf(Object.values(WEIGHT)),
  type: PropTypes.oneOf(Object.values(TYPE)),
  noWrap: PropTypes.bool,
  breakWords: PropTypes.bool
};

export default Text;
export {TYPE, SIZE, COLOR, WEIGHT};
