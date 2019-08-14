import React from 'react';
import DocsBlock from 'components/DocsBlock';

const Layouts = () => (
  <div>
    <DocsBlock info="small screen">
      <iframe
        height="568"
        width="360"
        src="components/layout/layout_small.html"
      />
    </DocsBlock>
    <DocsBlock info="medium screen">
      <iframe
        height="568"
        width="800"
        src="components/layout/layout_medium.html"
      />
    </DocsBlock>
    <DocsBlock info="large screen">
      <iframe
        height="568"
        width="1100"
        src="components/layout/layout_large.html"
      />
    </DocsBlock>
    <DocsBlock info="reversed-order large screen">
      <iframe
        height="568"
        width="1100"
        src="components/layout/layout_reversed_order.html"
      />
    </DocsBlock>
    <DocsBlock info="reversed-order medium screen">
      <iframe
        height="568"
        width="800"
        src="components/layout/layout_reversed_order.html"
      />
    </DocsBlock>
    <DocsBlock info="wide + three-columns">
      <iframe
        height="568"
        width="1100"
        src="components/layout/layout_three_columns.html"
      />
    </DocsBlock>
    <DocsBlock info="one column center content large screen">
      <iframe
        height="568"
        width="1100"
        src="components/layout/layout_one_column_center.html"
      />
    </DocsBlock>
  </div>
);

export default Layouts;
