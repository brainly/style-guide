import React from 'react';
import DocsActiveBlock from 'components/DocsActiveBlock';
import Dropdown from '../DropdownContainer';
var item1st = {
  id: 'dd-item-1',
  text: '1st item'
};
var item2nd = {
  id: 'dd-item-2',
  text: '2nd item'
};
var item3rd = {
  id: 'dd-item-3',
  text: '3rd item'
};
var defaultItems = [item1st, item2nd, item3rd];

var Dropdowns = function Dropdowns() {
  var settings = [{
    name: 'fixed',
    values: Boolean
  }, {
    name: 'isOpened',
    values: Boolean
  }, {
    name: 'fullWidth',
    values: Boolean
  }, {
    name: 'label',
    values: String
  }];
  return React.createElement("div", null, React.createElement(DocsActiveBlock, {
    settings: settings,
    contentBefore: "Lorem Ipsum",
    contentAfter: "Lorem ipsum",
    wrapper: React.createElement("div", null)
  }, React.createElement(Dropdown, {
    items: defaultItems,
    label: "Pick one\u2026"
  })));
};

export default Dropdowns;