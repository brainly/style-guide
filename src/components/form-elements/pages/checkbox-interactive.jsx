import * as React from 'react';
import Checkbox from '../checkbox/Checkbox';
import DocsActiveBlock from 'components/DocsActiveBlock';

const Checkboxes = () => {
  const settings = [
    {
      name: 'color',
      values: {dark: 'dark', light: 'light'},
    },
    {
      name: 'checked',
      values: Boolean,
    },
    {
      name: 'children',
      values: String,
    },
    {
      name: 'description',
      values: String,
    },
    {
      name: 'indeterminate',
      values: Boolean,
    },
    {
      name: 'disabled',
      values: Boolean,
    },
    {
      name: 'invalid',
      values: Boolean,
    },
    {
      name: 'errorMessage',
      values: String,
    },
  ];

  return (
    <div>
      <DocsActiveBlock settings={settings}>
        <Checkbox>Checkbox label</Checkbox>
      </DocsActiveBlock>
    </div>
  );
};

export default Checkboxes;
