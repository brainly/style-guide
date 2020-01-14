import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import * as React from 'react';
import classNames from 'classnames';
import { SIZE, ALIGNMENT } from './ContentBoxConstants';

var ContentBoxActions = function ContentBoxActions(_ref) {
  var _classNames;

  var children = _ref.children,
      spacedTop = _ref.spacedTop,
      spacedBottom = _ref.spacedBottom,
      className = _ref.className,
      _ref$align = _ref.align,
      align = _ref$align === void 0 ? ALIGNMENT.LEFT : _ref$align,
      props = _objectWithoutProperties(_ref, ["children", "spacedTop", "spacedBottom", "className", "align"]);

  var contentBoxClass = classNames('sg-content-box__actions', (_classNames = {
    'sg-content-box__actions--with-centered-elements': align === ALIGNMENT.CENTER,
    'sg-content-box__actions--with-elements-to-right': align === ALIGNMENT.RIGHT,
    'sg-content-box__actions--spaced-top': spacedTop === SIZE.NORMAL
  }, _defineProperty(_classNames, "sg-content-box__actions--spaced-top-".concat(spacedTop || ''), spacedTop && spacedTop !== SIZE.NORMAL), _defineProperty(_classNames, 'sg-content-box__actions--spaced-bottom', spacedBottom === SIZE.NORMAL), _defineProperty(_classNames, "sg-content-box__actions--spaced-bottom-".concat(spacedBottom || ''), spacedBottom && spacedBottom !== SIZE.NORMAL), _classNames), className);
  return React.createElement("div", _extends({}, props, {
    className: contentBoxClass
  }), children);
};

export default ContentBoxActions;
export { SIZE, ALIGNMENT };