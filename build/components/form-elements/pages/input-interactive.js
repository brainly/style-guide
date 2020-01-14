import React from 'react';
import Input, { TYPE, SIZE, COLOR } from '../Input';
import DocsActiveBlock from 'components/DocsActiveBlock';

var Inputs = function Inputs() {
  var settings = [{
    name: 'type',
    values: TYPE
  }, {
    name: 'size',
    values: SIZE
  }, {
    name: 'color',
    values: COLOR
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
    name: 'valid',
    values: Boolean
  }, {
    name: 'invalid',
    values: Boolean
  }];
  return React.createElement("div", null, React.createElement(DocsActiveBlock, {
    backgroundColor: "dark",
    settings: settings
  }, React.createElement(Input, {
    backgroundColor: "none",
    placeholder: "Large input",
    fullWidth: true,
    size: SIZE.LARGE,
    color: COLOR.DEFAULT,
    value: "I'm a large input"
  })));
};

export default Inputs;