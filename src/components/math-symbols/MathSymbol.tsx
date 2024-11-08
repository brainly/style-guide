import * as React from 'react';
import classNames from 'classnames';
import {ICON_COLOR} from '../icons/Icon';
import type {IconColorType} from '../icons/Icon';

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
} as const;

const WIDE: Array<string> = [
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
} as const;

export type MathSymbolPropsType = {
  type: MathSymbolTypeType;
  size?: MathSymbolSizeType;
  color?: IconColorType;
  className?: string;
  title?: string;
} & Omit<
  React.AllHTMLAttributes<HTMLElement>,
  'type' | 'size' | 'color' | 'className' | 'title'
>;

const MathSymbol = ({
  type,
  size = SIZE.NORMAL,
  color,
  className,
  title,
  ...props
}: MathSymbolPropsType) => {
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
  const titleId = `sg-math-symbol-icon-${type}-title`;
  const defaultTitle = type.replace(/-/g, ' ');

  return (
    // @ts-ignore ts migration
    <svg {...props} className={iconClass} aria-labelledby={titleId} role="img">
      {/* @ts-ignore ts migration */}
      <text id={titleId} hidden>
        {title || defaultTitle}
      </text>
      <use xlinkHref={iconType} aria-hidden="true" />
    </svg>
  );
};

export default MathSymbol;
export {ICON_COLOR};
