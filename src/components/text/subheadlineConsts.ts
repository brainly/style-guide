export const SUBHEADLINE_AS = {
  H1: 'h1',
  H2: 'h2',
  H3: 'h3',
  H4: 'h4',
  H5: 'h5',
  H6: 'h6',
  SPAN: 'span',
  BLOCKQUOTE: 'blockquote',
  Q: 'q',
  STRONG: 'strong',
  EM: 'em',
  DEL: 'del',
  INS: 'ins',
} as const;

export const SUBHEADLINE_SIZE = {
  XSMALL: 'xsmall',
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
  XLARGE: 'xlarge',
  XXLARGE: 'xxlarge',
  XXXLARGE: 'xxxlarge',
} as const;

export const SUBHEADLINE_TRANSFORM = {
  UPPERCASE: 'uppercase',
  LOWERCASE: 'lowercase',
  CAPITALIZE: 'capitalize',
} as const;

export const SUBHEADLINE_ALIGN = {
  LEFT: 'to-left',
  CENTER: 'to-center',
  RIGHT: 'to-right',
  JUSTIFY: 'justify',
} as const;
