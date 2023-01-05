// @flow strict

import * as React from 'react';
import classNames from 'classnames';
import type {TextColorType} from './Text';
import {TEXT_COLOR} from './textConsts';
import {generateResponsiveClassNames} from '../utils/responsive-props';
import type {ResponsivePropType} from '../utils/responsive-props';

type TextBitTypeType =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'div'
  | 'span'
  | 'blockquote'
  | 'q'
  | 'strong'
  | 'em'
  | 'del'
  | 'ins';

type TextBitSizeType = 'small' | 'medium' | 'large' | 'xlarge';

export const TEXT_BIT_TYPE: {
  H1: 'h1',
  H2: 'h2',
  H3: 'h3',
  H4: 'h4',
  H5: 'h5',
  H6: 'h6',
  DIV: 'div',
  SPAN: 'span',
  BLOCKQUOTE: 'blockquote',
  Q: 'q',
  STRONG: 'strong',
  EM: 'em',
  DEL: 'del',
  INS: 'ins',
} = {
  H1: 'h1',
  H2: 'h2',
  H3: 'h3',
  H4: 'h4',
  H5: 'h5',
  H6: 'h6',
  DIV: 'div',
  SPAN: 'span',
  BLOCKQUOTE: 'blockquote',
  Q: 'q',
  STRONG: 'strong',
  EM: 'em',
  DEL: 'del',
  INS: 'ins',
};

export const TEXT_BIT_SIZE: {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
  XLARGE: 'xlarge',
} = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
  XLARGE: 'xlarge',
};

export {TEXT_COLOR};

export type TextBitPropsType = {
  children: React.Node,
  type?: TextBitTypeType,
  size?: ResponsivePropType<TextBitSizeType>,
  color?: ?TextColorType,
  className?: ?string,
  inherited?: boolean,
  ...
};

const TextBit = ({
  children,
  type = TEXT_BIT_TYPE.H1,
  size,
  color,
  className,
  inherited,
  ...props
}: TextBitPropsType) => {
  const Type = type;
  const textClass = classNames(
    'sg-text-bit',
    ...generateResponsiveClassNames(size => `sg-text-bit--${size}`, size),
    {
      'sg-text-bit--inherited': inherited,
      [`sg-text-bit--${color || ''}`]: color,
    },
    className
  );

  return (
    <Type {...props} className={textClass}>
      {children}
    </Type>
  );
};

export default TextBit;
