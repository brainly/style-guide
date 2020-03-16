// @flow strict

import React from 'react';
import classNames from 'classnames';
import type {IconColorType} from '../icons/Icon';

export type IconTypeType =
  | 'answer-bubble'
  | 'ask-bubble'
  | 'clear'
  | 'comment'
  | 'crown'
  | 'crown-outline'
  | 'cup'
  | 'flashlight-off'
  | 'flashlight-on'
  | 'heart-outline'
  | 'keyboard'
  | 'options'
  | 'sent'
  | 'share-on-ios'
  | 'star-outline';

export type SizeType = 'small' | 'medium' | 'normal';

export const TYPE: {[name: string]: IconTypeType, ...} = {
  ANSWER_BUBBLE: 'answer-bubble',
  ASK_BUBBLE: 'ask-bubble',
  CLEAR: 'clear',
  COMMENT: 'comment',
  CROWN: 'crown',
  CROWN_OUTLINE: 'crown-outline',
  CUP: 'cup',
  FLASHLIGHT_OFF: 'flashlight-off',
  FLASHLIGHT_ON: 'flashlight-on',
  HEART_OUTLINE: 'heart-outline',
  KEYBOARD: 'keyboard',
  OPTIONS: 'options',
  SENT: 'sent',
  SHARE_ON_IOS: 'share-on-ios',
  STAR_OUTLINE: 'star-outline',
};

type PropsType = $ReadOnly<{
  type: IconTypeType,
  size?: SizeType,
  color?: IconColorType,
  className?: string,
  ...
}>;

const MobileIcon = ({
  type,
  size = 'normal',
  color = 'light',
  className,
  ...props
}: PropsType) => {
  const iconClass = classNames(
    'sg-mobile-icon',
    {
      [`sg-mobile-icon--${size}`]: size !== 'normal',
      [`sg-mobile-icon--${String(color)}`]: color !== 'light',
    },
    className
  );
  const iconType = `#icon-mobile-${type}`;

  return (
    <svg {...props} className={iconClass}>
      <use xlinkHref={iconType} />
    </svg>
  );
};

export default MobileIcon;
export {ICON_COLOR} from '../icons/Icon';
