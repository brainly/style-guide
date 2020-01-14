import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import Select from '../Select';
import DocsBlock from 'components/DocsBlock';
import ContrastBox from 'components/ContrastBox';
import Flex from '../../flex/Flex';
var exampleOptions = [{
  value: 'option1',
  text: 'Option1'
}, {
  value: 'option2',
  text: 'Select selector'
}, {
  value: 'option3',
  text: 'Select selector'
}];
var exampleProps = {
  options: exampleOptions,
  value: exampleOptions[1].value,
  onChange: function onChange() {
    return undefined;
  }
};

var selects = function selects() {
  return React.createElement("div", null, React.createElement(DocsBlock, {
    info: "Default and white"
  }, React.createElement(Flex, null, React.createElement(Flex, {
    direction: "column",
    marginRight: "l"
  }, React.createElement(Select, exampleProps), React.createElement("br", null), React.createElement("br", null), React.createElement(Select, _extends({
    size: "large"
  }, exampleProps))), React.createElement(Flex, {
    direction: "column"
  }, React.createElement(ContrastBox, null, React.createElement(Select, _extends({}, exampleProps, {
    color: "white"
  })), React.createElement("br", null), React.createElement("br", null), React.createElement(Select, _extends({
    size: "large"
  }, exampleProps, {
    color: "white"
  })))))), React.createElement(DocsBlock, {
    info: "Valid"
  }, React.createElement(Flex, null, React.createElement(Flex, {
    direction: "column",
    marginRight: "l"
  }, React.createElement(Select, _extends({}, exampleProps, {
    valid: true
  })), React.createElement("br", null), React.createElement("br", null), React.createElement(Select, _extends({
    size: "large"
  }, exampleProps, {
    valid: true
  }))), React.createElement(Flex, {
    direction: "column",
    marginRight: "l"
  }, React.createElement(Select, _extends({}, exampleProps, {
    invalid: true
  })), React.createElement("br", null), React.createElement("br", null), React.createElement(Select, _extends({
    size: "large"
  }, exampleProps, {
    invalid: true
  }))))), React.createElement(DocsBlock, {
    info: "Capitalized"
  }, React.createElement(Select, _extends({}, exampleProps, {
    capitalized: true
  }))), React.createElement(DocsBlock, {
    info: "Full width"
  }, React.createElement(Select, _extends({}, exampleProps, {
    fullWidth: true
  }))));
};

export default selects;