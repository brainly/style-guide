// @flow strict

import * as React from 'react';
import classNames from 'classnames';

export type SpinnerSizeType = 'small' | 'xsmall' | 'xxsmall';

export type SpinnerColorType =
  | 'black'
  | 'white'
  | 'gray-900'
  | 'gray-700'
  | 'peach-700'
  | 'mustard-700'
  | 'blue-700';

export const SPINNER_SIZE = {
  SMALL: 'small',
  XSMALL: 'xsmall',
  XXSMALL: 'xxsmall',
};

export const SPINNER_COLOR = {
  BLACK: 'black',
  WHITE: 'white',
  GRAY900: 'gray-900',
  GRAY700: 'gray-700',
  PEACH700: 'peach-700',
  MUSTARD700: 'mustard-700',
  BLUE700: 'blue-700',
};

export type SpinnerPropsType = {
  color?: SpinnerColorType,
  size?: SpinnerSizeType,
  className?: string,
  ...
};

const Spinner = ({
  color = SPINNER_COLOR.GRAY900,
  size = SPINNER_SIZE.SMALL,
  className,
  ...props
}: SpinnerPropsType) => {
  const spinnerClassNames = classNames(
    'sg-spinner',
    {
      [`sg-spinner--${String(color)}`]: color,
      [`sg-spinner--${String(size)}`]: size,
    },
    className
  );

  return <div {...props} className={spinnerClassNames} />;
};

export default Spinner;
