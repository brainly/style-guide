import React from 'react';
import PropTypes from 'prop-types';
import Navigation from './Navigation';
import Head from './Head';
import navigation from '../navigation';
import packageJSON from '../../../package.json';
import site from '../config';

const version = packageJSON.version;

const ItemsInteractivePage = ({navigationIdx}) => {
  const pageConfig = navigation[navigationIdx];

  return <html>
  <Head page={pageConfig} site={site}/>
  <body>

  <script src="images/icons.js" async></script>
  <script src="images/subjects-icons.js" async></script>

  <script src="https://cdnjs.cloudflare.com/ajax/libs/js-beautify/1.6.14/beautify-html.min.js" defer></script>

  <script src="js/page-components.jsx.bundle.js" defer></script>

  <Navigation navigation={navigation} version={version}/>

  <div className="data-container">
    <h1 className="main-header">Brainly style guide - {pageConfig.name}</h1>

    <div id="root"></div>
  </div>

  </body>
  </html>;
};

ItemsInteractivePage.propTypes = {
  navigationIdx: PropTypes.number
};

export default ItemsInteractivePage;
