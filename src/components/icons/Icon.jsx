// @flow strict

import React from 'react';
import type {Node} from 'react';
import classNames from 'classnames';

export type IconTypeType =
  | 'answer'
  | 'answered'
  | 'arrow_down'
  | 'arrow_double_down'
  | 'arrow_left'
  | 'arrow_right'
  | 'arrow_up'
  | 'attachment'
  | 'bold'
  | 'check'
  | 'counter'
  | 'equation'
  | 'exclamation_mark'
  | 'excellent'
  | 'friends'
  | 'heart'
  | 'menu'
  | 'messages'
  | 'notifications'
  | 'pencil'
  | 'plus'
  | 'points'
  | 'profile'
  | 'report_flag'
  | 'search'
  | 'seen'
  | 'star'
  | 'symbols'
  | 'verified'
  | 'x'
  | 'fb';

export type IconColorType =
  | 'adaptive'
  | 'blue'
  | 'dark'
  | 'gray'
  | 'gray-light'
  | 'gray-secondary'
  | 'lavender'
  | 'light'
  | 'mint'
  | 'mustard'
  | 'peach';

export type IconSizeType =
  | 120
  | 118
  | 64
  | 62
  | 48
  | 46
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

export const TYPE = {
  ANSWER: 'answer',
  ANSWERED: 'answered',
  ARROW_DOWN: 'arrow_down',
  ARROW_DOUBLE_DOWN: 'arrow_double_down',
  ARROW_LEFT: 'arrow_left',
  ARROW_RIGHT: 'arrow_right',
  ARROW_UP: 'arrow_up',
  ATTACHMENT: 'attachment',
  BOLD: 'bold',
  CHECK: 'check',
  COUNTER: 'counter',
  EQUATION: 'equation',
  EXCLAMATION_MARK: 'exclamation_mark',
  EXCELLENT: 'excellent',
  FRIENDS: 'friends',
  HEART: 'heart',
  MENU: 'menu',
  MESSAGES: 'messages',
  NOTIFICATIONS: 'notifications',
  PENCIL: 'pencil',
  PLUS: 'plus',
  POINTS: 'points',
  PROFILE: 'profile',
  REPORT_FLAG: 'report_flag',
  SEARCH: 'search',
  SEEN: 'seen',
  STAR: 'star',
  SYMBOLS: 'symbols',
  VERIFIED: 'verified',
  X: 'x',
  FB: 'fb'
};
export const ICON_COLOR = {
  ADAPTIVE: 'adaptive',
  BLUE: 'blue',
  DARK: 'dark',
  GRAY: 'gray',
  GRAY_LIGHT: 'gray-light',
  GRAY_SECONDARY: 'gray-secondary',
  LAVENDER: 'lavender',
  LIGHT: 'light',
  MINT: 'mint',
  MUSTARD: 'mustard',
  PEACH: 'peach'
};

export const SIZE = [120, 118, 64, 62, 48, 46, 32, 30, 26, 24, 22, 20, 18, 16, 14, 10];

type IconPropsType =
  | {
      className?: ?string,
      color?: ?IconColorType,
      size?: ?IconSizeType,
      type: IconTypeType
    }
  | {
      children: Node,
      className?: ?string,
      color?: ?IconColorType,
      size?: ?IconSizeType
   };

// $FlowFixMe flow doesn't support refinements for non-exact types, but we can't make it exact for legacy reasons
const Icon = ({color, size = 24, type, children, className, ...props}: IconPropsType) => {
  const iconClass = classNames('sg-icon', {
    [`sg-icon--${String(color)}`]: color,
    [`sg-icon--x${String(size)}`]: size
  }, className);
  const iconType = `#icon-${type}`;

  return (
    <div {...props} className={iconClass}>
      {type ?
        <svg className="sg-icon__svg">
          <use xlinkHref={iconType} />
        </svg> :
        children}
    </div>
  );
};

export default Icon;
