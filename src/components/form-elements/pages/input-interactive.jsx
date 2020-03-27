import React from 'react';
import Input, {TYPE, SIZE, COLOR} from '../Input';
import DocsActiveBlock from 'components/DocsActiveBlock';

const Inputs = () => {
  const settings = [
    {
      name: 'type',
      values: TYPE,
    },
    {
      name: 'size',
      values: SIZE,
    },
    {
      name: 'color',
      values: COLOR,
    },
    {
      name: 'value',
      values: String,
    },
    {
      name: 'errorMessage',
      values: String,
    },
    {
      name: 'placeholder',
      values: String,
    },
    {
      name: 'fullWidth',
      values: Boolean,
    },
    {
      name: 'valid',
      values: Boolean,
    },
    {
      name: 'invalid',
      values: Boolean,
    },
  ];

  return (
    <div>
      <DocsActiveBlock backgroundColor="dark" settings={settings}>
        <Input
          backgroundColor="none"
          placeholder="Large input"
          fullWidth
          size={SIZE.LARGE}
          color={COLOR.DEFAULT}
          value="I'm a large input"
        />
      </DocsActiveBlock>
    </div>
  );
};

export default Inputs;
