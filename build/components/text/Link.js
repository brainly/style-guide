import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import * as React from 'react';
import classNames from 'classnames';
import Text from './Text';
import { TEXT_TYPE, LINK_COLOR, TEXT_SIZE, TEXT_WEIGHT, TEXT_TRANSFORM, TEXT_ALIGN } from './textConsts';
export { LINK_COLOR } from './textConsts';
export var LINK_TYPE = TEXT_TYPE;
export var LINK_SIZE = TEXT_SIZE;
export var LINK_WEIGHT = TEXT_WEIGHT;
export var LINK_TRANSFORM = TEXT_TRANSFORM;
export var LINK_ALIGN = TEXT_ALIGN;

var Link = function Link(props) {
  var _classNames;

  var children = props.children,
      href = props.href,
      _props$color = props.color,
      color = _props$color === void 0 ? LINK_COLOR.BLUE_DARK : _props$color,
      _props$underlined = props.underlined,
      underlined = _props$underlined === void 0 ? false : _props$underlined,
      _props$unstyled = props.unstyled,
      unstyled = _props$unstyled === void 0 ? false : _props$unstyled,
      _props$emphasised = props.emphasised,
      emphasised = _props$emphasised === void 0 ? true : _props$emphasised,
      _props$disabled = props.disabled,
      disabled = _props$disabled === void 0 ? false : _props$disabled,
      weight = props.weight,
      className = props.className,
      additionalProps = _objectWithoutProperties(props, ["children", "href", "color", "underlined", "unstyled", "emphasised", "disabled", "weight", "className"]);

  var linkClass = classNames((_classNames = {
    'sg-text--link': !underlined && !unstyled,
    'sg-text--link-underlined': underlined && !unstyled,
    'sg-text--link-unstyled': !underlined && unstyled,
    'sg-text--bold': emphasised,
    'sg-text--link-disabled': disabled
  }, _defineProperty(_classNames, "sg-text--".concat(String(color)), color && !unstyled), _defineProperty(_classNames, "sg-text--".concat(String(weight)), weight), _classNames), className);

  if (href === undefined || href === '' || href === null) {
    return React.createElement(Text, _extends({
      type: "span"
    }, additionalProps, {
      className: linkClass
    }), children);
  }

  return React.createElement(Text, _extends({
    type: "a"
  }, additionalProps, {
    className: linkClass,
    href: href
  }), children);
};

export default Link;