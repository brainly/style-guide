import React from 'react';
import DocsBlock from 'components/DocsBlock';
import {Default} from '../Accordion.stories';

const accordion = () => (
  <div>
    <DocsBlock info="Doesn't allow multiple items expanded">
      <Default />
    </DocsBlock>
    <DocsBlock info="Allows multiple items expanded">
      <Default allowMultiple />
    </DocsBlock>
  </div>
);

export default accordion;
