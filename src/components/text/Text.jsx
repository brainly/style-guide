import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const TYPE = {
  STANDOUT: 'standout',
  OBSCURE: 'obscure',
  SMALL: 'small',
  XSMALL: 'xsmall',
  HEADLINE: 'headline'
};

const COLOR = {
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
  NORMAL: 'regular',
  BOLD: 'emphasised'
};

const Text = ({children, type, weight, color, noWrap, breakWords}) => {

  const textClass = classNames('sg-text', {
    [`sg-text--${type}`]: type,
    [`sg-text--${color}`]: color,
    [`sg-text--${weight}`]: weight,
    'sg-text--no-wrap': noWrap,
    'sg-text--break-words': breakWords
  });

  return <div className={textClass}>
    {children}
  </div>;
};

Text.propTypes = {
  children: PropTypes.node,
  type: PropTypes.oneOf(Object.values(TYPE)),
  color: PropTypes.oneOf(Object.values(COLOR)),
  weight: PropTypes.oneOf(Object.values(WEIGHT)),
  noWrap: PropTypes.bool,
  breakWords: PropTypes.bool
};

export default Text;
export {TYPE, COLOR, WEIGHT};
