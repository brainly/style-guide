// @flow strict

import * as React from 'react';
import classnames from 'classnames';

export type ColorType =
  | 'gray-70'
  | 'gray-50'
  | 'gray-40'
  | 'gray-20'
  | 'gray-10'
  | 'blue-40'
  | 'blue-30'
  | 'blue-20'
  | 'green-40'
  | 'green-30'
  | 'green-20'
  | 'indigo-40'
  | 'indigo-30'
  | 'indigo-20'
  | 'yellow-40'
  | 'yellow-30'
  | 'yellow-20';

export const CARD_HOLE_COLOR = {
  'gray-70': 'gray-70',
  'gray-50': 'gray-50',
  'gray-40': 'gray-40',
  'gray-20': 'gray-20',
  'gray-10': 'gray-10',
  'blue-40': 'blue-40',
  'blue-30': 'blue-30',
  'blue-20': 'blue-20',
  'green-40': 'green-40',
  'green-30': 'green-30',
  'green-20': 'green-20',
  'indigo-40': 'indigo-40',
  'indigo-30': 'indigo-30',
  'indigo-20': 'indigo-20',
  'yellow-40': 'yellow-40',
  'yellow-30': 'yellow-30',
  'yellow-20': 'yellow-20',
};

export type CardHolePropsType = {
  children: React.Node,
  className?: string,
  color?: ColorType,
  ...
};

const CardHole = ({
  color,
  children,
  className,
  ...props
}: CardHolePropsType) => {
  const cardHoleClass = classnames(
    'sg-card__hole',
    {
      [`sg-card__hole--${String(color)}`]: color,
    },
    className
  );

  return (
    <div {...props} className={cardHoleClass}>
      {children}
    </div>
  );
};

export default CardHole;
