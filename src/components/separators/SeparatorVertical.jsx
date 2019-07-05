// @flow strict
import React from 'react';
import classNames from 'classnames';

type SizeType =
  | 'normal'
  | 'small'
  | 'large'
  | 'full';

export const SIZE = {
  NORMAL: 'normal',
  SMALL: 'small',
  LARGE: 'large',
  FULL: 'full'
};

type SeparatorPropsType = {
  size?: SizeType,
  white?: boolean,
  grayDark?: boolean,
  className?: string
};

const Separator = ({size = SIZE.NORMAL, white, grayDark, className, ...props}: SeparatorPropsType) => {
  const separatorClass = classNames('sg-vertical-separator', {
    [`sg-vertical-separator--${size}`]: size !== SIZE.NORMAL,
    'sg-vertical-separator--white': white,
    'sg-vertical-separator--gray-dark': grayDark
  }, className);

  return <div {...props} className={separatorClass} />;
};

export default Separator;
