import React from 'react';
import Layout from '../Layout';
import LayoutContent from '../LayoutContent';
import Text from 'text/Text';

const header = (
  <div className="sg-header sg-header--fixed">
    <div className="sg-header__container">
      <div className="sg-header__content">
        Header
      </div>
    </div>
  </div>
);

const footer = (
  <div className="sg-footer">
    <div className="sg-footer__container">
      Footer
    </div>
  </div>
);

const LayoutOneColumnCenter = () => (
  <html>
    <head>
      <meta charSet="utf-8" />
      <link rel="stylesheet" href="../../../style-guide.css" />
      <style>{'body {background-color: #f0f3f5;}'}</style>
    </head>
    <body>
      <Layout header={header} footer={footer}>
        <LayoutContent center>
          <Text>
            Main content is centered
          </Text>
        </LayoutContent>
      </Layout>
      <script src="images/icons.js" />
    </body>
  </html>
);

export default LayoutOneColumnCenter;
