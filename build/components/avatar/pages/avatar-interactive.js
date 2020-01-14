import React from 'react';
import Avatar, { SIZE } from '../Avatar';
import DocsActiveBlock from 'components/DocsActiveBlock';

var Avatars = function Avatars() {
  var settings = [{
    name: 'size',
    values: SIZE
  }, {
    name: 'border',
    values: Boolean
  }, {
    name: 'spaced',
    values: Boolean
  }, {
    name: 'imgSrc',
    values: String
  }];
  return React.createElement("div", null, React.createElement(DocsActiveBlock, {
    settings: settings
  }, React.createElement(Avatar, {
    size: SIZE.LARGE
  })), React.createElement(DocsActiveBlock, {
    settings: settings
  }, React.createElement(Avatar, {
    imgSrc: "https://source.unsplash.com/240x240/?cat"
  })));
};

export default Avatars;