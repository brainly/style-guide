// @flow strict

import * as React from 'react';
import classNames from 'classnames';
import {SUBHEADLINE_TYPE, SUBHEADLINE_SIZE} from './subheadlineConsts';
import type {TextColorType} from './Text';

export type SubheadlineTypeType =
  | 'span'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6';

export type SubheadlineSizeType =
  | 'xsmall'
  | 'small'
  | 'medium'
  | 'large'
  | 'xlarge'
  | 'xxlarge'
  | 'xxxlarge';

export type SubheadlineTransformType = 'uppercase' | 'lowercase' | 'capitalize';

export type SubheadlineAlignType =
  | 'to-left'
  | 'to-center'
  | 'to-right'
  | 'justify';

export {
  SUBHEADLINE_TYPE,
  SUBHEADLINE_SIZE,
  SUBHEADLINE_TRANSFORM,
  SUBHEADLINE_ALIGN,
} from './subheadlineConsts';

export {TEXT_COLOR} from './Text';

export type SubheadlinePropsType = {
  children?: React.Node,
  size?: SubheadlineSizeType,
  type?: SubheadlineTypeType,
  color?: ?TextColorType,
  transform?: ?SubheadlineTransformType,
  align?: ?SubheadlineAlignType,
  className?: ?string,
  inherited?: ?boolean,
  ...
};

const Subheadline = ({
  children,
  type = SUBHEADLINE_TYPE.H2,
  size,
  transform,
  align,
  color,
  className,
  inherited = false,
  ...props
}: SubheadlinePropsType) => {
  const Type = type;
  const subheadlineClass = classNames(
    'sg-subheadline',
    {
      'sg-subheadline--inherited': inherited,
      [`sg-subheadline--${String(size)}`]:
        size && size !== SUBHEADLINE_SIZE.MEDIUM,
      [`sg-subheadline--${String(color)}`]: color,
      [`sg-subheadline--${String(transform)}`]: transform,
      [`sg-subheadline--${align || ''}`]: align,
    },
    className
  );

  return (
    <Type {...props} className={subheadlineClass}>
      {children}
    </Type>
  );
};

export default Subheadline;
