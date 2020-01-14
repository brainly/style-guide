import React from 'react';
import Label, { ICON_TYPE, LABEL_COLORS_SET, LABEL_TYPE } from '../Label';
import DocsActiveBlock from 'components/DocsActiveBlock';

var Labels = function Labels() {
  var settings = [{
    name: 'type',
    values: LABEL_TYPE
  }, {
    name: 'color',
    values: LABEL_COLORS_SET
  }, {
    name: 'iconType',
    values: ICON_TYPE
  }, {
    name: 'onClose',
    values: Boolean
  }];
  return React.createElement("div", null, React.createElement(DocsActiveBlock, {
    settings: settings
  }, React.createElement(Label, {
    iconType: ICON_TYPE.HEART,
    color: LABEL_COLORS_SET.BLUE,
    type: LABEL_TYPE.DEFAULT
  }, "label")));
};

export default Labels;