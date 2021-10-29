import * as React from 'react';
import CodeBlock from 'components/CodeBlock';
import DocsBlock from 'components/DocsBlock';
import DocsActiveBlock from 'components/DocsActiveBlock';
import Box from '../../../components/box/Box';

const responsiveSettings = [
  {
    name: 'className',
    values: {
      'sg-shadow-small': 'sg-shadow-small',
      'sg-shadow-medium': 'sg-shadow-medium',
      'sg-shadow-large': 'sg-shadow-large',
    },
  },
];

const ShadowsUtils = () => (
  <div>
    <DocsBlock info="General">
      Set component box shadow
      <CodeBlock type="css">{'.sg-shadow-{small, medium, large}'}</CodeBlock>
      <DocsActiveBlock topSpace settings={responsiveSettings}>
        <Box padding="xl" style={{width: 'auto', background: 'white'}} />
      </DocsActiveBlock>
    </DocsBlock>
  </div>
);

export default ShadowsUtils;
