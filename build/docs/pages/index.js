import React from 'react';
import ArticlePage from '../layouts/ArticlePage';
import packageJSON from '../../../package.json';
import ContentBox from '../../components/content-box/ContentBox';
import ContentBoxHeader from '../../components/content-box/ContentBoxHeader';
import ContentBoxContent from '../../components/content-box/ContentBoxContent';

var index = function index() {
  return React.createElement(ArticlePage, null, React.createElement("h1", {
    className: "main-header"
  }, "Brainly style guide"), React.createElement("h2", {
    className: "article-header  article-header--small"
  }, "Version ", packageJSON.version), React.createElement("p", {
    className: "sg-text"
  }, "Welcome to the official Brainly style guide! This style guide is being used across all language versions of the Brainly website (e.g.", React.createElement("a", {
    href: "https://brainly.com",
    className: "sg-text sg-text--blue-dark sg-text--bold sg-text--link"
  }, "brainly.com"), ",", React.createElement("a", {
    href: "https://znanija.com",
    className: "sg-text sg-text--blue-dark sg-text--bold sg-text--link"
  }, "znanija.com"), ",", React.createElement("a", {
    href: "https://nosdevoirs.fr/",
    className: "sg-text sg-text--blue-dark sg-text--bold sg-text--link"
  }, "nosdevoirs.fr"), "), on our corporate website (", React.createElement("a", {
    href: "https://brainly.co",
    className: "sg-text sg-text--blue-dark sg-text--bold sg-text--link"
  }, "brainly.co"), ") and some smaller sites (e.g. landing pages)."), React.createElement("h2", {
    className: "article-header article-header--small"
  }, "How to use it?"), React.createElement("p", {
    className: "sg-text"
  }, "In order to use style guide components, you have to include CSS file in the ", React.createElement("code", null, "<head>"), " of your website:"), React.createElement("pre", null, React.createElement("code", {
    className: "html"
  }, "<link href=\"https://styleguide.brainly.com/", packageJSON.version, "/style-guide.css\" rel=\"stylesheet\"/>")), React.createElement(ContentBox, null, React.createElement(ContentBoxHeader, null, React.createElement("p", {
    className: "sg-text"
  }, "For our icons include this scripts before the closing </body> tag:"))), React.createElement("ul", {
    className: "sg-list"
  }, React.createElement("li", {
    className: "sg-list__element"
  }, React.createElement(ContentBox, null, React.createElement(ContentBoxHeader, null, React.createElement("p", {
    className: "sg-text"
  }, React.createElement("a", {
    href: "./basics.html#icons",
    className: "sg-text sg-text--blue-dark sg-text--bold sg-text--link"
  }, "Basic icons"), ":")), React.createElement(ContentBoxContent, null, React.createElement("pre", null, React.createElement("code", {
    className: "html"
  }, "<script src=\"https://styleguide.brainly.com/%%images/icons.js%%\"></script>"))))), React.createElement("li", {
    className: "sg-list__element"
  }, React.createElement(ContentBox, null, React.createElement(ContentBoxHeader, null, React.createElement("p", {
    className: "sg-text"
  }, React.createElement("a", {
    href: "./basics.html#subject-icons",
    className: "sg-text sg-text--blue-dark sg-text--bold sg-text--link"
  }, "Subject icons"), ":")), React.createElement(ContentBoxContent, null, React.createElement("pre", null, React.createElement("code", {
    className: "html"
  }, "<script src=\"https://styleguide.brainly.com/%%images/subjects-icons.js%%\"></script>"))))), React.createElement("li", {
    className: "sg-list__element"
  }, React.createElement(ContentBox, null, React.createElement(ContentBoxHeader, null, React.createElement("p", {
    className: "sg-text"
  }, React.createElement("a", {
    href: "./basics.html#subject-mono-icons",
    className: "sg-text sg-text--blue-dark sg-text--bold sg-text--link"
  }, "Subject mono icons"), ":")), React.createElement(ContentBoxContent, null, React.createElement("pre", null, React.createElement("code", {
    className: "html"
  }, "<script src=\"https://styleguide.brainly.com/%%images/subjects-mono-icons.js%%\"></script>"))))), React.createElement("li", {
    className: "sg-list__element"
  }, React.createElement(ContentBox, null, React.createElement(ContentBoxHeader, null, React.createElement("p", {
    className: "sg-text"
  }, React.createElement("a", {
    href: "./basics.html#math-symbols",
    className: "sg-text sg-text--blue-dark sg-text--bold sg-text--link"
  }, "Math symbols"), ":")), React.createElement(ContentBoxContent, null, React.createElement("pre", null, React.createElement("code", {
    className: "html"
  }, "<script src=\"https://styleguide.brainly.com/%%images/math-symbols-icons.js%%\"></script>")))))), React.createElement("h2", {
    className: "article-header article-header--small"
  }, "More"), React.createElement("p", {
    className: "sg-text"
  }, "If you'd like to learn more about this project, report a bug or contribute check it out on", React.createElement("a", {
    href: "https://github.com/brainly/style-guide",
    className: "sg-text sg-text--blue-dark sg-text--bold sg-text--link"
  }, "GitHub"), "."), React.createElement("script", {
    dangerouslySetInnerHTML: {
      __html: 'hljs.initHighlightingOnLoad();'
    }
  }));
};

export default index;