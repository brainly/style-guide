import React from 'react';
import slugify from '../slugify';

var Navigation = function Navigation(_ref) {
  var navigation = _ref.navigation,
      version = _ref.version;
  return React.createElement("nav", {
    className: "main-menu"
  }, React.createElement("a", {
    href: "./",
    className: "main-menu__home"
  }, React.createElement("img", {
    src: "images/logos/brainly-mobile.svg"
  })), React.createElement("ul", {
    className: "main-menu__item"
  }, navigation.map(function (page, index) {
    var pageUrl = "".concat(slugify(page.name), ".html");
    return React.createElement("li", {
      key: index
    }, React.createElement("a", {
      href: pageUrl
    }, page.name), React.createElement("ul", null, page.elements.map(function (element, index) {
      return React.createElement("li", {
        key: index
      }, React.createElement("a", {
        href: "".concat(pageUrl, "#").concat(slugify(element.name)),
        className: "js-searchable"
      }, element.name));
    })));
  })), React.createElement("aside", null, React.createElement("div", {
    className: "main-menu__search"
  }, React.createElement("input", {
    type: "search",
    placeholder: "Search\u2026",
    id: "js-search-box"
  }), React.createElement("ul", {
    id: "js-search-results"
  })), React.createElement("label", {
    title: "Highlight holes"
  }, React.createElement("input", {
    type: "checkbox",
    id: "js-highlight-holes"
  }), " Holes"), React.createElement("a", {
    href: "https://github.com/brainly/style-guide",
    className: "version"
  }, "v", version)), React.createElement("script", {
    src: "js/search-and-holes.js"
  }));
};

export default Navigation;