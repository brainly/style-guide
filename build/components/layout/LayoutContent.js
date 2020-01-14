import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import classNames from 'classnames';

var LayoutContent = function LayoutContent(_ref) {
  var children = _ref.children,
      noMaxWidth = _ref.noMaxWidth,
      center = _ref.center,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ["children", "noMaxWidth", "center", "className"]);

  var layoutContentClass = classNames('sg-layout__content', {
    'sg-layout__content--no-max-width': noMaxWidth,
    'sg-layout__content--center': center
  }, className);
  return React.createElement("div", _extends({}, props, {
    className: layoutContentClass
  }), children);
};

export default LayoutContent;