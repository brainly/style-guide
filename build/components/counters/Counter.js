import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import * as React from 'react';
import cx from 'classnames';
import Text from '../text/Text';
import Flex from '../flex/Flex';
import Icon from '../icons/Icon';
export var COUNTER_SIZE = Object.freeze({
  NORMAL: 'normal',
  SMALL: 'small'
});

var Counter = function Counter(_ref) {
  var _cx;

  var icon = _ref.icon,
      children = _ref.children,
      className = _ref.className,
      size = _ref.size,
      withAnimation = _ref.withAnimation,
      props = _objectWithoutProperties(_ref, ["icon", "children", "className", "size", "withAnimation"]);

  var counterClass = cx('sg-counter', (_cx = {}, _defineProperty(_cx, "sg-counter--".concat(String(size)), size), _defineProperty(_cx, 'sg-counter--with-animation', withAnimation), _defineProperty(_cx, 'sg-counter--with-icon', icon), _cx), className);
  var content;
  content = React.createElement(Text, {
    size: size !== undefined && size !== null && size === COUNTER_SIZE.SMALL ? 'xsmall' : 'small',
    weight: "bold",
    color: "white",
    className: size === COUNTER_SIZE.SMALL ? 'sg-counter__text' : 'sg-counter__text-spaced'
  }, children);

  if (icon) {
    content = React.createElement(React.Fragment, null, React.createElement(Flex, {
      className: cx('sg-counter__icon-container', {
        'sg-counter__icon-container--small': size === COUNTER_SIZE.SMALL
      })
    }, React.createElement(Icon, {
      type: icon,
      size: size === COUNTER_SIZE.SMALL ? 16 : 24,
      color: "dark",
      className: "sg-counter__icon"
    })), React.createElement(Flex, {
      alignItems: "center"
    }, React.createElement(Text, {
      type: "span",
      weight: "bold",
      size: size !== undefined && size !== null && size === COUNTER_SIZE.SMALL ? 'xsmall' : 'small',
      className: "sg-counter__text"
    }, children)));
  }

  return React.createElement("div", _extends({}, props, {
    className: counterClass
  }), content);
};

export default Counter;