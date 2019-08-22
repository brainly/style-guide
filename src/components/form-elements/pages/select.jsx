import React from 'react';
import Select from '../Select';
import DocsBlock from 'components/DocsBlock';

const exampleOptions = [
  {value: 'option1', text: 'Option 1'},
  {value: 'option2', text: 'Select selector'},
];
const exampleProps = {
  options: exampleOptions,
  value: exampleOptions[1].value,
  onChange: () => undefined,
};
const examplePropsForMultiple = {
  ...exampleProps,
  value: exampleOptions.map(opt => opt.value),
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
    <DocsBlock info="Capitalized">
      <Select {...exampleProps} capitalized />
    </DocsBlock>
    <DocsBlock info="Full width">
      <Select {...exampleProps} fullWidth />
    </DocsBlock>
    <DocsBlock
      info="Multiple"
      additionalInfo="Normal, Tall, XTall"
      multiContent={[
        <Select key={1} {...exampleProps} multiple />,
        <Select key={2} {...examplePropsForMultiple} size="tall" multiple />,
        <Select key={3} {...examplePropsForMultiple} size="xtall" multiple />,
      ]}
    />
  </div>
);

export default selects;
