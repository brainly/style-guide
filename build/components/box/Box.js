import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import classNames from 'classnames';
import Icon, { ICON_COLOR } from '../icons/Icon';
export var COLOR = {
  BLUE: 'blue',
  LAVENDER: 'lavender',
  DARK: 'dark',
  MINT: 'mint',
  MINT_SECONDARY: 'mint-secondary',
  MINT_SECONDARY_LIGHT: 'mint-secondary-light',
  NAVYBLUE_SECONDARY: 'navyblue-secondary',
  BLUE_SECONDARY: 'blue-secondary',
  BLUE_SECONDARY_LIGHT: 'blue-secondary-light',
  GRAY_SECONDARY_LIGHT: 'gray-secondary-lightest',
  GRAY_SECONDARY_ULTRA_LIGHT: 'gray-secondary-ultra-light',
  MUSTARD_PRIMARY: 'mustard-primary',
  PEACH: 'peach',
  PEACH_SECONDARY: 'peach-secondary',
  PEACH_SECONDARY_LIGHT: 'peach-secondary-light'
};
export var PADDING = {
  NO_PADDING: 'no-padding',
  SMALL: 'small-padding',
  XSMALL: 'xsmall-padding',
  XXSMALL: 'xxsmall-padding',
  LARGE: 'large-padding'
};
export var CLOSE_ICON_COLOR = {
  LIGHT: 'LIGHT',
  DARK: 'DARK'
};

/**
 * Container, used for grouping small blocks of information. Highlight any prop to
 * get detailed prop info.
 *
 * @see react docs: https://styleguide.brainly.com/latest/docs/interactive.html#boxes
 * @see twig-compatible docs: https://styleguide.brainly.com/latest/docs/containers.html#box
 *
 * @example <Box>
 *             some child
 *          </Box>
 * @returns {JSX.Element} Box component
 */
var Box = function Box(_ref) {
  var _classNames;

  var color = _ref.color,
      padding = _ref.padding,
      full = _ref.full,
      children = _ref.children,
      _ref$border = _ref.border,
      border = _ref$border === void 0 ? !color : _ref$border,
      imgSrc = _ref.imgSrc,
      noMinHeight = _ref.noMinHeight,
      shadow = _ref.shadow,
      noBorderRadius = _ref.noBorderRadius,
      onClose = _ref.onClose,
      closeIconColor = _ref.closeIconColor,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ["color", "padding", "full", "children", "border", "imgSrc", "noMinHeight", "shadow", "noBorderRadius", "onClose", "closeIconColor", "className"]);

  var boxClass = classNames('sg-box', (_classNames = {}, _defineProperty(_classNames, "sg-box--".concat(String(color)), color), _defineProperty(_classNames, 'sg-box--no-border', !border), _defineProperty(_classNames, 'sg-box--full', full), _defineProperty(_classNames, "sg-box--".concat(String(padding)), padding), _defineProperty(_classNames, 'sg-box--image-wrapper', imgSrc), _defineProperty(_classNames, 'sg-box--no-min-height', noMinHeight), _defineProperty(_classNames, 'sg-box--with-shadow', shadow), _defineProperty(_classNames, 'sg-box--no-border-radius', noBorderRadius), _classNames), className);
  var content;

  if (imgSrc !== undefined && imgSrc !== null) {
    content = React.createElement("img", {
      className: "sg-box__image",
      src: imgSrc
    });
  } else {
    content = React.createElement("div", {
      className: "sg-box__hole"
    }, children);
  }

  return React.createElement("div", _extends({}, props, {
    className: boxClass
  }), onClose ? React.createElement("div", {
    className: "sg-box__close",
    onClick: onClose
  }, React.createElement(Icon, {
    type: "close",
    color: closeIconColor ? ICON_COLOR[closeIconColor] : ICON_COLOR.DARK,
    size: 16
  })) : null, content);
};

export default Box;