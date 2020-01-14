import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import classNames from 'classnames';
export var DIRECTION = {
  TO_RIGHT: 'to-right',
  CENTERED: 'centered',
  SPACE_BETWEEN: 'space-between',
  SPACE_AROUND: 'space-around',
  SPACE_EVENLY: 'space-evenly'
};
export var ALIGNMENT = {
  BASELINE: 'align-baseline',
  STRETCH: 'stretch'
};

var ActionList = function ActionList(_ref) {
  var _classNames;

  var children = _ref.children,
      toTop = _ref.toTop,
      direction = _ref.direction,
      align = _ref.align,
      noWrap = _ref.noWrap,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ["children", "toTop", "direction", "align", "noWrap", "className"]);

  var actionListClass = classNames('sg-actions-list', (_classNames = {}, _defineProperty(_classNames, "sg-actions-list--".concat(String(direction)), direction), _defineProperty(_classNames, "sg-actions-list--".concat(String(align)), align), _defineProperty(_classNames, 'sg-actions-list--to-top', toTop), _defineProperty(_classNames, 'sg-actions-list--no-wrap', noWrap), _classNames), className);
  return React.createElement("div", _extends({}, props, {
    className: actionListClass
  }), children);
};

export default ActionList;