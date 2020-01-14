import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import classnames from 'classnames';

var Header = function Header(_ref) {
  var children = _ref.children,
      fixed = _ref.fixed,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ["children", "fixed", "className"]);

  var headerClass = classnames('sg-header', {
    'sg-header--fixed': fixed
  }, className);
  return React.createElement("header", _extends({}, props, {
    className: headerClass
  }), children);
};

export default Header;