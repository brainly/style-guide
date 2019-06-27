// @flow strict

import React from 'react';
import type {Node} from 'react';
import classNames from 'classnames';

export type BadgeSizeType =
  | 'normal'
  | 'small'
  | 'large';

export type BadgeColorType =
  | 'light'
  | 'peach'
  | 'mustard'
  | 'mint'
  | 'mint-secondary'
  | 'blue-secondary'
  | 'blue'
  | 'gray-secondary'
  | 'mint-secondary-light'
  | 'peach-secondary-light'
  | 'blue-secondary-light'
  | 'lavender';

export const BADGE_SIZE = {
  NORMAL: 'normal',
  SMALL: 'small',
  LARGE: 'large'
};

export const BADGE_COLOR = {
  NORMAL: 'light',
  PEACH: 'peach',
  MUSTARD: 'mustard',
  MINT: 'mint',
  MINT_SECONDARY: 'mint-secondary',
  BLUE_SECONDARY: 'blue-secondary',
  BLUE: 'blue',
  GRAY_SECONDARY: 'gray-secondary',
  MINT_SECONDARY_LIGHT: 'mint-secondary-light',
  PEACH_SECONDARY_LIGHT: 'peach-secondary-light',
  BLUE_SECONDARY_LIGHT: 'blue-secondary-light',
  LAVENDER: 'lavender'
};

type PropsType = {
  children: Node,
  className?: string,
  color?: BadgeColorType,
  size?: BadgeSizeType,
  rounded?: boolean,
  withAnimation?: boolean
};

const Badge = ({
  children,
  color = BADGE_COLOR.NORMAL,
  size = BADGE_SIZE.NORMAL,
  rounded,
  withAnimation,
  className,
  ...props
}: PropsType) => {
  const badgeClass = classNames('sg-badge', {
    [`sg-badge--${color}`]: color !== BADGE_COLOR.NORMAL,
    [`sg-badge--${size}`]: size !== BADGE_SIZE.NORMAL,
    'sg-badge--rounded': rounded,
    'sg-badge--with-animation': withAnimation
  }, className);

  return (
    <div {...props} className={badgeClass}>
      {children}
    </div>
  );
};

export default Badge;
