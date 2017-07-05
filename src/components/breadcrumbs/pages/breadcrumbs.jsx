import React from 'react';
import DocsBlock from '../../../docs/DocsBlock';
import Breadcrumb from '../Breadcrumb';

const elements = ['Coments (9)', 'Report', 'Follow'];

const breadcrumbs = () => <div>
  <DocsBlock info="Default">
    <Breadcrumb elements={elements}/>
  </DocsBlock>

  <DocsBlock info="Short">
    <Breadcrumb elements={elements} short={true}/>
  </DocsBlock>

  <DocsBlock info="Adaptive">
    <div className="sg-text sg-text--mint">
      <Breadcrumb elements={elements} adaptive={true}/>
    </div>
  </DocsBlock>
</div>;

export default breadcrumbs;
