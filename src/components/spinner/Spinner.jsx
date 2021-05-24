// @flow strict

import * as React from 'react';
import classNames from 'classnames';

export type SpinnerSizeType = 'small' | 'xsmall' | 'xxsmall';

export type SpinnerColorType =
  | 'black'
  | 'white'
  | 'gray'
  | 'peach'
  | 'mustard'
  | 'blue';

export const SPINNER_SIZE = {
  SMALL: 'small',
  XSMALL: 'xsmall',
  XXSMALL: 'xxsmall',
};

export const SPINNER_COLOR = {
  BLACK: 'black',
  WHITE: 'white',
  GRAY: 'gray',
  PEACH: 'peach',
  MUSTARD: 'mustard',
  BLUE: 'blue',
};

export type SpinnerPropsType = {
  color?: SpinnerColorType,
  size?: SpinnerSizeType,
  className?: string,
  ...
};

const Spinner = ({
  color = SPINNER_COLOR.BLACK,
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
