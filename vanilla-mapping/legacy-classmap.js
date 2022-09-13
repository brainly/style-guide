'use strict';

require('./assets/src/components/buttons/ButtonStyles.css.js.vanilla-a4a6750b.css');
require('./assets/src/components/text/TextStyles.css.js.vanilla-72053039.css');

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var buttonStyle = 'ButtonStyles__1yjdjb81';
var buttonTextStyle = 'ButtonStyles__1yjdjb81l';
var disabledStyle = 'ButtonStyles__1yjdjb87';
var fullWidthStyle = 'ButtonStyles__1yjdjb88';
var iconStyle = 'ButtonStyles__1yjdjb81m';
var iconVariants = {s:'ButtonStyles_s__1yjdjb81n',l:'ButtonStyles_l__1yjdjb81o'};
var loadingStyle = 'ButtonStyles__1yjdjb80';
var reversedOrderStyle = 'ButtonStyles__1yjdjb82';
var sizeVariants$1 = {s:'ButtonStyles_s__1yjdjb84',m:'ButtonStyles_m__1yjdjb85',l:'ButtonStyles_l__1yjdjb86'};
var spinnerStyle = 'ButtonStyles__1yjdjb83';
var typeVariants = {solid:'ButtonStyles_solid__1yjdjb8w ButtonStyles_button--solid-hover__1yjdjb89','solid-inverted':'ButtonStyles_solid-inverted__1yjdjb8x ButtonStyles_button--solid-inverted-hover__1yjdjb8a','solid-indigo':'ButtonStyles_solid-indigo__1yjdjb8y ButtonStyles_button--solid-indigo-hover__1yjdjb8b','solid-indigo-inverted':'ButtonStyles_solid-indigo-inverted__1yjdjb8z ButtonStyles_button--solid-inverted-hover__1yjdjb8c','solid-light':'ButtonStyles_solid-light__1yjdjb810 ButtonStyles_button--solid-light-hover__1yjdjb8d','solid-light-toggle-red':'ButtonStyles_solid-light-toggle-red__1yjdjb811 ButtonStyles_button--solid-light-toggle-red-hover__1yjdjb8e','solid-light-toggle-yellow':'ButtonStyles_solid-light-toggle-yellow__1yjdjb812 ButtonStyles_button--solid-light-ttogle-yellow-hover__1yjdjb8f',outline:'ButtonStyles_outline__1yjdjb813 ButtonStyles_button--outline-hover__1yjdjb8g','outline-toggle-red':'ButtonStyles_outline-toggle-red__1yjdjb814 ButtonStyles_button--outline-toggle-red-hover__1yjdjb8h','outline-toggle-yellow':'ButtonStyles_outline-toggle-yellow__1yjdjb815 ButtonStyles_button--outline-toggle-yelow-hover__1yjdjb8i','outline-indigo':'ButtonStyles_outline-indigo__1yjdjb816 ButtonStyles_button--outline-indigo-hover__1yjdjb8j','outline-inverted':'ButtonStyles_outline-inverted__1yjdjb817 ButtonStyles_button--outline-inverted-hover__1yjdjb8k',transparent:'ButtonStyles_transparent__1yjdjb818 ButtonStyles_button--transparent-hover__1yjdjb8l','transparent-toggle-red':'ButtonStyles_transparent-toggle-red__1yjdjb819 ButtonStyles_button--transparent-toggle-red-hover__1yjdjb8m','transparent-toggle-yellow':'ButtonStyles_transparent-toggle-yellow__1yjdjb81a ButtonStyles_transparent-toggle-yellow-hover__1yjdjb8n','transparent-light':'ButtonStyles_transparent-light__1yjdjb81b ButtonStyles_button--transparent-light-hover__1yjdjb8o','transparent-light-toggle-red':'ButtonStyles_transparent-light-toggle-red__1yjdjb81c ButtonStyles_button--transparent-light-toggle-red-hover__1yjdjb8p','transparent-light-toggle-yellow':'ButtonStyles_transparent-light-toggle-yellow__1yjdjb81d ButtonStyles_button--transparent-light-toggle-yellow-hover__1yjdjb8q','transparent-inverted':'ButtonStyles_transparent-inverted__1yjdjb81e ButtonStyles_button--transparent-inverted-hover__1yjdjb8r','transparent-red':'ButtonStyles_transparent-red__1yjdjb81f ButtonStyles_button--transparent-toggle-red-hover__1yjdjb8s','transparent-red-toggle-red':'ButtonStyles_button--transparent-red-toggle-red_-hover__1yjdjb8t',facebook:'ButtonStyles_facebook__1yjdjb81h',google:'ButtonStyles_google__1yjdjb81i ButtonStyles_button--google-hover__1yjdjb8u',apple:'ButtonStyles_apple__1yjdjb81j ButtonStyles_button--apple-hover__1yjdjb8v'};

