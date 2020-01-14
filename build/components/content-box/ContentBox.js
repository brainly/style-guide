import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import * as React from 'react';
import classNames from 'classnames';
import { SIZE } from './ContentBoxConstants';

var ContentBox = function ContentBox(_ref) {
  var _classNames;

  var children = _ref.children,
      spacedTop = _ref.spacedTop,
      spacedBottom = _ref.spacedBottom,
      spaced = _ref.spaced,
      spacedSmall = _ref.spacedSmall,
      full = _ref.full,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ["children", "spacedTop", "spacedBottom", "spaced", "spacedSmall", "full", "className"]);

  var contentBoxClass = classNames('sg-content-box', (_classNames = {
    'sg-content-box--spaced': spaced,
    'sg-content-box--spaced-small': spacedSmall,
    'sg-content-box--full': full,
    'sg-content-box--spaced-top': spacedTop === SIZE.NORMAL
  }, _defineProperty(_classNames, "sg-content-box--spaced-top-".concat(spacedTop || ''), spacedTop && spacedTop !== SIZE.NORMAL), _defineProperty(_classNames, 'sg-content-box--spaced-bottom', spacedBottom === SIZE.NORMAL), _defineProperty(_classNames, "sg-content-box--spaced-bottom-".concat(spacedBottom || ''), spacedBottom && spacedBottom !== SIZE.NORMAL), _classNames), className);
  return React.createElement("div", _extends({}, props, {
    className: contentBoxClass
  }), children);
};

export default ContentBox;
export var CONTENT_BOX_SPACING_SIZE = SIZE;