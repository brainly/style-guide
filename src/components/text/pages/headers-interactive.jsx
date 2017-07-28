import React from 'react';
import HeaderPrimary, {TYPE, SIZE, COLOR} from '../HeaderPrimary';
import HeaderSecondary from '../HeaderSecondary';
import DocsActiveBlock from 'components/DocsActiveBlock';

const Headers = () => {
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
    }
  ];

  return <div>
    <DocsActiveBlock settings={settings}>
      <HeaderPrimary>Lorem Ipsum</HeaderPrimary>
    </DocsActiveBlock>
    <DocsActiveBlock settings={settings} backgroundColor="dark">
      <HeaderPrimary type={TYPE.H2} size={SIZE.SMALL} color={COLOR.LIGHT}>We've got your back!</HeaderPrimary>
    </DocsActiveBlock>
    <DocsActiveBlock settings={settings}>
      <HeaderSecondary>Stay curious</HeaderSecondary>
    </DocsActiveBlock>
  </div>;
};

export default Headers;
