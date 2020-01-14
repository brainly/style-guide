import React from 'react';
import Textarea, { SIZE, TEXTAREA_COLOR } from '../Textarea';
import DocsActiveBlock from 'components/DocsActiveBlock';

var Textareas = function Textareas() {
  var settings = [{
    name: 'size',
    values: SIZE
  }, {
    name: 'color',
    values: TEXTAREA_COLOR
  }, {
    name: 'value',
    values: String
  }, {
    name: 'placeholder',
    values: String
  }, {
    name: 'fullWidth',
    values: Boolean
  }, {
    name: 'simple',
    values: Boolean
  }, {
    name: 'autoHeight',
    values: Boolean
  }, {
    name: 'valid',
    values: Boolean
  }, {
    name: 'invalid',
    values: Boolean
  }];
  return React.createElement("div", null, React.createElement(DocsActiveBlock, {
    backgroundColor: "dark",
    settings: settings
  }, React.createElement(Textarea, {
    placeholder: "placeholder",
    value: "Tall and valid textarea",
    size: SIZE.XTALL,
    color: TEXTAREA_COLOR.DEFAULT
  })));
};

export default Textareas;