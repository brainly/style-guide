import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import * as React from 'react';
import classNames from 'classnames';
import { SIZE, ALIGNMENT } from './ContentBoxConstants';

var ContentBoxHeader = function ContentBoxHeader(_ref) {
  var _classNames;

  var children = _ref.children,
      spaced = _ref.spaced,
      spacedSmall = _ref.spacedSmall,
      spacedTop = _ref.spacedTop,
      spacedBottom = _ref.spacedBottom,
      className = _ref.className,
      _ref$align = _ref.align,
      align = _ref$align === void 0 ? ALIGNMENT.LEFT : _ref$align,
      props = _objectWithoutProperties(_ref, ["children", "spaced", "spacedSmall", "spacedTop", "spacedBottom", "className", "align"]);

  var contentBoxClass = classNames('sg-content-box__header', (_classNames = {
    'sg-content-box__header--with-centered-elements': align === ALIGNMENT.CENTER,
    'sg-content-box__header--spaced': spaced,
    'sg-content-box__header--spaced-small': spacedSmall,
    'sg-content-box__header--spaced-top': spacedTop === SIZE.NORMAL
  }, _defineProperty(_classNames, "sg-content-box__header--spaced-top-".concat(spacedTop || ''), spacedTop && spacedTop !== SIZE.NORMAL), _defineProperty(_classNames, 'sg-content-box__header--spaced-bottom', spacedBottom === SIZE.NORMAL), _defineProperty(_classNames, "sg-content-box__header--spaced-bottom-".concat(spacedBottom || ''), spacedBottom && spacedBottom !== SIZE.NORMAL), _classNames), className);
  return React.createElement("div", _extends({}, props, {
    className: contentBoxClass
  }), children);
};

export default ContentBoxHeader;
export { SIZE, ALIGNMENT };