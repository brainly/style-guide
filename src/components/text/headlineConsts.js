// @flow

export const HEADLINE_TYPE = Object.freeze({
  H1: 'h1',
  H2: 'h2',
  H3: 'h3',
  H4: 'h4',
  H5: 'h5',
  H6: 'h6'
});

export const HEADLINE_SIZE = Object.freeze({
  XSMALL: 'xsmall',
  SMALL: 'small',
  NORMAL: 'normal',
  LARGE: 'large',
  XLARGE: 'xlarge',
  XXLARGE: 'xxlarge'
});

export const HEADLINE_COLOR = Object.freeze({
  DEFAULT: 'default',
  WHITE: 'white',
  BLUE_DARK: 'blue-dark',
  MINT_DARK: 'mint-dark',
  LAVENDER_DARK: 'lavender-dark',
  MUSTARD_DARK: 'mustard-dark',
  PEACH_DARK: 'peach-dark',
  GRAY: 'gray', //this name should be changed into GRAY_PRIMARY in the future maybe
  GRAY_SECONDARY: 'gray-secondary',
  GRAY_SECONDARY_LIGHT: 'gray-secondary-light'
});

export const HEADLINE_TRANSFORM = Object.freeze({
  UPPERCASE: 'uppercase',
  LOWERCASE: 'lowercase',
  CAPITALIZE: 'capitalize'
});

export const HEADLINE_ALIGN = Object.freeze({
  LEFT: 'to-left',
  CENTER: 'to-center',
  RIGHT: 'to-right',
  JUSTIFY: 'justify'
});
