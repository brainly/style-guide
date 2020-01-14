import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import classnames from 'classnames';

var OverlayedBox = function OverlayedBox(_ref) {
  var overlay = _ref.overlay,
      children = _ref.children,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ["overlay", "children", "className"]);

  var boxClass = classnames('sg-overlayed-box', className);
  return React.createElement("div", _extends({}, props, {
    className: boxClass
  }), children, React.createElement("div", {
    className: "sg-overlayed-box__overlay"
  }, overlay));
};

export default OverlayedBox;