// @flow

import * as React from 'react';
import Navigation from './Navigation';
import Head from './Head';
import navigation from '../navigation';
import packageJSON from '../../../package.json';
import site from '../config';

const version = packageJSON.version;

type PropsType = {
  navigationIdx?: number,
  rootNodeToBeRemovedAfterFullWebpackMigration?: React.Node,
  ...
};

const ItemsInteractivePage = ({
  navigationIdx,
  rootNodeToBeRemovedAfterFullWebpackMigration,
}: PropsType) => {
  const pageConfig = navigation[navigationIdx];

  return (
    <html>
      <Head page={pageConfig} site={site} />
      <body>
        <script src="images/icons.js" async />
        <script src="images/icons.js" async />
        <script src="images/subjects-icons.js" async />
        <script src="images/subjects-mono-icons.js" async />
        <script src="images/math-symbols-icons.js" async />

        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/js-beautify/1.6.14/beautify-html.min.js"
          defer
        />

        <script src="js/page-components.jsx.bundle.js" defer />

        <Navigation navigation={navigation} version={version} />

        <div className="data-container">
          <h1 className="main-header">
            Brainly style guide - {pageConfig.name}
          </h1>

          {rootNodeToBeRemovedAfterFullWebpackMigration ? (
            rootNodeToBeRemovedAfterFullWebpackMigration
          ) : (
            <div id="root" />
          )}
        </div>
      </body>
    </html>
  );
};

export default ItemsInteractivePage;
