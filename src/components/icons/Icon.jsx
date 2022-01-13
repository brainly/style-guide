// @flow strict

import * as React from 'react';
import classNames from 'classnames';

export type IconTypeType =
  | 'academic_cap'
  | 'all_questions'
  | 'answer'
  | 'answers'
  | 'arrow_double_down'
  | 'arrow_down'
  | 'arrow_left'
  | 'arrow_right'
  | 'arrow_up'
  | 'ask_bubble'
  | 'ask_parent_to_pay'
  | 'attachment'
  | 'bell_checked'
  | 'bell_outlined'
  | 'bold'
  | 'bulb'
  | 'bulb_checked'
  | 'bulleted_list'
  | 'calendar'
  | 'camera'
  | 'chapter'
  | 'check'
  | 'clipboard'
  | 'close'
  | 'comment'
  | 'comment_outlined'
  | 'counter'
  | 'credit_card'
  | 'crown'
  | 'crown_outlined'
  | 'cup'
  | 'envelope'
  | 'equation'
  | 'exclamation_mark'
  | 'facebook'
  | 'google'
  | 'apple'
  | 'filters'
  | 'friend_add'
  | 'friend_remove'
  | 'friend_pending'
  | 'friend_checked'
  | 'friends'
  | 'fullscreen'
  | 'funnel'
  | 'globe'
  | 'heading'
  | 'heart'
  | 'heart_outlined'
  | 'image'
  | 'influence'
  | 'info'
  | 'instagram'
  | 'italic'
  | 'keyboard'
  | 'less'
  | 'linkedin'
  | 'lock_with_play'
  | 'logout'
  | 'medium'
  | 'megaphone'
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
  | 'profile_settings'
  | 'question'
  | 'recent_questions'
  | 'reload'
  | 'report_flag'
  | 'report_flag_outlined'
  | 'rotate'
  | 'rotate_90'
  | 'search'
  | 'seen'
  | 'send'
  | 'settings'
  | 'share'
  | 'shield'
  | 'sms'
  | 'star'
  | 'star_half'
  | 'star_half_outlined'
  | 'star_outlined'
  | 'subtitle'
  | 'symbols'
  | 'textbook'
  | 'thumb_down'
  | 'thumb_down_outlined'
  | 'thumb_up'
  | 'thumb_up_outlined'
  | 'title'
  | 'toughest_questions'
  | 'trash'
  | 'twitter'
  | 'underlined'
  | 'unseen'
  | 'verified'
  | 'warning'
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
  | 'dot'
  | 'clear';

export type IconColorType =
  | 'adaptive'
  | 'icon-black'
  | 'icon-white'
  | 'icon-blue-50'
  | 'icon-indigo-50'
  | 'icon-green-50'
  | 'icon-yellow-50'
  | 'icon-red-50'
  | 'icon-gray-70'
  | 'icon-gray-50'
  | 'icon-gray-40';

export type IconTagType = 'div' | 'span';

export type IconSizeType = 16 | 24 | 32 | 40 | 56 | 80 | 104;

