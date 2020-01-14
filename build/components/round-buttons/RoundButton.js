import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import cx from 'classnames';
import Icon, { TYPE } from '../icons/Icon';
import { ROUND_BUTTON_SIZE, ROUND_BUTTON_COLOR } from './roundButtonsConsts';
export { ROUND_BUTTON_SIZE, TYPE as ROUND_BUTTON_ICON_TYPE, ROUND_BUTTON_COLOR };

var RoundButton = function RoundButton(_ref) {
  var _cx;

  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'medium' : _ref$size,
      _ref$iconType = _ref.iconType,
      iconType = _ref$iconType === void 0 ? 'heart' : _ref$iconType,
      color = _ref.color,
      filled = _ref.filled,
      className = _ref.className,
      ariaLabel = _ref.ariaLabel,
      title = _ref.title,
      props = _objectWithoutProperties(_ref, ["size", "iconType", "color", "filled", "className", "ariaLabel", "title"]);

  var roundButtonClass = cx('sg-round-button', (_cx = {}, _defineProperty(_cx, "sg-round-button--".concat(String(color)), color), _defineProperty(_cx, "sg-round-button--".concat(String(size)), size), _defineProperty(_cx, 'sg-round-button--filled', filled), _cx), className);
  var buttonContent = React.createElement(Icon, {
    size: size === 'small' ? '16' : size === 'large' ? '32' : '24',
    type: iconType // to export it in an easy way to sketch
    ,
    color: filled !== undefined ? 'light' : color === 'black' ? 'dark' : color
  });
  return React.createElement("button", _extends({}, props, {
    "aria-label": ariaLabel,
    className: roundButtonClass
  }), React.createElement("span", {
    className: "sg-round-button__hole"
  }, buttonContent));
};

export default RoundButton;