// @flow strict

import * as React from 'react';
import classNames from 'classnames';

export type SpinnerSizeType = 'small' | 'xsmall' | 'xxsmall';

export const SPINNER_SIZE = {
  SMALL: 'small',
  XSMALL: 'xsmall',
  XXSMALL: 'xxsmall',
};

export type SpinnerPropsType = {
  light?: boolean,
  size?: SpinnerSizeType,
  className?: string,
  ...
};

const Spinner = ({light, size, className, ...props}: SpinnerPropsType) => {
  const spinnerClassNames = classNames(
    'sg-spinner',
    {
      'sg-spinner--light': light,
      [`sg-spinner--${String(size)}`]: size,
    },
    className
  );

  return <div {...props} className={spinnerClassNames} />;
};

export default Spinner;
