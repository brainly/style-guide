import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import classnames from 'classnames';

var HeaderContent = function HeaderContent(_ref) {
  var children = _ref.children,
      autoHeight = _ref.autoHeight,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ["children", "autoHeight", "className"]);

  var headerContentClass = classnames('sg-header__content', {
    'sg-header__content--auto-height': autoHeight
  }, className);
  return React.createElement("div", _extends({}, props, {
    className: headerContentClass
  }), children);
};

export default HeaderContent;