// @flow

import React from 'react';
import * as BadgeModule from './subcomponents/Badge';
import Text, {TEXT_SIZE, TEXT_COLOR, TEXT_WEIGHT} from '../text/Text';

const {default: Badge, BADGE_SIZE, BADGE_COLOR} = BadgeModule;

export const TEXT_BADGE_SIZE = BADGE_SIZE;
export const TEXT_BADGE_COLOR = BADGE_COLOR;

const TEXT_COLOR_MAPPING = {
  [TEXT_BADGE_COLOR.NORMAL]: TEXT_COLOR.DEFAULT,
  [TEXT_BADGE_COLOR.PEACH]: TEXT_COLOR.WHITE,
  [TEXT_BADGE_COLOR.MUSTARD]: TEXT_COLOR.WHITE,
  [TEXT_BADGE_COLOR.MINT]: TEXT_COLOR.WHITE,
  [TEXT_BADGE_COLOR.MINT_SECONDARY]: TEXT_COLOR.WHITE,
  [TEXT_BADGE_COLOR.BLUE_SECONDARY]: TEXT_COLOR.WHITE,
  [TEXT_BADGE_COLOR.BLUE]: TEXT_COLOR.WHITE,
  [TEXT_BADGE_COLOR.GRAY_SECONDARY]: TEXT_COLOR.WHITE,
  [TEXT_BADGE_COLOR.MINT_SECONDARY_LIGHT]: TEXT_COLOR.MINT_DARK,
  [TEXT_BADGE_COLOR.PEACH_SECONDARY_LIGHT]: TEXT_COLOR.PEACH_DARK,
  [TEXT_BADGE_COLOR.BLUE_SECONDARY_LIGHT]: TEXT_COLOR.BLUE_DARK,
  [TEXT_BADGE_COLOR.LAVENDER]: TEXT_COLOR.WHITE
};

type PropsType = {
  children: string,
  className?: string,
  color?: BadgeModule.BadgeColorType,
  size?: BadgeModule.BadgeSizeType,
  rounded?: boolean,
  withAnimation?: boolean
};

const TextBadge = ({
  children,
  color = TEXT_BADGE_COLOR.NORMAL,
  size = BADGE_SIZE.NORMAL,
  rounded,
  withAnimation,
  className,
  ...props
}: PropsType) => {
  const textSize = size === BADGE_SIZE.LARGE ? TEXT_SIZE.NORMAL : TEXT_SIZE.XSMALL;

  return (
    <Badge
      {...props}
      className={className}
      color={color}
      size={size}
      rounded={rounded}
      withAnimation={withAnimation}
    >
      <Text size={textSize} weight={TEXT_WEIGHT.BOLD} color={TEXT_COLOR_MAPPING[color]}>{children}</Text>
    </Badge>
  );
};

export default TextBadge;
