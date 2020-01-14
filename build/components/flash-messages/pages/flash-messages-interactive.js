import React from 'react';
import FlashMessage, { TYPE } from '../FlashMessage';
import DocsActiveBlock from 'components/DocsActiveBlock';

var FlashMessages = function FlashMessages() {
  var settings = [{
    name: 'type',
    values: TYPE
  }, {
    name: 'text',
    values: String,
    required: true
  }];
  return React.createElement("div", null, React.createElement(DocsActiveBlock, {
    settings: settings
  }, React.createElement(FlashMessage, {
    text: "I have never seen a code like this before..."
  })), React.createElement(DocsActiveBlock, {
    settings: settings
  }, React.createElement(FlashMessage, {
    text: "Whoops! Something went wrong",
    type: TYPE.ERROR
  })));
};

export default FlashMessages;