import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import * as React from 'react';
import classNames from 'classnames';
import { SIZE, ALIGNMENT } from './ContentBoxConstants';

var ContentBoxContent = function ContentBoxContent(_ref) {
  var _classNames;

  var children = _ref.children,
      full = _ref.full,
      spacedTop = _ref.spacedTop,
      spacedBottom = _ref.spacedBottom,
      className = _ref.className,
      _ref$align = _ref.align,
      align = _ref$align === void 0 ? ALIGNMENT.LEFT : _ref$align,
      props = _objectWithoutProperties(_ref, ["children", "full", "spacedTop", "spacedBottom", "className", "align"]);

  var contentBoxClass = classNames('sg-content-box__content', (_classNames = {
    'sg-content-box__content--full': full,
    'sg-content-box__content--with-centered-text': align === ALIGNMENT.CENTER,
    'sg-content-box__content--spaced-top': spacedTop === SIZE.NORMAL
  }, _defineProperty(_classNames, "sg-content-box__content--spaced-top-".concat(spacedTop || ''), spacedTop && spacedTop !== SIZE.NORMAL), _defineProperty(_classNames, 'sg-content-box__content--spaced-bottom', spacedBottom === SIZE.NORMAL), _defineProperty(_classNames, "sg-content-box__content--spaced-bottom-".concat(spacedBottom || ''), spacedBottom && spacedBottom !== SIZE.NORMAL), _classNames), className);
  return React.createElement("div", _extends({}, props, {
    className: contentBoxClass
  }), children);
};

export default ContentBoxContent;
export { SIZE, ALIGNMENT };