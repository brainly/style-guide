import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import classNames from 'classnames';
export var TYPE = {
  NORMAL: 'normal',
  SPACED: 'spaced',
  SHORT_SPACED: 'short-spaced'
};

var SeparatorHorizontal = function SeparatorHorizontal(_ref) {
  var _classNames;

  var _ref$type = _ref.type,
      type = _ref$type === void 0 ? TYPE.NORMAL : _ref$type,
      white = _ref.white,
      grayDark = _ref.grayDark,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ["type", "white", "grayDark", "className"]);

  var separatorClass = classNames('sg-horizontal-separator', (_classNames = {}, _defineProperty(_classNames, "sg-horizontal-separator--".concat(type), type !== TYPE.NORMAL), _defineProperty(_classNames, 'sg-horizontal-separator--white', white), _defineProperty(_classNames, 'sg-horizontal-separator--gray-dark', grayDark), _classNames), className);
  return React.createElement("div", _extends({}, props, {
    className: separatorClass
  }));
};

export default SeparatorHorizontal;