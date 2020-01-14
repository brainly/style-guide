import React from 'react';
import DocsBlock from 'components/DocsBlock';
import SubjectIcon, { TYPE } from '../SubjectIcon';

var subjectIcons = function subjectIcons() {
  return React.createElement("div", null, React.createElement(DocsBlock, null, React.createElement("ul", {
    className: "icons-list"
  }, Object.values(TYPE).map(function (type) {
    return React.createElement("li", {
      className: "icons-list__element icons-list__element--wide",
      key: type
    }, React.createElement(SubjectIcon, {
      type: type
    }), React.createElement("span", {
      className: "icons-list__element-info"
    }, "\xA0 - ", type));
  }))));
};

export default subjectIcons;