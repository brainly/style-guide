// @flow

export const TEXT_TYPE = Object.freeze({
  SPAN: 'span',
  P: 'p',
  H1: 'h1',
  H2: 'h2',
  H3: 'h3',
  H4: 'h4',
  H5: 'h5',
  H6: 'h6',
  DIV: 'div',
  LABEL: 'label',
  LINK: 'a'
});

export const TYPE = TEXT_TYPE; // backward compatibility

export const TEXT_SIZE = Object.freeze({
  OBSCURE: 'xsmall', // backward compatibility
  HEADLINE: 'large', // backward compatibility
  STANDOUT: 'normal', // backward compatibility
  XSMALL: 'xsmall',
  SMALL: 'small',
  NORMAL: 'normal',
  LARGE: 'large',
  XLARGE: 'xlarge',
  XXLARGE: 'xxlarge'
});

export const SIZE = TEXT_SIZE; // backward compatibility

export const TEXT_COLOR = Object.freeze({
  DEFAULT: 'default',
  WHITE: 'white',
  LIGHT: 'white', //backward compability
  GRAY: 'gray',
  GRAY_SECONDARY: 'gray-secondary',
  MINT_DARK: 'mint-dark',
  MINT: 'mint',
  PEACH_DARK: 'peach-dark',
  PEACH: 'peach',
  MUSTARD: 'mustard',
  BLUE_DARK: 'blue-dark',
  BLUE: 'blue',
  BLUE_SECONDARY: 'blue-secondary',
  BLUE_SECONDARY_LIGHT: 'blue-secondary-light'
});

export const COLOR = TEXT_COLOR; // backward compatibility

export const TEXT_WEIGHT = Object.freeze({
  REGULAR: 'regular',
  BOLD: 'bold',
  EMPHASISED: 'bold' // backward compatibility
});

export const WEIGHT = TEXT_WEIGHT; // backward compatibility

export const TEXT_TRANSFORM = Object.freeze({
  UPPERCASE: 'uppercase',
  LOWERCASE: 'lowercase',
  CAPITALIZE: 'capitalize'
});

export const TEXT_ALIGN = Object.freeze({
  LEFT: 'to-left',
  CENTER: 'to-center',
  RIGHT: 'to-right',
  JUSTIFY: 'justify'
});
