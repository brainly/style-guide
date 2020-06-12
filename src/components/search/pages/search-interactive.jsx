import React from 'react';
import Search, {SIZE, COLOR} from '../Search';
import DocsActiveBlock from 'components/DocsActiveBlock';

const SearchInputs = () => {
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
      name: 'value',
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
      name: 'withRoundButton',
      values: Boolean,
    },
  ];

  return (
    <DocsActiveBlock
      backgroundColor="dark"
      settings={settings}
      wrapper={<div />}
    >
      <Search
        placeholder="Find all the answers..."
        size={SIZE.M}
        color={COLOR.DEFAULT}
      />
    </DocsActiveBlock>
  );
};

export default SearchInputs;
