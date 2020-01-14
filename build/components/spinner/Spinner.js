import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import classNames from 'classnames';
export var SPINNER_SIZE = {
  SMALL: 'small',
  XSMALL: 'xsmall',
  XXSMALL: 'xxsmall'
};

var Spinner = function Spinner(_ref) {
  var light = _ref.light,
      size = _ref.size,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ["light", "size", "className"]);

  var spinnerClassNames = classNames('sg-spinner', _defineProperty({
    'sg-spinner--light': light
  }, "sg-spinner--".concat(String(size)), size), className);
  return React.createElement("div", _extends({}, props, {
    className: spinnerClassNames
  }));
};

export default Spinner;