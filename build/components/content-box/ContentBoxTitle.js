import _defineProperty from "@babel/runtime/helpers/defineProperty";
import * as React from 'react';
import classNames from 'classnames';
import { SIZE, ALIGNMENT } from './ContentBoxConstants';

var ContentBoxTitle = function ContentBoxTitle(_ref) {
  var _classNames;

  var children = _ref.children,
      spaced = _ref.spaced,
      spacedSmall = _ref.spacedSmall,
      spacedTop = _ref.spacedTop,
      spacedBottom = _ref.spacedBottom,
      className = _ref.className,
      _ref$align = _ref.align,
      align = _ref$align === void 0 ? ALIGNMENT.LEFT : _ref$align;
  var contentBoxClass = classNames('sg-content-box__title', (_classNames = {
    'sg-content-box__title--with-centered-elements': align === ALIGNMENT.CENTER,
    'sg-content-box__title--spaced': spaced,
    'sg-content-box__title--spaced-small': spacedSmall,
    'sg-content-box__title--spaced-top': spacedTop === SIZE.NORMAL
  }, _defineProperty(_classNames, "sg-content-box__title--spaced-top-".concat(spacedTop || ''), spacedTop && spacedTop !== SIZE.NORMAL), _defineProperty(_classNames, 'sg-content-box__title--spaced-bottom', spacedBottom === SIZE.NORMAL), _defineProperty(_classNames, "sg-content-box__title--spaced-bottom-".concat(spacedBottom || ''), spacedBottom && spacedBottom !== SIZE.NORMAL), _classNames), className);
  return React.createElement("div", {
    className: contentBoxClass
  }, children);
};

export default ContentBoxTitle;
export { SIZE, ALIGNMENT };