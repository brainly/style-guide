import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import classNames from 'classnames';

var PopupMenu = function PopupMenu(_ref) {
  var _ref$items = _ref.items,
      items = _ref$items === void 0 ? [] : _ref$items,
      extraSpacing = _ref.extraSpacing,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ["items", "extraSpacing", "className"]);

  var popupMenuClass = classNames('sg-popup-menu', {
    'sg-popup-menu--elements-spaced': extraSpacing
  }, className);
  return React.createElement("div", _extends({}, props, {
    className: popupMenuClass
  }), items.map(function (item, i) {
    return React.createElement("div", {
      key: i,
      className: "sg-popup-menu__hole"
    }, item);
  }));
};

export default PopupMenu;