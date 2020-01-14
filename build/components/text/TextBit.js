import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import * as React from 'react';
import classNames from 'classnames';
export var TEXT_BIT_TYPE = Object.freeze({
  H1: 'h1',
  H2: 'h2',
  H3: 'h3',
  H4: 'h4',
  H5: 'h5',
  H6: 'h6',
  DIV: 'div'
});
export var TEXT_BIT_SIZE = Object.freeze({
  SMALL: 'small',
  NORMAL: 'normal',
  LARGE: 'large',
  XLARGE: 'xlarge'
});
export var TEXT_BIT_COLOR = Object.freeze({
  BLUE_PRIMARY: 'blue-primary',
  BLUE_SECONDARY: 'blue-secondary',
  MINT_PRIMARY: 'mint-primary',
  MINT_SECONDARY: 'mint-secondary',
  PEACH_PRIMARY: 'peach-primary',
  PEACH_SECONDARY: 'peach-secondary',
  MUSTARAD_PRIMARY: 'mustard-primary',
  MUSTARAD_SECONDARY: 'mustard-secondary',
  LAVENDER_PRIMARY: 'lavender-primary',
  LAVENDER_SECONDARY: 'lavender-secondary',
  GRAY_SECONDARY: 'gray-secondary',
  GRAY_SECONDARY_LIGHT: 'gray-secondary-light',
  WHITE: 'white',
  BLACK: 'black'
});

var TextBit = function TextBit(_ref) {
  var _classNames;

  var children = _ref.children,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? TEXT_BIT_TYPE.H1 : _ref$type,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? TEXT_BIT_SIZE.NORMAL : _ref$size,
      color = _ref.color,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ["children", "type", "size", "color", "className"]);

  var Type = type;
  var textClass = classNames('sg-text-bit', (_classNames = {}, _defineProperty(_classNames, "sg-text-bit--".concat(size), size && size !== TEXT_BIT_SIZE.NORMAL), _defineProperty(_classNames, "sg-text-bit--".concat(color || ''), color), _classNames), className);
  return React.createElement(Type, _extends({}, props, {
    className: textClass
  }), children);
};

export default TextBit;