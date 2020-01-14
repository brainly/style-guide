import React from 'react';
import DocsBlock from 'components/DocsBlock';
import ContrastBox from 'components/ContrastBox';
import MathSymbol, { MATH_SYMBOL_TYPE, ICON_COLOR } from '../MathSymbol';

var MathSymbols = function MathSymbols() {
  return React.createElement("div", null, React.createElement(DocsBlock, null, React.createElement(ContrastBox, null, React.createElement("ul", {
    className: "icons-list"
  }, Object.values(MATH_SYMBOL_TYPE).map(function (type) {
    return React.createElement("li", {
      className: "icons-list__element",
      key: type
    }, React.createElement(MathSymbol, {
      type: type,
      color: ICON_COLOR.LIGHT
    }), React.createElement("span", {
      className: "icons-list__element-info"
    }, "\xA0 - ", type));
  })))));
};

export default MathSymbols;