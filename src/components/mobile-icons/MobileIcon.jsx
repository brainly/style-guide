// @flow strict

import * as React from 'react';
import classNames from 'classnames';
import type {IconColorType} from '../icons/Icon';

export type IconTypeType =
  | 'arrow'
  | 'answer_bubble'
  | 'ask_bubble'
  | 'backward_5s'
  | 'backward_end'
  | 'barcode_scanner'
  | 'chapter'
  | 'circle_fill'
  | 'clear'
  | 'comment'
  | 'crown'
  | 'crown_outlined'
  | 'cup'
  | 'cursor_select'
  | 'dashed_line'
  | 'draw'
  | 'filters'
  | 'flashlight_off'
  | 'flashlight_on'
  | 'forward_5s'
  | 'hand_move'
  | 'heart_outlined'
  | 'hexagon'
  | 'info'
  | 'keyboard'
  | 'options'
  | 'replay'
  | 'send_back'
  | 'bring_front'
  | 'share_on_ios'
  | 'spark'
  | 'star_outlined'
  | 'text'
  | 'textbook'
  | 'time_speed';

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
  ARROW: 'arrow',
  ASK_BUBBLE: 'ask_bubble',
  BACKWARD_5S: 'backward_5s',
  BACKWARD_END: 'backward_end',
  BARCODE_SCANNER: 'barcode_scanner',
  CHAPTER: 'chapter',
  CIRCLE_FILL: 'circle_fill',
  CLEAR: 'clear',
  COMMENT: 'comment',
  CROWN: 'crown',
  CROWN_OUTLINED: 'crown_outlined',
  CUP: 'cup',
  CURSOR_SELECT: 'cursor_select',
  DASHED_LINE: 'dashed_line',
  DRAW: 'draw',
  FILTERS: 'filters',
  FLASHLIGHT_OFF: 'flashlight_off',
  FLASHLIGHT_ON: 'flashlight_on',
  FORWARD_5S: 'forward_5s',
  HAND_MOVE: 'hand_move',
  HEART_OUTLINED: 'heart_outlined',
  HEXAGON: 'hexagon',
  INFO: 'info',
  KEYBOARD: 'keyboard',
  OPTIONS: 'options',
  REPLAY: 'replay',
  SEND_BACK: 'send_back',
  BRING_FRONT: 'bring_front',
  SHARE_ON_IOS: 'share_on_ios',
  SPARK: 'spark',
  STAR_OUTLINED: 'star_outlined',
  TEXT: 'text',
  TEXTBOOK: 'textbook',
  TIME_SPEED: 'time_speed',
};

export type MobileIconPropsType = $ReadOnly<{
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
}: MobileIconPropsType) => {
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
