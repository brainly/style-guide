// @flow

import * as React from 'react';
import classNames from 'classnames';
import type {
  TextBitTypeType,
  TextBitSizeType,
  TextBitColorType
} from './textTypes';

export const TEXT_BIT_TYPE = Object.freeze({
  H1: 'h1',
  H2: 'h2',
  H3: 'h3',
  H4: 'h4',
  H5: 'h5',
  H6: 'h6',
  DIV: 'div'
});

export const TEXT_BIT_SIZE = Object.freeze({
  SMALL: 'small',
  NORMAL: 'normal',
  LARGE: 'large',
  XLARGE: 'xlarge'
});

export const TEXT_BIT_COLOR = Object.freeze({
  BLUE_SECONDARY: 'blue-secondary',
  WHITE: 'white',
  BLACK: 'black',
  MINT: 'mint',
  BLUE_PRIMARY: 'blue-primary',
  GRAY_SECONDARY: 'gray-secondary',
  PEACH_PRIMARY: 'peach-primary'
});

type TextBitPropsType = {
  children: React.Node,
  type?: TextBitTypeType,
  size?: TextBitSizeType,
  color?: TextBitColorType,
  className?: string
};

const TextBit = ({
  children,
  type = TEXT_BIT_TYPE.H1,
  size = TEXT_BIT_SIZE.NORMAL,
  color,
  className,
  ...props}: TextBitPropsType) => {
  const Type = type;
  const textClass = classNames('sg-text-bit', {
    [`sg-text-bit--${size}`]: size && size !== TEXT_BIT_SIZE.NORMAL,
    [`sg-text-bit--${color || ''}`]: color
  }, className);

  return (
    <Type {...props} className={textClass}>
      {children}
    </Type>
  );
};

export default TextBit;
