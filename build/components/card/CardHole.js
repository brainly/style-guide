import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import classnames from 'classnames';
export var CARD_HOLE_COLOR = {
  BLUE: 'blue',
  BLUE_SECONDARY: 'blue-secondary',
  BLUE_SECONDARY_LIGHT: 'blue-secondary-light',
  LAVENDER: 'lavender',
  LAVENDER_SECONDARY: 'lavender-secondary',
  LAVENDER_SECONDARY_LIGHT: 'lavender-secondary-light',
  MINT: 'mint',
  MINT_SECONDARY: 'mint-secondary',
  MINT_SECONDARY_LIGHT: 'mint-secondary-light',
  MUSTARD: 'mustard',
  MUSTARD_SECONDARY: 'mustard-secondary',
  MUSTARD_SECONDARY_LIGHT: 'mustard-secondary-light',
  GRAY: 'gray',
  GRAY_SECONDARY: 'gray-secondary',
  GRAY_SECONDARY_LIGHT: 'gray-secondary-light',
  GRAY_SECONDARY_LIGHTEST: 'gray-secondary-lightest',
  GRAY_SECONDARY_ULTRA_LIGHT: 'gray-secondary-ultra-light'
};

var CardHole = function CardHole(_ref) {
  var color = _ref.color,
      children = _ref.children,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ["color", "children", "className"]);

  var cardHoleClass = classnames('sg-card__hole', _defineProperty({}, "sg-card__hole--".concat(String(color)), color), className);
  return React.createElement("div", _extends({}, props, {
    className: cardHoleClass
  }), children);
};

export default CardHole;