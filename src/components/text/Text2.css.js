// @flow

import {styleVariants, style} from '@vanilla-extract/css';
import colors from '../colors/colors';
import {
  screenSizeMediaQueries,
  fontFamilies,
  fontWeights,
} from '../../vanilla-extract/config';

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

export const variants = styleVariants({
  'sg-text': {
    fontWeight: fontWeights.regular,
    fontFamily: fontFamilies.proxima,
    fontSize: sizes.medium.fontSize,
    lineHeight: sizes.medium.lineHeight,
  },
  'sg-text--inherited': {
    fontSize: 'inherit',
    lineHeight: 'inherit',
    fontFamily: 'inherit',
    fontWeight: 'inherit',
    color: 'inherit',
  },
  ...textColors.reduce((acc, next) => {
    acc[`sg-text--${next.name}`] = {
      color: `#${next.hex}`,
    };

    return acc;
  }, {}),
  ...Object.keys(sizes).reduce((acc, next) => {
    acc[`sg-text--${next}`] = {
      fontSize: sizes[next].fontSize,
      lineHeight: sizes[next].lineHeight,
    };

    Object.keys(screenSizeMediaQueries).forEach(breakpoint => {
      acc[`${breakpoint}:sg-text--${next}`] = {
        '@media': {
          [screenSizeMediaQueries[breakpoint]]: {
            fontSize: sizes[next].fontSize,
            lineHeight: sizes[next].lineHeight,
          },
        },
      };
    });

    return acc;
  }, {}),
  ...Object.keys(fontWeights).reduce((acc, next) => {
    acc[`sg-text--${next}`] = {
      fontWeight: fontWeights[next],
    };

    Object.keys(screenSizeMediaQueries).forEach(breakpoint => {
      acc[`${breakpoint}:sg-text--${next}`] = {
        '@media': {
          [screenSizeMediaQueries[breakpoint]]: {
            fontWeight: fontWeights[next],
          },
        },
      };
    });

    return acc;
  }, {}),
  'sg-text--wrap': {
    whiteSpace: 'wrap',
  },
  'sg-text--no-wrap': {
    whiteSpace: 'nowrap',
  },
  'sg-text--link': {
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
  'sg-text--underlined': {
    cursor: 'pointer',
    textDecoration: 'underline',
  },
});
