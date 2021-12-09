// @flow strict

import * as React from 'react';
import classNames from 'classnames';
import {SUBHEADING_TYPE, SUBHEADING_SIZE} from './subheadingConsts';

export type SubheadingTypeType =
  | 'span'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6';

export type SubheadingSizeType =
  | 'xsmall'
  | 'small'
  | 'medium'
  | 'large'
  | 'xlarge'
  | 'xxlarge'
  | 'xxxlarge';

export type SubheadingColorType =
  | 'text-black'
  | 'text-white'
  | 'text-gray-70'
  | 'text-gray-60'
  | 'text-gray-40'
  | 'text-green-60'
  | 'text-red-60'
  | 'text-indigo-60'
  | 'text-yellow-60'
  | 'tetx-blue-60';

export type SubheadingTransformType = 'uppercase' | 'lowercase' | 'capitalize';

export type SubheadingAlignType =
  | 'to-left'
  | 'to-center'
  | 'to-right'
  | 'justify';

export {
  SUBHEADING_TYPE,
  SUBHEADING_SIZE,
  SUBHEADING_COLOR,
  SUBHEADING_TRANSFORM,
  SUBHEADING_ALIGN,
} from './subheadingConsts';

export type SubheadingPropsType = {
  children?: React.Node,
  size?: SubheadingSizeType,
  type?: SubheadingTypeType,
  color?: ?SubheadingColorType,
  transform?: ?SubheadingTransformType,
  align?: ?SubheadingAlignType,
  className?: ?string,
  inherited?: ?boolean,
  ...
};

const Subheading = ({
  children,
  type = SUBHEADING_TYPE.H1,
  size,
  transform,
  align,
  color,
  className,
  inherited = false,
  ...props
}: SubheadingPropsType) => {
  const Type = type;
  const subheadingClass = classNames(
    'sg-subheading',
    {
      'sg-subheading--inherited': inherited,
      [`sg-subheading--${String(size)}`]:
        size && size !== SUBHEADING_SIZE.MEDIUM,
      [`sg-subheading--${String(color)}`]: color,
      [`sg-subheading--${String(transform)}`]: transform,
      [`sg-subheading--${align || ''}`]: align,
    },
    className
  );

  return (
    <Type {...props} className={subheadingClass}>
      {children}
    </Type>
  );
};

export default Subheading;