var Button_vanillaMapping = {
  'sg-button': buttonStyle,
  'sg-button__text': buttonTextStyle,
  'sg-button__icon': iconStyle,
  'sg-button__icon--s': iconVariants.s,
  'sg-button__icon--l': iconVariants.l,
  'sg-button__spinner': spinnerStyle,
  'sg-button--s': sizeVariants$1.s,
  'sg-button--m': sizeVariants$1.m,
  'sg-button--l': sizeVariants$1.l,
  'sg-button--reversed-order': reversedOrderStyle,
  'sg-button--disabled': disabledStyle,
  'sg-button--full-width': fullWidthStyle,
  'sg-button--loading': loadingStyle,
  'sg-button--solid': typeVariants.solid,
  'sg-button--solid-inverted': typeVariants['solid-inverted'],
  'sg-button--solid-indigo': typeVariants['solid-indigo'],
  'sg-button--solid-indigo-inverted': typeVariants['solid-indigo-inverted'],
  'sg-button--solid-light': typeVariants['solid-light'],
  'sg-button--solid-light-toggle-red': typeVariants['sg-button--solid-light-toggle-red'],
  'sg-button--solid-light-toggle-yellow': typeVariants['sg-button--solid-light-toggle-yellow'],
  'sg-button--outline': typeVariants['outline'],
  'sg-button--outline-toggle-red': typeVariants['outline-toggle-red'],
  'sg-button--outline-toggle-yellow': typeVariants['outline-toggle-yellow'],
  'sg-button--outline-indigo': typeVariants['outline-indigo'],
  'sg-button--outline-inverted': typeVariants['outline-inverted'],
  'sg-button--transparent': typeVariants['transparent'],
  'sg-button--transparent-toggle-red': typeVariants['transparent-toggle-red'],
  'sg-button--transparent-toggle-yellow': typeVariants['transparent-toggle-yellow'],
  'sg-button--transparent-light': typeVariants['transparent-light'],
  'sg-button--transparent-light-toggle-red': typeVariants['transparent-light-toggle-red'],
  'sg-button--transparent-light-toggle-yellow': typeVariants['transparent-light-toggle-yellow'],
  'sg-button--transparent-inverted': typeVariants['transparent-inverted'],
  'sg-button--transparent-red': typeVariants['transparent-red'],
  'sg-button--transparent-red-toggle-red': typeVariants['transparent-red-toggle-red']
};

