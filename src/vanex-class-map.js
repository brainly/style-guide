import * as textStyles from './components/text/TextStyles';
import * as buttonStyles from './components/buttons/ButtonStyles';

export default {
  'sg-text': textStyles.textStyle,
  'sg-text--link': textStyles.linkVariants.main,
  'sg-text-inherited': textStyles.inheritedStyle,
  'sg-text--container': textStyles.containerStyle,
  'sg-text--link-underlined': textStyles.linkVariants.underlined,
  'sg-text--text-white': textStyles.colorVariants['text-white'],
  'sg-text--text-black': textStyles.colorVariants['text-black'],
  'sg-text--text-gray-70': textStyles.colorVariants['text-gray-70'],
  'sg-text--text-gray-60': textStyles.colorVariants['text-gray-60'],
  'sg-text--text-gray-50': textStyles.colorVariants['text-gray-50'],
  'sg-text--text-gray-40': textStyles.colorVariants['text-gray-40'],
  'sg-text--text-blue-60': textStyles.colorVariants['text-blue-60'],
  'sg-text--text-blue-40': textStyles.colorVariants['text-blue-40'],
  'sg-text--text-green-60': textStyles.colorVariants['text-green-60'],
  'sg-text--text-green-40': textStyles.colorVariants['text-green-40'],
  'sg-text--text-indigo-60': textStyles.colorVariants['text-indigo-60'],
  'sg-text--text-indigo-40': textStyles.colorVariants['text-indigo-40'],
  'sg-text--text-red-60': textStyles.colorVariants['text-red-60'],
  'sg-text--text-red-40': textStyles.colorVariants['text-red-40'],
  'sg-text--text-yellow-60': textStyles.colorVariants['text-yellow-60'],
  'sg-text--text-yellow-40': textStyles.colorVariants['text-yellow-40'],
  ...['', 'md:', 'lg:', 'xl:'].reduce((acc, next) => {
    acc[`${next}sg-text--xxsmall`] = textStyles.sizeVariants[`${next}xxsmall`];
    return acc;
  }, {}),
  ...['', 'md:', 'lg:', 'xl:'].reduce((acc, next) => {
    acc[`${next}sg-text--xsmall`] = textStyles.sizeVariants[`${next}xsmall`];
    return acc;
  }, {}),
  ...['', 'md:', 'lg:', 'xl:'].reduce((acc, next) => {
    acc[`${next}sg-text--small`] = textStyles.sizeVariants[`${next}small`];
    return acc;
  }, {}),
  ...['', 'md:', 'lg:', 'xl:'].reduce((acc, next) => {
    acc[`${next}sg-text--medium`] = textStyles.sizeVariants[`${next}medium`];
    return acc;
  }, {}),
  ...['', 'md:', 'lg:', 'xl:'].reduce((acc, next) => {
    acc[`${next}sg-text--large`] = textStyles.sizeVariants[`${next}large`];
    return acc;
  }, {}),
  ...['', 'md:', 'lg:', 'xl:'].reduce((acc, next) => {
    acc[`${next}sg-text--xlarge`] = textStyles.sizeVariants[`${next}xlarge`];
    return acc;
  }, {}),
  ...['', 'md:', 'lg:', 'xl:'].reduce((acc, next) => {
    acc[`${next}sg-text--xxlarge`] = textStyles.sizeVariants[`${next}xxlarge`];
    return acc;
  }, {}),
  ...['', 'md:', 'lg:', 'xl:'].reduce((acc, next) => {
    acc[`${next}sg-text--xxxlarge`] =
      textStyles.sizeVariants[`${next}xxxlarge`];
    return acc;
  }, {}),
  ...['', 'md:', 'lg:', 'xl:'].reduce((acc, next) => {
    acc[`${next}sg-text--uppercase`] =
      textStyles.transformVariants[`${next}uppercase`];
    return acc;
  }, {}),
  ...['', 'md:', 'lg:', 'xl:'].reduce((acc, next) => {
    acc[`${next}sg-text--lowercase`] =
      textStyles.transformVariants[`${next}lowercase`];
    return acc;
  }, {}),
  ...['', 'md:', 'lg:', 'xl:'].reduce((acc, next) => {
    acc[`${next}sg-text--capitalize`] =
      textStyles.transformVariants[`${next}capitalize`];
    return acc;
  }, {}),
  ...['', 'md:', 'lg:', 'xl:'].reduce((acc, next) => {
    acc[`${next}sg-text--bold`] = textStyles.weightVariants[`${next}bold`];
    return acc;
  }, {}),
  ...['', 'md:', 'lg:', 'xl:'].reduce((acc, next) => {
    acc[`${next}sg-text--regular`] =
      textStyles.weightVariants[`${next}regular`];
    return acc;
  }, {}),
  ...['', 'md:', 'lg:', 'xl:'].reduce((acc, next) => {
    acc[`${next}sg-text--to-left`] = textStyles.alignVariants[`${next}to-left`];
    return acc;
  }, {}),
  ...['', 'md:', 'lg:', 'xl:'].reduce((acc, next) => {
    acc[`${next}sg-text--to-right`] =
      textStyles.alignVariants[`${next}to-right`];
    return acc;
  }, {}),
  ...['', 'md:', 'lg:', 'xl:'].reduce((acc, next) => {
    acc[`${next}sg-text--to-center`] =
      textStyles.alignVariants[`${next}to-center`];
    return acc;
  }, {}),
  ...['', 'md:', 'lg:', 'xl:'].reduce((acc, next) => {
    acc[`${next}sg-text--justify`] = textStyles.alignVariants[`${next}justify`];
    return acc;
  }, {}),
  ...['', 'md:', 'lg:', 'xl:'].reduce((acc, next) => {
    acc[`${next}sg-text--no-wrap`] = textStyles.wrapVariants[`${next}noWrap`];
    return acc;
  }, {}),
  ...['', 'md:', 'lg:', 'xl:'].reduce((acc, next) => {
    acc[`${next}sg-text--wrap`] = textStyles.wrapVariants[`${next}wrap`];
    return acc;
  }, {}),
  ...['', 'md:', 'lg:', 'xl:'].reduce((acc, next) => {
    acc[`${next}sg-text--full`] = textStyles.widthVariants[`${next}full`];
    return acc;
  }, {}),
  ...['', 'md:', 'lg:', 'xl:'].reduce((acc, next) => {
    acc[`${next}sg-text--auto`] = textStyles.widthVariants[`${next}auto`];
    return acc;
  }, {}),
  ...['', 'md:', 'lg:', 'xl:'].reduce((acc, next) => {
    acc[`${next}sg-text--break-words`] =
      textStyles.wordBreakVariants[`${next}break-words`];
    return acc;
  }, {}),
  ...['', 'md:', 'lg:', 'xl:'].reduce((acc, next) => {
    acc[`${next}sg-text--word-break-normal`] =
      textStyles.wordBreakVariants[`${next}word-break-normal`];
    return acc;
  }, {}),
  ...['', 'md:', 'lg:', 'xl:'].reduce((acc, next) => {
    acc[`${next}sg-text--pre-wrap`] =
      textStyles.whiteSpaceVariants[`${next}pre-wrap`];
    return acc;
  }, {}),
  ...['', 'md:', 'lg:', 'xl:'].reduce((acc, next) => {
    acc[`${next}sg-text--pre-line`] =
      textStyles.whiteSpaceVariants[`${next}pre-line`];
    return acc;
  }, {}),
  ...['', 'md:', 'lg:', 'xl:'].reduce((acc, next) => {
    acc[`${next}sg-text--white-space-normal`] =
      textStyles.whiteSpaceVariants[`${next}normal`];
    return acc;
  }, {}),
  'sg-button': buttonStyles.buttonStyle,
  'sg-button__text': buttonStyles.buttonTextStyle,
  'sg-button__icon': buttonStyles.iconStyle,
  'sg-button__icon--s': buttonStyles.iconVariants.s,
  'sg-button__icon--l': buttonStyles.iconVariants.l,
  'sg-button__spinner': buttonStyles.spinnerStyle,
  'sg-button--s': buttonStyles.sizeVariants.s,
  'sg-button--m': buttonStyles.sizeVariants.m,
  'sg-button--l': buttonStyles.sizeVariants.l,
  'sg-button--reversed-order': buttonStyles.reversedOrderStyle,
  'sg-button--disabled': buttonStyles.disabledStyle,
  'sg-button--full-width': buttonStyles.fullWidthStyle,
  'sg-button--loading': buttonStyles.loadingStyle,
  'sg-button--solid': buttonStyles.typeVariants.solid,
  'sg-button--solid-inverted': buttonStyles.typeVariants['solid-inverted'],
  'sg-button--solid-indigo': buttonStyles.typeVariants['solid-indigo'],
  'sg-button--solid-indigo-inverted':
    buttonStyles.typeVariants['solid-indigo-inverted'],
  'sg-button--solid-light': buttonStyles.typeVariants['solid-light'],
  'sg-button--solid-light-toggle-red':
    buttonStyles.typeVariants['sg-button--solid-light-toggle-red'],
  'sg-button--solid-light-toggle-yellow':
    buttonStyles.typeVariants['sg-button--solid-light-toggle-yellow'],
  'sg-button--outline': buttonStyles.typeVariants['outline'],
  'sg-button--outline-toggle-red':
    buttonStyles.typeVariants['outline-toggle-red'],
  'sg-button--outline-toggle-yellow':
    buttonStyles.typeVariants['outline-toggle-yellow'],
  'sg-button--outline-indigo': buttonStyles.typeVariants['outline-indigo'],
  'sg-button--outline-inverted': buttonStyles.typeVariants['outline-inverted'],
  'sg-button--transparent': buttonStyles.typeVariants['transparent'],
  'sg-button--transparent-toggle-red':
    buttonStyles.typeVariants['transparent-toggle-red'],
  'sg-button--transparent-toggle-yellow':
    buttonStyles.typeVariants['transparent-toggle-yellow'],
  'sg-button--transparent-light': buttonStyles,
  'sg-button--transparent-light-toggle-red':
    buttonStyles.typeVariants['transparent-light-toggle-red'],
  'sg-button--transparent-light-toggle-yellow':
    buttonStyles.typeVariants['transparent-light-toggle-yellow'],
  'sg-button--transparent-inverted':
    buttonStyles.typeVariants['transparent-inverted'],
  'sg-button--transparent-red': buttonStyles.typeVariants['transparent-red'],
  'sg-button--transparent-red-toggle-red':
    buttonStyles.typeVariants['transparent-red-toggle-red'],
};
