import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import classnames from 'classnames';

var ButtonRound = function ButtonRound(_ref) {
  var label = _ref.label,
      children = _ref.children,
      _ref$href = _ref.href,
      href = _ref$href === void 0 ? '#' : _ref$href,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ["label", "children", "href", "className"]);

  var labelElem;

  if (label !== undefined && label !== null && label !== '') {
    labelElem = React.createElement("span", {
      className: "sg-button-primary-round__label"
    }, label);
  }

  var buttonClass = classnames('sg-button-primary-round', className);
  return React.createElement("a", _extends({}, props, {
    href: href,
    className: buttonClass
  }), React.createElement("div", {
    className: "sg-button-primary-round__icon"
  }, children), labelElem);
};

export default ButtonRound;