// @flow strict

import React from 'react';
import classNames from 'classnames';
import type {IconColorType} from '../icons/Icon';

export type IconTypeType =
  | 'answer-bubble'
  | 'ask-bubble'
  | 'barcode-scanner'
  | 'chapter'
  | 'clear'
  | 'comment'
  | 'crown'
  | 'crown-outline'
  | 'cup'
  | 'flashlight-off'
  | 'flashlight-on'
  | 'heart-outline'
  | 'info'
  | 'keyboard'
  | 'options'
  | 'sent'
  | 'share-on-ios'
  | 'spark'
  | 'star-outline'
  | 'text'
  | 'textbook';

export type SizeType = 'small' | 'medium' | 'normal';

export const TYPE: {[name: string]: IconTypeType, ...} = {
  ANSWER_BUBBLE: 'answer-bubble',
  ASK_BUBBLE: 'ask-bubble',
  BARCODE_SCANNER: 'barcode-scanner',
  CHAPTER: 'chapter',
  CLEAR: 'clear',
  COMMENT: 'comment',
  CROWN: 'crown',
  CROWN_OUTLINE: 'crown-outline',
  CUP: 'cup',
  FLASHLIGHT_OFF: 'flashlight-off',
  FLASHLIGHT_ON: 'flashlight-on',
  HEART_OUTLINE: 'heart-outline',
  INFO: 'info',
  KEYBOARD: 'keyboard',
  OPTIONS: 'options',
  SENT: 'sent',
  SHARE_ON_IOS: 'share-on-ios',
  SPARK: 'spark',
  STAR_OUTLINE: 'star-outline',
  TEXT: 'text',
  TEXTBOOK: 'textbook',
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
