import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _defineProperty from "@babel/runtime/helpers/defineProperty";

var _LOGOS;

import React from 'react';
import classnames from 'classnames';
export var BASE_URL = 'https://styleguide.brainly.com/images/logos/';
export var TYPE = {
  BRAINLY: 'brainly',
  BRAINLY_MOBILE: 'brainly-mobile',
  EODEV: 'eodev',
  EODEV_MOBILE: 'eodev-mobile',
  NOSDEVOIRS: 'nosdevoirs',
  NOSDEVOIRS_MOBILE: 'nosdevoirs-mobile',
  ZNANIJA: 'znanija',
  ZNANIJA_MOBILE: 'znanija-mobile',
  ZNANIJA_PLUS: 'znanija-plus',
  ZNANIJA_PLUS_INVERSE: 'znanija-plus-inverse',
  ZNANIJA_PLUS_SMALL: 'znanija-plus-small',
  BRAINLY_PLUS: 'brainly-plus',
  BRAINLY_PLUS_INVERSE: 'brainly-plus-inverse',
  BRAINLY_PLUS_SMALL: 'brainly-plus-small'
};
export var LOGOS = (_LOGOS = {}, _defineProperty(_LOGOS, TYPE.BRAINLY, 'brainly-5c4a769505'), _defineProperty(_LOGOS, TYPE.BRAINLY_MOBILE, 'brainly-mobile-6879551770'), _defineProperty(_LOGOS, TYPE.EODEV, 'eodev-1972bd4349'), _defineProperty(_LOGOS, TYPE.EODEV_MOBILE, 'eodev-mobile-bfdc46ee89'), _defineProperty(_LOGOS, TYPE.NOSDEVOIRS, 'nosdevoirs-e2d5d17215'), _defineProperty(_LOGOS, TYPE.NOSDEVOIRS_MOBILE, 'nosdevoirs-mobile-2caead9ada'), _defineProperty(_LOGOS, TYPE.ZNANIJA, 'znanija-addd85e6f5'), _defineProperty(_LOGOS, TYPE.ZNANIJA_MOBILE, 'znanija-mobile-200611d052'), _defineProperty(_LOGOS, TYPE.ZNANIJA_PLUS, 'znanija-plus-337423fa26'), _defineProperty(_LOGOS, TYPE.ZNANIJA_PLUS_INVERSE, 'znanija-plus-inverse-fdb3d35877'), _defineProperty(_LOGOS, TYPE.ZNANIJA_PLUS_SMALL, 'znanija-plus-small-495ddebd8c'), _defineProperty(_LOGOS, TYPE.BRAINLY_PLUS, 'brainly-plus-0768e10846'), _defineProperty(_LOGOS, TYPE.BRAINLY_PLUS_INVERSE, 'brainly-plus-inverse-c687c7219e'), _defineProperty(_LOGOS, TYPE.BRAINLY_PLUS_SMALL, 'brainly-plus-small-b8ec10bfb4'), _LOGOS);

var Logo = function Logo(_ref) {
  var _ref$type = _ref.type,
      type = _ref$type === void 0 ? TYPE.BRAINLY : _ref$type,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ["type", "className"]);

  var logoClass = classnames('sg-logo', _defineProperty({}, "sg-logo--".concat(type), type !== TYPE.BRAINLY), className);
  var logoPath = "".concat(BASE_URL).concat(LOGOS[type], ".svg");
  return React.createElement("div", _extends({}, props, {
    className: logoClass
  }), React.createElement("img", {
    className: "sg-logo__image",
    src: logoPath
  }));
};

export default Logo;