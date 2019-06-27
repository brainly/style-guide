// @flow

import React from 'react';
import type {Node} from 'react';
import Navigation from './Navigation';
import Head from './Head';
import navigation from '../navigation';
import packageJSON from '../../../package.json';
import site from '../config';

const version = packageJSON.version;

type PropsType = {
  children?: Node
};

const ItemsPage = ({children}: PropsType) => (
  <html>
    <Head site={site} />
    <body>
      <Navigation navigation={navigation} version={version} />

      <div className="data-container">
        {children}
      </div>

    </body>
  </html>
);

export default ItemsPage;
