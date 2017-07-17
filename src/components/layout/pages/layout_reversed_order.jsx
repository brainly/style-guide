import React from 'react';
import Layout from './../Layout';
import LayoutContainer from './../LayoutContainer';
import LayoutBox from './../LayoutBox';
import LayoutContent from './../LayoutContent';
import LayoutAsideContent from './../LayoutAsideContent';
import LayoutFooter from './../LayoutFooter';
import Text from '../../text/Text';

const LayoutReversedOrder = () =>
  <html>
    <head>
      <meta charSet="utf-8"/>
      <link rel="stylesheet" href="../../../style-guide.css"/>
      <style>{'body {background-color: #f0f3f5;}'}</style>
    </head>
    <body>
      <Layout>
        <div className="sg-header sg-header--fixed">
          <div className="sg-header__container">
            Header
          </div>
        </div>
        <LayoutContainer reversedOrder={true}>
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
        </LayoutContainer>
        <LayoutFooter>
          <div className="sg-footer">
            <div className="sg-footer__container">
              Footer
            </div>
          </div>
        </LayoutFooter>
      </Layout>
      <script src="images/icons.js"></script>
    </body>
  </html>;

export default LayoutReversedOrder;
