// @flow strict

import React from 'react';
import classNames from 'classnames';
import type {IconColorType} from '../icons/Icon';

export type IconTypeType =
  | 'answer_bubble'
  | 'ask_bubble'
  | 'barcode_scanner'
  | 'chapter'
  | 'clear'
  | 'comment'
  | 'crown'
  | 'crown_outlined'
  | 'cup'
  | 'flashlight_off'
  | 'flashlight_on'
  | 'heart_outlined'
  | 'info'
  | 'keyboard'
  | 'options'
  | 'sent'
  | 'share_on_ios'
  | 'spark'
  | 'star_outlined'
  | 'text'
  | 'textbook';

export type SizeType =
  | 104
  | 102
  | 80
  | 78
  | 56
  | 54
  | 40
  | 32
  | 30
  | 26
  | 24
  | 22
  | 20
  | 18
  | 16
  | 14
  | 10;

export const TYPE: {[name: string]: IconTypeType, ...} = {
  ANSWER_BUBBLE: 'answer_bubble',
  ASK_BUBBLE: 'ask_bubble',
  BARCODE_SCANNER: 'barcode_scanner',
  CHAPTER: 'chapter',
  CLEAR: 'clear',
  COMMENT: 'comment',
  CROWN: 'crown',
  CROWN_OUTLINED: 'crown_outlined',
  CUP: 'cup',
  FLASHLIGHT_OFF: 'flashlight_off',
  FLASHLIGHT_ON: 'flashlight_on',
  HEART_OUTLINED: 'heart_outlined',
  INFO: 'info',
  KEYBOARD: 'keyboard',
  OPTIONS: 'options',
  SENT: 'sent',
  SHARE_ON_IOS: 'share_on_ios',
  SPARK: 'spark',
  STAR_OUTLINED: 'star_outlined',
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
  size = 24,
  color = 'light',
  className,
  ...props
}: PropsType) => {
  const iconClass = classNames(
    'sg-mobile-icon',
    {
      [`sg-mobile-icon--x${size}`]: size,
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
