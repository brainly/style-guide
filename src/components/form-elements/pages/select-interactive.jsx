import React from 'react';
import Select, {SIZE} from '../Select';
import DocsActiveBlock from 'components/DocsActiveBlock';

const exampleOptions = [
  {value: 'option1', text: 'Option 1'},
  {value: 'option2', text: 'Option 2'},
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
    {
      name: 'multiple',
      values: Boolean,
    },
    {
      name: 'size',
      values: SIZE,
    },
  ];

  return (
    <div>
      <DocsActiveBlock settings={settings}>
        <Select options={exampleOptions} />
      </DocsActiveBlock>
      <DocsActiveBlock settings={settings}>
        <Select options={exampleOptions} multiple size="tall" />
      </DocsActiveBlock>
    </div>
  );
};

export default Selects;
