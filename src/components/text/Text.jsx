// @flow

import * as React from 'react';
import classNames from 'classnames';
import {
  TEXT_TYPE,
  TEXT_SIZE,
  TEXT_COLOR,
  TEXT_WEIGHT,
  TEXT_TRANSFORM,
  TEXT_ALIGN
} from './textConsts';

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
  TEXT_ALIGN
} from './textConsts';

export type TextPropsType = {
  children?: React.Node,
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
  color = TEXT_COLOR.DEFAULT,
  transform,
  align,
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
    [`sg-text--${color}`]: color !== TEXT_COLOR.DEFAULT,
    [`sg-text--${weight}`]: weight !== TEXT_WEIGHT.REGULAR,
    [`sg-text--${transform || ''}`]: transform,
    [`sg-text--${align || ''}`]: align,
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
