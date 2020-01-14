import React from 'react';

var Head = function Head(_ref) {
  var _ref$page = _ref.page,
      page = _ref$page === void 0 ? {} : _ref$page,
      _ref$site = _ref.site,
      site = _ref$site === void 0 ? {} : _ref$site;
  return React.createElement("head", null, React.createElement("meta", {
    charSet: "utf-8"
  }), React.createElement("title", null, page.title || site.title), React.createElement("meta", {
    name: "description",
    content: page.excerpt || site.description
  }), React.createElement("link", {
    rel: "icon",
    type: "image/x-icon",
    href: "images/favicons/brainly/favicon.ico"
  }), React.createElement("link", {
    rel: "icon",
    sizes: "192x192",
    href: "images/favicons/brainly/favicon-hd.png"
  }), React.createElement("meta", {
    name: "theme-color",
    content: "#6ED6A0"
  }), React.createElement("link", {
    rel: "stylesheet",
    href: "../style-guide.css"
  }), React.createElement("link", {
    rel: "stylesheet",
    href: "".concat(site.baseurl, "/css/main.css")
  }), React.createElement("link", {
    rel: "stylesheet",
    href: "//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/styles/github.min.css"
  }), React.createElement("script", {
    src: "//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/highlight.min.js"
  }), React.createElement("script", {
    src: "https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/1.6.0/clipboard.min.js"
  }));
};

export default Head;