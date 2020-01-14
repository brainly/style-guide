import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import classNames from 'classnames';
export var CARD_PADDING = {
  SMALL: 'padding-small',
  NORMAL: 'padding-normal',
  LARGE: 'padding-large',
  XLARGE: 'padding-xlarge'
};

var Card = function Card(_ref) {
  var children = _ref.children,
      full = _ref.full,
      vertical = _ref.vertical,
      centered = _ref.centered,
      padding = _ref.padding,
      shadow = _ref.shadow,
      noBorder = _ref.noBorder,
      transparent = _ref.transparent,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ["children", "full", "vertical", "centered", "padding", "shadow", "noBorder", "transparent", "className"]);

  var cardClass = classNames('sg-card', _defineProperty({
    'sg-card--full': full,
    'sg-card--vertical': vertical,
    'sg-card--with-shadow': shadow,
    'sg-card--no-border': noBorder,
    'sg-card--centered': centered,
    'sg-card--transparent': transparent
  }, "sg-card--".concat(String(padding)), padding), className);
  return React.createElement("div", _extends({}, props, {
    className: cardClass
  }), children);
};

export default Card;