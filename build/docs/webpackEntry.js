import { hot } from 'react-hot-loader/root';
import React from 'react';
import ReactDOM from 'react-dom';
import '../main.scss';
import './_sass/main.scss';
import { sections } from './page-components';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Head from './layouts/Head';
import site from './config';
import Navigation from './layouts/NavigationSPA';
import navigation from './navigation';
import packageJSON from '../../package.json';
import slugify from './slugify';
import IndexPage from './layouts/IndexPage';
var version = packageJSON.version;

var requireAll = function requireAll(r) {
  r.keys().forEach(r);
};

requireAll(require.context('../images/', true, /\.svg$/));

var GeneratePage = function GeneratePage(_ref) {
  var padeIndex = _ref.padeIndex;
  return navigation[padeIndex].elements.map(function (_ref2) {
    var name = _ref2.name,
        component = _ref2.component;
    return React.createElement(React.Fragment, {
      key: name
    }, React.createElement("h1", {
      className: "main-header"
    }, "Brainly style guide - ", navigation[padeIndex].name), React.createElement("article", null, React.createElement("h2", {
      className: "article-header",
      id: slugify(name)
    }, name, React.createElement("a", {
      href: "#".concat(slugify(name)),
      className: "permalink"
    }, "#")), component()));
  });
};

var BasicsPage = function BasicsPage() {
  return React.createElement(GeneratePage, {
    padeIndex: "0"
  });
};

var ComponentsPage = function ComponentsPage() {
  return React.createElement(GeneratePage, {
    padeIndex: "1"
  });
};

var ContainersPage = function ContainersPage() {
  return React.createElement(GeneratePage, {
    padeIndex: "2"
  });
};

var InteractivePage = function InteractivePage() {
  return React.createElement(React.Fragment, null, React.createElement("h1", {
    className: "main-header"
  }, "Brainly style guide - ", navigation[3].name), sections);
};

var App = function App() {
  return React.createElement(Router, null, React.createElement(Head, {
    site: site
  }), React.createElement(Navigation, {
    navigation: navigation,
    version: version
  }), React.createElement("div", {
    className: "data-container"
  }, React.createElement(Route, {
    path: "/",
    exact: true,
    component: IndexPage
  }), React.createElement(Route, {
    path: "/basics.html",
    exact: true,
    component: BasicsPage
  }), React.createElement(Route, {
    path: "/components.html",
    exact: true,
    component: ComponentsPage
  }), React.createElement(Route, {
    path: "/containers.html",
    exact: true,
    component: ContainersPage
  }), React.createElement(Route, {
    path: "/interactive.html",
    exact: true,
    component: InteractivePage
  })));
};

var Wrapped = hot(App);
ReactDOM.render(React.createElement(Wrapped, null), document.getElementById('root'));