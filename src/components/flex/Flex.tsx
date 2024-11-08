import * as React from 'react';
import classNames from 'classnames';
import {
  DIRECTION,
  JUSTIFY_VALUES,
  ALIGNMENT_VALUES,
  MARGINS,
  GAP_VALUES,
  FLEX_VALUES,
} from './FlexConsts';
import {generateResponsiveClassNames} from '../utils/responsive-props';
import type {ResponsivePropType} from '../utils/responsive-props';

type FlexContainerType =
  | 'a'
  | 'article'
  | 'aside'
  | 'div'
  | 'footer'
  | 'form'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'header'
  | 'input'
  | 'li'
  | 'main'
  | 'nav'
  | 'ol'
  | 'p'
  | 'pre'
  | 'section'
  | 'span'
  | 'textarea'
  | 'ul';
type FlexDirectionType = 'column' | 'column-reverse' | 'row' | 'row-reverse';
type FlexJustifyValuesType =
  | 'center'
  | 'flex-start'
  | 'flex-end'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | 'stretch';
type FlexAlignmentValuesType =
  | 'center'
  | 'flex-start'
  | 'flex-end'
  | 'baseline'
  | 'stretch';
type FlexMarginsType =
  | 'none'
  | 'xxs'
  | 'xs'
  | 's'
  | 'm'
  | 'l'
  | 'xl'
  | 'xxl'
  | 'xxxl'
  | 'xxxxl';
type FlexGapValueType =
  | 'none'
  | 'xxs'
  | 'xs'
  | 's'
  | 'm'
  | 'l'
  | 'xl'
  | 'xxl'
  | 'xxxl'
  | 'xxxxl';
type FlexFlexValueType =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 'auto'
  | 'initial'
  | 'none';
export {
  DIRECTION,
  JUSTIFY_VALUES,
  ALIGNMENT_VALUES,
  MARGINS,
  GAP_VALUES,
  FLEX_VALUES,
};
export type FlexPropsType = {
  /**
   * Children to be render inside of the Flex.
   * @example <Flex>
   *            children to be render here
   *          </Flex>
   *
   */
  children: React.ReactNode;

  /**
   * Html tag used as container
   */
  as?: FlexContainerType;

  /**
   * Additional class names
   */
  className?: string;

  /**
   * component will be rendered on 100% width of a parent
   * @example <Flex fullWidth>
   *            component content
   *          </Flex>
   */
  fullWidth?: ResponsivePropType<boolean>;

  /**
   * component will be rendered on 100% height of a parent
   * @example <Flex fullHeight>
   *            component content
   *          </Flex>
   */
  fullHeight?: ResponsivePropType<boolean>;

  /**
   * It will set flex-shirnk to 0
   * @example <Flex noShrink>
   *            component content
   *          </Flex>
   */
  noShrink?: ResponsivePropType<boolean>;

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
  direction?: ResponsivePropType<FlexDirectionType>;

  /**
   * Specify flex justify content
   * @example <Flex justifyContent="space-between">
   *            component content
   *          </Flex>
   * @see justifyContent=center https://styleguide.brainly.com/latest/docs/interactive.html?justifyContent=center#flexbox
   * @see justifyContent=flex-start https://styleguide.brainly.com/latest/docs/interactive.html?ustifyContent=flex-start#flexbox
   * @see justifyContent=flex-end https://styleguide.brainly.com/latest/docs/interactive.html?justifyContent=flex-end#flexbox
   * @see justifyContent=space-between https://styleguide.brainly.com/latest/docs/interactive.html?justifyContent=space-between#flexbox
   * @see justifyContent=space-around https://styleguide.brainly.com/latest/docs/interactive.html?justifyContent=space-around#flexbox
   * @see justifyContent=space-evenly https://styleguide.brainly.com/latest/docs/interactive.html?justifyContent=space-evenly#flexbox
   * @see justifyContent=stretch https://styleguide.brainly.com/latest/docs/interactive.html?justifyContent=stretch#flexbox
   */
  justifyContent?: ResponsivePropType<FlexJustifyValuesType>;

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
  alignContent?: ResponsivePropType<FlexAlignmentValuesType>;

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
  alignItems?: ResponsivePropType<FlexAlignmentValuesType>;

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
  alignSelf?: ResponsivePropType<FlexAlignmentValuesType>;

  /**
   * It will set flex display to inline-flex
   * @example <Flex inlineFlex>
   *            component content
   *          </Flex>
   */
  inlineFlex?: ResponsivePropType<boolean>;

  /**
   * It will wrap component
   * @example <Flex wrap>
   *            component content
   *          </Flex>
   */
  wrap?: ResponsivePropType<boolean>;

  /**
   * It will wrap reverse component
   * @example <Flex wrapReverse>
   *            component content
   *          </Flex>
   */
  wrapReverse?: ResponsivePropType<boolean>;

  /**
   * Specify margin for flex based on spacings: none: 0px, xxs: 4px, xs: 8px, s: 16px, m: 24px, l: 40px, xl: 64px, xxl: 104px, xxxl: 168px, xxxxl: 272px
   * @example <Flex margin="m">
   *            component content
   *          </Flex>
   */
  margin?: ResponsivePropType<FlexMarginsType>;

  /**
   * Specify margin top for flex based on spacings: none: 0px, xxs: 4px, xs: 8px, s: 16px, m: 24px, l: 40px, xl: 64px, xxl: 104px, xxxl: 168px, xxxxl: 272px
   * @example <Flex marginTop="m">
   *            component content
   *          </Flex>
   */
  marginTop?: ResponsivePropType<FlexMarginsType>;

  /**
   * Specify margin right for flex based on spacings: none: 0px, xxs: 4px, xs: 8px, s: 16px, m: 24px, l: 40px, xl: 64px, xxl: 104px, xxxl: 168px, xxxxl: 272px
   * @example <Flex marginRight="m">
   *            component content
   *          </Flex>
   */
  marginRight?: ResponsivePropType<FlexMarginsType>;

  /**
   * Specify margin bottom for flex based on spacings: none: 0px, xxs: 4px, xs: 8px, s: 16px, m: 24px, l: 40px, xl: 64px, xxl: 104px, xxxl: 168px, xxxxl: 272px
   * @example <Flex marginBottom="m">
   *            component content
   *          </Flex>
   */
  marginBottom?: ResponsivePropType<FlexMarginsType>;

  /**
   * Specify margin left for flex based on spacings: none: 0px, xxs: 4px, xs: 8px, s: 16px, m: 24px, l: 40px, xl: 64px, xxl: 104px, xxxl: 168px, xxxxl: 272px
   * @example <Flex marginLeft="m">
   *            component content
   *          </Flex>
   */
  marginLeft?: ResponsivePropType<FlexMarginsType>;
  /**
   * Specify gap between flex children: none: 0px, xxs: 4px, xs: 8px, s: 16px, m: 24px, l: 40px, xl: 64px, xxl: 104px, xxxl: 168px, xxxxl: 272px
   * @example <Flex gap="m">
   *            component content
   *          </Flex>
   */
  gap?: ResponsivePropType<FlexGapValueType>;
  /**
   * Specify flex value:
   * @example <Flex flex="auto">
   *            component content
   *          </Flex>
   */
  flex?: ResponsivePropType<FlexFlexValueType>;
} & Omit<
  React.AllHTMLAttributes<HTMLElement>,
  | 'children'
  | 'as'
  | 'className'
  | 'fullWidth'
  | 'fullHeight'
  | 'noShrink'
  | 'direction'
  | 'justifyContent'
  | 'alignContent'
  | 'alignItems'
  | 'alignSelf'
  | 'inlineFlex'
  | 'wrap'
  | 'wrapReverse'
  | 'margin'
  | 'marginTop'
  | 'marginRight'
  | 'marginBottom'
  | 'marginLeft'
  | 'gap'
  | 'flex'
