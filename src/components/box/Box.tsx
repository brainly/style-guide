import * as React from 'react';
import classNames from 'classnames';
import {
  generateResponsiveClassNames,
  mergeResponsiveProps,
} from '../utils/responsive-props';
import type {ResponsivePropType} from '../utils/responsive-props';

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
} as const;

type PaddingType = 'none' | 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl';
export const PADDING = {
  none: 'none',
  xxs: 'xxs',
  xs: 'xs',
  s: 's',
  m: 'm',
  l: 'l',
  xl: 'xl',
} as const;

export type BoxPropsType = {
  /**
   * Children to be rendered inside of the Box
   * @example <Box>Text inside Box</Box>
   */
  children?: React.ReactNode;

  /**
   * Additional class names
   */
  className?: string | null | undefined;

  /**
   * Box background color
   * @example <Box color="green-30">Text on a 'green-30' background</Box>
   */
  color?: ColorType | null | undefined;

  /**
   * Box shadow
   * @example <Box shadow>Text inside box with shadow</Box>
   * @default false
   */
  shadow?: ResponsivePropType<boolean>;

  /**
   * Padding size. Defaults to 'm' size, pass null to set it to 0
   * @example <Box padding="l">Text inside Box with large padding</Box>
   */
  padding?: ResponsivePropType<PaddingType | null>;

  /**
   * Disable border radius
   * @example <Box noBorderRadius>Text inside Box with no border radius</Box>
   * @default false
   */
  noBorderRadius?: ResponsivePropType<boolean>;

  /**
   * Show border
   * @example <Box border>Text inside bordered Box</Box>
   * @default false
   */
  border?: ResponsivePropType<boolean>;

  /**
   * Border color (works only with `border` prop)
   * @example <Box border borderColor="green-40">Text inside Box with 'green-40' border</Box>
   */
  borderColor?: ColorType | null | undefined;
} & Omit<
  React.AllHTMLAttributes<HTMLElement>,
  | 'children'
  | 'className'
  | 'color'
  | 'shadow'
  | 'padding'
  | 'noBorderRadius'
  | 'border'
  | 'borderColor'
>;

/**
 * Container for grouping elements. It provides padding, background color, border and shadow.
 *
 * @see react docs: https://styleguide.brainly.com/latest/docs/interactive.html#boxes
 * @see twig-compatible docs: https://styleguide.brainly.com/latest/docs/containers.html#box
 *
 * @example <Box>Text inside Box</Box>
 * @returns {JSX.Element} Box component
 */
const Box = React.forwardRef<HTMLDivElement, BoxPropsType>(
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
        [`sg-box--border-color-${String(borderColor)}`]: border && borderColor,
      },
      ...generateResponsiveClassNames(
        shadow => (shadow ? 'sg-box--shadow' : 'sg-box--no-shadow'),
        shadow
      ),
      ...generateResponsiveClassNames(
        noBorderRadius =>
          noBorderRadius ? 'sg-box--no-border-radius' : 'sg-box--border-radius',
        noBorderRadius
      ),
      ...generateResponsiveClassNames(
        border => (border ? 'sg-box--border' : 'sg-box--no-border'),
        border
      ),
      ...generateResponsiveClassNames(
        padding => `sg-box--padding-${String(padding)}`,
        padding
      ),
      ...generateResponsiveClassNames(
        ([padding, border]: [PaddingType, boolean]) =>
          padding && border ? `sg-box--padding-${padding}-border` : '',
        mergeResponsiveProps([padding, border])
      ),
      ...generateResponsiveClassNames(
        ([border, borderColor]: [boolean, ColorType]) =>
          border && borderColor
            ? `sg-box--border-color-${String(borderColor)}`
            : '',
        mergeResponsiveProps([border, borderColor])
      ),
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
