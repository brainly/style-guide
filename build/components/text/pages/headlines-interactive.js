import React from 'react';
import Headline, { HEADLINE_TYPE, HEADLINE_SIZE, HEADLINE_COLOR, HEADLINE_TRANSFORM, HEADLINE_ALIGN } from '../Headline';
import DocsActiveBlock from 'components/DocsActiveBlock';

var Headlines = function Headlines() {
  var settings = [{
    name: 'type',
    values: HEADLINE_TYPE
  }, {
    name: 'size',
    values: HEADLINE_SIZE
  }, {
    name: 'color',
    values: HEADLINE_COLOR
  }, {
    name: 'transform',
    values: HEADLINE_TRANSFORM
  }, {
    name: 'align',
    values: HEADLINE_ALIGN
  }, {
    name: 'extraBold',
    values: Boolean
  }];
  return React.createElement("div", null, React.createElement(DocsActiveBlock, {
    settings: settings
  }, React.createElement(Headline, null, "Lorem Ipsum")), React.createElement(DocsActiveBlock, {
    settings: settings,
    backgroundColor: "dark"
  }, React.createElement(Headline, {
    type: HEADLINE_TYPE.H2,
    size: HEADLINE_SIZE.SMALL,
    color: HEADLINE_COLOR.WHITE
  }, "We've got your back!")));
};

export default Headlines;