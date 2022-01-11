// @flow strict

import * as React from 'react';
import classNames from 'classnames';

type ColorType =
  | 'transparent'
  | 'white'
  | 'gray-40'
  | 'gray-20'
  | 'gray-10'
  | 'blue-40'
  | 'blue-30'
  | 'blue-20'
  | 'green-40'
  | 'green-30'
  | 'green-20'
  | 'green-10'
  | 'indigo-40'
  | 'indigo-20'
  | 'indigo-10'
  | 'red-40'
  | 'red-30'
  | 'red-20'
  | 'yellow-40'
  | 'yellow-20';

export const COLOR = {
  transparent: 'transparent',
  white: 'white',
  'gray-40': 'gray-40',
  'gray-20': 'gray-20',
  'gray-10': 'gray-10',
  'blue-40': 'blue-40',
  'blue-30': 'blue-30',
  'blue-20': 'blue-20',
  'green-40': 'green-40',
  'green-30': 'green-30',
  'green-20': 'green-20',
  'green-10': 'green-10',
  'indigo-40': 'indigo-40',
  'indigo-20': 'indigo-20',
  'indigo-10': 'indigo-10',
  'red-40': 'red-40',
  'red-30': 'red-30',
  'red-20': 'red-20',
  'yellow-40': 'yellow-40',
  'yellow-20': 'yellow-20',
};

type PaddingType = 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl';

export const PADDING = {
  xxs: 'xxs',
  xs: 'xs',
  s: 's',
  m: 'm',
  l: 'l',
  xl: 'xl',
};

export type BoxPropsType = {
  /**
   * Children to be rendered inside of the Box
   * @example <Box>Text inside Box</Box>
   */
  children: React.Node,

  /**
   * Additional class names
   */
  className?: ?string,

  /**
   * Box background color
   * @example <Box color="green-30">Text on a 'green-30' background</Box>
   */
  color?: ?ColorType,

  /**
   * Box shadow
   * @example <Box shadow>Text inside box with shadow</Box>
   * @default false
   */
  shadow?: boolean,

  /**
   * Padding size. Defaults to 'm' size, pass null to set it to 0
   * @example <Box padding="l">Text inside Box with large padding</Box>
   */
  padding?: PaddingType | null,

  /**
   * Disable border radius
   * @example <Box noBorderRadius>Text inside Box with no border radius</Box>
   * @default false
   */
  noBorderRadius?: boolean,

  /**
   * Show border
   * @example <Box border>Text inside bordered Box</Box>
   * @default false
   */
  border?: boolean,

  /**
   * Border color (works only with `border` prop)
   * @example <Box border borderColor="green-40">Text inside Box with 'green-40' border</Box>
   */
  borderColor?: ?ColorType,
  ...
};

/**
 * Container for grouping elements. It provides padding, background color, border and shadow.
 *
 * @see react docs: https://styleguide.brainly.com/latest/docs/interactive.html#boxes
 * @see twig-compatible docs: https://styleguide.brainly.com/latest/docs/containers.html#box
 *
 * @example <Box>Text inside Box</Box>
 * @returns {JSX.Element} Box component
 */
const Box = React.forwardRef<BoxPropsType, HTMLDivElement>(
  (
    {
      children,
      className,
      color = COLOR.transparent,
      padding = 'm',
      border = false,
      borderColor = COLOR['gray-20'],
      noBorderRadius = false,
      shadow = false,
      ...props
    }: BoxPropsType,
    ref
  ) => {
    const classes = classNames(
      'sg-box',
      {
        [`sg-box--${String(color)}`]: color,
        [`sg-box--padding-${String(padding)}`]: padding !== null && padding,
        [`sg-box--border-color-${String(borderColor)}`]: border && borderColor,
        'sg-box--border': border,
        'sg-box--shadow': shadow,
        'sg-box--no-border-radius': noBorderRadius,
      },
      className
    );

    return (
      <div {...props} className={classes} ref={ref}>
        {children}
      </div>
    );
  }
);

Box.displayName = 'Box';

export default Box;
