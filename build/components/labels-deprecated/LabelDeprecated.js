import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _defineProperty from "@babel/runtime/helpers/defineProperty";

var _ICON_SIZE;

import * as React from 'react';
import classNames from 'classnames';
import LabelDeprecatedIcon from './subcomponents/LabelDeprecatedIcon';
import * as IconModule from '../icons/Icon';
var ICON_COLOR = IconModule.ICON_COLOR,
    ICON_TYPE = IconModule.TYPE;
export var SIZE = {
  NORMAL: 'normal',
  SMALL: 'small',
  LARGE: 'large'
};
export var ICON_SIZE = (_ICON_SIZE = {}, _defineProperty(_ICON_SIZE, SIZE.NORMAL, 16), _defineProperty(_ICON_SIZE, SIZE.SMALL, 18), _defineProperty(_ICON_SIZE, SIZE.LARGE, 24), _ICON_SIZE);

var LabelDeprecated = function LabelDeprecated(props) {
  var _classNames;

  var _props$size = props.size,
      size = _props$size === void 0 ? SIZE.NORMAL : _props$size,
      text = props.text,
      children = props.children,
      number = props.number,
      iconContent = props.iconContent,
      iconType = props.iconType,
      iconColor = props.iconColor,
      htmlFor = props.htmlFor,
      secondary = props.secondary,
      unstyled = props.unstyled,
      emphasised = props.emphasised,
      elementsToTop = props.elementsToTop,
      className = props.className,
      restProps = _objectWithoutProperties(props, ["size", "text", "children", "number", "iconContent", "iconType", "iconColor", "htmlFor", "secondary", "unstyled", "emphasised", "elementsToTop", "className"]);

  var labelClass = classNames('sg-label-deprecated', (_classNames = {}, _defineProperty(_classNames, "sg-label-deprecated--".concat(size), size !== SIZE.NORMAL), _defineProperty(_classNames, 'sg-label-deprecated--secondary', secondary), _defineProperty(_classNames, 'sg-label-deprecated--unstyled', unstyled), _defineProperty(_classNames, 'sg-label-deprecated--emphasised', emphasised), _defineProperty(_classNames, 'sg-label-deprecated--elements-to-the-top', elementsToTop), _classNames), className);
  var textElement;
  var numberElement;

  if (text !== undefined && text !== '') {
    textElement = React.createElement("label", {
      className: "sg-label-deprecated__text",
      htmlFor: htmlFor
    }, text);
  }

  if (number !== undefined) {
    numberElement = React.createElement("div", {
      className: "sg-label-deprecated__number"
    }, number);
  }

  return React.createElement("div", _extends({}, restProps, {
    className: labelClass
  }), React.createElement(LabelDeprecatedIcon, {
    iconContent: iconContent,
    iconType: iconType,
    iconColor: iconColor,
    iconSize: ICON_SIZE[size]
  }), textElement, numberElement, children);
};

export default LabelDeprecated;
export { ICON_TYPE, ICON_COLOR, LabelDeprecatedIcon };