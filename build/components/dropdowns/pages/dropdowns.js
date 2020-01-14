import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import Dropdown from '../DropdownContainer';
import DocsBlock from 'components/DocsBlock';
import ContrastBox from 'components/ContrastBox';
var item1st = {
  id: 'csdsd',
  text: '1st item'
};
var item2nd = {
  id: 'sdfsdfg',
  text: '2nd item'
};
var item3rd = {
  id: 'fdpks',
  text: '3rd item'
};
var defaultItems = [item1st, item2nd, item3rd];
var defaultLabel = 'default Label';
var defaultProps = {
  items: defaultItems,
  label: defaultLabel
};

var Dropdowns = function Dropdowns() {
  return React.createElement("div", null, React.createElement(DocsBlock, {
    info: "Closed",
    multiContent: [React.createElement(Dropdown, _extends({
      key: 1
    }, defaultProps, {
      fullWidth: false
    })), React.createElement(Dropdown, _extends({
      key: 2
    }, defaultProps))]
  }), React.createElement(DocsBlock, {
    info: "Open",
    multiContent: [React.createElement("div", {
      key: 1,
      style: {
        height: '120px'
      }
    }, React.createElement(ContrastBox, null, React.createElement(Dropdown, _extends({}, defaultProps, {
      isOpened: true,
      fullWidth: false
    })))), React.createElement(ContrastBox, {
      key: 2
    }, React.createElement(Dropdown, _extends({}, defaultProps, {
      isOpened: true
    })))]
  }), React.createElement(DocsBlock, {
    info: "Fixed",
    additionalInfo: "(items extend div)",
    multiContent: [React.createElement(ContrastBox, {
      key: 1
    }, React.createElement(Dropdown, _extends({}, defaultProps, {
      fixed: true,
      isOpened: true,
      fullWidth: false
    }))), React.createElement(ContrastBox, {
      key: 2
    }, React.createElement(Dropdown, _extends({}, defaultProps, {
      fixed: true,
      isOpened: true
    })))]
  }));
};

export default Dropdowns;