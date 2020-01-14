import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import classNames from 'classnames';
import Text from '../text/Text';
export var TYPE = {
  DEFAULT: 'default',
  SUCCESS: 'success',
  ERROR: 'error',
  INFO: 'info'
};

var FlashMessage = function FlashMessage(_ref) {
  var text = _ref.text,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'default' : _ref$type,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ["text", "type", "className"]);

  var messageClass = classNames('sg-flash__message', _defineProperty({}, "sg-flash__message--".concat(type), type !== TYPE.DEFAULT), className);
  return React.createElement("div", _extends({}, props, {
    className: "sg-flash"
  }), React.createElement("div", {
    className: messageClass
  }, React.createElement(Text, {
    size: "small",
    color: "default",
    weight: "bold"
  }, text)));
};

export default FlashMessage;