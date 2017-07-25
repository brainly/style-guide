import React from 'react';
import IconAsButton, {TYPE, COLOR, SIZE} from '../IconAsButton';
import Badge, {COLOR as BADGE_COLOR} from 'badges/Badge';
import DocsActiveBlock from 'components/DocsActiveBlock';
import Avatar, {SIZE as AVATAR_SIZE} from 'avatar/Avatar';

const IconsAsButtons = () => {
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
      name: 'type',
      values: TYPE
    },
    {
      name: 'border',
      values: Boolean
    },
    {
      name: 'action',
      values: Boolean
    },
    {
      name: 'transparent',
      values: Boolean
    },
    {
      name: 'active',
      values: Boolean
    }
  ];

  return <div>
    <DocsActiveBlock settings={settings}>
      <IconAsButton color={COLOR.GRAY} type={TYPE.ATTACHMENT}/>
    </DocsActiveBlock>

    <DocsActiveBlock settings={settings}>
      <IconAsButton type={TYPE.MESSAGES} transparent={true} overlay={
        <Badge color={BADGE_COLOR.PEACH} rounded={true}>1</Badge>
      }/>
    </DocsActiveBlock>

    <DocsActiveBlock settings={settings}>
      <IconAsButton transparent={true}>
        <Avatar size={AVATAR_SIZE.SMALL}/>
      </IconAsButton>
    </DocsActiveBlock>
  </div>;
};


export default IconsAsButtons;
