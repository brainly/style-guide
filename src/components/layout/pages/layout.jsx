import React from 'react';
import DocsBlock from 'components/DocsBlock';

const Layouts = () =>
  <div>
    <DocsBlock info='small screen'>
      <iframe height="568" width="360" src='components/layout/layout_small.html'></iframe>
    </DocsBlock>
    <DocsBlock info='medium screen'>
      <iframe height="568" width="800" src='components/layout/layout_medium.html'></iframe>
    </DocsBlock>
    <DocsBlock info='large screen'>
      <iframe height="568" width="1100" src='components/layout/layout_large.html'></iframe>
    </DocsBlock>
    <DocsBlock info='reversed-order'>
      <iframe height="568" width="1100" src='components/layout/layout_reversed_order.html'></iframe>
    </DocsBlock>
  </div>;

export default Layouts;
