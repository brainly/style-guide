import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import classnames from 'classnames';

var Overlay = function Overlay(_ref) {
  var partial = _ref.partial,
      children = _ref.children,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ["partial", "children", "className"]);

  var overlayClass = classnames('sg-overlay', {
    'sg-overlay--partial': partial
  }, className);
  return React.createElement("div", _extends({}, props, {
    className: overlayClass
  }), children);
};

export default Overlay;