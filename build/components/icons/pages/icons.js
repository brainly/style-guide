import React from 'react';
import DocsBlock from 'components/DocsBlock';
import Icon, { TYPE, ICON_COLOR, SIZE } from '../Icon';

var icons = function icons() {
  return React.createElement("div", null, React.createElement(DocsBlock, null, React.createElement("ul", {
    className: "icons-list"
  }, Object.values(TYPE).map(function (type) {
    return React.createElement("li", {
      className: "icons-list__element",
      key: type
    }, React.createElement(Icon, {
      size: 32,
      color: "dark",
      type: type
    }), React.createElement("span", null, "\xA0 - ", type));
  }))), React.createElement(DocsBlock, {
    info: "Sizes"
  }, React.createElement("ul", {
    className: "icons-list"
  }, SIZE.map(function (size) {
    return React.createElement("li", {
      className: "icons-list__element icons-list__element--wider",
      key: size
    }, React.createElement(Icon, {
      color: "dark",
      size: size,
      type: "answer"
    }), React.createElement("span", null, "\xA0 - ", size));
  }))), React.createElement(DocsBlock, {
    info: "Colors"
  }, React.createElement("ul", {
    className: "icons-list"
  }, Object.values(ICON_COLOR).map(function (color) {
    return React.createElement("li", {
      className: "icons-list__element",
      key: color
    }, React.createElement(Icon, {
      color: color,
      size: "46",
      type: "answer"
    }), React.createElement("span", null, "\xA0 - ", color));
  }))), React.createElement(DocsBlock, {
    info: "Custom SVG"
  }, React.createElement("ul", {
    className: "icons-list"
  }, React.createElement("li", {
    className: "icons-list__element"
  }, React.createElement(Icon, {
    color: "peach",
    size: "32"
  }, React.createElement("div", null, React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, React.createElement("path", {
    fillRule: "nonzero",
    d: "M8.45 1v4.84h3.57L6.5 18.74H2v4.85h12.9v-4.84h-3.56l5.52-12.9h4.5V1z"
  })))), React.createElement("span", null, "\xA0 - custom SVG")))));
};

export default icons;