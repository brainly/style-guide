// @flow

import * as React from 'react';
import TextBit from '../../components/text/TextBit';
import Box from '../../components/box/Box';
import componentTopImage from '../assets/component_top.png';
import foundationTopImage from '../assets/foundation_top.png';
import utilityTopImage from '../assets/utility_top.png';
import accesibilityTopImage from '../assets/accessibility_top.png';

type ComponentTopPropsType = {
  children: React.Node,
  type: 'component' | 'foundation' | 'utility' | 'accesibility',
};

const typeToImage = {
  component: componentTopImage,
  foundation: foundationTopImage,
  utility: utilityTopImage,
  accesibility: accesibilityTopImage,
};

const ComponentTop = ({children, type}: ComponentTopPropsType) => {
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

export default ComponentTop;
