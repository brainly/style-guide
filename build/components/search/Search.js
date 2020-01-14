import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import cx from 'classnames';
import * as InputModule from '../form-elements/Input';
import Icon from '../icons/Icon';
import RoundButton from '../round-buttons/RoundButton';
var Input = InputModule.default,
    COLOR = InputModule.COLOR,
    SIZE = InputModule.SIZE;

// TODO: make back to spread (...InputModule.InputPropsType) after flow bump
var Search = function Search(_ref) {
  var _cx;

  var className = _ref.className,
      fullWidth = _ref.fullWidth,
      size = _ref.size,
      _ref$withRoundButton = _ref.withRoundButton,
      withRoundButton = _ref$withRoundButton === void 0 ? false : _ref$withRoundButton,
      inputClassName = _ref.inputClassName,
      additionalProps = _objectWithoutProperties(_ref, ["className", "fullWidth", "size", "withRoundButton", "inputClassName"]);

  var baseClassName = 'sg-search';
  var searchClassName = cx(baseClassName, (_cx = {}, _defineProperty(_cx, "sg-search--".concat(String(size)), size), _defineProperty(_cx, 'sg-search--full-width', fullWidth), _cx), className);
  return React.createElement("div", {
    className: searchClassName
  }, React.createElement(Input, _extends({}, additionalProps, {
    type: "search",
    withIcon: true,
    size: size,
    className: cx("".concat(baseClassName, "__input"), inputClassName)
  })), withRoundButton ? React.createElement("div", {
    className: "".concat(baseClassName, "__icon")
  }, React.createElement(RoundButton, {
    iconType: "search",
    color: "black",
    filled: true,
    size: size === 'large' ? 'medium' : 'small'
  })) : React.createElement("button", {
    className: "".concat(baseClassName, "__icon")
  }, React.createElement(Icon, {
    type: "search",
    color: "gray-secondary",
    size: size === 'large' ? 24 : 18
  })));
};

export default Search;
export { SIZE, COLOR };