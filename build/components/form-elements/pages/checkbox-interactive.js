import React from 'react';
import Checkbox from '../Checkbox';
import DocsActiveBlock from 'components/DocsActiveBlock';

var Checkboxes = function Checkboxes() {
  var settings = [{
    name: 'checked',
    values: Boolean
  }];
  return React.createElement("div", null, React.createElement(DocsActiveBlock, {
    settings: settings
  }, React.createElement(Checkbox, null)));
};

export default Checkboxes;