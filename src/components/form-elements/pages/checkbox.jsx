import React from 'react';
import Checkbox from '../Checkbox';
import DocsBlock from 'components/DocsBlock';

const dumpProps = {onChange: () => undefined};

const checkboxes = () => (
  <div>
    <DocsBlock info="Checkboxes">
      <div className="sg-space-x-m">
        <Checkbox> First</Checkbox>
        <Checkbox checked {...dumpProps}>
          Second
        </Checkbox>
        <Checkbox> Third</Checkbox>
      </div>
    </DocsBlock>
  </div>
);

export default checkboxes;
