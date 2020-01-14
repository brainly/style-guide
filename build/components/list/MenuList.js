import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import classNames from 'classnames';
import * as MenuItemModule from './subcomponents/MenuItem';
var MenuItem = MenuItemModule.default;
export var SIZE = {
  SMALL: 'small',
  NORMAL: 'normal',
  LARGE: 'large'
};

var MenuList = function MenuList(_ref) {
  var _ref$items = _ref.items,
      items = _ref$items === void 0 ? [] : _ref$items,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? SIZE.NORMAL : _ref$size,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ["items", "size", "className"]);

  var listClass = classNames('sg-menu-list', _defineProperty({}, "sg-menu-list--".concat(size), size !== SIZE.NORMAL), className);
  return React.createElement("ul", _extends({}, props, {
    className: listClass
  }), items.map(function (_ref2, index) {
    var elementProps = _extends({}, _ref2);

    return React.createElement(MenuItem, _extends({}, elementProps, {
      key: index
    }));
  }));
};

export default MenuList;
export { MenuItem };