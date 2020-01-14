import React from 'react';
import DocsActiveBlock from 'components/DocsActiveBlock';
import Layout from '../Layout';
import LayoutBox from '../LayoutBox';
import LayoutContent from '../LayoutContent';
import LayoutAsideContent from '../LayoutAsideContent';
import LayoutSecondaryContent from '../LayoutSecondaryContent';
import Text from 'text/Text';

var Layouts = function Layouts() {
  var settings = [{
    name: 'reversedOrder',
    values: Boolean
  }, {
    name: 'noMaxWidth',
    values: Boolean
  }, {
    name: 'noMarginTop',
    values: Boolean
  }, {
    name: 'fullPage',
    values: Boolean
  }, {
    name: 'threeColumns',
    values: Boolean
  }, {
    name: 'wide',
    values: Boolean
  }];
  var header = React.createElement("div", {
    className: "sg-header"
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
  return React.createElement("div", null, React.createElement(DocsActiveBlock, {
    settings: settings,
    centeredItems: false,
    backgroundColor: "dark"
  }, React.createElement(Layout, {
    header: header,
    footer: footer
  }, React.createElement(LayoutSecondaryContent, null, React.createElement(Text, null, "Secondary content has no padding and no background")), React.createElement(LayoutContent, null, React.createElement(LayoutBox, null, React.createElement(Text, null, "Main content has has no padding and no background (given by LayoutBox)"))), React.createElement(LayoutAsideContent, null, React.createElement(Text, null, "Aside content has has no padding and no background (given by LayoutBox)")))));
};

export default Layouts;