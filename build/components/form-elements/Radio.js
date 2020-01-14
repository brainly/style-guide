import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import classNames from 'classnames';
import generateRandomString from '../../js/generateRandomString';
export var RADIO_SIZE = {
  NORMAL: 'normal',
  LARGE: 'large'
};

var Radio = function Radio(props) {
  var checked = props.checked,
      name = props.name,
      _props$size = props.size,
      size = _props$size === void 0 ? RADIO_SIZE.NORMAL : _props$size,
      className = props.className,
      _props$id = props.id,
      id = _props$id === void 0 ? generateRandomString() : _props$id,
      additionalProps = _objectWithoutProperties(props, ["checked", "name", "size", "className", "id"]);

  var radioClass = classNames('sg-radio', _defineProperty({}, "sg-radio--".concat(String(size)), size !== RADIO_SIZE.NORMAL), className);
  return React.createElement("div", {
    className: radioClass
  }, React.createElement("input", _extends({}, additionalProps, {
    className: "sg-radio__element",
    type: "radio",
    checked: checked,
    name: name,
    id: id
  })), React.createElement("label", {
    className: "sg-radio__ghost",
    htmlFor: id
  }));
};

export default Radio;