import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const TYPE = {
  SQUERE_ROOT: 'squere-root',
  NTH_ROOT: 'nth-root',
  POWER: 'power',
  SUBSCRIPT: 'subscript',
  LESSEQUAL: 'less-then-or-equal',
  GREATEREQUAL: 'greater-then-or-equal',
  INEQUALITY: 'inequality',
  DIVISION: 'division',
  PI: 'pi',
  ALPHA: 'alpha',
  BETA: 'beta',
  LINE: 'line',
  LIMIT: 'limit',
  MATRIX: 'matrix',
  INTEGRAL: 'integral',
  EQUATION_SYSTEM: 'equation-system'
};

const WIDE = [TYPE.LIMIT, TYPE.MATRIX, TYPE.INTEGRAL, TYPE.EQUATION_SYSTEM];

const SIZE = {
  SMALL: 'small',
  MEDIUM: 'medium',
  NORMAL: 'normal'
};

const COLOR = {
  LIGHT: 'light',
  ADAPTIVE: 'adaptive',
  GRAY: 'gray',
  GRAY_SECONDARY: 'gray-secondary',
  GRAY_LIGHT: 'gray-light',
  BLUE: 'blue',
  MUSTARD: 'mustard',
  LAVENDER: 'lavender',
  PEACH: 'peach',
  DARK: 'dark',
  MINT: 'mint'
};

const MathSymbol = ({type, size = SIZE.NORMAL, color, className, ...props}) => {
  const iconClass = classNames('sg-math-symbol-icon', {
    [`sg-math-symbol-icon--${size}`]: size !== SIZE.NORMAL,
    [`sg-math-symbol-icon--wide`] : WIDE.includes(type),
    [`sg-math-symbol-icon--${color}`]: color
  }, className);
  const iconType = `#sg-math-symbol-icon-${type}`;

  return (
    <svg {...props} className={iconClass}>
      <use xlinkHref={iconType}></use>
    </svg>
  );
};

MathSymbol.propTypes = {
  type: PropTypes.oneOf(Object.values(TYPE)).isRequired,
  size: PropTypes.oneOf(Object.values(SIZE)),
  color: PropTypes.oneOf(Object.values(COLOR)),
  className: PropTypes.string
};

export default MathSymbol;
export {TYPE, SIZE, COLOR};
