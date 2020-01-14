import React from 'react';
import DocsBlock from 'components/DocsBlock';
import { TYPE, ICON_COLOR, SIZE } from '../IconAsButton';
import Text from '../../text/Text';
import Link from '../../text/Link';
import Flex from '../../flex/Flex';
import DrawHelper from './DrawHelper';

var icons = function icons() {
  return React.createElement("div", null, React.createElement(Flex, {
    marginBottom: "m"
  }, React.createElement(Text, {
    color: "peach-dark"
  }, "This component is deprecated, please use", ' ', React.createElement(Link, {
    href: "./components.html#round-buttons"
  }, "Round buttons"), ' ', "instead")), React.createElement(DocsBlock, {
    info: "Normal"
  }, React.createElement("ul", {
    className: "icons-list"
  }, Object.values(ICON_COLOR).map(function (color) {
    return React.createElement(DrawHelper, {
      color: color,
      key: color,
      type: TYPE.HEART
    });
  }))), React.createElement(DocsBlock, {
    info: "Border"
  }, React.createElement("ul", {
    className: "icons-list"
  }, Object.values(ICON_COLOR).map(function (color) {
    return React.createElement(DrawHelper, {
      color: color,
      key: color,
      type: TYPE.HEART,
      border: true
    });
  }))), React.createElement(DocsBlock, {
    info: "Action"
  }, React.createElement("ul", {
    className: "icons-list"
  }, Object.values(ICON_COLOR).map(function (color) {
    return React.createElement(DrawHelper, {
      color: color,
      key: color,
      type: TYPE.HEART,
      action: true
    });
  }), Object.values(ICON_COLOR).map(function (color) {
    return React.createElement(DrawHelper, {
      color: color,
      key: color,
      type: TYPE.HEART,
      action: true,
      active: true
    });
  }))), React.createElement(DocsBlock, {
    info: "Action transparent"
  }, React.createElement("ul", {
    className: "icons-list"
  }, Object.values(ICON_COLOR).map(function (color) {
    return React.createElement(DrawHelper, {
      color: color,
      key: color,
      type: TYPE.HEART,
      transparent: true
    });
  }), Object.values(ICON_COLOR).map(function (color) {
    return React.createElement(DrawHelper, {
      color: color,
      key: color,
      type: TYPE.HEART,
      transparent: true,
      active: true
    });
  }))), React.createElement(DocsBlock, {
    info: "small"
  }, React.createElement("ul", {
    className: "icons-list"
  }, Object.values(ICON_COLOR).map(function (color) {
    return React.createElement(DrawHelper, {
      color: color,
      key: color,
      type: TYPE.HEART,
      size: SIZE.SMALL
    });
  }))), React.createElement(DocsBlock, {
    info: "xsmall"
  }, React.createElement("ul", {
    className: "icons-list"
  }, Object.values(ICON_COLOR).map(function (color) {
    return React.createElement(DrawHelper, {
      color: color,
      key: color,
      type: TYPE.HEART,
      size: SIZE.XSMALL
    });
  }))), React.createElement(DocsBlock, {
    info: "xxsmall"
  }, React.createElement("ul", {
    className: "icons-list"
  }, Object.values(ICON_COLOR).map(function (color) {
    return React.createElement(DrawHelper, {
      color: color,
      key: color,
      type: TYPE.HEART,
      size: SIZE.XXSMALL
    });
  }))));
};

export default icons;