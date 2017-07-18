import React from 'react';
import PropTypes from 'prop-types';
import Navigation from './Navigation';
import Head from './Head';
import navigation from '../navigation';
import packageJSON from '../../../package.json';
import site from '../config';

const version = packageJSON.version;

const ItemsPage = ({children}) => <html>
  <Head site={site}/>
  <body>
    <Navigation navigation={navigation} version={version}/>

    <div className="data-container">
      {children}
    </div>

  </body>
</html>;

ItemsPage.propTypes = {
  children: PropTypes.node
};

export default ItemsPage;
