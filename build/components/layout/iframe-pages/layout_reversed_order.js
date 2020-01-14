import React from 'react';
import Layout from '../Layout';
import LayoutBox from '../LayoutBox';
import LayoutContent from '../LayoutContent';
import LayoutAsideContent from '../LayoutAsideContent';
import Text from 'text/Text';
var header = React.createElement("div", {
  className: "sg-header sg-header--fixed"
}, React.createElement("div", {
  className: "sg-header__container"
}, React.createElement("div", {
  className: "sg-header__content"
}, "Header")));
var footer = React.createElement("div", {
  className: "sg-footer"
}, React.createElement("div", {
  className: "sg-footer__container"
}, "Footer"));

var LayoutReversedOrder = function LayoutReversedOrder() {
  return React.createElement("html", null, React.createElement("head", null, React.createElement("meta", {
    charSet: "utf-8"
  }), React.createElement("link", {
    rel: "stylesheet",
    href: "../../../style-guide.css"
  }), React.createElement("style", null, 'body {background-color: #f0f3f5;}')), React.createElement("body", null, React.createElement(Layout, {
    header: header,
    footer: footer,
    reversedOrder: true
  }, React.createElement(LayoutContent, null, React.createElement(Text, null, "Main content has no padding and no background")), React.createElement(LayoutAsideContent, null, React.createElement(LayoutBox, null, React.createElement(Text, null, "Aside content has no padding and no background (both are given by layout box)")))), React.createElement("script", {
    src: "images/icons.js"
  })));
};

export default LayoutReversedOrder;