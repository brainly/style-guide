import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React from 'react';
import Button, { BUTTON_TYPE, BUTTON_SIZE } from '../Button';
import ButtonRound from '../ButtonRound';
import Icon, { TYPE as ICON_TYPES, ICON_COLOR } from 'icons/Icon';
import DocsActiveBlock from 'components/DocsActiveBlock';

var Buttons = function Buttons() {
  var allIcons = Object.entries(ICON_TYPES).reduce(function (acc, _ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        key = _ref2[0],
        type = _ref2[1];

    return _objectSpread({}, acc, _defineProperty({}, key, React.createElement(Icon, {
      type: type,
      color: ICON_COLOR.ADAPTIVE,
      size: 24
    })));
  }, {});
  var roundSettings = [{
    name: 'href',
    values: String
  }, {
    name: 'label',
    values: String
  }];
  var buttonsSettings = [{
    name: 'type',
    values: BUTTON_TYPE
  }, {
    name: 'disabled',
    values: Boolean
  }, {
    name: 'fullWidth',
    values: Boolean
  }, {
    name: 'size',
    values: BUTTON_SIZE
  }, {
    name: 'icon',
    values: allIcons
  }, {
    name: 'href',
    values: String
  }];
  return React.createElement("div", null, React.createElement(DocsActiveBlock, {
    settings: buttonsSettings
  }, React.createElement(Button, {
    type: BUTTON_TYPE.PRIMARY_BLUE
  }, "Ask your question")), React.createElement(DocsActiveBlock, {
    settings: buttonsSettings
  }, React.createElement(Button, {
    icon: allIcons.ANSWER,
    type: BUTTON_TYPE.PRIMARY
  }, "Answer")), React.createElement(DocsActiveBlock, {
    settings: roundSettings
  }, React.createElement(ButtonRound, {
    label: "Add question"
  }, React.createElement(Icon, {
    type: ICON_TYPES.PLUS,
    size: 16
  }))));
};

export default Buttons;