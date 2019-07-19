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
  | 'camera'
  | 'change_status'
  | 'check'
  | 'comment'
  | 'counter'
  | 'cup'
  | 'equation'
  | 'exclamation_mark'
  | 'excellent'
  | 'expert'
  | 'friends'
  | 'heart'
  | 'keyboard'
  | 'lightning'
  | 'logout'
  | 'menu'
  | 'messages'
  | 'notifications'
  | 'pencil'
  | 'planet'
  | 'plus'
  | 'podium'
  | 'points'
  | 'profile'
  | 'profile_edit'
  | 'profile_view'
  | 'question'
  | 'reload'
  | 'report_flag'
  | 'search'
  | 'seen'
  | 'star'
  | 'stream'
  | 'student'
  | 'symbols'
  | 'thumbs_up'
  | 'unseen'
  | 'verified'
  | 'x'
  | 'fb'
  | 'std-all_questions'
  | 'std-answer'
  | 'std-arrow_double_down'
  | 'std-arrow_down'
  | 'std-arrow_left'
  | 'std-arrow_right'
  | 'std-arrow_up'
  | 'std-ask_parent_to_pay'
  | 'std-attachment'
  | 'std-bold'
  | 'std-bulleted_list'
  | 'std-camera'
  | 'std-check'
  | 'std-close'
  | 'std-counter'
  | 'std-credit_card'
  | 'std-equation'
  | 'std-excellent'
  | 'std-exclamation_mark'
  | 'std-facebook'
  | 'std-friends'
  | 'std-heading'
  | 'std-heart'
  | 'std-image'
  | 'std-instagram'
  | 'std-italic'
  | 'std-less'
  | 'std-linkedin'
  | 'std-lock_with_play'
  | 'std-medium'
  | 'std-menu'
  | 'std-messages'
  | 'std-mic'
  | 'std-money_transfer'
  | 'std-more'
  | 'std-notifications'
  | 'std-numbered_list'
  | 'std-pencil'
  | 'std-play'
  | 'std-plus'
  | 'std-points'
  | 'std-profile'
  | 'std-recent_questions'
  | 'std-report_flag'
  | 'std-search'
  | 'std-seen'
  | 'std-share'
  | 'std-sms'
  | 'std-star_half'
  | 'std-star'
  | 'std-subtitle'
  | 'std-symbols'
  | 'std-title'
  | 'std-toughest_questions'
  | 'std-twitter'
  | 'std-underlined'
  | 'std-verified'
  | 'std-youtube';

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
  | 'navy-blue'
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

// Added to export separately this new set in html-sketchapp
export const STD_TYPE = {
  STD_ALL_QUESTIONS: 'std-all_questions', // new
  STD_ANSWER: 'std-answer',
  STD_ARROW_DOUBLE_DOWN: 'std-arrow_double_down',
  STD_ARROW_DOWN: 'std-arrow_down',
  STD_ARROW_LEFT: 'std-arrow_left',
  STD_ARROW_RIGHT: 'std-arrow_right',
  STD_ARROW_UP: 'std-arrow_up',
  STD_ASK_PARENT_TO_PAY: 'std-ask_parent_to_pay', // new
  STD_ATTACHMENT: 'std-attachment',
  STD_BOLD: 'std-bold',
  STD_BULLETED_LIST: 'std-bulleted_list', // new
  STD_CAMERA: 'std-camera',
  STD_CHECK: 'std-check',
  STD_CLOSE: 'std-close', // new
  STD_COUNTER: 'std-counter',
  STD_CREDIT_CARD: 'std-credit_card',
  STD_EQUATION: 'std-equation',
  STD_EXCELLENT: 'std-excellent',
  STD_EXCLAMATION_MARK: 'std-exclamation_mark',
  STD_FACEBOOK: 'std-facebook', // new round FB
  STD_FRIENDS: 'std-friends',
  STD_HEADING: 'std-heading', // new
  STD_HEART: 'std-heart',
  STD_IMAGE: 'std-image',
  STD_INSTRAGRAM: 'std-instagram',
  STD_ITALIC: 'std-italic',
  STD_LESS: 'std-less', // new
  STD_LINKEDIN: 'std-linkedin', // new
  STD_LOCK_WITH_PLAY: 'std-lock_with_play', // new
  STD_MEDIUM: 'std-medium', // new
  STD_MENU: 'std-menu', // new
  STD_MESSAGES: 'std-messages',
  STD_MIC: 'std-mic', // new
  STD_MONEY_TRANSFER: 'std-money_transfer', // new
  STD_MORE: 'std-more', // new
  STD_NOTIFICATIONS: 'std-notifications',
  STD_NUMBERED_LIST: 'std-numbered_list',
  STD_PENCIL: 'std-pencil',
  STD_PLAY: 'std-play', // new
  STD_PLUS: 'std-plus',
  STD_PONITS: 'std-points',
  STD_PROFILE: 'std-profile', // new
  STD_RECENT_QUESTIONS: 'std-recent_questions', // new
  STD_REPORT_FLAG: 'std-report_flag',
  STD_SEARCH: 'std-search',
  STD_SEEN: 'std-seen', // new
  STD_SHARE: 'std-share', // new
  STD_SMS: 'std-sms', // new
  STD_STAR_HALF: 'std-star_half', // new
  STD_STAR: 'std-star',
  STD_SUBTITLE: 'std-subtitle', // new
  STD_SYMBOLS: 'std-symbols',
  STD_TITLE: 'std-title', // new
  STD_TOUGHEST_QUESTIONS: 'std-toughest_questions', // new
  STD_TWITTER: 'std-twitter', // new
  STD_UNDERLINED: 'std-underlined',
  STD_VERIFIED: 'std-verified',
  STD_YOUTUBE: 'std-youtube'
};

