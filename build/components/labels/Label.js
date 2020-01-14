import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import classNames from 'classnames';
import Text from '../text/Text';
import * as IconModule from '../icons/Icon';
var Icon = IconModule.default,
    ICON_TYPE = IconModule.TYPE;
export var LABEL_TYPE = {
  DEFAULT: 'default',
  STRONG: 'strong'
};
export var COLORS_STRONG_MAP = {
  blue: 'blue-primary',
  mint: 'mint-primary',
  lavender: 'lavender-primary',
  peach: 'peach-primary',
  mustard: 'mustard-primary',
  gray: 'gray-primary',
  mono: 'black'
};
export var COLORS_DEFAULT_MAP = {
  blue: 'blue-secondary-light',
  mint: 'mint-secondary-light',
  lavender: 'lavender-secondary-light',
  peach: 'peach-secondary-light',
  mustard: 'mustard-secondary-light',
  gray: 'gray-secondary-light',
  mono: 'white'
};
export var LABEL_COLORS_SET = {
  BLUE: 'blue',
  MINT: 'mint',
  LAVENDER: 'lavender',
  PEACH: 'peach',
  MUSTARD: 'mustard',
  GRAY: 'gray',
  MONO: 'mono'
};

var Label = function Label(_ref) {
  var _classNames;

  var children = _ref.children,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'default' : _ref$type,
      iconType = _ref.iconType,
      onClose = _ref.onClose,
      color = _ref.color,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ["children", "type", "iconType", "onClose", "color", "className"]);

  var filteredColor = type === 'default' ? COLORS_DEFAULT_MAP[color] : COLORS_STRONG_MAP[color];
  var labelClass = classNames('sg-label', (_classNames = {}, _defineProperty(_classNames, "sg-label--".concat(String(filteredColor)), color), _defineProperty(_classNames, "sg-label--".concat(type), type), _defineProperty(_classNames, 'sg-label--closable', onClose), _classNames), className);
  return React.createElement("div", _extends({}, props, {
    className: labelClass
  }), iconType && React.createElement("div", {
    className: "sg-label__icon"
  }, React.createElement(Icon, {
    type: iconType,
    color: type === 'default' ? 'dark' : 'light',
    size: 16
  })), React.createElement("span", {
    className: "sg-label__text"
  }, React.createElement(Text, {
    size: "small",
    weight: "bold",
    color: type === 'default' ? 'default' : 'white'
  }, children)), onClose ? React.createElement("button", {
    className: "sg-label__close-button",
    onClick: onClose
  }, React.createElement(Icon, {
    type: "close",
    color: type === 'default' ? 'dark' : 'light',
    size: 16
  })) : null);
};

export default Label;
export { ICON_TYPE };