import React from 'react';
import Navigation from './Navigation';
import Head from './Head';
import navigation from '../navigation';
import packageJSON from '../../../package.json';
import site from '../config';
var version = packageJSON.version;

var ItemsPage = function ItemsPage(_ref) {
  var children = _ref.children;
  return React.createElement("html", null, React.createElement(Head, {
    site: site
  }), React.createElement("body", null, React.createElement(Navigation, {
    navigation: navigation,
    version: version
  }), React.createElement("div", {
    className: "data-container"
  }, children)));
};

export default ItemsPage;