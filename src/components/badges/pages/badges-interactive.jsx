import React from 'react';
import TextBadge, {TEXT_BADGE_COLOR, TEXT_BADGE_SIZE} from '../TextBadge';
import DocsActiveBlock from 'components/DocsActiveBlock';

const Badges = () => {
  const settings = [
    {
      name: 'color',
      values: TEXT_BADGE_COLOR
    },
    {
      name: 'size',
      values: TEXT_BADGE_SIZE
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
        <TextBadge>3 / 5</TextBadge>
      </DocsActiveBlock>
      <DocsActiveBlock settings={settings} backgroundColor="dark">
        <TextBadge color={TEXT_BADGE_COLOR.PEACH} rounded withAnimation>123</TextBadge>
      </DocsActiveBlock>
    </div>
  );
};

export default Badges;
