import React from 'react';
import LabelDeprecated, { SIZE, ICON_TYPE, ICON_COLOR } from '../LabelDeprecated';
import Checkbox from 'form-elements/Checkbox';
import DocsActiveBlock from 'components/DocsActiveBlock';

var LabelsDeprecated = function LabelsDeprecated() {
  var settings = [{
    name: 'size',
    values: SIZE
  }, {
    name: 'iconType',
    values: ICON_TYPE
  }, {
    name: 'iconColor',
    values: ICON_COLOR
  }, {
    name: 'text',
    values: String
  }, {
    name: 'number',
    values: Number
  }, {
    name: 'secondary',
    values: Boolean
  }, {
    name: 'emphasised',
    values: Boolean
  }, {
    name: 'unstyled',
    values: Boolean
  }, {
    name: 'elementsToTop',
    values: Boolean
  }];
  return React.createElement("div", null, React.createElement(DocsActiveBlock, {
    settings: settings
  }, React.createElement(LabelDeprecated, {
    text: "Search",
    iconType: ICON_TYPE.SEARCH,
    iconColor: ICON_COLOR.GRAY
  })), React.createElement(DocsActiveBlock, {
    settings: settings
  }, React.createElement(LabelDeprecated, {
    text: "Edit",
    size: SIZE.LARGE,
    iconType: ICON_TYPE.PENCIL,
    iconColor: ICON_COLOR.LAVENDER,
    emphasised: true,
    secondary: true
  })), React.createElement(DocsActiveBlock, {
    settings: settings
  }, React.createElement(LabelDeprecated, {
    size: SIZE.LARGE,
    text: "Check me!",
    htmlFor: "checkbox-1",
    iconContent: React.createElement(Checkbox, {
      id: "checkbox-1"
    })
  })));
};

export default LabelsDeprecated;