export const TYPE: {
  ACADEMIC_CAP: 'academic_cap',
  ALL_QUESTIONS: 'all_questions',
  ANSWER: 'answer',
  ANSWERS: 'answers',
  ARROW_DOUBLE_DOWN: 'arrow_double_down',
  ARROW_DOWN: 'arrow_down',
  ARROW_LEFT: 'arrow_left',
  ARROW_RIGHT: 'arrow_right',
  ARROW_UP: 'arrow_up',
  ASK_BUBBLE: 'ask_bubble',
  ASK_PARENT_TO_PAY: 'ask_parent_to_pay',
  ATTACHMENT: 'attachment',
  BELL_CHECKED: 'bell_checked',
  BELL_OUTLINED: 'bell_outlined',
  BOLD: 'bold',
  BULB: 'bulb',
  BULB_CHECKED: 'bulb_checked',
  BULLETED_LIST: 'bulleted_list',
  CALENDAR: 'calendar',
  CAMERA: 'camera',
  CHAPTER: 'chapter',
  CHECK: 'check',
  CLIPBOARD: 'clipboard',
  CLOSE: 'close',
  COMMENT: 'comment',
  COMMENT_OUTLINED: 'comment_outlined',
  COUNTER: 'counter',
  CREDIT_CARD: 'credit_card',
  CROWN: 'crown',
  CROWN_OUTLINED: 'crown_outlined',
  CUP: 'cup',
  ENVELOPE: 'envelope',
  EQUATION: 'equation',
  EXCLAMATION_MARK: 'exclamation_mark',
  FACEBOOK: 'facebook',
  GOOGLE: 'google',
  APPLE: 'apple',
  FILTERS: 'filters',
  FRIEND_ADD: 'friend_add',
  FRIEND_REMOVE: 'friend_remove',
  FRIEND_PENDING: 'friend_pending',
  FRIEND_CHECKED: 'friend_checked',
  FRIENDS: 'friends',
  FULLSCREEN: 'fullscreen',
  FUNNEL: 'funnel',
  GLOBE: 'globe',
  HEADING: 'heading',
  HEART: 'heart',
  HEART_OUTLINED: 'heart_outlined',
  IMAGE: 'image',
  INFLUENCE: 'influence',
  INFO: 'info',
  INSTRAGRAM: 'instagram',
  ITALIC: 'italic',
  KEYBOARD: 'keyboard',
  LESS: 'less',
  LINKEDIN: 'linkedin',
  LOCK_WITH_PLAY: 'lock_with_play',
  LOGOUT: 'logout',
  MEDIUM: 'medium',
  MEGAPHONE: 'megaphone',
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
  PROFILE_SETTINGS: 'profile_settings',
  QUESTION: 'question',
  RECENT_QUESTIONS: 'recent_questions',
  RELOAD: 'reload',
  REPORT_FLAG: 'report_flag',
  REPORT_FLAG_OUTLINED: 'report_flag_outlined',
  ROTATE: 'rotate',
  ROTATE_90: 'rotate_90',
  SEARCH: 'search',
  SEEN: 'seen',
  SEND: 'send',
  SETTINGS: 'settings',
  SHARE: 'share',
  SHIELD: 'shield',
  SMS: 'sms',
  STAR: 'star',
  STAR_HALF: 'star_half',
  STAR_HALF_OUTLINED: 'star_half_outlined',
  STAR_OUTLINED: 'star_outlined',
  SUBTITLE: 'subtitle',
  SYMBOLS: 'symbols',
  TEXTBOOK: 'textbook',
  THUMB_DOWN: 'thumb_down',
  THUMB_DOWN_OUTLINED: 'thumb_down_outlined',
  THUMB_UP: 'thumb_up',
  THUMB_UP_OUTLINED: 'thumb_up_outlined',
  TITLE: 'title',
  TOUGHEST_QUESTIONS: 'toughest_questions',
  TRASH: 'trash',
  TWITTER: 'twitter',
  UNDERLINED: 'underlined',
  UNSEEN: 'unseen',
  VERIFIED: 'verified',
  WARNING: 'warning',
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
  DOT: 'dot',
  CLEAR: 'clear',
} = {
  ACADEMIC_CAP: 'academic_cap',
  ALL_QUESTIONS: 'all_questions',
  ANSWER: 'answer',
  ANSWERS: 'answers',
  ARROW_DOUBLE_DOWN: 'arrow_double_down',
  ARROW_DOWN: 'arrow_down',
  ARROW_LEFT: 'arrow_left',
  ARROW_RIGHT: 'arrow_right',
  ARROW_UP: 'arrow_up',
  ASK_BUBBLE: 'ask_bubble',
  ASK_PARENT_TO_PAY: 'ask_parent_to_pay',
  ATTACHMENT: 'attachment',
  BELL_CHECKED: 'bell_checked',
  BELL_OUTLINED: 'bell_outlined',
  BOLD: 'bold',
  BULB: 'bulb',
  BULB_CHECKED: 'bulb_checked',
  BULLETED_LIST: 'bulleted_list',
  CALENDAR: 'calendar',
  CAMERA: 'camera',
  CHAPTER: 'chapter',
  CHECK: 'check',
  CLIPBOARD: 'clipboard',
  CLOSE: 'close',
  COMMENT: 'comment',
  COMMENT_OUTLINED: 'comment_outlined',
  COUNTER: 'counter',
  CREDIT_CARD: 'credit_card',
  CROWN: 'crown',
  CROWN_OUTLINED: 'crown_outlined',
  CUP: 'cup',
  ENVELOPE: 'envelope',
  EQUATION: 'equation',
  EXCLAMATION_MARK: 'exclamation_mark',
  FACEBOOK: 'facebook',
  GOOGLE: 'google',
  APPLE: 'apple',
  FILTERS: 'filters',
  FRIEND_ADD: 'friend_add',
  FRIEND_REMOVE: 'friend_remove',
  FRIEND_PENDING: 'friend_pending',
  FRIEND_CHECKED: 'friend_checked',
  FRIENDS: 'friends',
  FULLSCREEN: 'fullscreen',
  FUNNEL: 'funnel',
  GLOBE: 'globe',
  HEADING: 'heading',
  HEART: 'heart',
  HEART_OUTLINED: 'heart_outlined',
  IMAGE: 'image',
  INFLUENCE: 'influence',
  INFO: 'info',
  INSTRAGRAM: 'instagram',
  ITALIC: 'italic',
  KEYBOARD: 'keyboard',
  LESS: 'less',
  LINKEDIN: 'linkedin',
  LOCK_WITH_PLAY: 'lock_with_play',
  LOGOUT: 'logout',
  MEDIUM: 'medium',
  MEGAPHONE: 'megaphone',
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
  PROFILE_SETTINGS: 'profile_settings',
  QUESTION: 'question',
  RECENT_QUESTIONS: 'recent_questions',
  RELOAD: 'reload',
  REPORT_FLAG: 'report_flag',
  REPORT_FLAG_OUTLINED: 'report_flag_outlined',
  ROTATE: 'rotate',
  ROTATE_90: 'rotate_90',
  SEARCH: 'search',
  SEEN: 'seen',
  SEND: 'send',
  SETTINGS: 'settings',
  SHARE: 'share',
  SHIELD: 'shield',
  SMS: 'sms',
  STAR: 'star',
  STAR_HALF: 'star_half',
  STAR_HALF_OUTLINED: 'star_half_outlined',
  STAR_OUTLINED: 'star_outlined',
  SUBTITLE: 'subtitle',
  SYMBOLS: 'symbols',
  TEXTBOOK: 'textbook',
  THUMB_DOWN: 'thumb_down',
  THUMB_DOWN_OUTLINED: 'thumb_down_outlined',
  THUMB_UP: 'thumb_up',
  THUMB_UP_OUTLINED: 'thumb_up_outlined',
  TITLE: 'title',
  TOUGHEST_QUESTIONS: 'toughest_questions',
  TRASH: 'trash',
  TWITTER: 'twitter',
  UNDERLINED: 'underlined',
  UNSEEN: 'unseen',
  VERIFIED: 'verified',
  WARNING: 'warning',
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
  DOT: 'dot',
  CLEAR: 'clear',
};

