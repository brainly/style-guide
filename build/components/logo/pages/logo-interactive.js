import React from 'react';
import Logo, { TYPE } from '../Logo';
import DocsActiveBlock from 'components/DocsActiveBlock';

var Logos = function Logos() {
  var settings = [{
    name: 'type',
    values: TYPE
  }];
  return React.createElement("div", null, React.createElement(DocsActiveBlock, {
    settings: settings
  }, React.createElement(Logo, null)));
};

export default Logos;