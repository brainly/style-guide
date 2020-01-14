import React from 'react';
import Search from '../Search';
import DocsBlock from 'components/DocsBlock';
import ContrastBox from 'components/ContrastBox';
import Flex from '../../flex/Flex';

var searches = function searches() {
  return React.createElement("div", null, React.createElement(DocsBlock, {
    info: "Default and white"
  }, React.createElement(Flex, null, React.createElement(Flex, {
    direction: "column",
    marginRight: "l"
  }, React.createElement("div", null, React.createElement(Search, {
    placeholder: "Find all the answers..."
  })), React.createElement("br", null), React.createElement("br", null), React.createElement(Search, {
    size: "large",
    placeholder: "Find all the answers..."
  }), React.createElement("br", null), React.createElement("br", null)), React.createElement(Flex, {
    direction: "column"
  }, React.createElement(ContrastBox, {
    fullWidth: true
  }, React.createElement(Search, {
    color: "white",
    placeholder: "Find all the answers..."
  }), React.createElement("br", null), React.createElement("br", null), React.createElement(Search, {
    color: "white",
    size: "large",
    placeholder: "Find all the answers..."
  }), React.createElement("br", null), React.createElement("br", null))))), React.createElement(DocsBlock, {
    info: "Search with round button"
  }, React.createElement(Flex, null, React.createElement(Flex, {
    direction: "column",
    marginRight: "l"
  }, React.createElement(Search, {
    placeholder: "Find all the answers...",
    withRoundButton: true
  }), React.createElement("br", null), React.createElement("br", null), React.createElement(Search, {
    placeholder: "Find all the answers...",
    withRoundButton: true,
    size: "large"
  }), React.createElement("br", null), React.createElement("br", null)), React.createElement(Flex, {
    direction: "column"
  }, React.createElement(ContrastBox, {
    fullWidth: true
  }, React.createElement(Search, {
    color: "white",
    placeholder: "Find all the answers...",
    fullWidth: true,
    withRoundButton: true
  }), React.createElement("br", null), React.createElement("br", null), React.createElement(Search, {
    color: "white",
    placeholder: "Find all the answers...",
    withRoundButton: true,
    size: "large"
  }), React.createElement("br", null), React.createElement("br", null))))));
};

export default searches;