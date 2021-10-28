import * as React from 'react';
import DocsBlock from 'components/DocsBlock';
import Box from '../../box/Box';

const Shadows = () => (
  <div>
    <DocsBlock>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
          marginTop: '30px',
        }}
      >
        <div>
          Small
          <Box className="sg-shadow" padding="xl" style={{marginTop: '20px'}} />
        </div>
        <div>
          Medium
          <Box
            className="sg-shadow-medium"
            padding="xl"
            style={{marginTop: '20px'}}
          />
        </div>
        <div>
          Large
          <Box
            className="sg-shadow-large"
            padding="xl"
            style={{marginTop: '20px'}}
          />
        </div>
      </div>
    </DocsBlock>
  </div>
);

export default Shadows;
