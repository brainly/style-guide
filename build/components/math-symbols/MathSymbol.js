import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import classNames from 'classnames';
import * as IconModule from '../icons/Icon';
var ICON_COLOR = IconModule.ICON_COLOR;
export var MATH_SYMBOL_TYPE = {
  SQUERE_ROOT: 'squere-root',
  NTH_ROOT: 'nth-root',
  POWER: 'power',
  SUBSCRIPT: 'subscript',
  LESSEQUAL: 'less-then-or-equal',
  GREATEREQUAL: 'greater-then-or-equal',
  INEQUALITY: 'inequality',
  DIVISION: 'division',
  PI: 'pi',
  ALPHA: 'alpha',
  BETA: 'beta',
  LINE: 'line',
  LIMIT: 'limit',
  MATRIX: 'matrix',
  INTEGRAL: 'integral',
  EQUATION_SYSTEM: 'equation-system'
};
var WIDE = [MATH_SYMBOL_TYPE.LIMIT, MATH_SYMBOL_TYPE.MATRIX, MATH_SYMBOL_TYPE.INTEGRAL, MATH_SYMBOL_TYPE.EQUATION_SYSTEM];
export var SIZE = {
  SMALL: 'small',
  MEDIUM: 'medium',
  NORMAL: 'normal'
};

var MathSymbol = function MathSymbol(_ref) {
  var _classNames;

  var type = _ref.type,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? SIZE.NORMAL : _ref$size,
      color = _ref.color,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ["type", "size", "color", "className"]);

  var isWide = WIDE.indexOf(type) !== -1;
  var iconClass = classNames('sg-math-symbol-icon', (_classNames = {}, _defineProperty(_classNames, "sg-math-symbol-icon--".concat(size), !isWide && size !== SIZE.NORMAL), _defineProperty(_classNames, "sg-math-symbol-icon--wide-".concat(size), isWide && size !== SIZE.NORMAL), _defineProperty(_classNames, 'sg-math-symbol-icon--wide', isWide && size === SIZE.NORMAL), _defineProperty(_classNames, "sg-math-symbol-icon--".concat(String(color)), color), _classNames), className);
  var iconType = "#sg-math-symbol-icon-".concat(type);
  return React.createElement("svg", _extends({}, props, {
    className: iconClass
  }), React.createElement("use", {
    xlinkHref: iconType
  }));
};

export default MathSymbol;
export { ICON_COLOR };