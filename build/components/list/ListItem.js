import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import classNames from 'classnames';
import React from 'react';

var ListItem = function ListItem(_ref) {
  var children = _ref.children,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ["children", "className"]);

  var listItemClass = classNames('sg-list__element', className);
  return React.createElement("li", _extends({}, props, {
    className: listItemClass
  }), children);
};

export default ListItem;