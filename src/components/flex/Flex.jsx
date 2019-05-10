// @flow

import * as React from 'react';
import type {Node} from 'react';
import classNames from 'classnames';
import {
  FLEX_DIRECTION,
  FLEX_JUSTIFY_VALUES,
  FLEX_ALIGNMENT_VALUES,
  SPACING_SET
} from './FlexConsts';

type FlexDirectionType =
  | 'column'
  | 'column-reverse'
  | 'row'
  | 'row-reverse';

type FlexJustifyValuesType =
  | 'center'
  | 'flex-start'
  | 'flex-end'
  | 'baseline'
  | 'space-between'
  | 'space-around'
  | 'space-evently'
  | 'stretch';

type FlexAlignmentValuesType =
  | 'center'
  | 'flex-start'
  | 'flex-end'
  | 'baseline'
  | 'stretch';

type FlexMarginsType =
  | 'xs'
  | 's'
  | 'm'
  | 'l'
  | 'xl'
  | 'xxl'
  | 'xxxl';

export {
  FLEX_DIRECTION,
  FLEX_JUSTIFY_VALUES,
  FLEX_ALIGNMENT_VALUES,
  SPACING_SET as FLEX_MARGINS
};

export type FlexPropsType = {
  children: ?Node,
  className?: string,
  fullWidth?: boolean,
  fullHeight?: boolean,
  noShrink?: boolean,
  direction?: ?FlexDirectionType,
  justifyContent?: ?FlexJustifyValuesType,
  alignContent?: ?FlexAlignmentValuesType,
  alignItems?: ?FlexAlignmentValuesType,
  alignSelf?: ?FlexAlignmentValuesType,
  inlineFlex?: boolean,
  wrap?: boolean,
  wrapReverse?: boolean,
  margin?: ?FlexMarginsType,
  marginTop?: ?FlexMarginsType,
  marginRight?: ?FlexMarginsType,
  marginBottom?: ?FlexMarginsType,
  marginLeft?: ?FlexMarginsType
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
    alignSelf ? `sg-flex--align-self-${alignSelf}` : null,
    justifyContent ? `sg-flex--justify-content-${justifyContent}` : null,
    wrap ? 'sg-flex--wrap' : null,
    wrapReverse ? 'sg-flex--wrap-reverse' : null,
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
