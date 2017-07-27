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
    <DocsActiveBlock settings={verticalSettings}
      contentBefore={<Avatar imgSrc="https://source.unsplash.com/64x64/?cat"/>}
      contentAfter={<Avatar size={AVATAR_SIZE.SMALL}/>}>

      <SeparatorVertical/>

    </DocsActiveBlock>

    <DocsActiveBlock settings={horizontalSettings} componentType={SeparatorHorizontal}
      contentBefore={<Avatar size={AVATAR_SIZE.SMALL}/>}
      contentAfter={<Avatar size={AVATAR_SIZE.SMALL}/>}
      wrapper={<div/>}>
      <SeparatorHorizontal/>
    </DocsActiveBlock>
  </div>;
};

export default Separators;
