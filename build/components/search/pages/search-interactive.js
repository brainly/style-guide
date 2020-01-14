import React from 'react';
import Search, { SIZE, COLOR } from '../Search';
import DocsActiveBlock from 'components/DocsActiveBlock';

var SearchInputs = function SearchInputs() {
  var settings = [{
    name: 'size',
    values: SIZE
  }, {
    name: 'color',
    values: COLOR
  }, {
    name: 'value',
    values: String
  }, {
    name: 'placeholder',
    values: String
  }, {
    name: 'fullWidth',
    values: Boolean
  }, {
    name: 'withRoundButton',
    values: Boolean
  }];
  return React.createElement(DocsActiveBlock, {
    backgroundColor: "dark",
    settings: settings,
    wrapper: React.createElement("div", null)
  }, React.createElement(Search, {
    placeholder: "Find all the answers...",
    size: SIZE.NORMAL,
    color: COLOR.DEFAULT
  }));
};

export default SearchInputs;