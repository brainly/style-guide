// @flow

import * as React from 'react';
import classNames from 'classnames';

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
  LARGE: 'large',
  XLARGE: 'xlarge'
});

export const TEXT_BIT_COLOR = Object.freeze({
  BLUE_SECONDARY: 'blue-secondary',
  WHITE: 'white',
  BLACK: 'black',
  GRAY_SECONDARY: 'gray-secondary',
  PEACH_PRIMARY: 'peach-primary'
});

type TextBitPropsType = {
  children: React.Node,
  type: $Values<typeof TEXT_BIT_TYPE>,
  size: $Values<typeof TEXT_BIT_SIZE>,
  color: $Values<typeof TEXT_BIT_COLOR>,
  className: string
};

const TextBit = ({children, type = TEXT_BIT_TYPE.H1, color, size, className, ...props}: TextBitPropsType) => {
  const Type = type;
  const textClass = classNames('sg-text-bit', {
    [`sg-text-bit--${size}`]: size,
    [`sg-text-bit--${color}`]: color
  }, className);

  return (
    <Type {...props} className={textClass}>
      {children}
    </Type>
  );
};

export default TextBit;
