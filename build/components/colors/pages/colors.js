import React from 'react';
import color from '../colors';
import DocsBlock from 'components/DocsBlock';

var colors = function colors() {
  return React.createElement("div", null, React.createElement(DocsBlock, {
    info: "Core colors"
  }, React.createElement("ol", {
    className: "colors-list"
  }, color.primary.map(function (_ref) {
    var name = _ref.name,
        variable = _ref.variable,
        hex = _ref.hex;
    return React.createElement("li", {
      className: "color-box",
      style: {
        background: "#".concat(hex)
      },
      key: name
    }, React.createElement("span", {
      className: "color-box__name"
    }, name, " / #", hex), React.createElement("span", {
      className: "color-box__variable"
    }, variable));
  }))), React.createElement(DocsBlock, {
    info: "Additional colors"
  }, React.createElement("ol", {
    className: "colors-list"
  }, color.secondary.map(function (_ref2) {
    var name = _ref2.name,
        variable = _ref2.variable,
        hex = _ref2.hex;
    return React.createElement("li", {
      className: "color-box",
      style: {
        background: "#".concat(hex)
      },
      key: name
    }, React.createElement("span", {
      className: "color-box__name"
    }, name, " / #", hex), React.createElement("span", {
      className: "color-box__variable"
    }, variable));
  }))), React.createElement(DocsBlock, {
    info: "Neutrals"
  }, React.createElement("ol", {
    className: "colors-list"
  }, color.gray.map(function (_ref3) {
    var name = _ref3.name,
        variable = _ref3.variable,
        hex = _ref3.hex;
    return React.createElement("li", {
      className: "color-box",
      style: {
        background: "#".concat(hex)
      },
      key: name
    }, React.createElement("span", {
      className: "color-box__name"
    }, name, " / #", hex), React.createElement("span", {
      className: "color-box__variable"
    }, variable));
  }))));
};

export default colors;