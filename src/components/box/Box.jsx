// @flow strict

import * as React from 'react';
import classNames from 'classnames';
import {__DEV__} from '../utils';

// TODO get list of colors from design team
type ColorType =
  | 'dark'
  | 'light'
  | 'blue'
  | 'lavender'
  | 'lavender-secondary-light'
  | 'lavender-secondary-ultra-light'
  | 'mint'
  | 'mint-secondary'
  | 'mint-secondary-light'
  | 'mint-secondary-ultra-light'
  | 'blue-secondary'
  | 'blue-secondary-light'
  | 'gray-secondary-lightest'
  | 'gray-secondary-ultra-light'
  | 'mustard-primary'
  | 'mustard-secondary-light'
  | 'peach'
  | 'peach-secondary'
  | 'peach-secondary-light';

export const COLOR = {
  dark: 'dark',
  light: 'light',
  blue: 'blue',
  lavender: 'lavender',
  lavenderSecondaryLight: 'lavender-secondary-light',
  lavenderSecondaryUltraLight: 'lavender-secondary-ultra-light',
  mint: 'mint',
  mintSecondary: 'mint-secondary',
  mindSecondaryLight: 'mint-secondary-light',
  mintSecondaryUltraLight: 'mint-secondary-ultra-light',
  blueSecondary: 'blue-secondary',
  blueSecondaryLight: 'blue-secondary-light',
  graySecondaryLightest: 'gray-secondary-lightest',
  graySecondaryUltraLight: 'gray-secondary-ultra-light',
  mustardPrimary: 'mustard-primary',
  mustardSecondaryLight: 'mustard-secondary-light',
  peach: 'peach',
  peachSecondary: 'peach-secondary',
  peachSecondaryLight: 'peach-secondary-light',
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
   * @example <Box color="mint-secondary">Text on a mint background</Box>
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
   * @example <Box border borderColor="mint">Text inside Box with mint border</Box>
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
      color,
      padding = 'm',
      border = false,
      borderColor = 'gray-secondary-lightest',
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

if (__DEV__) {
  Box.displayName = 'Box';
}

export default Box;
