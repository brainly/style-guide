// @flow

import * as React from 'react';
import classNames from 'classnames';

export const TEXT_TYPE = Object.freeze({
  SPAN: 'span',
  P: 'p',
  H1: 'h1',
  H2: 'h2',
  H3: 'h3',
  H4: 'h4',
  H5: 'h5',
  H6: 'h6',
  DIV: 'div',
  LABEL: 'label'
});

export const TEXT_SIZE = Object.freeze({
  XSMALL: 'xsmall',
  SMALL: 'small',
  NORMAL: 'normal',
  LARGE: 'large',
  XLARGE: 'xlarge',
  XXLARGE: 'xxlarge'
});

export const TEXT_COLOR = Object.freeze({
  WHITE: 'white',
  GRAY: 'gray',
  GRAY_SECONDARY: 'gray-secondary',
  MINT: 'mint',
  PEACH: 'peach',
  MUSTARD: 'mustard',
  BLUE: 'blue',
  BLUE_SECONDARY: 'blue-secondary',
  BLUE_SECONDARY_LIGHT: 'blue-secondary-light'
});

export const TEXT_WEIGHT = Object.freeze({
  REGULAR: 'regular',
  BOLD: 'bold'
});

export const TEXT_TRANSFORM = Object.freeze({
  UPPERCASE: 'uppercase',
  LOWERCASE: 'lowercase',
  CAPITALIZE: 'capitalize'
});

export const TEXT_ALIGN = Object.freeze({
  LEFT: 'to-left',
  CENTER: 'to-center',
  RIGHT: 'to-right',
  JUSTIFY: 'justify'
});

type TextPropsType = {
  children: React.Node,
  size?: $Values<typeof TEXT_SIZE>,
  type?: $Values<typeof TEXT_TYPE>,
  color?: $Values<typeof TEXT_COLOR>,
  weight?: $Values<typeof TEXT_WEIGHT>,
  transform?: $Values<typeof TEXT_TRANSFORM>,
  align?: $Values<typeof TEXT_ALIGN>,
  noWrap?: boolean,
  asContainer?: boolean,
  full?: boolean,
  breakWords?: boolean,
  className?: string
};

const Text = ({
  children,
  type = TEXT_TYPE.DIV,
  size = TEXT_SIZE.NORMAL,
  weight = TEXT_WEIGHT.REGULAR,
  color = TEXT_COLOR.GRAY,
  transform = '',
  align = '',
  noWrap,
  asContainer,
  full,
  breakWords,
  className,
  ...props
}: TextPropsType) => {

  const Type = type;
  const textClass = classNames('sg-text', {
    [`sg-text--${size}`]: size !== TEXT_SIZE.NORMAL,
    [`sg-text--${color}`]: color,
    [`sg-text--${weight}`]: weight,
    [`sg-text--${transform}`]: transform,
    [`sg-text--${align}`]: align,
    'sg-text--container': asContainer,
    'sg-text--full': full,
    'sg-text--no-wrap': noWrap,
    'sg-text--break-words': breakWords
  }, className);

  return (
    <Type {...props} className={textClass}>
      {children}
    </Type>
  );
};

export default Text;
