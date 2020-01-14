import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import * as React from 'react';
import classNames from 'classnames';
import { HEADLINE_SIZE, HEADLINE_TYPE } from './headlineConsts';
export { HEADLINE_TYPE, HEADLINE_SIZE, HEADLINE_COLOR, HEADLINE_TRANSFORM, HEADLINE_ALIGN } from './headlineConsts';

var Headline = function Headline(_ref) {
  var _classNames;

  var children = _ref.children,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? HEADLINE_TYPE.H1 : _ref$type,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? HEADLINE_SIZE.NORMAL : _ref$size,
      extraBold = _ref.extraBold,
      transform = _ref.transform,
      align = _ref.align,
      color = _ref.color,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ["children", "type", "size", "extraBold", "transform", "align", "color", "className"]);

  var Type = type;
  var headlineClass = classNames('sg-headline', (_classNames = {}, _defineProperty(_classNames, "sg-headline--".concat(size), size !== HEADLINE_SIZE.NORMAL), _defineProperty(_classNames, "sg-headline--".concat(String(color)), color), _defineProperty(_classNames, "sg-headline--".concat(String(transform)), transform), _defineProperty(_classNames, "sg-headline--".concat(align || ''), align), _defineProperty(_classNames, 'sg-headline--extra-bold', extraBold), _classNames), className);
  return React.createElement(Type, _extends({}, props, {
    className: headlineClass
  }), children);
};

export default Headline;