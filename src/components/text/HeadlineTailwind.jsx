// @flow strict

import * as React from 'react';
import classNames from 'classnames';
import {HEADLINE_TYPE} from './headlineConsts';
import {TEXT_COLOR} from './Text';
import type {TextColorType} from './Text';
import type {ResponsivePropType} from '../utils/responsive-props';

export type HeadlineTypeType = 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export type HeadlineSizeType =
  | 'xxsmall'
  | 'xsmall'
  | 'small'
  | 'medium'
  | 'large'
  | 'xlarge'
  | 'xxlarge'
  | 'xxxlarge';

export type HeadlineTransformType = 'uppercase' | 'lowercase' | 'capitalize';

export type HeadlineAlignType =
  | 'to-left'
  | 'to-center'
  | 'to-right'
  | 'justify';

export {
  HEADLINE_TYPE,
  HEADLINE_SIZE,
  HEADLINE_TRANSFORM,
  HEADLINE_ALIGN,
} from './headlineConsts';

export {TEXT_COLOR};

export type HeadlinePropsType = {
  children?: React.Node,
  size?: ResponsivePropType<HeadlineSizeType>,
  type?: HeadlineTypeType,
  color?: TextColorType,
  transform?: ResponsivePropType<?HeadlineTransformType>,
  align?: ResponsivePropType<?HeadlineAlignType>,
  className?: ?string,
  extraBold?: ResponsivePropType<?boolean>,
  inherited?: ?boolean,
  ...
};

const HeadlineTailwind = ({
  children,
  type = HEADLINE_TYPE.H1,
  size,
  extraBold,
  transform,
  align,
  color,
  className,
  inherited = false,
  ...props
}: HeadlinePropsType) => {
  const Type = type;
  const headlineClass = classNames(
    'block black bold max-w-full',
    {
      '[display:revert] [font-size:inherit] [line-height:inherit] [font-weight:inherit] [color:inherit]':
        inherited,
      'text-text-black': color === 'text-black',
      'text-text-white': color === 'text-white',
      'text-text-gray-70': color === 'text-gray-70',
      'text-text-gray-60': color === 'text-gray-60',
      'text-text-gray-50': color === 'text-gray-50',
      'text-text-gray-40': color === 'text-gray-40',
      'text-text-blue-60': color === 'text-blue-60',
      'text-text-blue-40': color === 'text-blue-40',
      'text-text-green-60': color === 'text-green-60',
      'text-text-green-40': color === 'text-green-40',
      'text-text-indigo-60': color === 'text-indigo-60',
      'text-text-indigo-40': color === 'text-indigo-40',
      'text-text-red-60': color === 'text-red-60',
      'text-text-red-40': color === 'text-red-40',
      'text-text-yellow-60': color === 'text-yellow-60',
      'text-text-yellow-40': color === 'text-yellow-40',
      'text-headline-normal': !size,
      'text-headline-xxsmall': size === 'xxsmall',
      'text-headline-xsmall': size === 'xsmall',
      'text-headline-small': size === 'small',
      'text-headline-medium': size === 'medium',
      'text-headline-large': size === 'large',
      'text-headline-xlarge': size === 'xlarge',
      'text-headline-xxlarge': size === 'xxlarge',
      'text-headline-xxxlarge': size === 'xxxlarge',
      uppercase: transform === 'uppercase',
      lowercase: transform === 'lowercase',
      capitalize: transform === 'capitalize',
      'font-black': extraBold,
      'font-bold': !extraBold,
      'text-left': align === 'to-left',
      'text-center': align === 'to-center',
      'text-right': align === 'to-right',
      'text-justify': align === 'justify',
    },
    className
  );

  return (
    <Type {...props} className={headlineClass}>
      {children}
    </Type>
  );
};

export default HeadlineTailwind;
