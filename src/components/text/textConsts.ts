export const TEXT_AS = {
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
  LINK: 'a',
  BLOCKQUOTE: 'blockquote',
  Q: 'q',
  STRONG: 'strong',
  EM: 'em',
  DEL: 'del',
  INS: 'ins',
} as const;

export const AS = TEXT_AS; // backward compatibility

export const TEXT_SIZE = {
  XXSMALL: 'xxsmall',
  XSMALL: 'xsmall',
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
  XLARGE: 'xlarge',
  XXLARGE: 'xxlarge',
  XXXLARGE: 'xxxlarge',
} as const;

export const SIZE = TEXT_SIZE; // backward compatibility

export const TEXT_COLOR = {
  'text-black': 'text-black',
  'text-white': 'text-white',
  'text-gray-70': 'text-gray-70',
  'text-gray-60': 'text-gray-60',
  'text-gray-50': 'text-gray-50',
  'text-gray-40': 'text-gray-40',
  'text-blue-60': 'text-blue-60',
  'text-blue-40': 'text-blue-40',
  'text-green-60': 'text-green-60',
  'text-green-40': 'text-green-40',
  'text-indigo-60': 'text-indigo-60',
  'text-indigo-40': 'text-indigo-40',
  'text-red-60': 'text-red-60',
  'text-red-40': 'text-red-40',
  'text-yellow-60': 'text-yellow-60',
  'text-yellow-40': 'text-yellow-40',
} as const;
export const COLOR = TEXT_COLOR; // backward compatibility

export const TEXT_WEIGHT: {
  REGULAR: 'regular';
  BOLD: 'bold';
} = {
  REGULAR: 'regular',
  BOLD: 'bold',
};
export const WEIGHT = TEXT_WEIGHT; // backward compatibility

export const TEXT_TRANSFORM = {
  UPPERCASE: 'uppercase',
  LOWERCASE: 'lowercase',
  CAPITALIZE: 'capitalize',
} as const;

export const TEXT_ALIGN = {
  LEFT: 'to-left',
  CENTER: 'to-center',
  RIGHT: 'to-right',
  JUSTIFY: 'justify',
} as const;

export const TEXT_WHITE_SPACE = {
  PRE_WRAP: 'pre-wrap',
  PRE_LINE: 'pre-line',
  NORMAL: 'normal',
} as const;
