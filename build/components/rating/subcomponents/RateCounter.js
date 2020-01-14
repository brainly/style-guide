import React from 'react';
import RateCounterItem from './RateCounterItem';

var RateCounter = function RateCounter(_ref) {
  var activeText = _ref.activeText,
      counterText = _ref.counterText;
  return React.createElement("div", {
    className: "sg-rate-box__counter"
  }, React.createElement(RateCounterItem, {
    text: counterText
  }), React.createElement(RateCounterItem, {
    text: activeText
  }));
};

export default RateCounter;