import React from 'react';
import Badge, {COLOR, SIZE} from '../Badge';
import DocsActiveBlock from 'components/DocsActiveBlock';

const Badges = () => {
  const settings = [
    {
      name: 'color',
      values: COLOR
    },
    {
      name: 'size',
      values: SIZE
    },
    {
      name: 'rounded',
      values: Boolean
    },
    {
      name: 'withAnimation',
      values: Boolean
    }
  ];

  return (
    <div>
      <DocsActiveBlock settings={settings} backgroundColor="dark">
        <Badge>3 / 5</Badge>
      </DocsActiveBlock>
      <DocsActiveBlock settings={settings} backgroundColor="dark">
        <Badge color={COLOR.PEACH} rounded withAnimation>123</Badge>
      </DocsActiveBlock>
    </div>
  );
};

export default Badges;
