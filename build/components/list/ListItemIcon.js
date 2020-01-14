import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import classNames from 'classnames';
import React from 'react';

var ListItemIcon = function ListItemIcon(_ref) {
  var small = _ref.small,
      children = _ref.children,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ["small", "children", "className"]);

  var iconClass = classNames('sg-list__icon', {
    'sg-list__icon--spacing-right-small': small
  }, className);
  return React.createElement("div", _extends({}, props, {
    className: iconClass
  }), children);
};

export default ListItemIcon;