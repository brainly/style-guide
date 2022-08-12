// @flow

import {styleVariants, style} from '@vanilla-extract/css';
import colors from '../colors/colors';
import {
  screenSizeMediaQueries,
  fontFamilies,
  fontWeights,
} from '../../vanilla-extract/config';
import {responsiveVariants} from '../../vanilla-extract/utils';

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

const {text: textColors} = colors;

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

export const inheritedStyle = style({
  fontSize: 'inherit',
  lineHeight: 'inherit',
  fontFamily: 'inherit',
  fontWeight: 'inherit',
  color: 'inherit',
});

export const containerStyle = style({
  position: 'relative',
});

export const colorVariants = styleVariants(
  textColors.reduce((acc, next) => {
    acc[next.name] = {
      color: `#${next.hex}`,
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

export const linkVariants = styleVariants({
  main: {
    cursor: 'pointer',
    textDecoration: 'none',
    color: `#${colors.text.find(color => color.name === 'text-blue-60').hex}`,

    ':hover': {
      textDecoration: 'underline',
    },
    ':active': {
      textDecoration: 'underline',
    },
  },
  underlined: {
    cursor: 'pointer',
    textDecoration: 'underline',
  },
});
