import React from 'react';
import DocsBlock from 'components/DocsBlock';

var Layouts = function Layouts() {
  return React.createElement("div", null, React.createElement(DocsBlock, {
    info: "small screen"
  }, React.createElement("iframe", {
    height: "568",
    width: "360",
    src: "components/layout/layout_small.html"
  })), React.createElement(DocsBlock, {
    info: "medium screen"
  }, React.createElement("iframe", {
    height: "568",
    width: "800",
    src: "components/layout/layout_medium.html"
  })), React.createElement(DocsBlock, {
    info: "large screen"
  }, React.createElement("iframe", {
    height: "568",
    width: "1100",
    src: "components/layout/layout_large.html"
  })), React.createElement(DocsBlock, {
    info: "reversed-order large screen"
  }, React.createElement("iframe", {
    height: "568",
    width: "1100",
    src: "components/layout/layout_reversed_order.html"
  })), React.createElement(DocsBlock, {
    info: "reversed-order medium screen"
  }, React.createElement("iframe", {
    height: "568",
    width: "800",
    src: "components/layout/layout_reversed_order.html"
  })), React.createElement(DocsBlock, {
    info: "wide + three-columns"
  }, React.createElement("iframe", {
    height: "568",
    width: "1100",
    src: "components/layout/layout_three_columns.html"
  })), React.createElement(DocsBlock, {
    info: "one column center content large screen"
  }, React.createElement("iframe", {
    height: "568",
    width: "1100",
    src: "components/layout/layout_one_column_center.html"
  })));
};

export default Layouts;