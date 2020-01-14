import * as React from 'react';
import Navigation from './Navigation';
import Head from './Head';
import navigation from '../navigation';
import packageJSON from '../../../package.json';
import site from '../config';
var version = packageJSON.version;

var ItemsInteractivePage = function ItemsInteractivePage(_ref) {
  var navigationIdx = _ref.navigationIdx,
      rootNodeToBeRemovedAfterFullWebpackMigration = _ref.rootNodeToBeRemovedAfterFullWebpackMigration;
  var pageConfig = navigation[navigationIdx];
  return React.createElement("html", null, React.createElement(Head, {
    page: pageConfig,
    site: site
  }), React.createElement("body", null, React.createElement("script", {
    src: "images/icons.js",
    async: true
  }), React.createElement("script", {
    src: "images/icons.js",
    async: true
  }), React.createElement("script", {
    src: "images/subjects-icons.js",
    async: true
  }), React.createElement("script", {
    src: "images/subjects-mono-icons.js",
    async: true
  }), React.createElement("script", {
    src: "images/math-symbols-icons.js",
    async: true
  }), React.createElement("script", {
    src: "https://cdnjs.cloudflare.com/ajax/libs/js-beautify/1.6.14/beautify-html.min.js",
    defer: true
  }), React.createElement("script", {
    src: "js/page-components.jsx.bundle.js",
    defer: true
  }), React.createElement(Navigation, {
    navigation: navigation,
    version: version
  }), React.createElement("div", {
    className: "data-container"
  }, React.createElement("h1", {
    className: "main-header"
  }, "Brainly style guide - ", pageConfig.name), rootNodeToBeRemovedAfterFullWebpackMigration ? rootNodeToBeRemovedAfterFullWebpackMigration : React.createElement("div", {
    id: "root"
  }))));
};

export default ItemsInteractivePage;