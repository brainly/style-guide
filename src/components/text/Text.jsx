// @flow strict

import * as React from 'react';
import classNames from 'classnames';
import {TEXT_TYPE, TEXT_SIZE, TEXT_WEIGHT} from './textConsts';

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
  | 'xsmall'
  | 'small'
  | 'normal'
  | 'large'
  | 'xlarge'
  | 'xxlarge';

export type TextColorType =
  | 'default'
  | 'white'
  | 'gray'
  | 'gray-secondary'
  | 'gray-secondary-light'
  | 'mint-dark'
  | 'peach-dark'
  | 'mustard-dark'
  | 'lavender-dark'
  | 'blue-dark';

export type TextWeightType = 'regular' | 'bold';

export type TextTransformType = 'uppercase' | 'lowercase' | 'capitalize';

export type TextAlignType = 'to-left' | 'to-center' | 'to-right' | 'justify';

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
} from './textConsts';

export type TextPropsType = {
  children?: ?React.Node,
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
  breakLines?: ?boolean,
  className?: ?string,
  ...
};

const Text = ({
  children,
  type = TEXT_TYPE.DIV,
  size = TEXT_SIZE.NORMAL,
  weight = TEXT_WEIGHT.REGULAR,
  color,
  transform,
  align,
  noWrap,
  asContainer,
  full,
  breakWords,
  breakLines,
  className,
  ...props
}: TextPropsType) => {
  const Type = type;
  const textClass = classNames(
    'sg-text',
    {
      [`sg-text--${String(size)}`]: size !== TEXT_SIZE.NORMAL,
      [`sg-text--${String(color)}`]: color,
      [`sg-text--${String(weight)}`]: weight !== TEXT_WEIGHT.REGULAR,
      [`sg-text--${transform || ''}`]: transform,
      [`sg-text--${align || ''}`]: align,
      'sg-text--container': asContainer,
      'sg-text--full': full,
      'sg-text--no-wrap': noWrap,
      'sg-text--break-words': breakWords,
      'sg-text--break-lines': breakLines,
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
