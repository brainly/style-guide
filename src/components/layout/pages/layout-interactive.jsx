import React from 'react';
import DocsActiveBlock from 'components/DocsActiveBlock';
import Layout from '../Layout';
import LayoutBox from '../LayoutBox';
import LayoutContent from '../LayoutContent';
import LayoutAsideContent from '../LayoutAsideContent';
import Text from 'text/Text';

const Layouts = () => {
  const settings = [
    {
      name: 'reversedOrder',
      values: Boolean
    },
    {
      name: 'noMaxWidth',
      values: Boolean
    },
    {
      name: 'noMarginTop',
      values: Boolean
    },
    {
      name: 'fullPage',
      values: Boolean
    },
    {
      name: 'threeColumns',
      values: Boolean
    },
    {
      name: 'wide',
      values: Boolean
    }
  ];

  const header = (
    <div className="sg-header">
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

  return (
    <div>
      <DocsActiveBlock settings={settings} centeredItems={false} backgroundColor="dark">
        <Layout header={header} footer={footer}>
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
      </DocsActiveBlock>
    </div>
  );
};

export default Layouts;
