import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const TYPE = {
  ANSWER: 'answer',
  ANSWERED: 'answered',
  ARROW_DOWN: 'arrow_down',
  ARROW_DOUBLE_DOWN: 'arrow_double_down',
  ARROW_LEFT: 'arrow_left',
  ARROW_RIGHT: 'arrow_right',
  ARROW_UP: 'arrow_up',
  ATTACHMENT: 'attachment',
  BOLD: 'bold',
  CAMERA: 'camera',
  CHECK: 'check',
  COMMENT: 'comment',
  COUNTER: 'counter',
  CUP: 'cup',
  EQUATION: 'equation',
  EXCELLENT: 'excellent',
  EXPERT: 'expert',
  FRIENDS: 'friends',
  HEART: 'heart',
  KEYBOARD: 'keyboard',
  LIGHTNING: 'lightning',
  LOGOUT: 'logout',
  MENU: 'menu',
  MESSAGES: 'messages',
  NOTIFICATIONS: 'notifications',
  PENCIL: 'pencil',
  PLANET: 'planet',
  PLUS: 'plus',
  PODIUM: 'podium',
  POINTS: 'points',
  PROFILE: 'profile',
  PROFILE_EDIT: 'profile_edit',
  PROFILE_VIEW: 'profile_view',
  QUESTION: 'question',
  RELOAD: 'reload',
  REPORT_FLAG: 'report_flag',
  SEARCH: 'search',
  SEEN: 'seen',
  STAR: 'star',
  STREAM: 'stream',
  STUDENT: 'student',
  SYMBOLS: 'symbols',
  UNSEEN: 'unseen',
  VERIFIED: 'verified',
  X: 'x',
  FB: 'fb'
};
const ICON_COLOR = {
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
  NAVY_BLUE: 'navy-blue',
  PEACH: 'peach'
};

const SIZE = [120, 118, 96, 94, 64, 62, 48, 46, 38, 32, 30, 26, 24, 22, 20, 18, 16, 14, 10, 8];

const Icon = ({color, size = 24, type, className, ...props}) => {
  const iconClass = classNames('sg-icon', {
    [`sg-icon--${color}`]: color,
    [`sg-icon--x${size}`]: size
  }, className);
  const iconType = `#icon-${type}`;

  return (
    <svg {...props} className={iconClass}>
      <use xlinkHref={iconType}></use>
    </svg>
  );
};

Icon.propTypes = {
  size: PropTypes.oneOf(SIZE),
  color: PropTypes.oneOf(Object.values(ICON_COLOR)),
  type: PropTypes.oneOf(Object.values(TYPE)).isRequired,
  className: PropTypes.string
};

export default Icon;
export {TYPE, ICON_COLOR, SIZE};
