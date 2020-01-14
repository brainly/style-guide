import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import classNames from 'classnames';
export var SIZE = {
  NORMAL: 'normal',
  SMALL: 'small',
  LARGE: 'large',
  FULL: 'full'
};

var Separator = function Separator(_ref) {
  var _classNames;

  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? SIZE.NORMAL : _ref$size,
      white = _ref.white,
      grayDark = _ref.grayDark,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ["size", "white", "grayDark", "className"]);

  var separatorClass = classNames('sg-vertical-separator', (_classNames = {}, _defineProperty(_classNames, "sg-vertical-separator--".concat(size), size !== SIZE.NORMAL), _defineProperty(_classNames, 'sg-vertical-separator--white', white), _defineProperty(_classNames, 'sg-vertical-separator--gray-dark', grayDark), _classNames), className);
  return React.createElement("div", _extends({}, props, {
    className: separatorClass
  }));
};

export default Separator;