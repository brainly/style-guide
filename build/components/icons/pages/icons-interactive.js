import React from 'react';
import Icon, { TYPE, SIZE, ICON_COLOR } from '../Icon';
import DocsActiveBlock from 'components/DocsActiveBlock';

var Icons = function Icons() {
  var SIZE_OPTIONS = SIZE.reduce(function (result, item) {
    result[item] = item;
    return result;
  }, {});
  var settings = [{
    name: 'type',
    values: TYPE,
    required: true
  }, {
    name: 'size',
    values: SIZE_OPTIONS
  }, {
    name: 'color',
    values: ICON_COLOR
  }];
  return React.createElement("div", null, React.createElement(DocsActiveBlock, {
    settings: settings
  }, React.createElement(Icon, {
    type: "heart",
    color: "peach",
    size: 46
  })));
};

export default Icons;