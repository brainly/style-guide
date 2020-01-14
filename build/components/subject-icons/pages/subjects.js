import React from 'react';
import DocsBlock from 'components/DocsBlock';
import ContrastBox from 'components/ContrastBox';
import SubjectIcon, { TYPE, SIZE } from '../SubjectIcon';
import SubjectIconBox from '../SubjectIconBox';

var Subjects = function Subjects() {
  return React.createElement("div", null, React.createElement(DocsBlock, {
    info: "Medium"
  }, React.createElement(ContrastBox, null, Object.values(TYPE).map(function (type) {
    return React.createElement(SubjectIcon, {
      key: type,
      type: type,
      size: SIZE.MEDIUM
    });
  }))), React.createElement(DocsBlock, {
    info: "Small"
  }, React.createElement(ContrastBox, null, Object.values(TYPE).map(function (type) {
    return React.createElement(SubjectIcon, {
      key: type,
      type: type,
      size: SIZE.SMALL
    });
  }))), React.createElement(DocsBlock, {
    info: "Subject icon box"
  }, React.createElement(SubjectIconBox, {
    type: TYPE.LIFE_SCIENCE
  }), React.createElement(SubjectIconBox, {
    type: TYPE.LIFE_SCIENCE,
    size: SIZE.MEDIUM
  }), React.createElement(SubjectIconBox, {
    type: TYPE.LIFE_SCIENCE,
    size: SIZE.SMALL
  }), React.createElement("br", null), React.createElement(SubjectIconBox, {
    type: TYPE.LIFE_SCIENCE,
    darker: true
  }), React.createElement(SubjectIconBox, {
    type: TYPE.LIFE_SCIENCE,
    size: SIZE.MEDIUM,
    darker: true
  }), React.createElement(SubjectIconBox, {
    type: TYPE.LIFE_SCIENCE,
    size: SIZE.SMALL,
    darker: true
  })));
};

export default Subjects;