>;
const Flex = React.forwardRef<HTMLElement, FlexPropsType>(
  (props: FlexPropsType, ref) => {
    const {
      as: Container = 'div',
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
      gap,
      children,
      className,
      flex,
      ...otherProps
    } = props;
    const flexClass = classNames(
      'sg-flex',
      ...generateResponsiveClassNames(
        propValue =>
          propValue === true ? `sg-flex--full-width` : `sg-flex--auto-width`,
        fullWidth
      ),
      ...generateResponsiveClassNames(
        propValue =>
          propValue === true ? `sg-flex--full-height` : `sg-flex--auto-height`,
        fullHeight
      ),
      ...generateResponsiveClassNames(
        propValue =>
          propValue === true ? `sg-flex--no-shrink` : `sg-flex--shrink-1`,
        noShrink
      ),
      ...generateResponsiveClassNames(
        propValue => (propValue === true ? `sg-flex--inline` : `sg-flex--flex`),
        inlineFlex
      ),
      ...generateResponsiveClassNames(direction => {
        if (direction === DIRECTION.COLUMN) {
          return 'sg-flex--column';
        } else if (direction === DIRECTION.COLUMN_REVERSE) {
          return 'sg-flex--column-reverse';
        } else if (direction === DIRECTION.ROW) {
          return 'sg-flex--row';
        } else if (direction === DIRECTION.ROW_REVERSE) {
          return 'sg-flex--row-reverse';
        } else {
          return 'sg-flex--row';
        }
      }, direction),
      ...generateResponsiveClassNames(
        propValue => (propValue === true ? `sg-flex--inline` : `sg-flex--flex`),
        inlineFlex
      ),
      ...generateResponsiveClassNames(
        (propValue: string) => `sg-flex--justify-content-${propValue}`,
        justifyContent
      ),
      ...generateResponsiveClassNames(
        propValue => `sg-flex--align-items-${propValue}`,
        alignItems
      ),
      ...generateResponsiveClassNames(
        propValue => `sg-flex--align-content-${propValue}`,
        alignContent
      ),
      ...generateResponsiveClassNames(
        propValue => `sg-flex--align-self-${propValue}`,
        alignSelf
      ),
      ...generateResponsiveClassNames(
        propValue => (propValue ? 'sg-flex--wrap' : 'sg-flex--nowrap'),
        wrap
      ),
      ...generateResponsiveClassNames(
        propValue => (propValue ? 'sg-flex--wrap-reverse' : 'sg-flex--nowrap'),
        wrapReverse
      ),
      ...generateResponsiveClassNames(
        propValue => `sg-flex--margin-${propValue}`,
        margin
      ),
      ...generateResponsiveClassNames(
        propValue => `sg-flex--margin-top-${propValue}`,
        marginTop
      ),
      ...generateResponsiveClassNames(
        propValue => `sg-flex--margin-right-${propValue}`,
        marginRight
      ),
      ...generateResponsiveClassNames(
        propValue => `sg-flex--margin-bottom-${propValue}`,
        marginBottom
      ),
      ...generateResponsiveClassNames(
        propValue => `sg-flex--margin-left-${propValue}`,
        marginLeft
      ),
      ...generateResponsiveClassNames(
        propValue => `sg-flex--gap-${propValue}`,
        gap
      ),
      ...generateResponsiveClassNames(
        propValue => `sg-flex--flex-${propValue}`,
        flex
      ),
      className
    );

    return (
      // @ts-ignore ts migration
      <Container {...otherProps} className={flexClass} ref={ref}>
        {children}
      </Container>
    );
  }
);

Flex.displayName = 'Flex';
export default Flex;
