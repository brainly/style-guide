// @flow strict

// $FlowFixMe// $FlowFixMe
import {style, styleVariants} from '@vanilla-extract/css';
import colors from '../../vanilla-extract/colors';
import {componentSizes, sizes} from '../../vanilla-extract/config';
// $FlowFixMe
import {mix} from '../../vanilla-extract/utils';

const buttonPrimaryFbColor = '#1877f2';
const buttonPrimaryFbHoverColor = '#1964d5';

const buttonHover = (color1, color2, weight, identifier) => {
  return style(
    {
      selectors: {
        '&:hover:not([disabled])': {
          backgroundColor: mix(color1, color2, weight),
        },
        '&:focus:not([disabled])': {
          backgroundColor: mix(color1, color2, weight),
        },
        '&:active:not([disabled])': {
          backgroundColor: mix(color1, color2, weight),
        },
        '&:active:focus:not([disabled])': {
          backgroundColor: mix(color1, color2, weight),
        },
      },
    },
    `${identifier}-hover`
  );
};

const buttonSizes = {
  small: componentSizes.s,
  medium: componentSizes.m,
  large: componentSizes.l,
};

export const loadingStyle = style({});

export const buttonStyle = style(
  {
    position: 'relative',
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.black,
    height: buttonSizes.medium,
    borderRadius: '20px',
    border: 'none',
    whiteSpace: 'nowrap',
    textDecoration: 'none',
    fontSize: '15px',
    lineHeight: '15px',
    fontWeight: 'bold',
    color: colors.white,
    textTransform: 'uppercase',
    padding: '0 20px',
    willChange: 'background-color, border-color',
    transitionProperty: 'background-color, border-color',
    transitionDuration: '0.2s',
    transitionTimingFunction: 'ease-in-out',
    cursor: 'pointer',
    boxSizing: 'border-box',
  },
  'sg-button'
);

export const reversedOrderStyle = style({
  flexDirection: 'row-reverse',
});

export const spinnerStyle = style({
  position: 'absolute',
});

export const sizeVariants = styleVariants({
  s: {
    borderRadius: '16px',
    height: buttonSizes.small,
    padding: `0 ${sizes.s}`,
    fontSize: '12px',
    lineHeight: '12px',
  },
  m: {
    height: buttonSizes.medium,
  },
  l: {
    borderRadius: '28px',
    height: buttonSizes.large,
    padding: '0 28px',
    fontSize: '21px',
    lineHeight: '21px',
  },
});

export const disabledStyle = style({
  opacity: 0.45,
  cursor: 'not-allowed',
});

export const fullWidthStyle = style({
  width: '100%',
});

