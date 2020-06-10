import React from 'react';
import Select, {COLOR, SIZE} from '../Select';
import DocsActiveBlock from 'components/DocsActiveBlock';

const exampleOptions = [
  {value: 'option1', text: 'Option 1'},
  {value: 'option2', text: 'Option 2'},
  {value: 'option3', text: 'Option 3'},
];

const Selects = () => {
  const settings = [
    {
      name: 'size',
      values: SIZE,
    },
    {
      name: 'color',
      values: COLOR,
    },
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
      <DocsActiveBlock backgroundColor="dark" settings={settings}>
        <Select options={exampleOptions} size="m" color="white" />
      </DocsActiveBlock>
    </div>
  );
};

export default Selects;
