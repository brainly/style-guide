import {hot} from 'react-hot-loader/root';
import React from 'react';
import ReactDOM from 'react-dom';
import '../main.scss';
import './_sass/main.scss';
import {sections} from './page-components';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Head from './layouts/Head';
import site from './config';
import Navigation from './layouts/NavigationSPA';
import navigation from './navigation';
import packageJSON from '../../package.json';
import slugify from './slugify';
import IndexPage from './layouts/IndexPage';

const version = packageJSON.version;

const requireAll = r => {
  r.keys().forEach(r);
};

requireAll(require.context('../images/', true, /\.svg$/));

const GeneratePage = ({padeIndex}) => navigation[padeIndex].elements.map(({name, component}) => (
  <React.Fragment key={name}>
    <h1 className="main-header">Brainly style guide - {navigation[padeIndex].name}</h1>
    <article >
      <h2 className="article-header" id={slugify(name)}>
        {name}
        <a href={'#' + slugify(name)} className="permalink">#</a>
      </h2>
      {component()}
    </article>
  </React.Fragment>
));

const BasicsPage = () => <GeneratePage padeIndex="0" />;
const ComponentsPage = () => <GeneratePage padeIndex="1" />;
const ContainersPage = () => <GeneratePage padeIndex="2" />;
const InteractivePage = () => (
  <React.Fragment>
    <h1 className="main-header">Brainly style guide - {navigation[3].name}</h1>
    {sections}
  </React.Fragment>
);

const App = () =>
  (
    <Router >
      <Head site={site} />
      <Navigation navigation={navigation} version={version} />
      <div className="data-container">
        <Route
          path="/"
          exact
          component={IndexPage}
        />
        <Route
          path="/basics.html"
          exact
          component={BasicsPage}
        />
        <Route
          path="/components.html"
          exact
          component={ComponentsPage}
        />
        <Route
          path="/containers.html"
          exact
          component={ContainersPage}
        />
        <Route
          path="/interactive.html"
          exact
          component={InteractivePage}
        />
      </div>
    </Router>
  );

const Wrapped = hot(App);

ReactDOM.render(<Wrapped />, document.getElementById('root'));
