// @flow strict

import * as React from 'react';
import classNames from 'classnames';

type TextBitTypeType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div' | 'span';

type TextBitSizeType = 'small' | 'medium' | 'large' | 'xlarge';

type TextBitColorType =
  | 'text-black'
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

export const TEXT_BIT_TYPE: {
  H1: 'h1',
  H2: 'h2',
  H3: 'h3',
  H4: 'h4',
  H5: 'h5',
  H6: 'h6',
  DIV: 'div',
  SPAN: 'span',
} = {
  H1: 'h1',
  H2: 'h2',
  H3: 'h3',
  H4: 'h4',
  H5: 'h5',
  H6: 'h6',
  DIV: 'div',
  SPAN: 'span',
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

export const TEXT_BIT_COLOR: {
  'text-black': 'text-black',
  'text-gray-60': 'text-gray-60',
  'text-gray-40': 'text-gray-40',
  'text-blue-60': 'text-blue-60',
  'text-blue-40': 'text-blue-40',
  'text-green-60': 'text-green-60',
  'text-green-40': 'text-green-40',
  'text-indigo-60': 'text-indigo-60',
  'text-indigo-40': 'text-indigo-40',
  'text-red-60': 'text-red-60',
  'text-red-40': 'text-red-40',
  'text-yellow-60': 'text-yellow-60',
  'text-yellow-40': 'text-yellow-40',
} = {
  'text-black': 'text-black',
  'text-gray-60': 'text-gray-60',
  'text-gray-40': 'text-gray-40',
  'text-blue-60': 'text-blue-60',
  'text-blue-40': 'text-blue-40',
  'text-green-60': 'text-green-60',
  'text-green-40': 'text-green-40',
  'text-indigo-60': 'text-indigo-60',
  'text-indigo-40': 'text-indigo-40',
  'text-red-60': 'text-red-60',
  'text-red-40': 'text-red-40',
  'text-yellow-60': 'text-yellow-60',
  'text-yellow-40': 'text-yellow-40',
};

export type TextBitPropsType = {
  children: React.Node,
  type?: TextBitTypeType,
  size?: TextBitSizeType,
  color?: ?TextBitColorType,
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
    {
      'sg-text-bit--inherited': inherited,
      [`sg-text-bit--${String(size)}`]: size && size !== TEXT_BIT_SIZE.MEDIUM,
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
