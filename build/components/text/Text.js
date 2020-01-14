import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import * as React from 'react';
import classNames from 'classnames';
import { TEXT_TYPE, TEXT_SIZE, TEXT_WEIGHT } from './textConsts';
export { TYPE // backward compatibility
, SIZE // backward compatibility
, COLOR // backward compatibility
, WEIGHT // backward compatibility
, TEXT_TYPE, TEXT_SIZE, TEXT_COLOR, TEXT_WEIGHT, TEXT_TRANSFORM, TEXT_ALIGN } from './textConsts';

var Text = function Text(_ref) {
  var _classNames;

  var children = _ref.children,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? TEXT_TYPE.DIV : _ref$type,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? TEXT_SIZE.NORMAL : _ref$size,
      _ref$weight = _ref.weight,
      weight = _ref$weight === void 0 ? TEXT_WEIGHT.REGULAR : _ref$weight,
      color = _ref.color,
      transform = _ref.transform,
      align = _ref.align,
      noWrap = _ref.noWrap,
      asContainer = _ref.asContainer,
      full = _ref.full,
      breakWords = _ref.breakWords,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ["children", "type", "size", "weight", "color", "transform", "align", "noWrap", "asContainer", "full", "breakWords", "className"]);

  var Type = type;
  var textClass = classNames('sg-text', (_classNames = {}, _defineProperty(_classNames, "sg-text--".concat(String(size)), size !== TEXT_SIZE.NORMAL), _defineProperty(_classNames, "sg-text--".concat(String(color)), color), _defineProperty(_classNames, "sg-text--".concat(String(weight)), weight !== TEXT_WEIGHT.REGULAR), _defineProperty(_classNames, "sg-text--".concat(transform || ''), transform), _defineProperty(_classNames, "sg-text--".concat(align || ''), align), _defineProperty(_classNames, 'sg-text--container', asContainer), _defineProperty(_classNames, 'sg-text--full', full), _defineProperty(_classNames, 'sg-text--no-wrap', noWrap), _defineProperty(_classNames, 'sg-text--break-words', breakWords), _classNames), className);
  return React.createElement(Type, _extends({}, props, {
    className: textClass
  }), children);
};

export default Text;