var alignVariants = {'to-left':'TextStyles_to-left__171lrar10','to-right':'TextStyles_to-right__171lrar11','to-center':'TextStyles_to-center__171lrar12',justify:'TextStyles_justify__171lrar13','md:to-left':'TextStyles_md:to-left__171lrar14','lg:to-left':'TextStyles_lg:to-left__171lrar15','xl:to-left':'TextStyles_xl:to-left__171lrar16','md:to-right':'TextStyles_md:to-right__171lrar17','lg:to-right':'TextStyles_lg:to-right__171lrar18','xl:to-right':'TextStyles_xl:to-right__171lrar19','md:to-center':'TextStyles_md:to-center__171lrar1a','lg:to-center':'TextStyles_lg:to-center__171lrar1b','xl:to-center':'TextStyles_xl:to-center__171lrar1c','md:justify':'TextStyles_md:justify__171lrar1d','lg:justify':'TextStyles_lg:justify__171lrar1e','xl:justify':'TextStyles_xl:justify__171lrar1f'};
var colorVariants = {'text-black':'TextStyles_text-black__171lrar8','text-white':'TextStyles_text-white__171lrar9','text-blue-60':'TextStyles_text-blue-60__171lrara','text-blue-40':'TextStyles_text-blue-40__171lrarb','text-green-60':'TextStyles_text-green-60__171lrarc','text-green-40':'TextStyles_text-green-40__171lrard','text-indigo-60':'TextStyles_text-indigo-60__171lrare','text-indigo-40':'TextStyles_text-indigo-40__171lrarf','text-red-60':'TextStyles_text-red-60__171lrarg','text-red-40':'TextStyles_text-red-40__171lrarh','text-yellow-60':'TextStyles_text-yellow-60__171lrari','text-yellow-40':'TextStyles_text-yellow-40__171lrarj','text-gray-70':'TextStyles_text-gray-70__171lrark','text-gray-60':'TextStyles_text-gray-60__171lrarl','text-gray-50':'TextStyles_text-gray-50__171lrarm','text-gray-40':'TextStyles_text-gray-40__171lrarn'};
var containerStyle = 'TextStyles__171lrar1';
var inheritedStyle = 'TextStyles__171lrar7';
var linkVariants = {main:'TextStyles_main__171lrar2',label:'TextStyles_label__171lrar3',disabled:'TextStyles_disabled__171lrar4',unstyled:'TextStyles_unstyled__171lrar5',underlined:'TextStyles_underlined__171lrar6'};
var sizeVariants = {xxxlarge:'TextStyles_xxxlarge__171lrar28',xxlarge:'TextStyles_xxlarge__171lrar29',xlarge:'TextStyles_xlarge__171lrar2a',large:'TextStyles_large__171lrar2b',medium:'TextStyles_medium__171lrar2c',small:'TextStyles_small__171lrar2d',xsmall:'TextStyles_xsmall__171lrar2e',xxsmall:'TextStyles_xxsmall__171lrar2f','md:xxxlarge':'TextStyles_md:xxxlarge__171lrar2g','lg:xxxlarge':'TextStyles_lg:xxxlarge__171lrar2h','xl:xxxlarge':'TextStyles_xl:xxxlarge__171lrar2i','md:xxlarge':'TextStyles_md:xxlarge__171lrar2j','lg:xxlarge':'TextStyles_lg:xxlarge__171lrar2k','xl:xxlarge':'TextStyles_xl:xxlarge__171lrar2l','md:xlarge':'TextStyles_md:xlarge__171lrar2m','lg:xlarge':'TextStyles_lg:xlarge__171lrar2n','xl:xlarge':'TextStyles_xl:xlarge__171lrar2o','md:large':'TextStyles_md:large__171lrar2p','lg:large':'TextStyles_lg:large__171lrar2q','xl:large':'TextStyles_xl:large__171lrar2r','md:medium':'TextStyles_md:medium__171lrar2s','lg:medium':'TextStyles_lg:medium__171lrar2t','xl:medium':'TextStyles_xl:medium__171lrar2u','md:small':'TextStyles_md:small__171lrar2v','lg:small':'TextStyles_lg:small__171lrar2w','xl:small':'TextStyles_xl:small__171lrar2x','md:xsmall':'TextStyles_md:xsmall__171lrar2y','lg:xsmall':'TextStyles_lg:xsmall__171lrar2z','xl:xsmall':'TextStyles_xl:xsmall__171lrar30','md:xxsmall':'TextStyles_md:xxsmall__171lrar31','lg:xxsmall':'TextStyles_lg:xxsmall__171lrar32','xl:xxsmall':'TextStyles_xl:xxsmall__171lrar33'};
var textStyle = 'TextStyles__171lrar0';
var transformVariants = {uppercase:'TextStyles_uppercase__171lraro',lowercase:'TextStyles_lowercase__171lrarp',capitalize:'TextStyles_capitalize__171lrarq','md:uppercase':'TextStyles_md:uppercase__171lrarr','lg:uppercase':'TextStyles_lg:uppercase__171lrars','xl:uppercase':'TextStyles_xl:uppercase__171lrart','md:lowercase':'TextStyles_md:lowercase__171lraru','lg:lowercase':'TextStyles_lg:lowercase__171lrarv','xl:lowercase':'TextStyles_xl:lowercase__171lrarw','md:capitalize':'TextStyles_md:capitalize__171lrarx','lg:capitalize':'TextStyles_lg:capitalize__171lrary','xl:capitalize':'TextStyles_xl:capitalize__171lrarz'};
var weightVariants = {regular:'TextStyles_regular__171lrar34',bold:'TextStyles_bold__171lrar35',black:'TextStyles_black__171lrar36','md:regular':'TextStyles_md:regular__171lrar37','lg:regular':'TextStyles_lg:regular__171lrar38','xl:regular':'TextStyles_xl:regular__171lrar39','md:bold':'TextStyles_md:bold__171lrar3a','lg:bold':'TextStyles_lg:bold__171lrar3b','xl:bold':'TextStyles_xl:bold__171lrar3c','md:black':'TextStyles_md:black__171lrar3d','lg:black':'TextStyles_lg:black__171lrar3e','xl:black':'TextStyles_xl:black__171lrar3f'};
var whiteSpaceVariants = {'pre-wrap':'TextStyles_pre-wrap__171lrar1w','pre-line':'TextStyles_pre-line__171lrar1x',normal:'TextStyles_normal__171lrar1y','md:pre-wrap':'TextStyles_md:pre-wrap__171lrar1z','lg:pre-wrap':'TextStyles_lg:pre-wrap__171lrar20','xl:pre-wrap':'TextStyles_xl:pre-wrap__171lrar21','md:pre-line':'TextStyles_md:pre-line__171lrar22','lg:pre-line':'TextStyles_lg:pre-line__171lrar23','xl:pre-line':'TextStyles_xl:pre-line__171lrar24','md:normal':'TextStyles_md:normal__171lrar25','lg:normal':'TextStyles_lg:normal__171lrar26','xl:normal':'TextStyles_xl:normal__171lrar27'};
var widthVariants = {full:'TextStyles_full__171lrar1g',auto:'TextStyles_auto__171lrar1h','md:full':'TextStyles_md:full__171lrar1i','lg:full':'TextStyles_lg:full__171lrar1j','xl:full':'TextStyles_xl:full__171lrar1k','md:auto':'TextStyles_md:auto__171lrar1l','lg:auto':'TextStyles_lg:auto__171lrar1m','xl:auto':'TextStyles_xl:auto__171lrar1n'};
var wordBreakVariants = {'break-words':'TextStyles_break-words__171lrar1o','word-break-normal':'TextStyles_word-break-normal__171lrar1p','md:break-words':'TextStyles_md:break-words__171lrar1q','lg:break-words':'TextStyles_lg:break-words__171lrar1r','xl:break-words':'TextStyles_xl:break-words__171lrar1s','md:word-break-normal':'TextStyles_md:word-break-normal__171lrar1t','lg:word-break-normal':'TextStyles_lg:word-break-normal__171lrar1u','xl:word-break-normal':'TextStyles_xl:word-break-normal__171lrar1v'};
var wrapVariants = {wrap:'TextStyles_wrap__171lrar3g',noWrap:'TextStyles_noWrap__171lrar3h','md:wrap':'TextStyles_md:wrap__171lrar3i','lg:wrap':'TextStyles_lg:wrap__171lrar3j','xl:wrap':'TextStyles_xl:wrap__171lrar3k','md:noWrap':'TextStyles_md:noWrap__171lrar3l','lg:noWrap':'TextStyles_lg:noWrap__171lrar3m','xl:noWrap':'TextStyles_xl:noWrap__171lrar3n'};

