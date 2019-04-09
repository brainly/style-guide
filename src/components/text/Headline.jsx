// @flow
import * as React from 'react';
import classNames from 'classnames';
import type {
  HeadlineTypeType,
  HeadlineSizeType,
  HeadlineColorType,
  HeadlineTransformType,
  HeadlineAlignType
} from './headlineTypes';

import {HEADLINE_SIZE, HEADLINE_TYPE} from './headlineConsts';

export {HEADLINE_TYPE, HEADLINE_SIZE, HEADLINE_COLOR, HEADLINE_TRANSFORM, HEADLINE_ALIGN} from './headlineConsts';

export type HeadlinePropsType = {
  children?: React.Node,
  size?: HeadlineSizeType,
  type?: HeadlineTypeType,
  color?: HeadlineColorType,
  transform?: HeadlineTransformType,
  align?: HeadlineAlignType,
  className?: string,
  extraBold?: boolean
};

const Headline = ({
  children,
  type = HEADLINE_TYPE.H1,
  size = HEADLINE_SIZE.NORMAL,
  extraBold,
  transform,
  align,
  color,
  className,
  ...props
}: HeadlinePropsType) => {
  const Type = type;
  const headlineClass = classNames('sg-headline', {
    [`sg-headline--${size}`]: size !== HEADLINE_SIZE.NORMAL,
    [`sg-headline--${String(color)}`]: color,
    [`sg-headline--${String(transform)}`]: transform,
    [`sg-headline--${align || ''}`]: align,
    'sg-headline--extra-bold': extraBold
  }, className);

  return (
    <Type {...props} className={headlineClass}>
      {children}
    </Type>
  );
};

export default Headline;
