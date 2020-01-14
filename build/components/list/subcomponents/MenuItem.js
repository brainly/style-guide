import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import classnames from 'classnames';

var MenuItem = function MenuItem(_ref) {
  var text = _ref.text,
      href = _ref.href,
      type = _ref.type,
      className = _ref.className,
      restProps = _objectWithoutProperties(_ref, ["text", "href", "type", "className"]);

  var Type = type !== undefined ? type : 'a';
  var elementClass = classnames('sg-menu-list__link', className);
  return React.createElement("li", {
    className: "sg-menu-list__element"
  }, React.createElement(Type, _extends({}, restProps, {
    className: elementClass,
    href: href
  }), text));
};

export default MenuItem;