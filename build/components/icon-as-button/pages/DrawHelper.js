import _defineProperty from "@babel/runtime/helpers/defineProperty";
import React from 'react';
import { contrastBlockCssClass } from 'components/ContrastBox';
import IconAsButton, { ICON_COLOR } from '../IconAsButton';
import * as IconModule from '../../icons/Icon';
import classnames from 'classnames';

var DrawHelper = function DrawHelper(props) {
  var liClass = classnames('icons-list__element', _defineProperty({}, contrastBlockCssClass, props.color === ICON_COLOR.LIGHT));
  var liStyle = {
    padding: 0,
    fill: ''
  };

  if (props.color === ICON_COLOR.ADAPTIVE) {
    liStyle.fill = '#ff00ff';
  }

  return React.createElement("li", {
    className: liClass,
    style: liStyle
  }, React.createElement(IconAsButton, props), React.createElement("span", null, "\xA0 - ", props.color));
};

export default DrawHelper;