export const TYPE = {
  ANSWER: 'answer',
  ANSWERED: 'answered', // not needed in new set
  ARROW_DOWN: 'arrow_down',
  ARROW_DOUBLE_DOWN: 'arrow_double_down',
  ARROW_LEFT: 'arrow_left',
  ARROW_RIGHT: 'arrow_right',
  ARROW_UP: 'arrow_up',
  ATTACHMENT: 'attachment',
  BOLD: 'bold',
  CAMERA: 'camera',
  CHANGE_STATUS: 'change_status', // not needed in new set
  CHECK: 'check',
  COMMENT: 'comment', // not needed in new set
  COUNTER: 'counter',
  CUP: 'cup', // not needed in new set
  EQUATION: 'equation',
  EXCLAMATION_MARK: 'exclamation_mark',
  EXCELLENT: 'excellent',
  EXPERT: 'expert', // not needed in new set
  FRIENDS: 'friends',
  HEART: 'heart',
  KEYBOARD: 'keyboard', // not needed in new set
  LIGHTNING: 'lightning', // not needed in new set
  LOGOUT: 'logout', // not needed in new set
  MENU: 'menu',
  MESSAGES: 'messages',
  NOTIFICATIONS: 'notifications',
  PENCIL: 'pencil',
  PLANET: 'planet', // not needed in new set
  PLUS: 'plus',
  PODIUM: 'podium', // not needed in new set
  POINTS: 'points',
  PROFILE: 'profile',
  PROFILE_EDIT: 'profile_edit', // not needed in new set
  PROFILE_VIEW: 'profile_view', // not needed in new set
  QUESTION: 'question', // not needed in new set
  RELOAD: 'reload', // not needed in new set
  REPORT_FLAG: 'report_flag',
  SEARCH: 'search',
  SEEN: 'seen',
  STAR: 'star',
  STREAM: 'stream', // not needed in new set
  STUDENT: 'student', // not needed in new set
  SYMBOLS: 'symbols',
  THUMBS_UP: 'thumbs_up', // not needed in new set
  UNSEEN: 'unseen', // not needed in new set
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

// As soon as we change Avatars to new the new icon, we could clean up sizes of the icons.
export const SIZE = [120, 118, 64, 62, 48, 46, 32, 30, 26, 24, 22, 20, 18, 16, 14, 10];

export type IconPropsType =
  | {
      /**
       * Additional class names
       */
      className?: ?string,
       /**
        * Icons colors example, see more in SG interactive
        * @example <Icon color="dark" type="std-answer" />
        * @see color="adaptive" https://styleguide.brainly.com/latest/docs/interactive.html?color=adaptive#icons
        */
      color?: ?IconColorType,
      /**
        * Icons size example, see more in SG interactive
        * @example <Icon size="46" type="std-answer" />
        * @see size="46" https://styleguide.brainly.com/latest/docs/interactive.html?size=46#icons
        */
      size?: ?IconSizeType,
      /**
        * Icons types example, see more in SG interactive
        * @example <Icon size="46" type="std-answer" />
        * @see type="std-heart" https://styleguide.brainly.com/latest/docs/interactive.html?type=std-heart#icons
        */
      type: IconTypeType
    }
  | {
      /**
       * Children to be rendered inside Icon
       */
      children: Node,
      /**
       * Additional class names
       */
      className?: ?string,
      /**
        * Icons colors example, see more in SG interactive
        * @example <Icon color="dark" type="std-answer" />
        * @see color="adaptive" https://styleguide.brainly.com/latest/docs/interactive.html?color=adaptive#icons
        */
      color?: ?IconColorType,
      /**
        * Icons size example, see more in SG interactive
        * @example <Icon size="46" type="std-answer" />
        * @see size="46" https://styleguide.brainly.com/latest/docs/interactive.html?size=46#icons
        */
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
