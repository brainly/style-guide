import React from 'react';
import SubjectIconBox, { TYPE, SIZE } from '../SubjectIconBox';
import DocsActiveBlock from 'components/DocsActiveBlock';

var Subjects = function Subjects() {
  var settingsBox = [{
    name: 'type',
    values: TYPE,
    required: true
  }, {
    name: 'size',
    values: SIZE
  }, {
    name: 'darker',
    values: Boolean
  }];
  return React.createElement("div", null, React.createElement(DocsActiveBlock, {
    settings: settingsBox
  }, React.createElement(SubjectIconBox, {
    type: TYPE.ARTMUSIC
  })));
};

export default Subjects;