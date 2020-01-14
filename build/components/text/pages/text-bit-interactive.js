import React from 'react';
import TextBit, { TEXT_BIT_TYPE, TEXT_BIT_SIZE, TEXT_BIT_COLOR } from '../TextBit';
import DocsActiveBlock from 'components/DocsActiveBlock';

var TextBits = function TextBits() {
  var settings = [{
    name: 'type',
    values: TEXT_BIT_TYPE
  }, {
    name: 'size',
    values: TEXT_BIT_SIZE
  }, {
    name: 'color',
    values: TEXT_BIT_COLOR
  }, {
    name: 'notResponsive',
    values: Boolean
  }];
  return React.createElement("div", null, React.createElement(DocsActiveBlock, {
    settings: settings
  }, React.createElement(TextBit, null, "What do you need to know?")));
};

export default TextBits;