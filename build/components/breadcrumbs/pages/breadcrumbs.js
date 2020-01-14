import React from 'react';
import DocsBlock from 'components/DocsBlock';
import Breadcrumb from '../Breadcrumb';
import Text, { TEXT_COLOR } from 'text/Text';
var elements = ['Comments (9)', 'Report', 'Follow'];

var breadcrumbs = function breadcrumbs() {
  return React.createElement("div", null, React.createElement(DocsBlock, {
    info: "Default"
  }, React.createElement(Breadcrumb, {
    elements: elements
  })), React.createElement(DocsBlock, {
    info: "Short"
  }, React.createElement(Breadcrumb, {
    elements: elements,
    short: true
  })), React.createElement(DocsBlock, {
    info: "Adaptive"
  }, React.createElement(Text, {
    color: TEXT_COLOR.MINT
  }, React.createElement(Breadcrumb, {
    elements: elements,
    adaptive: true
  }))));
};

export default breadcrumbs;