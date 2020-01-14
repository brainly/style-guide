import React from 'react';
import Navigation from './Navigation';
import Head from './Head';
import navigation from '../navigation';
import packageJSON from '../../../package.json';
import site from '../config';
import slugify from '../slugify';
var version = packageJSON.version;

var ItemsPage = function ItemsPage(_ref) {
  var navigationIdx = _ref.navigationIdx;
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
  }), React.createElement(Navigation, {
    navigation: navigation,
    version: version
  }), React.createElement("div", {
    className: "data-container"
  }, React.createElement("h1", {
    className: "main-header"
  }, "Brainly style guide - ", pageConfig.name), pageConfig.elements.map(function (_ref2) {
    var name = _ref2.name,
        component = _ref2.component;
    return React.createElement("article", {
      key: name
    }, React.createElement("h2", {
      className: "article-header",
      id: slugify(name)
    }, name, React.createElement("a", {
      href: "#".concat(slugify(name)),
      className: "permalink"
    }, "#")), component());
  })), React.createElement("div", {
    className: "copy-helper copy-helper--fixed copy-helper--hidden"
  }, React.createElement("pre", {
    className: "copy-helper__code-wrapper"
  }, React.createElement("code", {
    className: "copy-helper__code",
    id: "sg-code"
  })), React.createElement("div", {
    className: "copy-helper__buttons"
  }, React.createElement("button", {
    className: "sg-icon-as-button sg-icon-as-button--dark js-grow-button copy-helper__button",
    title: "Show more/less"
  }, React.createElement("div", {
    className: "sg-icon-as-button__hole"
  }, React.createElement("svg", {
    className: "sg-icon sg-icon--adaptive sg-icon--x22"
  }, React.createElement("use", {
    xlinkHref: "#icon-arrow_up"
  })))), React.createElement("button", {
    className: "sg-icon-as-button sg-icon-as-button--dark js-copy-button",
    title: "Copy to the clipboard"
  }, React.createElement("div", {
    className: "sg-icon-as-button__hole"
  }, React.createElement("svg", {
    className: "sg-icon sg-icon--adaptive sg-icon--x22"
  }, React.createElement("use", {
    xlinkHref: "#icon-answer"
  })))))), React.createElement("script", {
    src: "js/highlight-markup.js"
  })));
};

export default ItemsPage;