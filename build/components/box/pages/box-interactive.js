import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import Box, { COLOR, PADDING } from '../Box';
import Button from 'buttons/Button';
import ContentBox from 'content-box/ContentBox';
import ContentBoxHeader from 'content-box/ContentBoxHeader';
import ContentBoxActions from 'content-box/ContentBoxActions';
import Headline, { HEADLINE_TYPE } from 'text/Headline';
import queryString from 'query-string';
import DocsActiveBlock from 'components/DocsActiveBlock';
var urlParams = location.hash === '#boxes' ? queryString.parse(location.search) : {};

var Boxes = function Boxes() {
  var settings = [{
    name: 'color',
    values: COLOR
  }, {
    name: 'border',
    values: Boolean
  }, {
    name: 'shadow',
    values: Boolean
  }, {
    name: 'full',
    values: Boolean
  }, {
    name: 'noMinHeight',
    values: Boolean
  }, {
    name: 'padding',
    values: PADDING
  }, {
    name: 'imgSrc',
    values: String
  }, {
    name: 'noBorderRadius',
    values: Boolean
  }];
  return React.createElement("div", null, React.createElement(DocsActiveBlock, {
    settings: settings
  }, React.createElement(Box, urlParams, "This is a box.")), React.createElement(DocsActiveBlock, {
    settings: settings
  }, React.createElement(Box, _extends({
    imgSrc: "https://source.unsplash.com/144x144/?flower"
  }, urlParams))), React.createElement(DocsActiveBlock, {
    settings: settings
  }, React.createElement(Box, urlParams, React.createElement(ContentBox, null, React.createElement(ContentBoxHeader, null, React.createElement(Headline, {
    type: HEADLINE_TYPE.H3
  }, "Ask a question about a school subject")), React.createElement(ContentBoxActions, null, React.createElement(Button, {
    type: "primary-blue",
    wide: true
  }, "Ask your question"))))));
};

export default Boxes;