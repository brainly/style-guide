// @flow strict

import * as React from 'react';
import type {Node} from 'react';
import classNames from 'classnames';
import {
  FLEX_DIRECTION,
  FLEX_JUSTIFY_VALUES,
  FLEX_ALIGNMENT_VALUES,
  FLEX_MARGINS,
} from './FlexConsts';

type FlexDirectionType = 'column' | 'column-reverse' | 'row' | 'row-reverse';

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
  | 'xxs'
  | 'xs'
  | 's'
  | 'm'
  | 'l'
  | 'xl'
  | 'xxl'
  | 'xxxl'
  | 'xxxxl';

export {
  FLEX_DIRECTION,
  FLEX_JUSTIFY_VALUES,
  FLEX_ALIGNMENT_VALUES,
  FLEX_MARGINS,
};

export type FlexPropsType = {
  /**
   * Children to be render inside of the Flex.
   * @example <Flex>
   *            children to be render here
   *          </Flex>
   *
   */
  children: Node,
  /**
   * Additional class names
   */
  className?: string,
  /**
   * component will be rendered on 100% width of a parent
   * @example <Flex fullWidth>
   *            component content
   *          </Flex>
   */
  fullWidth?: boolean,
  /**
   * component will be rendered on 100% height of a parent
   * @example <Flex fullHeight>
   *            component content
   *          </Flex>
   */
  fullHeight?: boolean,
  /**
   * It will set flex-shirnk to 0
   * @example <Flex noShrink>
   *            component content
   *          </Flex>
   */
  noShrink?: boolean,
  /**
   * Specify flex direction
   * @example <Flex direction="column">
   *            component content
   *          </Flex>
   * @see direction=column https://styleguide.brainly.com/latest/docs/interactive.html?direction=column#flexbox
   * @see direction=column-reverse https://styleguide.brainly.com/latest/docs/interactive.html?direction=column-reverse#flexbox
   * @see direction=row https://styleguide.brainly.com/latest/docs/interactive.html?direction=row#flexbox
   * @see direction=row-reverse https://styleguide.brainly.com/latest/docs/interactive.html?direction=row-reverse#flexbox
   */
  direction?: FlexDirectionType,
  /**
   * Specify flex justify content
   * @example <Flex justifyContent="space-between">
   *            component content
   *          </Flex>
   * @see justifyContent=center https://styleguide.brainly.com/latest/docs/interactive.html?justifyContent=center#flexbox
   * @see justifyContent=flex-start https://styleguide.brainly.com/latest/docs/interactive.html?ustifyContent=flex-start#flexbox
   * @see justifyContent=flex-end https://styleguide.brainly.com/latest/docs/interactive.html?justifyContent=flex-end#flexbox
   * @see justifyContent=baseline https://styleguide.brainly.com/latest/docs/interactive.html?justifyContent=baseline#flexbox
   * @see justifyContent=space-between https://styleguide.brainly.com/latest/docs/interactive.html?justifyContent=space-between#flexbox
   * @see justifyContent=space-around https://styleguide.brainly.com/latest/docs/interactive.html?justifyContent=space-around#flexbox
   * @see justifyContent=space-evently https://styleguide.brainly.com/latest/docs/interactive.html?justifyContent=space-evently#flexbox
   * @see justifyContent=stretch https://styleguide.brainly.com/latest/docs/interactive.html?justifyContent=stretch#flexbox
   */
  justifyContent?: FlexJustifyValuesType,
  /**
   * Specify flex align content
   * @example <Flex alignContent="center">
   *            component content
   *          </Flex>
   * @see alignContent=center https://styleguide.brainly.com/latest/docs/interactive.html?alignContent=center#flexbox
   * @see alignContent=flex-start https://styleguide.brainly.com/latest/docs/interactive.html?alignContent=flex-start#flexbox
   * @see alignContent=flex-end https://styleguide.brainly.com/latest/docs/interactive.html?alignContent=flex-end#flexbox
   * @see alignContent=baseline https://styleguide.brainly.com/latest/docs/interactive.html?alignContent=baseline#flexbox
   * @see alignContent=stretch https://styleguide.brainly.com/latest/docs/interactive.html?alignContent=stretch#flexbox
   */
  alignContent?: FlexAlignmentValuesType,
  /**
   * Specify flex align items
   * @example <Flex alignItems="center">
   *            component content
   *          </Flex>
   * @see alignItems=center https://styleguide.brainly.com/latest/docs/interactive.html?alignItems=center#flexbox
   * @see alignItems=flex-start https://styleguide.brainly.com/latest/docs/interactive.html?alignItems=flex-start#flexbox
   * @see alignItems=flex-end https://styleguide.brainly.com/latest/docs/interactive.html?alignItems=flex-end#flexbox
   * @see alignItems=baseline https://styleguide.brainly.com/latest/docs/interactive.html?alignItems=baseline#flexbox
   * @see alignItems=stretch https://styleguide.brainly.com/latest/docs/interactive.html?alignContent=stretch#flexbox
   */
  alignItems?: FlexAlignmentValuesType,
  /**
   * Specify flex align self
   * @example <Flex alignSelf="center">
   *            component content
   *          </Flex>
   * @see alignSelf=center https://styleguide.brainly.com/latest/docs/interactive.html?alignSelf=center#flexbox
   * @see alignSelf=flex-start https://styleguide.brainly.com/latest/docs/interactive.html?alignSelf=flex-start#flexbox
   * @see alignSelf=flex-end https://styleguide.brainly.com/latest/docs/interactive.html?alignSelf=flex-end#flexbox
   * @see alignSelf=baseline https://styleguide.brainly.com/latest/docs/interactive.html?alignSelf=baseline#flexbox
   * @see alignSelf=stretch https://styleguide.brainly.com/latest/docs/interactive.html?alignSelf=stretch#flexbox
   */
  alignSelf?: FlexAlignmentValuesType,
  /**
   * It will set flex display to inline-flex
   * @example <Flex inlineFlex>
   *            component content
   *          </Flex>
   */
  inlineFlex?: boolean,
  /**
   * It will wrap component
   * @example <Flex wrap>
   *            component content
   *          </Flex>
   */
  wrap?: boolean,
  /**
   * It will wrap reverse component
   * @example <Flex wrapReverse>
   *            component content
   *          </Flex>
   */
  wrapReverse?: boolean,
  /**
   * Specify margin for flex based on spacings: xxs: 4px, xs: 8px, s: 16px, m: 24px, l: 40px, xl: 64px, xxl: 104px, xxxl: 168px, xxxxl: 272px
   * @example <Flex margin="m">
   *            component content
   *          </Flex>
   */
  margin?: FlexMarginsType,
  /**
   * Specify margin top for flex based on spacings: xxs: 4px, xs: 8px, s: 16px, m: 24px, l: 40px, xl: 64px, xxl: 104px, xxxl: 168px, xxxxl: 272px
   * @example <Flex marginTop="m">
   *            component content
   *          </Flex>
   */
  marginTop?: FlexMarginsType,
  /**
   * Specify margin right for flex based on spacings: xxs: 4px, xs: 8px, s: 16px, m: 24px, l: 40px, xl: 64px, xxl: 104px, xxxl: 168px, xxxxl: 272px
   * @example <Flex marginRight="m">
   *            component content
   *          </Flex>
   */
  marginRight?: FlexMarginsType,
  /**
   * Specify margin bottom for flex based on spacings: xxs: 4px, xs: 8px, s: 16px, m: 24px, l: 40px, xl: 64px, xxl: 104px, xxxl: 168px, xxxxl: 272px
   * @example <Flex marginBottom="m">
   *            component content
   *          </Flex>
   */
  marginBottom?: FlexMarginsType,
  /**
   * Specify margin left for flex based on spacings: xxs: 4px, xs: 8px, s: 16px, m: 24px, l: 40px, xl: 64px, xxl: 104px, xxxl: 168px, xxxxl: 272px
   * @example <Flex marginLeft="m">
   *            component content
   *          </Flex>
   */
  marginLeft?: FlexMarginsType,
  ...
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
    {
      'sg-flex--full-width': fullWidth,
      'sg-flex--full-height': fullHeight,
      'sg-flex--no-shrink': noShrink,
      'sg-flex--inline': inlineFlex,
      [`sg-flex--align-items-${alignItems || ''}`]: alignItems,
      [`sg-flex--align-content-${alignContent || ''}`]: alignContent,
      [`sg-flex--align-self-${alignSelf || ''}`]: alignSelf,
      [`sg-flex--justify-content-${justifyContent || ''}`]: justifyContent,
      'sg-flex--wrap': wrap,
      'sg-flex--wrap-reverse': wrapReverse,
      'sg-flex--column': direction === FLEX_DIRECTION.COLUMN,
      'sg-flex--column-reverse': direction === FLEX_DIRECTION.COLUMN_REVERSE,
      'sg-flex--row': direction === FLEX_DIRECTION.ROW,
      'sg-flex--row-reverse': direction === FLEX_DIRECTION.ROW_REVERSE,
      [`sg-flex--margin-${margin || ''}`]: margin,
      [`sg-flex--margin-top-${marginTop || ''}`]: marginTop,
      [`sg-flex--margin-right-${marginRight || ''}`]: marginRight,
      [`sg-flex--margin-bottom-${marginBottom || ''}`]: marginBottom,
      [`sg-flex--margin-left-${marginLeft || ''}`]: marginLeft,
    },
    className
  );

  return (
    <div className={flexClass} {...otherProps}>
      {children}
    </div>
  );
};

export default Flex;
