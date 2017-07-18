import React from 'react';
import Layout from './../Layout';
import LayoutBox from './../LayoutBox';
import LayoutContent from './../LayoutContent';
import LayoutAsideContent from './../LayoutAsideContent';
import Text from '../../text/Text';

const header = <div className="sg-header sg-header--fixed">
  <div className="sg-header__container">
    Header
  </div>
</div>;

const footer = <div className="sg-footer">
  <div className="sg-footer__container">
    Footer
  </div>
</div>;

const LayoutReversedOrder = () =>
  <html>
    <head>
      <meta charSet="utf-8"/>
      <link rel="stylesheet" href="../../../style-guide.css"/>
      <style>{'body {background-color: #f0f3f5;}'}</style>
    </head>
    <body>
      <Layout header={header} footer={footer} reversedOrder={true}>
        <LayoutContent>
          <Text>
            Main content has padding and white background
          </Text>
        </LayoutContent>
        <LayoutAsideContent>
          <LayoutBox>
            <Text>
              Aside content has no padding and no background
            </Text>
          </LayoutBox>
        </LayoutAsideContent>
      </Layout>
      <script src="images/icons.js"></script>
    </body>
  </html>;

export default LayoutReversedOrder;
