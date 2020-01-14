import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import * as React from 'react';
import classnames from 'classnames';
export var SIZE = {
  SHORT: 'short',
  NORMAL: 'normal',
  TALL: 'tall',
  XTALL: 'xtall'
};
export var TEXTAREA_COLOR = {
  DEFAULT: 'default',
  WHITE: 'white'
};

var Textarea = function Textarea(props) {
  var _classnames;

  var valid = props.valid,
      invalid = props.invalid,
      _props$size = props.size,
      size = _props$size === void 0 ? SIZE.NORMAL : _props$size,
      _props$color = props.color,
      color = _props$color === void 0 ? 'default' : _props$color,
      fullWidth = props.fullWidth,
      simple = props.simple,
      noPadding = props.noPadding,
      autoHeight = props.autoHeight,
      value = props.value,
      className = props.className,
      textareaRef = props.textareaRef,
      _props$type = props.type,
      Type = _props$type === void 0 ? 'textarea' : _props$type,
      additionalProps = _objectWithoutProperties(props, ["valid", "invalid", "size", "color", "fullWidth", "simple", "noPadding", "autoHeight", "value", "className", "textareaRef", "type"]);

  if (valid === true && invalid === true) {
    throw {
      name: 'WrongValidation',
      message: 'Textarea can be either valid or invalid!'
    };
  }

  var textareaClass = classnames('sg-textarea', (_classnames = {}, _defineProperty(_classnames, "sg-textarea--".concat(String(size)), size !== SIZE.NORMAL), _defineProperty(_classnames, "sg-textarea--".concat(String(color)), color !== 'default'), _defineProperty(_classnames, 'sg-textarea--valid', valid), _defineProperty(_classnames, 'sg-textarea--invalid', invalid), _defineProperty(_classnames, 'sg-textarea--full-width', fullWidth), _defineProperty(_classnames, 'sg-textarea--simple', simple), _defineProperty(_classnames, 'sg-textarea--no-padding', noPadding), _defineProperty(_classnames, 'sg-textarea--auto-height', autoHeight), _classnames), className);
  return React.createElement(Type, _extends({}, additionalProps, {
    className: textareaClass,
    ref: textareaRef,
    value: value
  }));
};

export default Textarea;