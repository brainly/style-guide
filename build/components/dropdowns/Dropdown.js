import React from 'react';
import classNames from 'classnames';
import DropdownItem from './DropdownItem';

function getOnClick(onItemClick, id) {
  return function () {
    return onItemClick(id);
  };
}

var Dropdown = function Dropdown(_ref) {
  var fixed = _ref.fixed,
      label = _ref.label,
      onClick = _ref.onClick,
      _ref$fullWidth = _ref.fullWidth,
      fullWidth = _ref$fullWidth === void 0 ? true : _ref$fullWidth,
      opened = _ref.opened,
      onItemClick = _ref.onItemClick,
      _ref$items = _ref.items,
      items = _ref$items === void 0 ? [] : _ref$items,
      className = _ref.className;
  var dropdownClass = classNames('sg-dropdown', {
    'sg-dropdown--full-width': fullWidth,
    'sg-dropdown--opened': opened
  }, className);
  var itemsClass = classNames('sg-dropdown__items', {
    'sg-dropdown__items--fixed': fixed
  });
  return React.createElement("div", {
    className: dropdownClass,
    onClick: onClick
  }, React.createElement("div", {
    className: "sg-dropdown__icon"
  }), React.createElement("div", {
    className: "sg-dropdown__hole"
  }, React.createElement("div", {
    className: "sg-dropdown__item-text"
  }, label)), React.createElement("div", {
    className: itemsClass
  }, items.map(function (_ref2) {
    var id = _ref2.id,
        text = _ref2.text;
    return React.createElement(DropdownItem, {
      key: id,
      text: text,
      id: id,
      onClick: getOnClick(onItemClick, id)
    });
  })));
};

export default Dropdown;