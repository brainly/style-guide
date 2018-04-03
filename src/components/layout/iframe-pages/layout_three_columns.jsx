import React from 'react';
import Layout from '../Layout';
import LayoutBox from '../LayoutBox';
import LayoutContent from '../LayoutContent';
import LayoutLeftContent from '../LayoutLeftContent';
import LayoutAsideContent from '../LayoutAsideContent';
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

const LayoutThreeColumns = () => (
  <html>
    <head>
      <meta charSet="utf-8" />
      <link rel="stylesheet" href="../../../style-guide.css" />
      <style>{'body {background-color: #f0f3f5;}'}</style>
    </head>
    <body>
      <Layout threeColumns header={header} footer={footer}>
        <LayoutLeftContent>
          <LayoutBox>
            <Text>
              Left content
            </Text>
          </LayoutBox>
        </LayoutLeftContent>
        <LayoutContent>
          <LayoutBox>
            <Text>
          Main content has padding and white background
            </Text>
          </LayoutBox>
        </LayoutContent>
        <LayoutAsideContent>
          <Text>
        Aside content has no padding and no background
          </Text>
        </LayoutAsideContent>
      </Layout>
      <script src="images/icons.js" />
    </body>
  </html>
);

export default LayoutThreeColumns;
