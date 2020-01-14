import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import classnames from 'classnames';

var LayoutAsideContent = function LayoutAsideContent(_ref) {
  var children = _ref.children,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ["children", "className"]);

  var layoutClass = classnames('sg-layout__aside-content', className);
  return React.createElement("div", _extends({}, props, {
    className: layoutClass
  }), children);
};

export default LayoutAsideContent;