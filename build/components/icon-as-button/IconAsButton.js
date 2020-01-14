import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _defineProperty from "@babel/runtime/helpers/defineProperty";

var _ICON_SIZE;

import React from 'react';
import classNames from 'classnames';
import * as IconModule from '../icons/Icon';
var ICON_COLOR = IconModule.ICON_COLOR,
    Icon = IconModule.default;
export var SIZE = {
  NORMAL: 'normal',
  SMALL: 'small',
  XSMALL: 'xsmall',
  XXSMALL: 'xxsmall'
};
var ICON_SIZE = (_ICON_SIZE = {}, _defineProperty(_ICON_SIZE, SIZE.NORMAL, 26), _defineProperty(_ICON_SIZE, SIZE.SMALL, 18), _defineProperty(_ICON_SIZE, SIZE.XSMALL, 14), _defineProperty(_ICON_SIZE, SIZE.XXSMALL, 10), _ICON_SIZE);

var IconAsButton = function IconAsButton(_ref) {
  var _classNames;

  var color = _ref.color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? SIZE.NORMAL : _ref$size,
      type = _ref.type,
      children = _ref.children,
      action = _ref.action,
      transparent = _ref.transparent,
      active = _ref.active,
      border = _ref.border,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ["color", "size", "type", "children", "action", "transparent", "active", "border", "className"]);

  var buttonClass = classNames('sg-icon-as-button', (_classNames = {}, _defineProperty(_classNames, "sg-icon-as-button--".concat(String(color)), color), _defineProperty(_classNames, "sg-icon-as-button--".concat(size), size), _defineProperty(_classNames, 'sg-icon-as-button--with-border', border), _defineProperty(_classNames, 'sg-icon-as-button--action', action), _defineProperty(_classNames, 'sg-icon-as-button--action-active', action === true && active === true), _defineProperty(_classNames, 'sg-icon-as-button--transparent', transparent), _defineProperty(_classNames, 'sg-icon-as-button--transparent-active', transparent === true && active === true), _classNames), className);
  var content;

  if (type) {
    content = React.createElement(Icon, {
      type: type,
      color: ICON_COLOR.ADAPTIVE,
      size: ICON_SIZE[size]
    });
  } else {
    content = children;
  }

  var RenderType = 'button';

  if (props.href !== undefined && props.href !== null && props.href !== '') {
    RenderType = 'a';
  }

  return React.createElement(RenderType, _extends({}, props, {
    role: "button",
    className: buttonClass
  }), React.createElement("div", {
    className: "sg-icon-as-button__hole"
  }, content || null));
};

export default IconAsButton;
export { TYPE, ICON_COLOR } from '../icons/Icon';