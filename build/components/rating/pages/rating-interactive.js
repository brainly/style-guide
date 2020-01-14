import React from 'react';
import DocsActiveBlock from 'components/DocsActiveBlock';
import Rating, { RATING_SIZE } from '../Rating';

var Ratings = function Ratings() {
  var settings = [{
    name: 'active',
    values: Boolean
  }, {
    name: 'size',
    values: RATING_SIZE
  }, {
    name: 'altLabels',
    values: Boolean
  }, {
    name: 'rate',
    values: Number
  }, {
    name: 'metricSize',
    values: Number
  }, {
    name: 'counterText',
    values: String
  }, {
    name: 'activeText',
    values: String
  }, {
    name: 'noLabel',
    values: Boolean
  }];
  return React.createElement("div", null, React.createElement(DocsActiveBlock, {
    settings: settings
  }, React.createElement(Rating, {
    rate: 2.4,
    counterText: "34 votes",
    activeText: "Rate!"
  })));
};

export default Ratings;