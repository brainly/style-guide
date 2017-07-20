import React from 'react';
import Select from '../Select';
import DocsBlock from 'DocsBlock';

const exampleOptions = [
  {value: 'option1', text: 'Option1'},
  {value: 'option2', text: 'Select Selector'}
];
const exampleProps = {
  options: exampleOptions,
  value: exampleOptions[1].value,
  onChange: () => undefined
};

const selects = () => <div>
  <DocsBlock info="Default">
    <Select {...exampleProps}/>
  </DocsBlock>
  <DocsBlock info="Valid">
    <Select {...exampleProps} valid={true}/>
  </DocsBlock>
  <DocsBlock info="Invalid">
    <Select {...exampleProps} invalid={true}/>
  </DocsBlock>
  <DocsBlock info="Full width">
    <Select {...exampleProps} fullWidth={true}/>
  </DocsBlock>
</div>;

export default selects;
