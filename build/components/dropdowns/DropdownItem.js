import React from 'react';

var DropdownItem = function DropdownItem(_ref) {
  var text = _ref.text,
      onClick = _ref.onClick;
  return React.createElement("div", {
    className: "sg-dropdown__item-hole",
    onClick: onClick
  }, React.createElement("div", {
    className: "sg-dropdown__item-text"
  }, text));
};

export default DropdownItem;