import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import cx from 'classnames';
export var BUTTON_SIZE = Object.freeze({
  LARGE: 'large',
  MEDIUM: 'medium',
  SMALL: 'small'
});
export var BUTTON_TYPE = Object.freeze({
  PRIMARY: 'primary',
  PRIMARY_INVERTED: 'primary-inverted',
  PRIMARY_BLUE: 'primary-blue',
  PRIMARY_MINT: 'primary-mint',
  SECONDARY: 'secondary',
  LINK_BUTTON: 'link-button',
  LINK_BUTTON_INVERTED: 'link-button-inverted',
  LINK_BUTTON_PEACH: 'link-button-peach',
  LINK_BUTTON_MUSTRAD: 'link-button-mustard',
  DETRUCTIVE: 'destructive',
  WARNING: 'warning',
  FACEBOOK: 'facebook'
});

var Button = function Button(_ref) {
  var _cx;

  var size = _ref.size,
      type = _ref.type,
      icon = _ref.icon,
      href = _ref.href,
      fullWidth = _ref.fullWidth,
      disabled = _ref.disabled,
      children = _ref.children,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ["size", "type", "icon", "href", "fullWidth", "disabled", "children", "className"]);

  var btnClass = cx('sg-button', (_cx = {}, _defineProperty(_cx, "sg-button--".concat(String(size)), size), _defineProperty(_cx, "sg-button--".concat(String(type)), type), _defineProperty(_cx, 'sg-button--disabled', disabled), _defineProperty(_cx, 'sg-button--full-width', fullWidth), _cx), className);
  var iconClass = cx('sg-button__icon', _defineProperty({}, "sg-button__icon--".concat(size || ''), size), className);
  var ico;

  if (icon !== undefined && icon !== null) {
    ico = React.createElement("span", {
      className: iconClass
    }, icon);
  }

  var TypeToRender = href !== undefined ? 'a' : 'button';
  return React.createElement(TypeToRender, _extends({}, props, {
    className: btnClass,
    href: href,
    disabled: disabled,
    role: href !== undefined ? 'button' : undefined
  }), ico, React.createElement("span", {
    className: "sg-button__text"
  }, children));
};

export default Button;