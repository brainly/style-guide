import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import DocsBlock from 'components/DocsBlock';
import LabelDeprecated from 'labels-deprecated/LabelDeprecated';
import Radio, { RADIO_SIZE } from '../Radio';
var dumpProps = {
  onChange: function onChange() {
    return undefined;
  }
};

var radios = function radios() {
  return React.createElement("div", null, React.createElement(DocsBlock, {
    info: "Radio Buttons"
  }, React.createElement(Radio, {
    name: "group1"
  }), React.createElement(Radio, _extends({
    name: "group1",
    checked: true
  }, dumpProps)), React.createElement("br", null), React.createElement(LabelDeprecated, {
    secondary: true,
    htmlFor: "radio-3",
    text: "Check me!",
    iconContent: React.createElement(Radio, {
      name: "group2"
    })
  }), React.createElement(LabelDeprecated, {
    secondary: true,
    htmlFor: "radio-4",
    text: "Check me!",
    iconContent: React.createElement(Radio, {
      name: "group3"
    })
  })), React.createElement(DocsBlock, {
    info: "Large"
  }, React.createElement(Radio, {
    size: RADIO_SIZE.LARGE,
    name: "group4"
  }), React.createElement(Radio, _extends({
    size: RADIO_SIZE.LARGE,
    name: "group4",
    checked: true
  }, dumpProps))));
};

export default radios;