// @flow strict

import React from 'react';
import classNames from 'classnames';

export type SpinnerSizeType = 'small' | 'xsmall' | 'xxsmall';

export const SPINNER_SIZE = {
  SMALL: 'small',
  XSMALL: 'xsmall',
  XXSMALL: 'xxsmall',
};

type PropsType = {
  light?: boolean,
  size?: SpinnerSizeType,
  className?: string,
};

const Spinner = ({light, size, className, ...props}: PropsType) => {
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
