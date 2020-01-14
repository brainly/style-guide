import React from 'react';
import Text from '../Text';
import { TEXT_COLOR, TEXT_SIZE, TEXT_WEIGHT, TEXT_TYPE, TEXT_TRANSFORM, TEXT_ALIGN } from 'text/textConsts';
import DocsActiveBlock from 'components/DocsActiveBlock';

var Texts = function Texts() {
  var settings = [{
    name: 'type',
    values: TEXT_TYPE
  }, {
    name: 'size',
    values: TEXT_SIZE
  }, {
    name: 'color',
    values: TEXT_COLOR
  }, {
    name: 'weight',
    values: TEXT_WEIGHT
  }, {
    name: 'transform',
    values: TEXT_TRANSFORM
  }, {
    name: 'align',
    values: TEXT_ALIGN
  }, {
    name: 'noWrap',
    values: Boolean
  }, {
    name: 'full',
    values: Boolean
  }, {
    name: 'breakWords',
    values: Boolean
  }];
  return React.createElement("div", null, React.createElement(DocsActiveBlock, {
    settings: settings
  }, React.createElement(Text, null, "Lorem Ipsum")));
};

export default Texts;