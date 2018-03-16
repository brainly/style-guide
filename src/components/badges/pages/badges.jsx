import React from 'react';
import DocsBlock from 'components/DocsBlock';
import ContrastBox from 'components/ContrastBox';
import TextBadge, {TEXT_BADGE_COLOR, TEXT_BADGE_SIZE} from '../TextBadge';

const Badges = () => (
  <div>
    <DocsBlock info="Default">
      <TextBadge color={TEXT_BADGE_COLOR.PEACH}>1</TextBadge>
      <TextBadge color={TEXT_BADGE_COLOR.MUSTARD}>HOT</TextBadge>
      <TextBadge color={TEXT_BADGE_COLOR.MINT_SECONDARY}>1 / 2</TextBadge>
      <TextBadge color={TEXT_BADGE_COLOR.GRAY_SECONDARY}>2 / 3</TextBadge>
      <TextBadge color={TEXT_BADGE_COLOR.MINT_SECONDARY_LIGHT}>4 / 5</TextBadge>
      <TextBadge color={TEXT_BADGE_COLOR.PEACH_SECONDARY_LIGHT}>5 / 5</TextBadge>
      <TextBadge color={TEXT_BADGE_COLOR.BLUE_SECONDARY_LIGHT}>3 / 5</TextBadge>

      <ContrastBox>
        <TextBadge>4575</TextBadge>
      </ContrastBox>
    </DocsBlock>
    <DocsBlock info="Large">
      <TextBadge color={TEXT_BADGE_COLOR.PEACH} size={TEXT_BADGE_SIZE.LARGE}>1</TextBadge>
      <TextBadge color={TEXT_BADGE_COLOR.MINT_SECONDARY_LIGHT} size={TEXT_BADGE_SIZE.LARGE}>4 / 5</TextBadge>
    </DocsBlock>
    <DocsBlock info="Small">
      <TextBadge color={TEXT_BADGE_COLOR.PEACH} size={TEXT_BADGE_SIZE.SMALL}>1</TextBadge>
      <TextBadge color={TEXT_BADGE_COLOR.BLUE_SECONDARY_LIGHT} size={TEXT_BADGE_SIZE.SMALL}>3 / 5</TextBadge>
    </DocsBlock>
    <DocsBlock info="Rounded">
      <TextBadge color={TEXT_BADGE_COLOR.PEACH} rounded>1</TextBadge>
      <TextBadge color={TEXT_BADGE_COLOR.MUSTARD} rounded>HOT</TextBadge>
      <TextBadge color={TEXT_BADGE_COLOR.MINT_SECONDARY_LIGHT} size={TEXT_BADGE_SIZE.LARGE} rounded>4 / 5</TextBadge>
      <ContrastBox>
        <TextBadge rounded size={TEXT_BADGE_SIZE.LARGE}>4575</TextBadge>
      </ContrastBox>
    </DocsBlock>
    <DocsBlock info="With animation" additionalInfo="(click to reload)">
      <TextBadge color={TEXT_BADGE_COLOR.PEACH} rounded withAnimation>1</TextBadge>
    </DocsBlock>
  </div>
);

export default Badges;
