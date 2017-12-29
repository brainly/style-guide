import React from 'react';
import HeaderPrimary, {HEADER_TYPE, HEADER_SIZE, HEADER_COLOR} from '../HeaderPrimary';
import HeaderSecondary from '../HeaderSecondary';
import DocsActiveBlock from 'components/DocsActiveBlock';

const Headers = () => {
  const settings = [
    {
      name: 'type',
      values: HEADER_TYPE
    },
    {
      name: 'size',
      values: HEADER_SIZE
    },
    {
      name: 'color',
      values: HEADER_COLOR
    }
  ];

  return (
    <div>
      <DocsActiveBlock settings={settings}>
        <HeaderPrimary>Lorem Ipsum</HeaderPrimary>
      </DocsActiveBlock>
      <DocsActiveBlock settings={settings} backgroundColor="dark">
        <HeaderPrimary type={HEADER_TYPE.H2} size={HEADER_SIZE.SMALL} color={HEADER_COLOR.LIGHT}>We&apos;ve got your back!</HeaderPrimary>
      </DocsActiveBlock>
      <DocsActiveBlock settings={settings}>
        <HeaderSecondary>Stay curious</HeaderSecondary>
      </DocsActiveBlock>
    </div>
  );
};

export default Headers;
