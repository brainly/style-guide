import React from 'react';
import Textarea, { SIZE } from '../Textarea';
import DocsBlock from 'components/DocsBlock';
import ContrastBox from 'components/ContrastBox';

var voidFunction = function voidFunction() {
  return undefined;
};

var textareas = function textareas() {
  return React.createElement("div", null, React.createElement(DocsBlock, {
    info: "Default and white",
    multiContent: [React.createElement(Textarea, {
      key: 1,
      placeholder: "placeholder"
    }), React.createElement(ContrastBox, {
      key: 2
    }, React.createElement(Textarea, {
      placeholder: "placeholder",
      color: "white"
    }))]
  }), React.createElement(DocsBlock, {
    info: "Valid and invalid",
    multiContent: [React.createElement(Textarea, {
      key: 1,
      placeholder: "placeholder",
      valid: true,
      value: "This is valid example",
      onChange: voidFunction
    }), React.createElement(Textarea, {
      key: 2,
      placeholder: "placeholder",
      invalid: true,
      value: "This is invalid example",
      onChange: voidFunction
    })]
  }), React.createElement(DocsBlock, {
    info: "Tall, XTall, short",
    multiContent: [React.createElement(Textarea, {
      key: 1,
      placeholder: "placeholder",
      size: SIZE.SHORT
    }), React.createElement(Textarea, {
      key: 2,
      placeholder: "placeholder",
      size: SIZE.TALL
    }), React.createElement(Textarea, {
      key: 3,
      placeholder: "placeholder",
      size: SIZE.XTALL
    })]
  }), React.createElement(DocsBlock, {
    info: "Simple and auto height",
    multiContent: [React.createElement(ContrastBox, {
      key: 1
    }, React.createElement(Textarea, {
      placeholder: "placeholder",
      simple: true
    })), React.createElement(Textarea, {
      key: 2,
      placeholder: "placeholder",
      autoHeight: true
    })]
  }), React.createElement(DocsBlock, {
    info: "Full width"
  }, React.createElement(Textarea, {
    placeholder: "placeholder",
    fullWidth: true
  })));
};

export default textareas;