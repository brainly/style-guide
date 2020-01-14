import React from 'react';
import RoundButton from '../RoundButton';
import DocsBlock from 'components/DocsBlock';

var RoundButtons = function RoundButtons() {
  return React.createElement(DocsBlock, null, React.createElement(DocsBlock, {
    info: "Round buttons"
  }, React.createElement(RoundButton, {
    size: "small",
    iconType: "answer",
    color: "black"
  }), "\xA0", React.createElement(RoundButton, {
    size: "medium",
    iconType: "answer",
    color: "blue"
  }), "\xA0", React.createElement(RoundButton, {
    size: "large",
    iconType: "answer",
    color: "mint"
  }), "\xA0", React.createElement(RoundButton, {
    size: "medium",
    iconType: "answer",
    color: "mustard"
  }), "\xA0", React.createElement(RoundButton, {
    size: "small",
    iconType: "answer",
    color: "peach"
  })), React.createElement(DocsBlock, {
    info: "Round buttons filled"
  }, React.createElement(RoundButton, {
    size: "small",
    iconType: "answer",
    filled: true,
    color: "black"
  }), "\xA0", React.createElement(RoundButton, {
    size: "medium",
    iconType: "answer",
    filled: true,
    color: "blue"
  }), "\xA0", React.createElement(RoundButton, {
    size: "large",
    iconType: "answer",
    filled: true,
    color: "mint"
  }), "\xA0", React.createElement(RoundButton, {
    size: "medium",
    iconType: "answer",
    filled: true,
    color: "mustard"
  }), "\xA0", React.createElement(RoundButton, {
    size: "small",
    iconType: "answer",
    filled: true,
    color: "peach"
  })));
};

export default RoundButtons;