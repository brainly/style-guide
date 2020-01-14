import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import Checkbox from '../Checkbox';
import DocsBlock from 'components/DocsBlock';
import LabelDeprecated from 'labels-deprecated/LabelDeprecated';
var dumpProps = {
  onChange: function onChange() {
    return undefined;
  }
};

var checkboxes = function checkboxes() {
  return React.createElement("div", null, React.createElement(DocsBlock, {
    info: "Checkboxes"
  }, React.createElement(Checkbox, null), React.createElement(Checkbox, _extends({
    checked: true
  }, dumpProps)), React.createElement("br", null), React.createElement(LabelDeprecated, {
    secondary: true,
    text: "Check me!",
    htmlFor: "checkbox-1",
    iconContent: React.createElement(Checkbox, {
      id: "checkbox-1"
    })
  }), React.createElement(LabelDeprecated, {
    secondary: true,
    text: "Check me!",
    htmlFor: "checkbox-2",
    emphasised: true,
    iconContent: React.createElement(Checkbox, {
      id: "checkbox-2"
    })
  })));
};

export default checkboxes;