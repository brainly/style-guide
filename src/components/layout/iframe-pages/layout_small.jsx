import React from 'react';
import Layout from '../Layout';
import LayoutContent from '../LayoutContent';
import LayoutAsideContent from '../LayoutAsideContent';
import Text from 'text/Text';

const header = (
  <div className="sg-header sg-header--fixed">
    <div className="sg-header__container">
      <div className="sg-header__content">Header</div>
    </div>
  </div>
);

const footer = (
  <div className="sg-footer">
    <div className="sg-footer__container">Footer</div>
  </div>
);

const LayoutSmall = () => (
  <html>
    <head>
      <meta charSet="utf-8" />
      <link rel="stylesheet" href="../../../style-guide.css" />
    </head>
    <body>
      <Layout header={header} footer={footer}>
        <LayoutContent>
          <Text>
            Main content has no padding and no background (both are given by
            layout box)
          </Text>
        </LayoutContent>
        <LayoutAsideContent>
          <Text>Aside content has no padding and no background</Text>
        </LayoutAsideContent>
      </Layout>
      <script src="images/icons.js" />
    </body>
  </html>
);

export default LayoutSmall;