export const ICON_COLOR: {
  ADAPTIVE: 'adaptive',
  'icon-black': 'icon-black',
  'icon-white': 'icon-white',
  'icon-blue-50': 'icon-blue-50',
  'icon-indigo-50': 'icon-indigo-50',
  'icon-green-50': 'icon-green-50',
  'icon-yellow-50': 'icon-yellow-50',
  'icon-red-50': 'icon-red-50',
  'icon-gray-70': 'icon-gray-70',
  'icon-gray-50': 'icon-gray-50',
  'icon-gray-40': 'icon-gray-40',
} = {
  ADAPTIVE: 'adaptive',
  'icon-black': 'icon-black',
  'icon-white': 'icon-white',
  'icon-blue-50': 'icon-blue-50',
  'icon-indigo-50': 'icon-indigo-50',
  'icon-green-50': 'icon-green-50',
  'icon-yellow-50': 'icon-yellow-50',
  'icon-red-50': 'icon-red-50',
  'icon-gray-70': 'icon-gray-70',
  'icon-gray-50': 'icon-gray-50',
  'icon-gray-40': 'icon-gray-40',
};

export const ICON_TAG_TYPE: {
  DIV: 'div',
  SPAN: 'span',
} = {
  DIV: 'div',
  SPAN: 'span',
};

