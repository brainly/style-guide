import React from 'react';
import DocsBlock from 'components/DocsBlock';
import Rating, { RATING_SIZE } from '../Rating';

var ratings = function ratings() {
  return React.createElement("div", null, React.createElement(DocsBlock, {
    info: "Default"
  }, React.createElement(Rating, {
    rate: 3,
    counter: 34
  })), React.createElement(DocsBlock, {
    info: "Active"
  }, React.createElement(Rating, {
    rate: 3,
    active: true,
    counter: 34
  })), React.createElement(DocsBlock, {
    info: "Active with counters"
  }, React.createElement(Rating, {
    rate: 3,
    active: true,
    counter: 34,
    counterText: "Hover to rate",
    activeText: "Rate me!"
  })), React.createElement(DocsBlock, {
    info: "Active without label"
  }, React.createElement(Rating, {
    rate: 3,
    active: true,
    counter: 34,
    noLabel: true
  })), React.createElement(DocsBlock, {
    info: "Large"
  }, React.createElement(Rating, {
    rate: 3,
    size: RATING_SIZE.LARGE,
    counter: 34
  })), React.createElement(DocsBlock, {
    info: "Large Active with alt labels"
  }, React.createElement(Rating, {
    rate: 3,
    size: RATING_SIZE.LARGE,
    altLabels: true,
    active: true,
    counter: 34,
    counterText: "Hover to rate",
    activeText: "Rate me!"
  })));
};

export default ratings;