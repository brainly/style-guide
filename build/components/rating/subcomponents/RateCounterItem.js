import React from 'react';

var RateCounterItem = function RateCounterItem(_ref) {
  var text = _ref.text;
  return React.createElement(React.Fragment, null, React.createElement("div", {
    className: "sg-rate-box__counter-item-static"
  }, text), React.createElement("div", {
    className: "sg-rate-box__counter-item-dynamic"
  }, text));
};

export default RateCounterItem;