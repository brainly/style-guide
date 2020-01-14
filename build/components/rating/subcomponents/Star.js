import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import * as IconModule from '../../icons/Icon';
var Icon = IconModule.default,
    ICON_COLOR = IconModule.ICON_COLOR;

var Star = function Star(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return React.createElement("span", _extends({}, props, {
    className: "sg-rate-box__star"
  }), React.createElement(Icon, {
    type: "star",
    size: size,
    color: ICON_COLOR.ADAPTIVE
  }));
};

export default Star;