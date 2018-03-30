import React from 'react';
import Select from '../Select';
import DocsBlock from 'components/DocsBlock';

const exampleOptions = [
  {value: 'option1', text: 'Option1'},
  {value: 'option2', text: 'Select Selector'}
];
const exampleProps = {
  options: exampleOptions,
  value: exampleOptions[1].value,
  onChange: () => undefined
};

const selects = () => (
  <div>
    <DocsBlock info="Default">
      <Select {...exampleProps} />
    </DocsBlock>
    <DocsBlock info="Valid">
      <Select {...exampleProps} valid />
    </DocsBlock>
    <DocsBlock info="Invalid">
      <Select {...exampleProps} invalid />
    </DocsBlock>
    <DocsBlock info="Full width">
      <Select {...exampleProps} fullWidth />
    </DocsBlock>
  </div>
);

export default selects;
