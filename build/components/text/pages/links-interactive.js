import React from 'react';
import Link, { LINK_SIZE, LINK_COLOR, LINK_WEIGHT } from 'text/Link';
import DocsActiveBlock from 'components/DocsActiveBlock';

var Links = function Links() {
  var settings = [{
    name: 'size',
    values: LINK_SIZE
  }, {
    name: 'color',
    values: LINK_COLOR
  }, {
    name: 'href',
    values: String
  }, {
    name: 'weight',
    values: LINK_WEIGHT
  }, {
    name: 'underlined',
    values: Boolean
  }];
  return React.createElement("div", null, React.createElement(DocsActiveBlock, {
    settings: settings
  }, React.createElement(Link, null, "Comments (9)")), React.createElement(DocsActiveBlock, {
    settings: settings
  }, React.createElement(Link, {
    href: "#",
    color: LINK_COLOR.MINT,
    size: LINK_SIZE.SMALL,
    weight: LINK_WEIGHT.REGULAR
  }, "Terms of use")));
};

export default Links;