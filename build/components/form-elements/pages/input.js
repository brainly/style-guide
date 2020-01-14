import React from 'react';
import Input from '../Input';
import DocsBlock from 'components/DocsBlock';
import ContrastBox from 'components/ContrastBox';
import Flex from '../../flex/Flex';

var voidFunction = function voidFunction() {
  return undefined;
};

var textInputs = function textInputs() {
  return React.createElement("div", null, React.createElement(DocsBlock, {
    info: "Default and white"
  }, React.createElement(Flex, null, React.createElement(Flex, {
    direction: "column",
    marginRight: "l"
  }, React.createElement(Input, {
    placeholder: "placeholder"
  }), React.createElement("br", null), React.createElement(Input, {
    size: "large",
    placeholder: "placeholder"
  })), React.createElement(Flex, {
    direction: "column"
  }, React.createElement(ContrastBox, {
    fullWidth: true
  }, React.createElement(Input, {
    placeholder: "placeholder",
    color: "white"
  }), React.createElement("br", null), React.createElement("br", null), React.createElement(Input, {
    size: "large",
    placeholder: "placeholder",
    color: "white"
  }))))), React.createElement(DocsBlock, {
    info: "Valid and invalid"
  }, React.createElement(Flex, null, React.createElement(Flex, {
    direction: "column",
    marginRight: "l"
  }, React.createElement(Input, {
    placeholder: "placeholder",
    valid: true,
    value: "This is valid example",
    onChange: voidFunction
  }), React.createElement("br", null), React.createElement(Input, {
    placeholder: "placeholder",
    invalid: true,
    size: "large",
    value: "This is invalid example",
    onChange: voidFunction
  })), React.createElement(Flex, {
    direction: "column"
  }, React.createElement(ContrastBox, {
    fullWidth: true
  }, React.createElement(Input, {
    valid: true,
    placeholder: "This is valid example",
    color: "white"
  }), React.createElement("br", null), React.createElement("br", null), React.createElement(Input, {
    size: "large",
    placeholder: "This is invalid example",
    invalid: true,
    color: "white"
  }))))), React.createElement(DocsBlock, {
    info: "Full width"
  }, React.createElement(Input, {
    placeholder: "placeholder",
    fullWidth: true
  })), React.createElement(DocsBlock, {
    info: "Password"
  }, React.createElement(Input, {
    type: "password",
    value: "secret",
    placeholder: "Type password",
    onChange: voidFunction
  })));
};

export default textInputs;