var Text_vanillaMapping = _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({
  'sg-text': textStyle,
  'sg-text--link': linkVariants.main,
  'sg-text-inherited': inheritedStyle,
  'sg-text--container': containerStyle,
  'sg-text--link-underlined': linkVariants.underlined,
  'sg-text--text-white': colorVariants['text-white'],
  'sg-text--text-black': colorVariants['text-black'],
  'sg-text--text-gray-70': colorVariants['text-gray-70'],
  'sg-text--text-gray-60': colorVariants['text-gray-60'],
  'sg-text--text-gray-50': colorVariants['text-gray-50'],
  'sg-text--text-gray-40': colorVariants['text-gray-40'],
  'sg-text--text-blue-60': colorVariants['text-blue-60'],
  'sg-text--text-blue-40': colorVariants['text-blue-40'],
  'sg-text--text-green-60': colorVariants['text-green-60'],
  'sg-text--text-green-40': colorVariants['text-green-40'],
  'sg-text--text-indigo-60': colorVariants['text-indigo-60'],
  'sg-text--text-indigo-40': colorVariants['text-indigo-40'],
  'sg-text--text-red-60': colorVariants['text-red-60'],
  'sg-text--text-red-40': colorVariants['text-red-40'],
  'sg-text--text-yellow-60': colorVariants['text-yellow-60'],
  'sg-text--text-yellow-40': colorVariants['text-yellow-40']
}, ['', 'md:', 'lg:', 'xl:'].reduce(function (acc, next) {
  acc["".concat(next, "sg-text--xxsmall")] = sizeVariants["".concat(next, "xxsmall")];
  return acc;
}, {})), ['', 'md:', 'lg:', 'xl:'].reduce(function (acc, next) {
  acc["".concat(next, "sg-text--xsmall")] = sizeVariants["".concat(next, "xsmall")];
  return acc;
}, {})), ['', 'md:', 'lg:', 'xl:'].reduce(function (acc, next) {
  acc["".concat(next, "sg-text--small")] = sizeVariants["".concat(next, "small")];
  return acc;
}, {})), ['', 'md:', 'lg:', 'xl:'].reduce(function (acc, next) {
  acc["".concat(next, "sg-text--medium")] = sizeVariants["".concat(next, "medium")];
  return acc;
}, {})), ['', 'md:', 'lg:', 'xl:'].reduce(function (acc, next) {
  acc["".concat(next, "sg-text--large")] = sizeVariants["".concat(next, "large")];
  return acc;
}, {})), ['', 'md:', 'lg:', 'xl:'].reduce(function (acc, next) {
  acc["".concat(next, "sg-text--xlarge")] = sizeVariants["".concat(next, "xlarge")];
  return acc;
}, {})), ['', 'md:', 'lg:', 'xl:'].reduce(function (acc, next) {
  acc["".concat(next, "sg-text--xxlarge")] = sizeVariants["".concat(next, "xxlarge")];
  return acc;
}, {})), ['', 'md:', 'lg:', 'xl:'].reduce(function (acc, next) {
  acc["".concat(next, "sg-text--xxxlarge")] = sizeVariants["".concat(next, "xxxlarge")];
  return acc;
}, {})), ['', 'md:', 'lg:', 'xl:'].reduce(function (acc, next) {
  acc["".concat(next, "sg-text--uppercase")] = transformVariants["".concat(next, "uppercase")];
  return acc;
}, {})), ['', 'md:', 'lg:', 'xl:'].reduce(function (acc, next) {
  acc["".concat(next, "sg-text--lowercase")] = transformVariants["".concat(next, "lowercase")];
  return acc;
}, {})), ['', 'md:', 'lg:', 'xl:'].reduce(function (acc, next) {
  acc["".concat(next, "sg-text--capitalize")] = transformVariants["".concat(next, "capitalize")];
  return acc;
}, {})), ['', 'md:', 'lg:', 'xl:'].reduce(function (acc, next) {
  acc["".concat(next, "sg-text--bold")] = weightVariants["".concat(next, "bold")];
  return acc;
}, {})), ['', 'md:', 'lg:', 'xl:'].reduce(function (acc, next) {
  acc["".concat(next, "sg-text--regular")] = weightVariants["".concat(next, "regular")];
  return acc;
}, {})), ['', 'md:', 'lg:', 'xl:'].reduce(function (acc, next) {
  acc["".concat(next, "sg-text--to-left")] = alignVariants["".concat(next, "to-left")];
  return acc;
}, {})), ['', 'md:', 'lg:', 'xl:'].reduce(function (acc, next) {
  acc["".concat(next, "sg-text--to-right")] = alignVariants["".concat(next, "to-right")];
  return acc;
}, {})), ['', 'md:', 'lg:', 'xl:'].reduce(function (acc, next) {
  acc["".concat(next, "sg-text--to-center")] = alignVariants["".concat(next, "to-center")];
  return acc;
}, {})), ['', 'md:', 'lg:', 'xl:'].reduce(function (acc, next) {
  acc["".concat(next, "sg-text--justify")] = alignVariants["".concat(next, "justify")];
  return acc;
}, {})), ['', 'md:', 'lg:', 'xl:'].reduce(function (acc, next) {
  acc["".concat(next, "sg-text--no-wrap")] = wrapVariants["".concat(next, "noWrap")];
  return acc;
}, {})), ['', 'md:', 'lg:', 'xl:'].reduce(function (acc, next) {
  acc["".concat(next, "sg-text--wrap")] = wrapVariants["".concat(next, "wrap")];
  return acc;
}, {})), ['', 'md:', 'lg:', 'xl:'].reduce(function (acc, next) {
  acc["".concat(next, "sg-text--full")] = widthVariants["".concat(next, "full")];
  return acc;
}, {})), ['', 'md:', 'lg:', 'xl:'].reduce(function (acc, next) {
  acc["".concat(next, "sg-text--auto")] = widthVariants["".concat(next, "auto")];
  return acc;
}, {})), ['', 'md:', 'lg:', 'xl:'].reduce(function (acc, next) {
  acc["".concat(next, "sg-text--break-words")] = wordBreakVariants["".concat(next, "break-words")];
  return acc;
}, {})), ['', 'md:', 'lg:', 'xl:'].reduce(function (acc, next) {
  acc["".concat(next, "sg-text--word-break-normal")] = wordBreakVariants["".concat(next, "word-break-normal")];
  return acc;
}, {})), ['', 'md:', 'lg:', 'xl:'].reduce(function (acc, next) {
  acc["".concat(next, "sg-text--pre-wrap")] = whiteSpaceVariants["".concat(next, "pre-wrap")];
  return acc;
}, {})), ['', 'md:', 'lg:', 'xl:'].reduce(function (acc, next) {
  acc["".concat(next, "sg-text--pre-line")] = whiteSpaceVariants["".concat(next, "pre-line")];
  return acc;
}, {})), ['', 'md:', 'lg:', 'xl:'].reduce(function (acc, next) {
  acc["".concat(next, "sg-text--white-space-normal")] = whiteSpaceVariants["".concat(next, "normal")];
  return acc;
}, {}));

var vanillaMapping = _objectSpread2(_objectSpread2({}, Button_vanillaMapping), Text_vanillaMapping);

module.exports = vanillaMapping;