export const typeVariants = styleVariants({
  solid: [
    buttonHover(colors.gray70, colors.black, 80, 'button--solid'),
    {
      backgroundColor: colors.black,
    },
  ],
  'solid-inverted': [
    buttonHover(colors.gray20, colors.white, 80, 'button--solid-inverted'),
    {
      backgroundColor: colors.white,
      color: colors.black,
    },
  ],
  'solid-indigo': [
    buttonHover(colors.indigo60, colors.indigo50, 80, 'button--solid-indigo'),
    {
      backgroundColor: colors.indigo50,
    },
  ],
  'solid-indigo-inverted': [
    buttonHover(colors.gray20, colors.white, 80, 'button--solid-inverted'),
    {
      backgroundColor: colors.white,
      color: colors.indigo50,
    },
  ],
  'solid-light': [
    buttonHover(colors.gray50, colors.gray20, 12, 'button--solid-light'),
    {
      backgroundColor: colors.gray20,
      color: colors.black,
    },
  ],
  'solid-light-toggle-red': [
    buttonHover(
      colors.red40,
      colors.red20,
      12,
      'button--solid-light-toggle-red'
    ),
    {
      backgroundColor: colors.red20,
    },
  ],
  'solid-light-toggle-yellow': [
    buttonHover(
      colors.yellow40,
      colors.yellow20,
      12,
      'button--solid-light-ttogle-yellow'
    ),
    {
      backgroundColor: colors.yellow20,
    },
  ],
  outline: [
    buttonHover(colors.gray50, colors.transparent, 12, 'button--outline'),
    {
      backgroundColor: colors.transparent,
      border: `2px solid ${colors.black}`,
      color: colors.black,
    },
  ],
  'outline-toggle-red': [
    buttonHover(
      colors.red40,
      colors.transparent,
      12,
      'button--outline-toggle-red'
    ),
    {
      borderColor: colors.red50,
    },
  ],
  'outline-toggle-yellow': [
    buttonHover(
      colors.yellow40,
      colors.transparent,
      12,
      'button--outline-toggle-yelow'
    ),
    {
      borderColor: colors.yellow50,
    },
  ],
  'outline-indigo': [
    buttonHover(
      colors.indigo50,
      colors.transparent,
      12,
      'button--outline-indigo'
    ),
    {
      backgroundColor: colors.transparent,
      border: `2px solid ${colors.indigo50}`,
      color: colors.indigo50,
    },
  ],
  'outline-inverted': [
    buttonHover(
      colors.white,
      colors.transparent,
      12,
      'button--outline-inverted'
    ),
    {
      backgroundColor: colors.transparent,
      border: `2px solid ${colors.white}`,
      color: colors.white,
    },
  ],
  transparent: [
    buttonHover(colors.gray50, colors.transparent, 12, 'button--transparent'),
    {
      backgroundColor: colors.transparent,
      color: colors.black,
      padding: '0 10px',
      selectors: {
        [`${sizeVariants.l}&`]: {
          padding: '0 14px',
        },
        [`${sizeVariants.s}&`]: {
          padding: `0 ${sizes.xs}`,
        },
      },
    },
  ],
  'transparent-toggle-red': [
    buttonHover(
      colors.red40,
      colors.transparent,
      12,
      'button--transparent-toggle-red'
    ),
  ],
  'transparent-toggle-yellow': [
    buttonHover(
      colors.yellow40,
      colors.transparent,
      12,
      'transparent-toggle-yellow'
    ),
  ],
  'transparent-light': [
    buttonHover(
      colors.gray50,
      colors.transparent,
      12,
      'button--transparent-light'
    ),
    {
      backgroundColor: colors.transparent,
      color: colors.gray50,
      padding: '0 10px',
      selectors: {
        [`${sizeVariants.l}&`]: {
          padding: '0 14px',
        },
        [`${sizeVariants.s}&`]: {
          padding: `0 ${sizes.xs}`,
        },
      },
    },
  ],
  'transparent-light-toggle-red': [
    buttonHover(
      colors.red40,
      colors.transparent,
      12,
      'button--transparent-light-toggle-red'
    ),
  ],
  'transparent-light-toggle-yellow': [
    buttonHover(
      colors.yellow40,
      colors.transparent,
      12,
      'button--transparent-light-toggle-yellow'
    ),
  ],
  'transparent-inverted': [
    buttonHover(
      colors.white,
      colors.transparent,
      12,
      'button--transparent-inverted'
    ),
    {
      backgroundColor: colors.transparent,
      color: colors.white,
      padding: '0 10px',
      selectors: {
        [`${sizeVariants.l}&`]: {
          padding: '0 14px',
        },
        [`${sizeVariants.s}&`]: {
          padding: `0 ${sizes.xs}`,
        },
      },
    },
  ],
  'transparent-red': [
    buttonHover(
      colors.red40,
      colors.transparent,
      12,
      'button--transparent-toggle-red'
    ),
    {
      backgroundColor: colors.transparent,
      color: colors.red60,
      padding: '0 10px',
      selectors: {
        [`${sizeVariants.l}&`]: {
          padding: '0 14px',
        },
        [`${sizeVariants.s}&`]: {
          padding: `0 ${sizes.xs}`,
        },
      },
    },
  ],
  'transparent-red-toggle-red': [
    buttonHover(
      colors.red40,
      colors.transparent,
      12,
      'button--transparent-red-toggle-red '
    ),
  ],
  facebook: {
    backgroundColor: buttonPrimaryFbColor,
    color: colors.white,
    selectors: {
      '&:hover:not([disabled])': {
        backgroundColor: buttonPrimaryFbHoverColor,
        borderColor: buttonPrimaryFbHoverColor,
      },
      '&:focus:not([disabled])': {
        backgroundColor: buttonPrimaryFbHoverColor,
        borderColor: buttonPrimaryFbHoverColor,
      },
      '&:active:not([disabled])': {
        backgroundColor: buttonPrimaryFbHoverColor,
        borderColor: buttonPrimaryFbHoverColor,
      },
      '&:active:focus:not([disabled])': {
        backgroundColor: buttonPrimaryFbHoverColor,
        borderColor: buttonPrimaryFbHoverColor,
      },
    },
  },
  google: [
    buttonHover(colors.gray50, colors.transparent, 12, 'button--google'),
    {
      backgroundColor: colors.transparent,
      border: `2px solid ${colors.black}`,
      color: colors.black,
    },
  ],
  apple: [
    buttonHover(colors.gray70, colors.black, 80, 'button--apple'),
    {
      backgroundColor: colors.black,
    },
  ],
});

export const iconOnlyStyle = style({
  padding: 0,
  width: componentSizes.m,
  selectors: {
    [`${sizeVariants.s}&`]: {
      width: componentSizes.s,
    },
    [`${sizeVariants.m}&`]: {
      width: componentSizes.m,
    },
    [`${sizeVariants.l}&`]: {
      width: componentSizes.l,
    },
  },
});

