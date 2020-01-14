import React from 'react';
import DocsBlock from 'components/DocsBlock';
import ContrastBox from 'components/ContrastBox';
import SubjectIcon, { TYPE, ICON_COLOR } from '../SubjectIcon';

var subjectMonoIcons = function subjectMonoIcons() {
  return React.createElement("div", null, React.createElement(DocsBlock, null, React.createElement(ContrastBox, null, React.createElement("ul", {
    className: "icons-list"
  }, Object.values(TYPE).map(function (type) {
    return React.createElement("li", {
      className: "icons-list__element icons-list__element--wide",
      key: type
    }, React.createElement(SubjectIcon, {
      type: type,
      monoColor: ICON_COLOR.LIGHT
    }), React.createElement("span", {
      className: "icons-list__element-info"
    }, "\xA0 - ", type));
  })))));
};

export default subjectMonoIcons;