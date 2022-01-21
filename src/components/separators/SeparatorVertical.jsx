// @flow strict

import * as React from 'react';
import classNames from 'classnames';

type SizeType = 'normal' | 'small' | 'large' | 'full';

type SeparatorVerticalColorType = 'white' | 'gray-50' | 'gray-40';

export const SIZE: {
  NORMAL: 'normal',
  SMALL: 'small',
  LARGE: 'large',
  FULL: 'full',
} = {
  NORMAL: 'normal',
  SMALL: 'small',
  LARGE: 'large',
  FULL: 'full',
};

export const COLORS_MAP = {
  white: 'white',
  'gray-50': 'gray-50',
  'gray-40': 'gray-40',
};

export type SeparatorVerticalPropsType = {
  size?: SizeType,
  color?: SeparatorVerticalColorType,
  className?: string,
  ...
};

const Separator = ({
  size = SIZE.NORMAL,
  color = COLORS_MAP['gray-40'],
  className,
  ...props
}: SeparatorVerticalPropsType) => {
  const separatorClass = classNames(
    'sg-vertical-separator',
    {
      [`sg-vertical-separator--${size}`]: size !== SIZE.NORMAL,
      [`sg-vertical-separator--${String(color)}`]: color,
    },
    className
  );

  return <div {...props} className={separatorClass} />;
};

export default Separator;
