import * as React from 'react';
import classNames from 'classnames';
import {HEADLINE_AS} from './headlineConsts';
import {TEXT_COLOR} from './Text';
import type {TextColorType} from './Text';
import {generateResponsiveClassNames} from '../utils/responsive-props';
import type {ResponsivePropType} from '../utils/responsive-props';

export type HeadlineAsType =
  | 'span'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'blockquote'
  | 'q'
  | 'strong'
  | 'em'
  | 'del'
  | 'ins';
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
  HEADLINE_AS,
  HEADLINE_SIZE,
  HEADLINE_TRANSFORM,
  HEADLINE_ALIGN,
} from './headlineConsts';
export {TEXT_COLOR};
export type HeadlinePropsType = {
  children?: React.ReactNode;
  size?: ResponsivePropType<HeadlineSizeType>;
  as?: HeadlineAsType;
  color?: TextColorType | null | undefined;
  transform?: ResponsivePropType<HeadlineTransformType | null | undefined>;
  align?: ResponsivePropType<HeadlineAlignType | null | undefined>;
  className?: string | null | undefined;
  extraBold?: ResponsivePropType<boolean | null | undefined>;
  inherited?: boolean | null | undefined;
} & Omit<
  React.AllHTMLAttributes<HTMLElement>,
  | 'children'
  | 'size'
  | 'type'
  | 'color'
  | 'transform'
  | 'align'
  | 'className'
  | 'extraBold'
  | 'inherited'
>;

const Headline = ({
  children,
  as = HEADLINE_AS.H1,
  size,
  extraBold,
  transform,
  align,
  color,
  className,
  inherited = false,
  ...props
}: HeadlinePropsType) => {
  const Type = as;
  const headlineClass = classNames(
    'sg-headline',
    {
      'sg-headline--inherited': inherited,
      [`sg-headline--${String(color)}`]: color,
      'sg-headline--extra-bold': as === 'strong',
    },
    ...generateResponsiveClassNames(
      propValue => `sg-headline--${propValue}`,
      size
    ),
    ...generateResponsiveClassNames(
      propValue => `sg-headline--${propValue}`,
      transform
    ),
    ...generateResponsiveClassNames(
      propValue =>
        propValue ? `sg-headline--extra-bold` : 'sg-headline--no-bold',
      extraBold
    ),
    ...generateResponsiveClassNames(
      propValue => `sg-headline--${propValue}`,
      align
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
