import React from 'react';
import Select, { COLOR, SIZE } from '../Select';
import DocsActiveBlock from 'components/DocsActiveBlock';
var exampleOptions = [{
  value: 'option1',
  text: 'Option 1'
}, {
  value: 'option2',
  text: 'Option 2'
}, {
  value: 'option3',
  text: 'Option 3'
}];

var Selects = function Selects() {
  var settings = [{
    name: 'size',
    values: SIZE
  }, {
    name: 'color',
    values: COLOR
  }, {
    name: 'valid',
    values: Boolean
  }, {
    name: 'invalid',
    values: Boolean
  }, {
    name: 'fullWidth',
    values: Boolean
  }];
  return React.createElement("div", null, React.createElement(DocsActiveBlock, {
    backgroundColor: "dark",
    settings: settings
  }, React.createElement(Select, {
    options: exampleOptions,
    size: SIZE.NORMAL,
    color: COLOR.DEAFAULT
  })));
};

export default Selects;