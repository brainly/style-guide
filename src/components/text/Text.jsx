// @flow strict

import * as React from 'react';
import classNames from 'classnames';
import {
  TEXT_TYPE,
  TEXT_SIZE,
  TEXT_WEIGHT,
  TEXT_WHITE_SPACE,
} from './textConsts';

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
  | 'a';

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
export type TextWhiteSpaceType = 'pre-wrap' | 'pre-line';

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
  size?: TextSizeType,
  type?: TextTypeType,
  color?: ?TextColorType,
  weight?: TextWeightType,
  transform?: ?TextTransformType,
  align?: ?TextAlignType,
  noWrap?: ?boolean,
  asContainer?: ?boolean,
  full?: ?boolean,
  breakWords?: ?boolean,
  whiteSpace?: TextWhiteSpaceType,
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
    'sg-text',
    {
      'sg-text--inherited': inherited,
      [`sg-text--${String(size)}`]: size && size !== TEXT_SIZE.MEDIUM,
      [`sg-text--${String(color)}`]: color,
      [`sg-text--${String(weight)}`]: weight && weight !== TEXT_WEIGHT.REGULAR,
      [`sg-text--${transform || ''}`]: transform,
      [`sg-text--${align || ''}`]: align,
      'sg-text--container': asContainer,
      'sg-text--full': full,
      'sg-text--no-wrap': noWrap,
      'sg-text--break-words': breakWords,
      'sg-text--pre-wrap': whiteSpace === TEXT_WHITE_SPACE.PRE_WRAP,
      'sg-text--pre-line': whiteSpace === TEXT_WHITE_SPACE.PRE_LINE,
    },
    className
  );

  return (
    <Type {...props} className={textClass}>
      {children}
    </Type>
  );
};

export default Text;
