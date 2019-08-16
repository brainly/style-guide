// @flow strict

import React from 'react';
import classNames from 'classnames';
import * as IconModule from '../icons/Icon';

const {ICON_COLOR} = IconModule;

export type MathSymbolTypeType =
  | 'squere-root'
  | 'nth-root'
  | 'power'
  | 'subscript'
  | 'less-then-or-equal'
  | 'greater-then-or-equal'
  | 'inequality'
  | 'division'
  | 'pi'
  | 'alpha'
  | 'beta'
  | 'line'
  | 'limit'
  | 'matrix'
  | 'integral'
  | 'equation-system';

export const MATH_SYMBOL_TYPE = {
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
  EQUATION_SYSTEM: 'equation-system',
};

const WIDE = [
  MATH_SYMBOL_TYPE.LIMIT,
  MATH_SYMBOL_TYPE.MATRIX,
  MATH_SYMBOL_TYPE.INTEGRAL,
  MATH_SYMBOL_TYPE.EQUATION_SYSTEM,
];

export type MathSymbolSizeType = 'small' | 'medium' | 'normal';

export const SIZE = {
  SMALL: 'small',
  MEDIUM: 'medium',
  NORMAL: 'normal',
};

type PropsType = {
  type: MathSymbolTypeType,
  size?: MathSymbolSizeType,
  color?: IconModule.IconColorType,
  className?: string,
  ...
};

const MathSymbol = ({
  type,
  size = SIZE.NORMAL,
  color,
  className,
  ...props
}: PropsType) => {
  const isWide = WIDE.indexOf(type) !== -1;
  const iconClass = classNames(
    'sg-math-symbol-icon',
    {
      [`sg-math-symbol-icon--${size}`]: !isWide && size !== SIZE.NORMAL,
      [`sg-math-symbol-icon--wide-${size}`]: isWide && size !== SIZE.NORMAL,
      'sg-math-symbol-icon--wide': isWide && size === SIZE.NORMAL,
      [`sg-math-symbol-icon--${String(color)}`]: color,
    },
    className
  );
  const iconType = `#sg-math-symbol-icon-${type}`;

  return (
    <svg {...props} className={iconClass}>
      <use xlinkHref={iconType} />
    </svg>
  );
};

export default MathSymbol;
export {ICON_COLOR};
