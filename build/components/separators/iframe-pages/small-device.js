import React from 'react';
import Avatar, { SIZE } from 'avatar/Avatar';
import SeparatorHorizontal, { TYPE } from '../SeparatorHorizontal';

var SmallDeviceExample = function SmallDeviceExample() {
  return React.createElement("html", {
    lang: "en"
  }, React.createElement("head", null, React.createElement("link", {
    rel: "stylesheet",
    href: "../../../style-guide.css"
  })), React.createElement("body", null, React.createElement("script", {
    src: "images/icons.js"
  }), React.createElement("div", null, React.createElement(Avatar, {
    size: SIZE.SMALL
  }), React.createElement(SeparatorHorizontal, {
    type: TYPE.SPACED
  }), React.createElement(Avatar, {
    size: SIZE.SMALL
  }), React.createElement(Avatar, {
    size: SIZE.SMALL
  }), React.createElement(SeparatorHorizontal, {
    type: TYPE.SHORT_SPACED
  }), React.createElement(Avatar, {
    size: SIZE.SMALL
  }))));
};

export default SmallDeviceExample;