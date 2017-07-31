import React from 'react';
import Search, {SIZE, COLOR} from '../Search';
import DocsActiveBlock from 'components/DocsActiveBlock';

const SearchInputs = () => {

  const settings = [
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
      name: 'adaptiveIco',
      values: Boolean
    },
    {
      name: 'noBorder',
      values: Boolean
    }
  ];

  return <div>
    <DocsActiveBlock settings={settings}>
      <Search placeholder="Find all the answers..."/>
    </DocsActiveBlock>
    <DocsActiveBlock settings={settings} backgroundColor="dark">
      <Search placeholder="Find all the answers..." color={COLOR.LIGHT} fullWidth adaptiveIco noBorder/>
    </DocsActiveBlock>
  </div>;
};

export default SearchInputs;
