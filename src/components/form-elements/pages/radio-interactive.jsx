import * as React from 'react';
import Radio from '../radio/Radio';
import RadioGroup from '../radio/RadioGroup';
import DocsActiveBlock from 'components/DocsActiveBlock';

const Radios = () => {
  const radioSettings = [
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
      name: 'disabled',
      values: Boolean,
    },
    {
      name: 'invalid',
      values: Boolean,
    },
    {
      name: 'color',
      values: {
        LIGHT: 'light',
        DARK: 'dark',
      },
    },
  ];

  const radioGroupSettings = [
    {
      name: 'value',
      values: String,
    },
    {
      name: 'name',
      values: String,
    },
    {
      name: 'disabled',
      values: Boolean,
    },
    {
      name: 'direction',
      values: {
        ROW: 'row',
        COLUMN: 'column',
      },
    },
  ];

  return (
    <div>
      <DocsActiveBlock settings={radioSettings}>
        <Radio>Radio</Radio>
      </DocsActiveBlock>
      Radio group
      <DocsActiveBlock settings={radioGroupSettings}>
        <RadioGroup value="Freja">
          <Radio value="Freja">Freja</Radio>
          <Radio value="Gałgan">Gałgan</Radio>
        </RadioGroup>
      </DocsActiveBlock>
    </div>
  );
};

export default Radios;
