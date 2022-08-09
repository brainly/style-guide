// @flow strict

import * as React from 'react';
import classNames from 'classnames';
import {TEXT_TYPE, TEXT_WHITE_SPACE} from './textConsts';
import {generateResponsiveClassNames} from '../utils/responsive-props';
import type {ResponsivePropType} from '../utils/responsive-props';
import {
  colorVariants,
  textStyle,
  inheritedStyle,
  sizeVariants,
  weightVariants,
  wrapVariants,
} from './Text.css';

export type TextTypeType =
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
  TYPE, // backward compatibility
  SIZE, // backward compatibility
  COLOR, // backward compatibility
  WEIGHT, // backward compatibility
  TEXT_TYPE,
  TEXT_SIZE,
  TEXT_COLOR,
  TEXT_WEIGHT,
  TEXT_TRANSFORM,
  TEXT_ALIGN,
  TEXT_WHITE_SPACE,
} from './textConsts';

export type TextPropsType = {
  children?: React.Node,
  size?: ResponsivePropType<TextSizeType>,
  type?: TextTypeType,
  color?: ?TextColorType,
  weight?: ResponsivePropType<TextWeightType>,
  transform?: ResponsivePropType<?TextTransformType>,
  align?: ResponsivePropType<?TextAlignType>,
  noWrap?: ResponsivePropType<?boolean>,
  asContainer?: ?boolean, // r?
  full?: ResponsivePropType<?boolean>,
  breakWords?: ResponsivePropType<?boolean>,
  whiteSpace?: ResponsivePropType<TextWhiteSpaceType>,
  className?: ?string,
  href?: string,
  inherited?: boolean,
  ...
};

const Text = ({
  children,
  type = TEXT_TYPE.DIV,
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
  const Type = type;
  const textClass = classNames(
    textStyle,
    {
      [inheritedStyle]: inherited,
      [colorVariants[color]]: color,
      'sg-text--container': asContainer,
      [weightVariants.bold]: type === 'strong',
    },
    ...generateResponsiveClassNames(size => size, size).map(
      className => sizeVariants[className]
    ),
    ...generateResponsiveClassNames(weight => weight, weight).map(
      className => weightVariants[className]
    ),
    ...generateResponsiveClassNames(
      transform => `sg-text--${transform}`,
      transform
    ),
    ...generateResponsiveClassNames(align => `sg-text--${align}`, align),
    ...generateResponsiveClassNames(
      noWrap => (noWrap ? wrapVariants.noWrap : wrapVariants.noWrap),
      noWrap
    ).map(className => wrapVariants[className]),
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
