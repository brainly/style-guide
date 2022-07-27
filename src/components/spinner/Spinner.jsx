// @flow strict

import * as React from 'react';
import classNames from 'classnames';

export type SpinnerSizeType = 'small' | 'xsmall' | 'xxsmall';

export type SpinnerColorType =
  | 'black'
  | 'white'
  | 'gray-70'
  | 'gray-50'
  | 'red-40'
  | 'red-50'
  | 'yellow-40'
  | 'blue-40'
  | 'indigo-50';

export type AriaLiveType = 'off' | 'polite' | 'assertive';

export const SPINNER_SIZE = {
  SMALL: 'small',
  XSMALL: 'xsmall',
  XXSMALL: 'xxsmall',
};

export const SPINNER_COLOR = {
  black: 'black',
  white: 'white',
  'indigo-50': 'indigo-50',
  'gray-70': 'gray-70',
  'gray-50': 'gray-50',
  'red-40': 'red-40',
  'red-50': 'red-50',
  'yellow-40': 'yellow-40',
  'blue-40': 'blue-40',
};

export type SpinnerPropsType = {
  color?: SpinnerColorType,
  size?: SpinnerSizeType,
  className?: string,
  'aria-label'?: string,
  'aria-live'?: AriaLiveType,
  ...
};

const Spinner = ({
  color = 'gray-70',
  size = SPINNER_SIZE.SMALL,
  'aria-label': ariaLabel = 'loading',
  'aria-live': ariaLive = 'assertive',
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

  return (
    <div
      {...props}
      className={spinnerClassNames}
      aria-live={ariaLive}
      role="status"
      aria-atomic="true"
    >
      <span className="sg-visually-hidden">{ariaLabel}</span>
    </div>
  );
};

export default Spinner;
