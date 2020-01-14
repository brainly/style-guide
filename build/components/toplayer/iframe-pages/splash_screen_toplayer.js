import React from 'react';
import TopLayer from '../TopLayer';
import ContentBox from 'content-box/ContentBox';
import ContentBoxContent, { SIZE as SPACING_SIZE } from 'content-box/ContentBoxContent';
import ContentBoxActions from 'content-box/ContentBoxActions';
import Overlay from 'overlay/Overlay';
var content = React.createElement(ContentBox, null, React.createElement(ContentBoxContent, {
  spacedBottom: SPACING_SIZE.LARGE
}, "heading"), React.createElement(ContentBoxContent, {
  spacedBottom: SPACING_SIZE.LARGE
}, "content", React.createElement("br", null), "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse enim diam, dictum et maximus sit amet, pulvinar vel ante. Maecenas id tempus lacus. Cras vitae lectus vehicula, pretium odio sed, pretium nulla. Nunc ultrices nibhorci, sit amet gravida metus dapibus nec. Sed orci nisi, volutpat varius auctor sit amet, eleifend eu elit. Fusceeget nunc tristique nibh viverra lobortis. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."), React.createElement(ContentBoxActions, null, "actions"));

var SmallSpacedTopLayer = function SmallSpacedTopLayer() {
  return React.createElement("html", null, React.createElement("head", null, React.createElement("meta", {
    charSet: "utf-8"
  }), React.createElement("link", {
    rel: "stylesheet",
    href: "../../../style-guide.css"
  })), React.createElement("body", null, React.createElement(Overlay, null, React.createElement(TopLayer, {
    modal: true,
    splashScreen: true,
    limitedWidth: true
  }, content)), React.createElement("script", {
    src: "images/icons.js"
  })));
};

export default SmallSpacedTopLayer;