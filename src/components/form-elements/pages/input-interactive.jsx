import React from 'react';
import Input, {TYPE, SIZE, COLOR} from '../Input';
import DocsActiveBlock from 'components/DocsActiveBlock';

const Inputs = () => {

  const settings = [
    {
      name: 'type',
      values: TYPE
    },
    {
      name: 'size',
      values: SIZE
    },
    {
      name: 'color',
      values: COLOR
    },
    {
      name: 'value',
      values: String
    },
    {
      name: 'placeholder',
      values: String
    },
    {
      name: 'fullWidth',
      values: Boolean
    },
    {
      name: 'withIcon',
      values: Boolean
    },
    {
      name: 'noBorder',
      values: Boolean
    },
    {
      name: 'valid',
      values: Boolean
    },
    {
      name: 'invalid',
      values: Boolean
    }
  ];

  return (
    <div>
      <DocsActiveBlock settings={settings}>
        <Input placeholder="Simple input" />
      </DocsActiveBlock>
      <DocsActiveBlock settings={settings}>
        <Input
          placeholder="Big wrong input"
          fullWidth
          size={SIZE.LARGE}
          invalid
          noBorder
          value="I'm a big bad input"
        />
      </DocsActiveBlock>
    </div>
  );
};

export default Inputs;
