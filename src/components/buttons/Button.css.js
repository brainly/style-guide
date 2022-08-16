import {style, styleVariants} from '@vanilla-extract/css';
import colors from '../../vanilla-extract/colors';
import {componentSizes, sizes} from '../../vanilla-extract/config';
import {mix} from '../../vanilla-extract/utils';

const buttonHover = (color1, color2, weight) => {
  return style({
    selectors: {
      '&:hover:not([disabled]), &:focus:not([disabled]), &:active:not([disabled]), &:active:focus:not([disabled])':
        {
          backgroundColor: mix(color1, color2, weight),
        },
    },
  });
};

const buttonSizes = {
  small: componentSizes.s,
  medium: componentSizes.m,
  large: componentSizes.l,
};

export const loadingStyle = style({});

export const buttonStyle = style({
  position: 'relative',
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '$black',
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
});

export const reverserOrder = style({
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

export const buttonTextStyle = style({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  selectors: {
    [`.${sizeVariants.s} &`]: {
      top: '1px',
    },
    [`.${loadingStyle} &`]: {
      opacity: 0,
    },
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
    buttonHover(colors.gray70, colors.black, 80),
    {
      backgroundColor: colors.black,
    },
  ],
  'solid-inverted': [
    buttonHover(colors.gray20, colors.white, 80),
    {
      backgroundColor: colors.white,
      color: colors.black,
    },
  ],
  'solid-indigo': [
    buttonHover(colors.indigo60, colors.indigo50, 80),
    {
      backgroundColor: colors.indigo50,
    },
  ],
  'solid-indigo-inverted': [
    buttonHover(colors.gray20, colors.white, 80),
    {
      backgroundColor: colors.white,
      color: colors.indigo50,
    },
  ],
  'solid-light': [
    buttonHover(colors.gray50, colors.gray20, 12),
    {
      backgroundColor: colors.gray20,
      color: colors.black,
    },
  ],
  'solid-light-toggle-red': [
    buttonHover(colors.red40, colors.red20, 12),
    {
      backgroundColor: colors.red20,
    },
  ],
  'solid-light-toggle-yellow': [
    buttonHover(colors.yellow40, colors.yellow20, 12),
    {
      backgroundColor: colors.yellow20,
    },
  ],
  outline: [
    buttonHover(colors.gray50, colors.transparent, 12),
    {
      backgroundColor: colors.transparent,
      border: `2px solid ${colors.black}`,
      color: colors.black,
    },
  ],
  'outline-toggle-red': [
    buttonHover(colors.red40, colors.transparent, 12),
    {
      borderColor: colors.red50,
    },
  ],
  'outline-toggle-yellow': [
    buttonHover(colors.yellow40, colors.transparent, 12),
    {
      borderColor: colors.yellow50,
    },
  ],
  'outline-indigo': [
    buttonHover(colors.white, colors.transparent, 12),
    {
      backgroundColor: colors.transparent,
      border: `2px solid ${colors.white}`,
      color: colors.white,
    },
  ],
  'outline-inverted': [
    buttonHover(colors.white, colors.transparent, 12),
    {
      backgroundColor: colors.transparent,
      border: `2px solid ${colors.white}`,
      color: colors.white,
    },
  ],
  transparent: [
    buttonHover(colors.gray50, colors.transparent, 12),
    {
      backgroundColor: colors.transparent,
      color: colors.black,
    },
  ],
  'transparent-toggle-red': [buttonHover(colors.red40, colors.transparent, 12)],
  'transparent-toggle-yellow': [
    buttonHover(colors.yellow40, colors.transparent, 12),
  ],
  'transparent-light': [
    buttonHover(colors.gray50, colors.transparent, 12),
    {
      backgroundColor: colors.transparent,
      color: colors.gray50,
    },
  ],
  'transparent-light-toggle-red': [
    buttonHover(colors.red40, colors.transparent, 12),
  ],
  'transparent-light-toggle-yellow': [
    buttonHover(colors.yellow40, colors.transparent, 12),
  ],
  'transparent-inverted': [
    buttonHover(colors.white, colors.transparent, 12),
    {
      backgroundColor: colors.transparent,
      color: colors.white,
    },
  ],
});

export const iconStyle = style({
  display: 'inline-flex',
  marginRight: sizes.xs,
  marginLeft: '-4px',

  selectors: {
    [`.${reverserOrder} &`]: {
      marginRight: '-4px',
      marginLeft: sizes.xs,
    },
    [`.${loadingStyle} &`]: {
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
  },
});

export const iconVariants = styleVariants({
  s: {
    marginRight: '6px',
    marginLeft: '-4px',
    selectors: {
      [`.${reverserOrder} &`]: {
        marginRight: '-4px',
        marginLeft: '6px',
      },
    },
  },
  l: {
    marginRight: '12px',
    marginLeft: '-6px',
    selectors: {
      [`.${reverserOrder} &`]: {
        marginRight: '-6px',
        marginLeft: '12px',
      },
    },
  },
});
