import React from 'react';
import Radio, { RADIO_SIZE } from '../Radio';
import DocsActiveBlock from 'components/DocsActiveBlock';

var Radios = function Radios() {
  var settings = [{
    name: 'checked',
    values: Boolean
  }, {
    name: 'size',
    values: RADIO_SIZE
  }];
  return React.createElement("div", null, React.createElement(DocsActiveBlock, {
    settings: settings
  }, React.createElement(Radio, null)));
};

export default Radios;