export const buttonTextStyle = style({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  selectors: {
    [`${sizeVariants.s} &`]: {
      top: '1px',
    },
    [`${loadingStyle} &`]: {
      opacity: 0,
    },
    [`${iconOnlyStyle} &`]: {
      position: 'absolute',
      width: '1px',
      height: '1px',
      padding: 0,
      margin: '-1px',
      overflow: 'hidden',
      clip: 'rect(0, 0, 0, 0)',
      border: 'none',
    },
  },
});

export const iconStyle = style({
  display: 'inline-flex',
  marginRight: sizes.xs,
  marginLeft: '-4px',
  selectors: {
    [`${reversedOrderStyle} &`]: {
      marginRight: '-4px',
      marginLeft: sizes.xs,
    },
    [`${loadingStyle} &`]: {
      opacity: 0,
    },
    [`${typeVariants['solid-light-toggle-red']} &`]: {
      color: colors.red50,
    },
    [`${typeVariants['solid-light-toggle-yellow']} &`]: {
      color: colors.yellow50,
    },
    [`${typeVariants['outline-toggle-red']} &`]: {
      color: colors.red50,
    },
    [`${typeVariants['outline-toggle-yellow']} &`]: {
      color: colors.yellow50,
    },
    [`${typeVariants['transparent-toggle-red']} &`]: {
      color: colors.red50,
    },
    [`${typeVariants['transparent-toggle-yellow']} &`]: {
      color: colors.yellow50,
    },
    [`${typeVariants['transparent-light-toggle-red']} &`]: {
      color: colors.red50,
    },
    [`${typeVariants['transparent-light-toggle-yellow']} &`]: {
      color: colors.yellow50,
    },
    [`${typeVariants['transparent-red']} &`]: {
      color: colors.red50,
    },
    [`${typeVariants.transparent}${reversedOrderStyle} &`]: {
      marginRight: '-2px',
      marginLeft: sizes.xs,
    },
    [`${typeVariants['transparent-light']}${reversedOrderStyle} &`]: {
      marginRight: '-2px',
      marginLeft: sizes.xs,
    },
    [`${typeVariants['transparent-inverted']}${reversedOrderStyle} &`]: {
      marginRight: '-2px',
      marginLeft: sizes.xs,
    },
    [`${typeVariants['transparent-red']}${reversedOrderStyle} &`]: {
      marginRight: '-2px',
      marginLeft: sizes.xs,
    },
    [`${typeVariants.transparent} &`]: {
      marginLeft: '-2px',
    },
    [`${typeVariants['transparent-light']} &`]: {
      marginLeft: '-2px',
    },
    [`${typeVariants['transparent-inverted']} &`]: {
      marginLeft: '-2px',
    },
    [`${typeVariants['transparent-red']} &`]: {
      marginLeft: '-2px',
    },
    [`${iconOnlyStyle} &`]: {
      margin: 0,
    },
  },
});

export const iconVariants = styleVariants({
  s: {
    marginRight: '6px',
    marginLeft: '-4px',
    selectors: {
      [`${reversedOrderStyle} &`]: {
        marginRight: '-4px',
        marginLeft: '6px',
      },
      [`${typeVariants.transparent}${reversedOrderStyle} &`]: {
        marginRight: '-2px',
        marginLeft: '6px',
      },
      [`${typeVariants['transparent-light']}${reversedOrderStyle} &`]: {
        marginRight: '-2px',
        marginLeft: '6px',
      },
      [`${typeVariants['transparent-inverted']}${reversedOrderStyle} &`]: {
        marginRight: '-2px',
        marginLeft: '6px',
      },
      [`${typeVariants['transparent-red']}${reversedOrderStyle} &`]: {
        marginRight: '-2px',
        marginLeft: '6px',
      },
    },
  },
  l: {
    marginRight: '12px',
    marginLeft: '-6px',
    selectors: {
      [`${reversedOrderStyle} &`]: {
        marginRight: '-6px',
        marginLeft: '12px',
      },
      [`${typeVariants.transparent}${reversedOrderStyle} &`]: {
        marginRight: '-3px',
        marginLeft: '12px',
      },
      [`${typeVariants['transparent-light']}${reversedOrderStyle} &`]: {
        marginRight: '-3px',
        marginLeft: '12px',
      },
      [`${typeVariants['transparent-inverted']}${reversedOrderStyle} &`]: {
        marginRight: '-3px',
        marginLeft: '12px',
      },
      [`${typeVariants['transparent-red']}${reversedOrderStyle} &`]: {
        marginRight: '-3px',
        marginLeft: '12px',
      },
      [`${typeVariants.transparent} &`]: {
        marginLeft: '-3px',
      },
      [`${typeVariants['transparent-light']} &`]: {
        marginLeft: '-3px',
      },
      [`${typeVariants['transparent-inverted']} &`]: {
        marginLeft: '-3px',
      },
      [`${typeVariants['transparent-red']} &`]: {
        marginLeft: '-3px',
      },
    },
  },
});
