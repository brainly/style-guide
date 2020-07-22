// @flow strict

import React from 'react';
import type {Node} from 'react';
import classNames from 'classnames';

export type IconTypeType =
  | 'academic_cap'
  | 'all_questions'
  | 'answer'
  | 'arrow_double_down'
  | 'arrow_down'
  | 'arrow_left'
  | 'arrow_right'
  | 'arrow_up'
  | 'ask_parent_to_pay'
  | 'attachment'
  | 'bell_checked'
  | 'bell_outlined'
  | 'bold'
  | 'bulleted_list'
  | 'calendar'
  | 'camera'
  | 'check'
  | 'close'
  | 'comment'
  | 'comment_outlined'
  | 'counter'
  | 'credit_card'
  | 'crown_outlined'
  | 'equation'
  | 'excellent'
  | 'exclamation_mark'
  | 'facebook'
  | 'friend_add'
  | 'friend_remove'
  | 'friend_pending'
  | 'friend_checked'
  | 'friends'
  | 'heading'
  | 'heart'
  | 'heart_outlined'
  | 'image'
  | 'influence'
  | 'instagram'
  | 'italic'
  | 'less'
  | 'linkedin'
  | 'lock_with_play'
  | 'logout'
  | 'medium'
  | 'menu'
  | 'messages'
  | 'mic'
  | 'money_transfer'
  | 'add_more'
  | 'notifications'
  | 'numbered_list'
  | 'open_in_new_tab'
  | 'padlock'
  | 'pencil'
  | 'play'
  | 'plus'
  | 'points'
  | 'profile'
  | 'profile_view'
  | 'question'
  | 'recent_questions'
  | 'reload'
  | 'report_flag'
  | 'report_flag_outlined'
  | 'rotate'
  | 'search'
  | 'seen'
  | 'settings'
  | 'share'
  | 'sms'
  | 'star'
  | 'star_half'
  | 'star_half_outlined'
  | 'star_outlined'
  | 'subtitle'
  | 'symbols'
  | 'title'
  | 'toughest_questions'
  | 'trash'
  | 'twitter'
  | 'underlined'
  | 'unseen'
  | 'verified'
  | 'youtube'
  | 'arrow_top_right'
  | 'circle'
  | 'crop'
  | 'cyrillic'
  | 'draw'
  | 'drawing_mode'
  | 'european'
  | 'greek'
  | 'highlight'
  | 'line'
  | 'more'
  | 'pause'
  | 'rectangle'
  | 'sup_sub'
  | 'triangle'
  | 'pi'
  | 'quote'
  | 'spark'
  | 'rotate_90';

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

export type IconTagType = 'div' | 'span';

export type IconSizeType =
  | 120
  | 118
  | 104
  | 102
  | 80
  | 78
  | 64
  | 62
  | 56
  | 54
  | 48
  | 46
  | 40
  | 38
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
  ACADEMIC_CAP: 'academic_cap',
  ALL_QUESTIONS: 'all_questions',
  ANSWER: 'answer',
  ARROW_DOUBLE_DOWN: 'arrow_double_down',
  ARROW_DOWN: 'arrow_down',
  ARROW_LEFT: 'arrow_left',
  ARROW_RIGHT: 'arrow_right',
  ARROW_UP: 'arrow_up',
  ASK_PARENT_TO_PAY: 'ask_parent_to_pay',
  ATTACHMENT: 'attachment',
  BELL_CHECKED: 'bell_checked',
  BELL_OUTLINED: 'bell_outlined',
  BOLD: 'bold',
  BULLETED_LIST: 'bulleted_list',
  CALENDAR: 'calendar',
  CAMERA: 'camera',
  CHECK: 'check',
  CLOSE: 'close',
  COMMENT: 'comment',
  COMMENT_OUTLINED: 'comment_outlined',
  COUNTER: 'counter',
  CREDIT_CARD: 'credit_card',
  CROWN_OUTLINED: 'crown_outlined',
  EQUATION: 'equation',
  EXCELLENT: 'excellent',
  EXCLAMATION_MARK: 'exclamation_mark',
  FACEBOOK: 'facebook',
  FRIEND_ADD: 'friend_add',
  FRIEND_REMOVE: 'friend_remove',
  FRIEND_PENDING: 'friend_pending',
  FRIEND_CHECKED: 'friend_checked',
  FRIENDS: 'friends',
  HEADING: 'heading',
  HEART: 'heart',
  HEART_OUTLINED: 'heart_outlined',
  IMAGE: 'image',
  INFLUENCE: 'influence',
  INSTRAGRAM: 'instagram',
  ITALIC: 'italic',
  LESS: 'less',
  LINKEDIN: 'linkedin',
  LOCK_WITH_PLAY: 'lock_with_play',
  LOGOUT: 'logout',
  MEDIUM: 'medium',
  MENU: 'menu',
  MESSAGES: 'messages',
  MIC: 'mic',
  MONEY_TRANSFER: 'money_transfer',
  ADD_MORE: 'add_more',
  NOTIFICATIONS: 'notifications',
  NUMBERED_LIST: 'numbered_list',
  OPEN_IN_NEW_TAB: 'open_in_new_tab',
  PADLOCK: 'padlock',
  PENCIL: 'pencil',
  PLAY: 'play',
  PLUS: 'plus',
  POINTS: 'points',
  PROFILE: 'profile',
  PROFILE_VIEW: 'profile_view',
  QUESTION: 'question',
  RECENT_QUESTIONS: 'recent_questions',
  RELOAD: 'reload',
  REPORT_FLAG: 'report_flag',
  REPORT_FLAG_OUTLINED: 'report_flag_outlined',
  ROTATE: 'rotate',
  SEARCH: 'search',
  SEEN: 'seen',
  SETTINGS: 'settings',
  SHARE: 'share',
  SMS: 'sms',
  STAR: 'star',
  STAR_HALF: 'star_half',
  STAR_HALF_OUTLINED: 'star_half_outlined',
  STAR_OUTLINED: 'star_outlined',
  SUBTITLE: 'subtitle',
  SYMBOLS: 'symbols',
  TITLE: 'title',
  TOUGHEST_QUESTIONS: 'toughest_questions',
  TRASH: 'trash',
  TWITTER: 'twitter',
  UNDERLINED: 'underlined',
  UNSEEN: 'unseen',
  VERIFIED: 'verified',
  YOUTUBE: 'youtube',
  ARROW_TOP_RIGHT: 'arrow_top_right',
  CIRCLE: 'circle',
  CROP: 'crop',
  CYRILLIC: 'cyrillic',
  DRAW: 'draw',
  DRAWING_MODE: 'drawing_mode',
  EUROPEAN: 'european',
  GREEK: 'greek',
  HIGHLIGHT: 'highlight',
  LINE: 'line',
  MORE: 'more',
  PAUSE: 'pause',
  RECTANGLE: 'rectangle',
  SUP_SUB: 'sup_sub',
  TRIANGLE: 'triangle',
  PI: 'pi',
  QUOTE: 'quote',
  SPARK: 'spark',
  ROTATE_90: 'rotate_90',
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
  PEACH: 'peach',
};

