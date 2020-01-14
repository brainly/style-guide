import React from 'react';
import DocsBlock from 'components/DocsBlock';
import Counter from '../Counter';
import Text from '../../text/Text';

var Counters = function Counters() {
  return React.createElement("div", null, React.createElement(DocsBlock, {
    info: "Counter"
  }, React.createElement(Counter, null, "1"), React.createElement(Counter, null, "123455"), React.createElement(Counter, {
    withAnimation: true
  }, "12")), React.createElement(DocsBlock, {
    info: "Counter small"
  }, React.createElement(Counter, {
    size: "small"
  }, "5"), React.createElement(Counter, {
    size: "small"
  }, "55"), React.createElement(Counter, {
    size: "small",
    withAnimation: true
  }, "5")), React.createElement(DocsBlock, {
    info: "Counter with icon"
  }, React.createElement(Counter, {
    icon: "points"
  }, "+10", ' ', React.createElement(Text, {
    type: "span",
    size: "small",
    color: "gray-secondary",
    weight: "bold"
  }, "pts"))), React.createElement(DocsBlock, {
    info: "Counter small with icon"
  }, React.createElement(Counter, {
    icon: "points",
    size: "small"
  }, "+10")));
};

export default Counters;