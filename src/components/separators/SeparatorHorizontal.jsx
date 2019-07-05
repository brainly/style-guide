// @flow strict
import React from 'react';
import classNames from 'classnames';

type SeparatorHorizontalTypeType =
  | 'normal'
  | 'spaced'
  | 'short-spaced';

type SeparatorHorizontalPropsType = {
  type?: SeparatorHorizontalTypeType,
  white?: boolean,
  grayDark?: boolean,
  className?: string
};

export const TYPE = {
  NORMAL: 'normal',
  SPACED: 'spaced',
  SHORT_SPACED: 'short-spaced'
};

const SeparatorHorizontal = ({
  type = TYPE.NORMAL, white, grayDark, className, ...props
}: SeparatorHorizontalPropsType) => {
  const separatorClass = classNames('sg-horizontal-separator', {
    [`sg-horizontal-separator--${type}`]: type !== TYPE.NORMAL,
    'sg-horizontal-separator--white': white,
    'sg-horizontal-separator--gray-dark': grayDark
  }, className);

  return <div {...props} className={separatorClass} />;
};

export default SeparatorHorizontal;
