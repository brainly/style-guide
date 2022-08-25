import {styleVariants, style} from '@vanilla-extract/css';
import {fontFamilies, fontWeights} from '../../vanilla-extract/config';
import {responsiveVariants} from '../../vanilla-extract/utils';
import colors2 from '../../vanilla-extract/colors';

const sizes = {
  xxxlarge: {
    fontSize: '66px',
    lineHeight: '88px',
  },
  xxlarge: {
    fontSize: '45px',
    lineHeight: '60px',
  },
  xlarge: {
    fontSize: '33px',
    lineHeight: '44px',
  },
  large: {
    fontSize: '24px',
    lineHeight: '32px',
  },
  medium: {
    fontSize: '18px',
    lineHeight: '24px',
  },
  small: {
    fontSize: '15px',
    lineHeight: '20px',
  },
  xsmall: {
    fontSize: '12px',
    lineHeight: '16px',
  },
  xxsmall: {
    fontSize: '9px',
    lineHeight: '12px',
  },
};

export const textStyle = style({
  fontWeight: fontWeights.regular,
  fontFamily: fontFamilies.proxima,
  fontSize: sizes.medium.fontSize,
  lineHeight: sizes.medium.lineHeight,
  selectors: {
    'em.&': {
      fontStyle: 'normal',
    },
    'blockquote.&': {
      margin: 0,
    },
  },
});

export const containerStyle = style({
  position: 'relative',
});

export const linkVariants = styleVariants({
  main: {
    cursor: 'pointer',
    textDecoration: 'none',
    color: colors2.blue60,

    ':hover': {
      textDecoration: 'underline',
    },
    ':active': {
      textDecoration: 'underline',
    },
  },
  label: {
    cursor: 'pointer',
    position: 'relative',
    '&:focus-within': {
      outline: '5px auto Highlight',
    },
  },
  disabled: {
    cursor: 'default',
    '&:hover': {
      textDecoration: 'none',
    },
    '&:active': {
      textDecoration: 'none',
    },
  },
  unstyled: {
    cursor: 'pointer',
    color: 'inherit',
    fontWeight: 'inherit',
    '&:hover': {
      textDecoration: 'underline',
    },
    '&:active': {
      textDecoration: 'underline',
    },
  },
  underlined: {
    cursor: 'pointer',
    textDecoration: 'underline',
  },
});

export const inheritedStyle = style({
  fontSize: 'inherit',
  lineHeight: 'inherit',
  fontFamily: 'inherit',
  fontWeight: 'inherit',
  color: 'inherit',
});

export const colorVariants = styleVariants(
  [
    {name: 'text-black', value: colors2.textBlack},
    {name: 'text-white', value: colors2.textWhite},
    {name: 'text-blue-60', value: colors2.textBlue60},
    {name: 'text-blue-40', value: colors2.textBlue40},
    {name: 'text-green-60', value: colors2.textGreen60},
    {name: 'text-green-40', value: colors2.textGreen40},
    {name: 'text-indigo-60', value: colors2.textIndigo60},
    {name: 'text-indigo-40', value: colors2.textIndigo40},
    {name: 'text-red-60', value: colors2.textRed60},
    {name: 'text-red-40', value: colors2.textRed40},
    {name: 'text-yellow-60', value: colors2.textYellow60},
    {name: 'text-yellow-40', value: colors2.textYellow40},
    {name: 'text-gray-70', value: colors2.textGray70},
    {name: 'text-gray-60', value: colors2.textGray60},
    {name: 'text-gray-50', value: colors2.textGray50},
    {name: 'text-gray-40', value: colors2.textGray40},
  ].reduce((acc, next) => {
    acc[next.name] = {
      color: next.value,
    };

    return acc;
  }, {})
);

export const transformVariants = responsiveVariants(
  ['uppercase', 'lowercase', 'capitalize'].reduce((acc, next) => {
    acc[next] = {
      textTransform: next,
    };

    return acc;
  }, {})
);

const alignPropToCSSValue = {
  'to-left': 'left',
  'to-right': 'right',
  'to-center': 'center',
  justify: 'justify',
};

export const alignVariants = responsiveVariants(
  Object.keys(alignPropToCSSValue).reduce((acc, next) => {
    acc[next] = {
      textAlign: alignPropToCSSValue[next],
    };

    return acc;
  }, {})
);

const widthPropToCSSValue = {
  full: '100%',
  auto: 'auto',
};

export const widthVariants = responsiveVariants(
  Object.keys(widthPropToCSSValue).reduce((acc, next) => {
    acc[next] = {
      width: widthPropToCSSValue[next],
    };

    return acc;
  }, {})
);

const wordBreakPropToCSSValue = {
  'break-words': 'break-word',
  'word-break-normal': 'normal',
};

export const wordBreakVariants = responsiveVariants(
  Object.keys(wordBreakPropToCSSValue).reduce((acc, next) => {
    acc[next] = {
      wordBreak: wordBreakPropToCSSValue[next],
    };

    return acc;
  }, {})
);

export const whiteSpaceVariants = responsiveVariants(
  ['pre-wrap', 'pre-line', 'normal'].reduce((acc, next) => {
    acc[next] = {
      whiteSpace: next,
    };

    return acc;
  }, {})
);

export const sizeVariants = responsiveVariants(sizes);

export const weightVariants = responsiveVariants(
  Object.keys(fontWeights).reduce((acc, next) => {
    acc[next] = {
      fontWeight: fontWeights[next],
    };

    return acc;
  }, {})
);

export const wrapVariants = responsiveVariants({
  wrap: {
    whiteSpace: 'wrap',
  },
  noWrap: {
    whiteSpace: 'nowrap',
  },
});
