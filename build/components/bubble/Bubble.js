import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import classNames from 'classnames';
export var ALIGNMENT = {
  START: 'start',
  CENTER: 'center',
  END: 'end'
};
export var DIRECTION = {
  LEFT: 'left',
  RIGHT: 'right',
  TOP: 'top',
  BOTTOM: 'bottom'
};
var HORIZONTAL_DIRECTIONS = [DIRECTION.LEFT, DIRECTION.RIGHT];
export var BUBBLE_COLOR = {
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
  PEACH: 'peach'
};

var Bubble = function Bubble(_ref) {
  var _classNames;

  var _ref$alignment = _ref.alignment,
      alignment = _ref$alignment === void 0 ? ALIGNMENT.CENTER : _ref$alignment,
      direction = _ref.direction,
      color = _ref.color,
      full = _ref.full,
      noShadow = _ref.noShadow,
      children = _ref.children,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ["alignment", "direction", "color", "full", "noShadow", "children", "className"]);

  var alignmentClass;

  if (HORIZONTAL_DIRECTIONS.includes(direction)) {
    alignmentClass = "sg-bubble--column-".concat(alignment);
  } else {
    alignmentClass = "sg-bubble--row-".concat(alignment);
  }

  var bubbleClass = classNames('sg-bubble', (_classNames = {
    'sg-bubble--full': full,
    'sg-bubble--no-shadow': noShadow
  }, _defineProperty(_classNames, "sg-bubble--".concat(String(color)), color), _defineProperty(_classNames, "sg-bubble--".concat(direction), direction), _defineProperty(_classNames, alignmentClass, alignment !== ALIGNMENT.CENTER), _classNames), className);
  return React.createElement("div", _extends({}, props, {
    className: bubbleClass
  }), children);
};

export default Bubble;