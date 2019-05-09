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
    style['sg-flex'],
    fullWidth ? style['sg-flex--full-width'] : null,
    fullHeight ? style['sg-flex--full-height'] : null,
    noShrink ? style['sg-flex--no-shrink'] : null,
    //flex setup
    inlineFlex ? style['sg-flex--inline'] : null,
    alignItems ? style[`sg-flex--align-items-${alignItems}`] : null,
    alignContent ? style[`sg-flex--align-content-${alignContent}`] : null,
    justifyContent ? style[`sg-flex--justify-content-${justifyContent}`] : null,
    wrap ? style['sg-flex--wrap'] : null,
    wrapReverse ? style['sg-flex--wrap-reverse'] : null,
    alignSelf ? style[`sg-flex--align-self-${alignSelf}`] : null,
    direction === FLEX_DIRECTION.COLUMN ? style['sg-flex--column'] : null,
    direction === FLEX_DIRECTION.COLUMN_REVERSE ?
      style['sg-flex--column-reverse'] :
      null,
    direction === FLEX_DIRECTION.ROW ? style['sg-flex--row'] : null,
    direction === FLEX_DIRECTION.ROW_REVERSE ?
      style['sg-flex--row-reverse'] :
      null,
    margin ? style[`sg-flex--margin-${margin}`] : null,
    marginTop ? style[`sg-flex--margin-top-${marginTop}`] : null,
    marginRight ? style[`sg-flex--margin-right-${marginRight}`] : null,
    marginBottom ? style[`sg-flex--margin-bottom-${marginBottom}`] : null,
    marginLeft ? style[`sg-flex--margin-left-${marginLeft}`] : null,
    className
  );

  return (
    <div className={flexClass} {...otherProps}>
      {children}
    </div>
  );
};

export default Flex;
