// @flow strict

import React from 'react';
import type {Node} from 'react';
import classNames from 'classnames';

export type IconTypeType =
  | 'all_questions'
  | 'answer'
  | 'arrow_double_down'
  | 'arrow_down'
  | 'arrow_left'
  | 'arrow_right'
  | 'arrow_up'
  | 'ask_parent_to_pay'
  | 'attachment'
  | 'bold'
  | 'bulleted_list'
  | 'camera'
  | 'check'
  | 'close'
  | 'counter'
  | 'credit_card'
  | 'equation'
  | 'excellent'
  | 'exclamation_mark'
  | 'facebook'
  | 'friends'
  | 'heading'
  | 'heart'
  | 'image'
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
  | 'more'
  | 'notifications'
  | 'numbered_list'
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
  | 'rotate'
  | 'search'
  | 'seen'
  | 'settings'
  | 'share'
  | 'sms'
  | 'star_half'
  | 'star'
  | 'subtitle'
  | 'symbols'
  | 'title'
  | 'toughest_questions'
  | 'twitter'
  | 'underlined'
  | 'verified'
  | 'youtube';

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
  ALL_QUESTIONS: 'all_questions',
  ANSWER: 'answer',
  ARROW_DOUBLE_DOWN: 'arrow_double_down',
  ARROW_DOWN: 'arrow_down',
  ARROW_LEFT: 'arrow_left',
  ARROW_RIGHT: 'arrow_right',
  ARROW_UP: 'arrow_up',
  ASK_PARENT_TO_PAY: 'ask_parent_to_pay',
  ATTACHMENT: 'attachment',
  BOLD: 'bold',
  BULLETED_LIST: 'bulleted_list',
  CAMERA: 'camera',
  CHECK: 'check',
  CLOSE: 'close',
  COUNTER: 'counter',
  CREDIT_CARD: 'credit_card',
  EQUATION: 'equation',
  EXCELLENT: 'excellent',
  EXCLAMATION_MARK: 'exclamation_mark',
  FACEBOOK: 'facebook',
  FRIENDS: 'friends',
  HEADING: 'heading',
  HEART: 'heart',
  IMAGE: 'image',
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
  MORE: 'more',
  NOTIFICATIONS: 'notifications',
  NUMBERED_LIST: 'numbered_list',
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
  ROTATE: 'rotate',
  SEARCH: 'search',
  SEEN: 'seen',
  SETTINGS: 'settings',
  SHARE: 'share',
  SMS: 'sms',
  STAR_HALF: 'star_half',
  STAR: 'star',
  SUBTITLE: 'subtitle',
  SYMBOLS: 'symbols',
  TITLE: 'title',
  TOUGHEST_QUESTIONS: 'toughest_questions',
  TWITTER: 'twitter',
  UNDERLINED: 'underlined',
  VERIFIED: 'verified',
  YOUTUBE: 'youtube',
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
