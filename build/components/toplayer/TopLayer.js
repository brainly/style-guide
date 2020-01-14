import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import classnames from 'classnames';
import Icon from '../icons/Icon';
export var SIZE = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large'
};

var TopLayer = function TopLayer(props) {
  var children = props.children,
      onClose = props.onClose,
      size = props.size,
      lead = props.lead,
      fill = props.fill,
      modal = props.modal,
      withBugbox = props.withBugbox,
      smallSpaced = props.smallSpaced,
      splashScreen = props.splashScreen,
      limitedWidth = props.limitedWidth,
      row = props.row,
      noPadding = props.noPadding,
      transparent = props.transparent,
      className = props.className,
      additionalProps = _objectWithoutProperties(props, ["children", "onClose", "size", "lead", "fill", "modal", "withBugbox", "smallSpaced", "splashScreen", "limitedWidth", "row", "noPadding", "transparent", "className"]);

  var topLayerClassName = classnames('sg-toplayer', _defineProperty({
    'sg-toplayer--lead': lead,
    'sg-toplayer--fill': fill,
    'sg-toplayer--modal': modal,
    'sg-toplayer--with-bugbox': withBugbox,
    'sg-toplayer--small-spaced': smallSpaced,
    'sg-toplayer--splash-screen': splashScreen,
    'sg-toplayer--limited-width': limitedWidth,
    'sg-toplayer--row': row,
    'sg-toplayer--transparent': transparent
  }, "sg-toplayer--".concat(String(size)), size), className);
  var toplayerWrapperClassName = classnames('sg-toplayer__wrapper', {
    'sg-toplayer__wrapper--no-padding': noPadding
  });
  return React.createElement("div", _extends({}, additionalProps, {
    className: topLayerClassName
  }), onClose ? React.createElement("div", {
    className: "sg-toplayer__close",
    onClick: onClose
  }, React.createElement(Icon, {
    type: "close",
    color: "gray-secondary",
    size: 24
  })) : null, React.createElement("div", {
    className: toplayerWrapperClassName
  }, children));
};

export default TopLayer;