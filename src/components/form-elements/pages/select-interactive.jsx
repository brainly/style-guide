import React from 'react';
import Select from '../Select';
import DocsActiveBlock from 'components/DocsActiveBlock';

const exampleOptions = [
  {value: 'option1', text: 'Option 1'},
  {value: 'option2', text: 'Option 2'},
  {value: 'option3', text: 'Option 3'},
];

const Selects = () => {
  const settings = [
    {
      name: 'valid',
      values: Boolean,
    },
    {
      name: 'invalid',
      values: Boolean,
    },
    {
      name: 'fullWidth',
      values: Boolean,
    },
  ];

  return (
    <div>
      <DocsActiveBlock settings={settings}>
        <Select options={exampleOptions} />
      </DocsActiveBlock>
    </div>
  );
};

export default Selects;
