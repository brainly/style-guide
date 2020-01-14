import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import classnames from 'classnames';

var HeaderRight = function HeaderRight(_ref) {
  var children = _ref.children,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ["children", "className"]);

  var headerClass = classnames('sg-header__right', className);
  return React.createElement("div", _extends({}, props, {
    className: headerClass
  }), children);
};

export default HeaderRight;