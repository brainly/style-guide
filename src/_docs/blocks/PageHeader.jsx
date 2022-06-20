// @flow

import * as React from 'react';
import TextBit from '../../components/text/TextBit';
import Box from '../../components/box/Box';
import PageHeaderImage from '../assets/component_top.png';
import foundationTopImage from '../assets/foundation_top.png';
import utilityTopImage from '../assets/utility_top.png';
import accesibilityTopImage from '../assets/accessibility_top.png';

type PageHeaderPropsType = {
  children: React.Node,
  type?: 'component' | 'foundation' | 'utility' | 'accesibility',
};

const typeToImage = {
  component: PageHeaderImage,
  foundation: foundationTopImage,
  utility: utilityTopImage,
  accesibility: accesibilityTopImage,
};

const PageHeader = ({children, type = 'component'}: PageHeaderPropsType) => {
  return (
    <Box
      style={{
        backgroundImage: `url(${typeToImage[type]})`,
        backgroundPosition: 'right center',
        backgroundSize: 'cover',
      }}
      padding="xl"
    >
      <TextBit size="large" color="text-white">
        {children}
      </TextBit>
    </Box>
  );
};

export default PageHeader;
