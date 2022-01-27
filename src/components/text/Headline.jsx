// @flow strict

import * as React from 'react';
import classNames from 'classnames';
import {HEADLINE_TYPE} from './headlineConsts';
import {TEXT_COLOR} from './Text';
import type {TextColorType} from './Text';
import {ResponsivePropType, generateResponsiveClassNames} from '../../utils';

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
  color?: ?TextColorType,
  transform?: ResponsivePropType<?HeadlineTransformType>,
  align?: ResponsivePropType<?HeadlineAlignType>,
  className?: ?string,
  extraBold?: ResponsivePropType<?boolean>,
  inherited?: ?boolean,
  ...
};

const Headline = ({
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
    'sg-headline',
    {
      'sg-headline--inherited': inherited,
      [`sg-headline--${String(color)}`]: color,
      [`sg-headline--${align || ''}`]: align,
    },
    ...generateResponsiveClassNames(
      (propValue: string) => `sg-headline--${propValue}`,
      size
    ),
    ...generateResponsiveClassNames(
      (propValue: string) => `sg-headline--${propValue}`,
      transform
    ),
    ...generateResponsiveClassNames(
      (propValue: string) =>
        propValue ? `sg-headline--extra-bold` : 'sg-headline--no-bold',
      extraBold
    ),
    className
  );

  return (
    <Type {...props} className={headlineClass}>
      {children}
    </Type>
  );
};

export default Headline;
