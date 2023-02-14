import * as React from 'react';
import classNames from 'classnames';
import {TEXT_AS, TEXT_WHITE_SPACE} from './textConsts';
import {generateResponsiveClassNames} from '../utils/responsive-props';
import type {ResponsivePropType} from '../utils/responsive-props';

export type TextAsType =
  | 'span'
  | 'p'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'div'
  | 'label'
  | 'a'
  | 'strong'
  | 'em'
  | 'ins'
  | 'del'
  | 'blockquote'
  | 'q';
export type TextSizeType =
  | 'xxsmall'
  | 'xsmall'
  | 'small'
  | 'medium'
  | 'large'
  | 'xlarge'
  | 'xxlarge'
  | 'xxxlarge';
export type TextColorType =
  | 'text-black'
  | 'text-white'
  | 'text-gray-70'
  | 'text-gray-60'
  | 'text-gray-50'
  | 'text-gray-40'
  | 'text-blue-60'
  | 'text-blue-40'
  | 'text-green-60'
  | 'text-green-40'
  | 'text-indigo-60'
  | 'text-indigo-40'
  | 'text-red-60'
  | 'text-red-40'
  | 'text-yellow-60'
  | 'text-yellow-40';
export type TextWeightType = 'regular' | 'bold';
export type TextTransformType = 'uppercase' | 'lowercase' | 'capitalize';
export type TextAlignType = 'to-left' | 'to-center' | 'to-right' | 'justify';
export type TextWhiteSpaceType = 'pre-wrap' | 'pre-line' | 'normal';
export {
  AS, // backward compatibility
  SIZE, // backward compatibility
  COLOR, // backward compatibility
  WEIGHT, // backward compatibility
  TEXT_AS,
  TEXT_SIZE,
  TEXT_COLOR,
  TEXT_WEIGHT,
  TEXT_TRANSFORM,
  TEXT_ALIGN,
  TEXT_WHITE_SPACE,
} from './textConsts';
export type TextPropsType = {
  children?: React.ReactNode;
  size?: ResponsivePropType<TextSizeType>;
  as?: TextAsType;
  color?: TextColorType | null | undefined;
  weight?: ResponsivePropType<TextWeightType>;
  transform?: ResponsivePropType<TextTransformType | null | undefined>;
  align?: ResponsivePropType<TextAlignType | null | undefined>;
  noWrap?: ResponsivePropType<boolean | null | undefined>;
  asContainer?: boolean | null | undefined;
  // r?
  full?: ResponsivePropType<boolean | null | undefined>;
  breakWords?: ResponsivePropType<boolean | null | undefined>;
  whiteSpace?: ResponsivePropType<TextWhiteSpaceType>;
  className?: string | null | undefined;
  href?: string;
  inherited?: boolean;
} & Omit<
  React.AllHTMLAttributes<HTMLElement>,
  | 'children'
  | 'size'
  | 'type'
  | 'color'
  | 'weight'
  | 'transform'
  | 'align'
  | 'noWrap'
  | 'asContainer'
  | 'full'
  | 'breakWords'
  | 'whiteSpace'
  | 'className'
  | 'href'
  | 'inherited'
>;

const Text = ({
  children,
  as = TEXT_AS.DIV,
  size,
  weight,
  color,
  transform,
  align,
  noWrap,
  asContainer,
  full,
  breakWords,
  whiteSpace,
  className,
  inherited = false,
  ...props
}: TextPropsType) => {
  const Type = as;
  const textClass = classNames(
    'sg-text',
    {
      'sg-text--inherited': inherited,
      [`sg-text--${String(color)}`]: color,
      'sg-text--container': asContainer,
      'sg-text--bold': as === 'strong',
    },
    ...generateResponsiveClassNames(size => `sg-text--${size}`, size),
    ...generateResponsiveClassNames(weight => `sg-text--${weight}`, weight),
    ...generateResponsiveClassNames(
      transform => `sg-text--${transform}`,
      transform
    ),
    ...generateResponsiveClassNames(align => `sg-text--${align}`, align),
    ...generateResponsiveClassNames(
      noWrap => (noWrap ? `sg-text--no-wrap` : 'sg-text--wrap'),
      noWrap
    ),
    ...generateResponsiveClassNames(
      full => (full ? `sg-text--full` : 'sg-text--auto'),
      full
    ),
    ...generateResponsiveClassNames(
      breakWords =>
        breakWords ? 'sg-text--break-words' : 'sg-text--word-break-normal',
      breakWords
    ),
    ...generateResponsiveClassNames(whiteSpace => {
      if (whiteSpace === TEXT_WHITE_SPACE.PRE_WRAP) {
        return 'sg-text--pre-wrap';
      } else if (whiteSpace === TEXT_WHITE_SPACE.PRE_LINE) {
        return 'sg-text--pre-line';
      } else {
        return 'sg-text--white-space-normal';
      }
    }, whiteSpace),
    className
  );

  return (
    <Type {...props} className={textClass}>
      {children}
    </Type>
  );
};

export default Text;
