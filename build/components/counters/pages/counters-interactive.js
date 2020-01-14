import React from 'react';
import Counter, { COUNTER_SIZE } from '../Counter';
import DocsActiveBlock from 'components/DocsActiveBlock';

var Counters = function Counters() {
  var settings = [{
    name: 'size',
    values: COUNTER_SIZE
  }, {
    name: 'withAnimation',
    values: Boolean
  }];
  return React.createElement("div", null, React.createElement(DocsActiveBlock, {
    settings: settings,
    backgroundColor: "dark"
  }, React.createElement(Counter, {
    size: "normal"
  }, "1")));
};

export default Counters;