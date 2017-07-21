import React from 'react';
import Badge, {COLOR, SIZE} from '../Badge';
import DocsActiveBlock from 'components/DocsActiveBlock';

const Badges = () => {
  const settings = {
    color: COLOR,
    size: SIZE,
    rounded: Boolean,
    withAnimation: Boolean
  };

  return <div>
    <DocsActiveBlock settings={settings}>
      <Badge>3 / 5</Badge>
    </DocsActiveBlock>
    <DocsActiveBlock settings={settings}>
      <Badge color={COLOR.PEACH} rounded={true} withAnimation={true}>123</Badge>
    </DocsActiveBlock>
  </div>;
};

export default Badges;
