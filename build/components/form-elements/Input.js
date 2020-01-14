import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import classnames from 'classnames';
export var TYPE = Object.freeze({
  BUTTON: 'button',
  COLOR: 'color',
  DATE: 'date',
  DATETIME_LOCAL: 'datetime-local',
  EMAIL: 'email',
  FILE: 'file',
  HIDDEN: 'hidden',
  IMAGE: 'image',
  MONTH: 'month',
  NUMBER: 'number',
  PASSWORD: 'password',
  RANGE: 'range',
  RESET: 'reset',
  SEARCH: 'search',
  SUBMIT: 'submit',
  TEL: 'tel',
  TEXT: 'text',
  TIME: 'time',
  URL: 'url',
  WEEK: 'week'
});
export var SIZE = Object.freeze({
  LARGE: 'large',
  NORMAL: 'normal'
});
export var COLOR = Object.freeze({
  DEFAULT: 'default',
  WHITE: 'white'
});

var Input = function Input(props) {
  var _classnames;

  var _props$type = props.type,
      type = _props$type === void 0 ? 'text' : _props$type,
      _props$size = props.size,
      size = _props$size === void 0 ? SIZE.NORMAL : _props$size,
      _props$color = props.color,
      color = _props$color === void 0 ? COLOR.DEFAULT : _props$color,
      fullWidth = props.fullWidth,
      withIcon = props.withIcon,
      value = props.value,
      valid = props.valid,
      invalid = props.invalid,
      className = props.className,
      setInputRef = props.setInputRef,
      additionalProps = _objectWithoutProperties(props, ["type", "size", "color", "fullWidth", "withIcon", "value", "valid", "invalid", "className", "setInputRef"]);

  if (valid === true && invalid === true) {
    throw {
      name: 'WrongValidation',
      message: 'Input can be either valid or invalid!'
    };
  }

  var inputClass = classnames('sg-input', (_classnames = {}, _defineProperty(_classnames, "sg-input--".concat(String(size)), size !== SIZE.NORMAL), _defineProperty(_classnames, "sg-input--".concat(String(color)), color !== COLOR.DEFAULT), _defineProperty(_classnames, 'sg-input--valid', valid), _defineProperty(_classnames, 'sg-input--invalid', invalid), _defineProperty(_classnames, 'sg-input--full-width', fullWidth), _defineProperty(_classnames, 'sg-input--with-icon', withIcon), _classnames), className);
  return React.createElement("input", _extends({}, additionalProps, {
    type: type,
    ref: setInputRef,
    className: inputClass,
    value: value
  }));
};

export default Input;