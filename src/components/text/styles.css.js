// @flow strict

import {fontFamilies, fontWeights} from '../../vanilla-extract/config';
// $FlowFixMe[untyped-import]
import colors from '../../vanilla-extract/colors';
import {createResponsiveRecipe} from '../../vanilla-extract/responsive-recipes';

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

export const link = createResponsiveRecipe({
  variants: {
    styled: {
      true: {
        cursor: 'pointer',
        textDecoration: 'none',
        color: colors.blue60,

        ':hover': {
          textDecoration: 'underline',
        },
        ':active': {
          textDecoration: 'underline',
        },
      },
    },
    label: {
      true: {
        cursor: 'pointer',
        position: 'relative',
        '&:focus-within': {
          outline: '5px auto Highlight',
        },
      },
    },
    disabled: {
      true: {
        cursor: 'default',
        '&:hover': {
          textDecoration: 'none',
        },
        '&:active': {
          textDecoration: 'none',
        },
      },
    },
    unstyled: {
      true: {
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
    },
    underlined: {
      true: {
        cursor: 'pointer',
        textDecoration: 'underline',
      },
    },
  },
});

const colorVariants = [
  {name: 'text-black', value: colors.textBlack},
  {name: 'text-white', value: colors.textWhite},
  {name: 'text-blue-60', value: colors.textBlue60},
  {name: 'text-blue-40', value: colors.textBlue40},
  {name: 'text-green-60', value: colors.textGreen60},
  {name: 'text-green-40', value: colors.textGreen40},
  {name: 'text-indigo-60', value: colors.textIndigo60},
  {name: 'text-indigo-40', value: colors.textIndigo40},
  {name: 'text-red-60', value: colors.textRed60},
  {name: 'text-red-40', value: colors.textRed40},
  {name: 'text-yellow-60', value: colors.textYellow60},
  {name: 'text-yellow-40', value: colors.textYellow40},
  {name: 'text-gray-70', value: colors.textGray70},
  {name: 'text-gray-60', value: colors.textGray60},
  {name: 'text-gray-50', value: colors.textGray50},
  {name: 'text-gray-40', value: colors.textGray40},
].reduce((acc, next) => {
  acc[next.name] = {
    color: next.value,
  };

  return acc;
}, {});

const transformVariants = ['uppercase', 'lowercase', 'capitalize'].reduce(
  (acc, next) => {
    acc[next] = {
      textTransform: next,
    };

    return acc;
  },
  {}
);

export const text = createResponsiveRecipe(
  {
    base: {
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
    },
    variants: {
      inherited: {
        true: {
          fontSize: 'inherit',
          lineHeight: 'inherit',
          fontFamily: 'inherit',
          fontWeight: 'inherit',
          color: 'inherit',
        },
      },
      color: colorVariants,
      size: sizes,
      full: {
        true: {
          width: '100%',
        },
        false: {
          width: 'auto',
        },
      },
      noWrap: {
        false: {
          whiteSpace: 'normal',
        },
        true: {
          whiteSpace: 'nowrap',
        },
      },
      transform: transformVariants,
      breakWords: {
        true: {
          wordBreak: 'break-word',
        },
        false: {
          wordBreak: 'normal',
        },
      },
      whiteSpace: {
        'pre-wrap': {
          whitespace: 'pre-wrap',
        },
        'pre-line': {
          whitespace: 'pre-line',
        },
        normal: {
          whitespace: 'normal',
        },
      },
      align: {
        'to-left': {
          textAlign: 'left',
        },
        'to-right': {
          textAlign: 'right',
        },
        'to-center': {
          textAlign: 'center',
        },
        justify: {
          textAlign: 'justify',
        },
      },
      weight: {
        regular: {
          fontWeight: fontWeights.regular,
        },
        bold: {
          fontWeight: fontWeights.bold,
        },
      },
      asContainer: {
        true: {
          position: 'relative',
        },
      },
    },
  },
  '',
  {
    responsiveVariants: [
      'size',
      'width',
      'noWrap',
      'weight',
      'transform',
      'align',
      'full',
      'breakWords',
      'whiteSpace',
    ],
  }
);