export const ICON_TAG_TYPE = {
  DIV: 'div',
  SPAN: 'span',
};

// As soon as we change Avatars to new the new icon, we could clean up sizes of the icons.
export const SIZE = [
  120,
  118,
  104,
  102,
  80,
  78,
  64,
  62,
  56,
  54,
  48,
  46,
  40,
  38,
  32,
  30,
  26,
  24,
  22,
  20,
  18,
  16,
  14,
  10,
];

export type IconPropsType =
  | {
      /**
       * Additional class names
       */
      className?: ?string,
      /**
       * Icons colors example, see more in SG interactive
       * @example <Icon color="dark" type="answer" />
       * @see color="adaptive" https://styleguide.brainly.com/latest/docs/interactive.html?color=adaptive#icons
       */
      color?: ?IconColorType,
      /**
       * Icons size example, see more in SG interactive
       * @example <Icon size="46" type="answer" />
       * @see size="46" https://styleguide.brainly.com/latest/docs/interactive.html?size=46#icons
       */
      size?: ?IconSizeType,
      /**
       * Icons types example, see more in SG interactive
       * @example <Icon size="46" type="answer" />
       * @see type="heart" https://styleguide.brainly.com/latest/docs/interactive.html?type=heart#icons
       */
      type: IconTypeType,
      /**
      * Option to change tag to span, which allows correct HTML structure
      * @example  <Button
                    type="secondary"
                  >
                    Get +50
                    <Icon
                      type={iconTypes.POINTS}
                      color="dark"
                      size={16}
                      tagType="span"
                    />
                  </Button>
      */
      tagType?: IconTagType,
      ...
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
       * @example <Icon color="dark" type="answer" />
       * @see color="adaptive" https://styleguide.brainly.com/latest/docs/interactive.html?color=adaptive#icons
       */
      color?: ?IconColorType,
      /**
       * Icons size example, see more in SG interactive
       * @example <Icon size="46" type="answer" />
       * @see size="46" https://styleguide.brainly.com/latest/docs/interactive.html?size=46#icons
       */
      size?: ?IconSizeType,
      /**
      * Option to change tag to span, which allows correct HTML structure
      * @example  <Button
                    type="secondary"
                  >
                    Get +50
                    <Icon
                      type={iconTypes.POINTS}
                      color="dark"
                      size={16}
                      tagType="span"
                    />
                  </Button>
      */
      tagType?: IconTagType,
      ...
    };

const Icon = ({
  color,
  size = 24,
  // $FlowFixMe flow doesn't support refinements for non-exact types, but we can't make it exact for legacy reasons
  type,
  // $FlowFixMe flow doesn't support refinements for non-exact types, but we can't make it exact for legacy reasons
  children,
  tagType = 'div',
  className,
  ...props
}: IconPropsType) => {
  const iconClass = classNames(
    'sg-icon',
    {
      [`sg-icon--${String(color)}`]: color,
      [`sg-icon--x${String(size)}`]: size,
    },
    className
  );

  const iconType = `#icon-${type}`;
  const Tag = tagType;

  return (
    <Tag {...props} className={iconClass}>
      {type ? (
        <svg className="sg-icon__svg">
          <use xlinkHref={iconType} />
        </svg>
      ) : (
        children
      )}
    </Tag>
  );
};

export default Icon;
