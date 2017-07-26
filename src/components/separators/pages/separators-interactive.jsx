import React from 'react';
import DocsActiveBlock from 'components/DocsActiveBlock';
import Avatar, {SIZE as AVATAR_SIZE} from 'avatar/Avatar';
import SeparatorVertical, {SIZE} from '../SeparatorVertical';
import SeparatorHorizontal, {TYPE} from '../SeparatorHorizontal';

const Separators = () => {
  const verticalSettings = [
    {
      name: 'size',
      values: SIZE
    }
  ];
  const horizontalSettings = [
    {
      name: 'type',
      values: TYPE
    }
  ];

  return <div>
    <DocsActiveBlock settings={verticalSettings} componentType={SeparatorVertical}>
      <Avatar imgSrc="https://source.unsplash.com/64x64/?cat"/>
      <SeparatorVertical/>
      <Avatar size={AVATAR_SIZE.SMALL}/>
    </DocsActiveBlock>

    <DocsActiveBlock settings={horizontalSettings} componentType={SeparatorHorizontal}>
      <Avatar size={AVATAR_SIZE.SMALL}/>
      <SeparatorHorizontal/>
      <Avatar size={AVATAR_SIZE.SMALL}/>
    </DocsActiveBlock>
  </div>;
};

export default Separators;
