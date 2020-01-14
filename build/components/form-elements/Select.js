import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import classnames from 'classnames';
import Icon from '../icons/Icon';
export var COLOR = Object.freeze({
  DEAFAULT: 'default',
  WHITE: 'white'
});
export var SIZE = Object.freeze({
  LARGE: 'large',
  NORMAL: 'normal'
});

var Select = function Select(props) {
  var _classnames;

  var valid = props.valid,
      invalid = props.invalid,
      capitalized = props.capitalized,
      fullWidth = props.fullWidth,
      value = props.value,
      size = props.size,
      color = props.color,
      className = props.className,
      _props$options = props.options,
      options = _props$options === void 0 ? [] : _props$options,
      additionalProps = _objectWithoutProperties(props, ["valid", "invalid", "capitalized", "fullWidth", "value", "size", "color", "className", "options"]);

  if (valid === true && invalid === true) {
    throw {
      name: 'WrongValidation',
      message: 'Select can be either valid or invalid!'
    };
  }

  var selectClass = classnames('sg-select', (_classnames = {
    'sg-select--valid': valid,
    'sg-select--invalid': invalid,
    'sg-select--capitalized': capitalized,
    'sg-select--full-width': fullWidth
  }, _defineProperty(_classnames, "sg-select--".concat(String(color)), color), _defineProperty(_classnames, "sg-select--".concat(String(size)), size), _classnames), className);
  var optionsElements = options.map(function (_ref) {
    var value = _ref.value,
        text = _ref.text;
    return React.createElement("option", {
      key: value,
      value: value
    }, text);
  });
  return React.createElement("div", {
    className: selectClass
  }, React.createElement("div", {
    className: "sg-select__icon"
  }, React.createElement(Icon, {
    type: "arrow_down",
    color: "gray-secondary",
    size: size === 'large' ? 24 : 16
  })), React.createElement("select", _extends({}, additionalProps, {
    className: "sg-select__element",
    value: value
  }), optionsElements));
};

export default Select;