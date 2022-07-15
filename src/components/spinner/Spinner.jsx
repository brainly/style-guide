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
  ...
};

const Spinner = ({
  color = 'gray-70',
  size = SPINNER_SIZE.SMALL,
  'aria-label': ariaLabel = 'loading',
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
    <div {...props} className={spinnerClassNames}>
      <span className="sg-visually-hidden" aria-live="assertive" role="status">
        {ariaLabel}
      </span>
    </div>
  );
};

export default Spinner;
