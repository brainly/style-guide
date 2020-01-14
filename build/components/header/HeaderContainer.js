import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import classnames from 'classnames';

var HeaderContainer = function HeaderContainer(_ref) {
  var children = _ref.children,
      light = _ref.light,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ["children", "light", "className"]);

  var headerContainerClass = classnames('sg-header__container', {
    'sg-header__container--light': light
  }, className);
  return React.createElement("div", _extends({}, props, {
    className: headerContainerClass
  }), children);
};

export default HeaderContainer;