import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import classNames from 'classnames';

var Footer = function Footer(_ref) {
  var children = _ref.children,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ["children", "className"]);

  var footerClass = classNames('sg-footer', className);
  return React.createElement("footer", _extends({}, props, {
    className: footerClass
  }), React.createElement("div", {
    className: "sg-footer__container"
  }, children));
};

export default Footer;