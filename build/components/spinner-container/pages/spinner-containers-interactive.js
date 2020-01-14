import React from 'react';
import SpinnerContainer, { SPINNER_SIZE } from '../SpinnerContainer';
import Button from 'buttons/Button';
import DocsActiveBlock from 'components/DocsActiveBlock';

var SpinnerContainers = function SpinnerContainers() {
  var settings = [{
    name: 'size',
    values: SPINNER_SIZE
  }, {
    name: 'loading',
    values: Boolean
  }, {
    name: 'light',
    values: Boolean
  }, {
    name: 'fullWidth',
    values: Boolean
  }];
  return React.createElement("div", null, React.createElement(DocsActiveBlock, {
    settings: settings,
    backgroundColor: "light"
  }, React.createElement(SpinnerContainer, null, React.createElement(Button, {
    type: "primary-blue"
  }, "Ask your question"))));
};

export default SpinnerContainers;