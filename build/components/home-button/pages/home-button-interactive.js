import React from 'react';
import HomeButton, { TYPE } from '../HomeButton';
import DocsActiveBlock from 'components/DocsActiveBlock';

var HomeButtons = function HomeButtons() {
  var settings = [{
    name: 'type',
    values: TYPE
  }, {
    name: 'href',
    values: String
  }];
  return React.createElement("div", null, React.createElement(DocsActiveBlock, {
    settings: settings
  }, React.createElement(HomeButton, {
    href: "https://brainly.com"
  })));
};

export default HomeButtons;