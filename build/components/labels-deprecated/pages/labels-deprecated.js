import React from 'react';
import DocsBlock from 'components/DocsBlock';
import LabelDeprecated, { ICON_COLOR, ICON_TYPE, SIZE } from '../LabelDeprecated';
var longText = 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.';
var multilineExample1 = "This is a multiline example with icon in the middle (default behaviur). ".concat(longText);
var multilineExample2 = "This is a multiline example with icon aligned to top. ".concat(longText);

var LabelsDeprecated = function LabelsDeprecated() {
  return React.createElement("div", null, React.createElement(DocsBlock, {
    info: "Default"
  }, React.createElement(LabelDeprecated, {
    text: "Default label",
    iconType: ICON_TYPE.SEARCH,
    iconColor: ICON_COLOR.GRAY
  }), React.createElement(LabelDeprecated, {
    text: "Unstyled label",
    iconType: ICON_TYPE.PENCIL,
    iconColor: ICON_COLOR.LAVENDER,
    unstyled: true
  }), React.createElement(LabelDeprecated, {
    text: "Mark as brainliest",
    iconType: ICON_TYPE.EXCELLENT,
    iconColor: ICON_COLOR.MUSTARD,
    emphasised: true
  }), React.createElement(LabelDeprecated, {
    text: "Thank you",
    number: 21,
    iconType: ICON_TYPE.HEART,
    iconColor: ICON_COLOR.PEACH,
    emphasised: true,
    secondary: true
  }), React.createElement("div", {
    style: {
      maxWidth: "".concat(250, "px")
    }
  }, React.createElement(LabelDeprecated, {
    text: multilineExample1,
    iconType: ICON_TYPE.SEARCH,
    iconColor: ICON_COLOR.GRAY
  }), React.createElement("br", null), React.createElement(LabelDeprecated, {
    text: multilineExample2,
    iconType: ICON_TYPE.SEARCH,
    iconColor: ICON_COLOR.GRAY,
    elementsToTop: true
  }))), React.createElement(DocsBlock, {
    info: "Small"
  }, React.createElement(LabelDeprecated, {
    text: "Mark as brainliest",
    size: SIZE.SMALL,
    iconType: ICON_TYPE.EXCELLENT,
    iconColor: ICON_COLOR.MUSTARD,
    emphasised: true
  }), React.createElement(LabelDeprecated, {
    text: "Thank you",
    number: 21,
    size: SIZE.SMALL,
    iconType: ICON_TYPE.HEART,
    iconColor: ICON_COLOR.PEACH,
    emphasised: true,
    secondary: true
  })), React.createElement(DocsBlock, {
    info: "Large"
  }, React.createElement(LabelDeprecated, {
    text: "Mark as brainliest",
    size: SIZE.LARGE,
    iconType: ICON_TYPE.EXCELLENT,
    iconColor: ICON_COLOR.MUSTARD
  }), React.createElement(LabelDeprecated, {
    text: "Thank you",
    number: 21,
    size: SIZE.LARGE,
    iconType: ICON_TYPE.HEART,
    iconColor: ICON_COLOR.PEACH,
    secondary: true
  })));
};

export default LabelsDeprecated;