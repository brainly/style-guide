import React from 'react';

import DocsActiveBlock from 'components/DocsActiveBlock';

const Boxes = () => {
  const settings = [];

  return (
    <div>
      <DocsActiveBlock settings={settings}>
        <div>new box goes here</div>
      </DocsActiveBlock>
    </div>
  );
};

export default Boxes;
