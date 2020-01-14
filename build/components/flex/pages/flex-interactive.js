import React from 'react';
import Flex, { FLEX_DIRECTION, FLEX_JUSTIFY_VALUES, FLEX_ALIGNMENT_VALUES, FLEX_MARGINS } from '../Flex';
import Box, { COLOR } from '../../box/Box';
import queryString from 'query-string';
import DocsActiveBlock from 'components/DocsActiveBlock';
var urlParams = location.hash === '#flexbox' ? queryString.parse(location.search) : {};

var Flexboxes = function Flexboxes() {
  var settings = [{
    name: 'fullWidth',
    values: Boolean
  }, {
    name: 'fullHeight',
    values: Boolean
  }, {
    name: 'noShrink',
    values: Boolean
  }, {
    name: 'inlineFlex',
    values: Boolean
  }, {
    name: 'wrap',
    values: Boolean
  }, {
    name: 'wrapReverse',
    values: Boolean
  }, {
    name: 'direction',
    values: FLEX_DIRECTION
  }, {
    name: 'justifyContent',
    values: FLEX_JUSTIFY_VALUES
  }, {
    name: 'alignItems',
    values: FLEX_ALIGNMENT_VALUES
  }, {
    name: 'alignContent',
    values: FLEX_ALIGNMENT_VALUES
  }, {
    name: 'alignSelf',
    values: FLEX_ALIGNMENT_VALUES
  }, {
    name: 'margin',
    values: FLEX_MARGINS
  }];
  return React.createElement("div", null, React.createElement(DocsActiveBlock, {
    settings: settings
  }, React.createElement(Flex, urlParams, React.createElement(Flex, null, React.createElement(Box, {
    color: COLOR.BLUE
  }, "This is a box 1.")), React.createElement(Flex, null, React.createElement(Box, {
    color: COLOR.BLUE
  }, "This is a box 2.")))));
};

export default Flexboxes;