export const SIZE = [16, 24, 32, 40, 56, 80, 104];

export type IconPropsType =
  | {
      /**
       * Additional class names
       */
      className?: ?string,
      /**
       * Icons colors example, see more in SG interactive
       * @example <Icon color="icon-black" type="answer" />
       * @see color="adaptive" https://styleguide.brainly.com/latest/docs/interactive.html?color=adaptive#icons
       */
      color?: ?IconColorType,
      /**
       * Icons size example, see more in SG interactive
       * @example <Icon size="24" type="answer" />
       * @see size="24" https://styleguide.brainly.com/latest/docs/interactive.html?size=24#icons
       */
      size?: ?IconSizeType,
      /**
       * Icons types example, see more in SG interactive
       * @example <Icon size="24" type="answer" />
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
      /**
       * An accessible, short-text description; defaults to `type`
       */
      title?: string,
      /**
       * An accessible, long-text description
       */
      description?: string,
      ...
    }
  | {
      /**
       * Children to be rendered inside Icon
       */
      children: React.Node,
      /**
       * Additional class names
       */
      className?: ?string,
      /**
       * Icons colors example, see more in SG interactive
       * @example <Icon color="icon-black" type="answer" />
       * @see color="adaptive" https://styleguide.brainly.com/latest/docs/interactive.html?color=adaptive#icons
       */
      color?: ?IconColorType,
      /**
       * Icons size example, see more in SG interactive
       * @example <Icon size="24" type="answer" />
       * @see size="24" https://styleguide.brainly.com/latest/docs/interactive.html?size=24#icons
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
      /**
       * An accessible, short-text description; defaults to `type`
       */
      title?: string,
      /**
       * An accessible, long-text description
       */
      description?: string,
      ...
    };

function generateIdSuffix(type: string) {
  const randomIndex = Math.random().toString(36).substring(7);

  return `${type}-${randomIndex}`;
}

const Icon = ({
  color = ICON_COLOR['icon-white'],
  size = 24,
  // @ts-expect-error
  // $FlowFixMe flow doesn't support refinements for non-exact types, but we can't make it exact for legacy reasons
  type,
  // @ts-expect-error
  // $FlowFixMe flow doesn't support refinements for non-exact types, but we can't make it exact for legacy reasons
  children,
  tagType = 'div',
  className,
  title,
  description,
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

  const idSuffix = generateIdSuffix(type);
  const titleId = `title-${idSuffix}`;
  const titleFallback = String(type).replace(/_/g, ' ');
  const descId = `desc-${idSuffix}`;
  const labelledBy = description ? `${titleId} ${descId}` : titleId;
  const ariaLabel = type
    ? undefined
    : [title, description].filter(Boolean).join(', ');

  return (
    <Tag {...props} className={iconClass} aria-label={ariaLabel}>
      {type ? (
        <svg
          className="sg-icon__svg"
          role="img"
          aria-labelledby={labelledBy}
          focusable="false"
        >
          <title id={titleId}>{title || titleFallback}</title>
          {description && <desc id={descId}>{description}</desc>}
          <use xlinkHref={iconType} aria-hidden="true" />
        </svg>
      ) : (
        children
      )}
    </Tag>
  );
};

export default Icon;
