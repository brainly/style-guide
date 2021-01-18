import React from 'react';
import DocsBlock from 'components/DocsBlock';
import {Default, NoGaps} from '../Accordion.stories';

const accordion = () => (
  <div>
    <DocsBlock info="Doesn't allow multiple items expanded">
      <Default />
    </DocsBlock>
    <DocsBlock info="Allows multiple items expanded">
      <Default allowMultiple />
    </DocsBlock>
    <DocsBlock info="Reduce motion enabled">
      <Default reduceMotion />
    </DocsBlock>
    <DocsBlock info="No gap between elements with first 2 elements opened by default">
      <NoGaps />
    </DocsBlock>
  </div>
);

export default accordion;
