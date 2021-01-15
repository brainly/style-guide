import React from 'react';
import Checkbox from '../Checkbox';
import DocsBlock from 'components/DocsBlock';

const dumpProps = {onChange: () => undefined};

const checkboxes = () => (
  <div>
    <DocsBlock info="Checkboxes">
      <Checkbox> First</Checkbox>
      <Checkbox checked {...dumpProps}>
        Second
      </Checkbox>
      <Checkbox> Third</Checkbox>
    </DocsBlock>
  </div>
);

export default checkboxes;
