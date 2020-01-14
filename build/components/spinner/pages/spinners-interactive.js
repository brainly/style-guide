import React from 'react';
import Spinner, { SPINNER_SIZE } from '../Spinner';
import DocsActiveBlock from 'components/DocsActiveBlock';

var Spinners = function Spinners() {
  var settings = [{
    name: 'size',
    values: SPINNER_SIZE
  }, {
    name: 'light',
    values: Boolean
  }];
  return React.createElement("div", null, React.createElement(DocsActiveBlock, {
    settings: settings,
    backgroundColor: "light"
  }, React.createElement(Spinner, null)));
};

export default Spinners;