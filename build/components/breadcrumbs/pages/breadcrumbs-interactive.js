import React from 'react';
import DocsActiveBlock from 'components/DocsActiveBlock';
import Breadcrumb from '../Breadcrumb';
import Text, { TEXT_COLOR } from 'text/Text';
var elements = ['Comments (9)', 'Report', 'Follow'];

var Breadcrumbs = function Breadcrumbs() {
  var settings = [{
    name: 'short',
    values: Boolean
  }, {
    name: 'adaptive',
    values: Boolean
  }];
  return React.createElement("div", null, React.createElement(DocsActiveBlock, {
    settings: settings,
    wrapper: React.createElement(Text, {
      color: TEXT_COLOR.MINT
    }),
    contentAfter: " Lorem Ipsum",
    contentBefore: "Lorem Ipsum "
  }, React.createElement(Breadcrumb, {
    elements: elements
  })));
};

export default Breadcrumbs;