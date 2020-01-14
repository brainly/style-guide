import React from 'react';
import DocsBlock from 'components/DocsBlock';
import FlashMessage, { TYPE } from '../FlashMessage';
var TEXT = 'I have never seen a code like this before...';

var flashMessages = function flashMessages() {
  return React.createElement("div", null, React.createElement(DocsBlock, {
    info: "Default"
  }, React.createElement(FlashMessage, {
    text: TEXT
  })), React.createElement(DocsBlock, {
    info: "Success"
  }, React.createElement(FlashMessage, {
    text: TEXT,
    type: TYPE.SUCCESS
  })), React.createElement(DocsBlock, {
    info: "Error"
  }, React.createElement(FlashMessage, {
    text: TEXT,
    type: TYPE.ERROR
  })), React.createElement(DocsBlock, {
    info: "Info"
  }, React.createElement(FlashMessage, {
    text: TEXT,
    type: TYPE.INFO
  })));
};

export default flashMessages;