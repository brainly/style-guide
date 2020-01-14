import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import classnames from 'classnames';
import * as LogoModule from '../logo/Logo';
var TYPE = LogoModule.TYPE,
    BASE_URL = LogoModule.BASE_URL,
    LOGOS = LogoModule.LOGOS;
var ICONS = {
  brainly: 'brainly-mobile-6879551770',
  eodev: 'eodev-mobile-bfdc46ee89',
  nosdevoirs: 'nosdevoirs-mobile-2caead9ada',
  znanija: 'znanija-mobile-200611d052',
  'brainly-plus': 'brainly-plus-9dd3b24a28'
};

var HomeButton = function HomeButton(_ref) {
  var _ref$type = _ref.type,
      type = _ref$type === void 0 ? TYPE.BRAINLY : _ref$type,
      _ref$href = _ref.href,
      href = _ref$href === void 0 ? '#' : _ref$href,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ["type", "href", "className"]);

  var buttonClass = classnames('sg-home-button', _defineProperty({}, "sg-home-button--".concat(type), type !== TYPE.BRAINLY), className);
  var logoPath = "".concat(BASE_URL).concat(LOGOS[type], ".svg"); // $FlowFixMe - some icons are missing, we will investigate why

  var mobilePath = "".concat(BASE_URL).concat(ICONS[type], ".svg");
  return React.createElement("a", _extends({}, props, {
    href: href,
    className: buttonClass
  }), React.createElement("img", {
    className: "sg-home-button__logo-small",
    src: mobilePath
  }), React.createElement("img", {
    className: "sg-home-button__logo-big",
    src: logoPath
  }));
};

export default HomeButton;
export { TYPE };