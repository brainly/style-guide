// @flow

import * as React from 'react';
import classNames from 'classnames';
import {
  FLEX_DIRECTION,
  FLEX_DISPLAY,
  FLEX_JUSTIFY_VALUES,
  FLEX_ALIGNMENT_VALUES,
  SPACING_SET
} from './FlexConsts';

export {
  FLEX_DIRECTION,
  FLEX_DISPLAY,
  FLEX_JUSTIFY_VALUES,
  FLEX_ALIGNMENT_VALUES,
  SPACING_SET as FLEX_MARGINS
};

export type FlexPropsType = {
  children: React.Node,
  fullWidth?: boolean,
  fullHeight?: boolean,
  noShrink?: boolean,
  direction?: $Values<typeof FLEX_DIRECTION>,
  justifyContent?: $Values<typeof FLEX_JUSTIFY_VALUES>,
  alignContent?: $Values<typeof FLEX_JUSTIFY_VALUES>,
  alignItems?: $Values<typeof FLEX_ALIGNMENT_VALUES>,
  alignSelf?: $Values<typeof FLEX_ALIGNMENT_VALUES>,
  inlineFlex?: boolean,
  wrap?: boolean,
  wrapReverse?: boolean,
  margin?: string,
  marginTop?: string,
  marginRight?: string,
  marginBottom?: string,
  marginLeft?: string,
  className?: string
};

const Flex = (props: FlexPropsType) => {
  const {
    fullWidth,
    fullHeight,
    noShrink,
    inlineFlex,
    alignItems,
    alignContent,
    justifyContent,
    wrap,
    wrapReverse,
    alignSelf,
    direction,
    margin,
    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
    children,
    className,
    ...otherProps
  } = props;

  const flexClass = classNames(
    'sg-flex',
    fullWidth ? 'sg-flex--full-width' : null,
    fullHeight ? 'sg-flex--full-height' : null,
    noShrink ? 'sg-flex--no-shrink' : null,
    //flex setup
    inlineFlex ? 'sg-flex--inline' : null,
    alignItems ? `sg-flex--align-items-${alignItems}` : null,
    alignContent ? `sg-flex--align-content-${alignContent}` : null,
    justifyContent ? `sg-flex--justify-content-${justifyContent}` : null,
    wrap ? 'sg-flex--wrap' : null,
    wrapReverse ? 'sg-flex--wrap-reverse' : null,
    alignSelf ? `sg-flex--align-self-${alignSelf}` : null,
    direction === FLEX_DIRECTION.COLUMN ? 'sg-flex--column' : null,
    direction === FLEX_DIRECTION.COLUMN_REVERSE ?
      'sg-flex--column-reverse' :
      null,
    direction === FLEX_DIRECTION.ROW ? 'sg-flex--row' : null,
    direction === FLEX_DIRECTION.ROW_REVERSE ?
      'sg-flex--row-reverse' :
      null,
    margin ? `sg-flex--margin-${margin}` : null,
    marginTop ? `sg-flex--margin-top-${marginTop}` : null,
    marginRight ? `sg-flex--margin-right-${marginRight}` : null,
    marginBottom ? `sg-flex--margin-bottom-${marginBottom}` : null,
    marginLeft ? `sg-flex--margin-left-${marginLeft}` : null,
    className
  );

  return (
    <div className={flexClass} {...otherProps}>
      {children}
    </div>
  );
};

export default Flex;
