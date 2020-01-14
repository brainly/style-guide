import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import classNames from 'classnames';

var FooterLine = function FooterLine(_ref) {
  var children = _ref.children,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ["children", "className"]);

  var footerClass = classNames('sg-footer__line', className);
  return React.createElement("div", _extends({}, props, {
    className: footerClass
  }), children);
};

export default FooterLine;