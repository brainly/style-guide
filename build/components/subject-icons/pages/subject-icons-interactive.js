import React from 'react';
import SubjectIcon, { TYPE, SIZE, ICON_COLOR } from '../SubjectIcon';
import DocsActiveBlock from 'components/DocsActiveBlock';

var SubjectIcons = function SubjectIcons() {
  var settings = [{
    name: 'type',
    values: TYPE,
    required: true
  }, {
    name: 'size',
    values: SIZE
  }, {
    name: 'monoColor',
    values: ICON_COLOR
  }];
  return React.createElement("div", null, React.createElement(DocsActiveBlock, {
    settings: settings
  }, React.createElement(SubjectIcon, {
    type: TYPE.MATHEMATICS
  })), React.createElement(DocsActiveBlock, {
    settings: settings,
    backgroundColor: "dark"
  }, React.createElement(SubjectIcon, {
    type: TYPE.BIOLOGY,
    monoColor: ICON_COLOR.LIGHT
  })));
};

export default SubjectIcons;