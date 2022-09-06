// @flow strict

import * as React from 'react';
import classNames from 'classnames';
import {generateId} from '../utils';

export type IconTypeType =
  | 'academic_cap'
  | 'add_more'
  | 'all_questions'
  | 'answer_bubble'
  | 'answer'
  | 'answers'
  | 'apple'
  | 'arrow_double_right'
  | 'arrow_down'
  | 'arrow_left'
  | 'arrow_right'
  | 'arrow_top_right'
  | 'arrow_up'
  | 'ask_bubble'
  | 'ask_parent_to_pay'
  | 'attachment'
  | 'bell_checked'
  | 'bell_outlined'
  | 'bold'
  | 'bulb_checked'
  | 'bulb'
  | 'bulleted_list'
  | 'calendar'
  | 'camera'
  | 'caret_down'
  | 'caret_up'
  | 'chapter'
  | 'check'
  | 'chevron_double_down'
  | 'chevron_double_right'
  | 'chevron_down'
  | 'chevron_left'
  | 'chevron_right'
  | 'chevron_up'
  | 'circle'
  | 'clear'
  | 'clipboard'
  | 'close'
  | 'collapse'
  | 'comment_outlined'
  | 'comment'
  | 'counter'
  | 'credit_card'
  | 'crop'
  | 'crown_outlined'
  | 'crown'
  | 'cup'
  | 'cursor_select'
  | 'cyrillic'
  | 'dot'
  | 'draw'
  | 'drawing_mode'
  | 'envelope'
  | 'equation'
  | 'eraser'
  | 'european'
  | 'exclamation_mark'
  | 'facebook'
  | 'filters'
  | 'friend_add'
  | 'friend_checked'
  | 'friend_pending'
  | 'friend_remove'
  | 'friends'
  | 'fullscreen'
  | 'funnel'
  | 'globe'
  | 'google'
  | 'greek'
  | 'heading'
  | 'heart_outlined'
  | 'heart'
  | 'highlight'
  | 'image'
  | 'influence'
  | 'info'
  | 'instagram'
  | 'italic'
  | 'keyboard'
  | 'less'
  | 'line'
  | 'linkedin'
  | 'lock_with_play'
  | 'logout'
  | 'medium'
  | 'megaphone'
  | 'menu'
  | 'messages'
  | 'mic'
  | 'money_transfer'
  | 'more'
  | 'multiselect_checked'
  | 'multiselect_unchecked'
  | 'notifications'
  | 'numbered_list'
  | 'open_in_new_tab'
  | 'padlock'
  | 'pause'
  | 'pencil'
  | 'pi'
  | 'play'
  | 'plus'
  | 'points'
  | 'profile_settings'
  | 'profile_view'
  | 'profile'
  | 'question'
  | 'quote'
  | 'recent_questions'
  | 'rectangle'
  | 'reload'
  | 'report_flag_outlined'
  | 'report_flag'
  | 'rotate_90'
  | 'rotate'
  | 'search'
  | 'seen'
  | 'send'
  | 'settings'
  | 'share'
  | 'shield'
  | 'sms'
  | 'spark'
  | 'star_half_outlined'
  | 'star_half'
  | 'star_outlined'
  | 'star'
  | 'subtitle'
  | 'sup_sub'
  | 'symbols'
  | 'textbook'
  | 'thumb_down_outlined'
  | 'thumb_down'
  | 'thumb_up_outlined'
  | 'thumb_up'
  | 'title'
  | 'toughest_questions'
  | 'trash'
  | 'triangle'
  | 'twitter'
  | 'underlined'
  | 'unseen'
  | 'verified'
  | 'warning'
  | 'youtube';

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
  ADD_MORE: 'add_more',
  ALL_QUESTIONS: 'all_questions',
  ANSWER_BUBBLE: 'answer_bubble',
  ANSWER: 'answer',
  ANSWERS: 'answers',
  APPLE: 'apple',
  ARROW_DOUBLE_RIGHT: 'arrow_double_right',
  ARROW_DOWN: 'arrow_down',
  ARROW_LEFT: 'arrow_left',
  ARROW_RIGHT: 'arrow_right',
  ARROW_TOP_RIGHT: 'arrow_top_right',
  ARROW_UP: 'arrow_up',
  ASK_BUBBLE: 'ask_bubble',
  ASK_PARENT_TO_PAY: 'ask_parent_to_pay',
  ATTACHMENT: 'attachment',
  BELL_CHECKED: 'bell_checked',
  BELL_OUTLINED: 'bell_outlined',
  BOLD: 'bold',
  BULB_CHECKED: 'bulb_checked',
  BULB: 'bulb',
  BULLETED_LIST: 'bulleted_list',
  CALENDAR: 'calendar',
  CAMERA: 'camera',
  CARET_DOWN: 'caret_down',
  CARET_UP: 'caret_up',
  CHAPTER: 'chapter',
  CHECK: 'check',
  CHEVRON_DOUBLE_DOWN: 'chevron_double_down',
  CHEVRON_DOUBLE_RIGHT: 'chevron_double_right',
  CHEVRON_DOWN: 'chevron_down',
  CHEVRON_LEFT: 'chevron_left',
  CHEVRON_RIGHT: 'chevron_right',
  CHEVRON_UP: 'chevron_up',
  CIRCLE: 'circle',
  CLEAR: 'clear',
  CLIPBOARD: 'clipboard',
  CLOSE: 'close',
  COLLAPSE: 'collapse',
  COMMENT_OUTLINED: 'comment_outlined',
  COMMENT: 'comment',
  COUNTER: 'counter',
  CREDIT_CARD: 'credit_card',
  CROP: 'crop',
  CROWN_OUTLINED: 'crown_outlined',
  CROWN: 'crown',
  CUP: 'cup',
  CURSOR_SELECT: 'cursor_select',
  CYRILLIC: 'cyrillic',
  DOT: 'dot',
  DRAW: 'draw',
  DRAWING_MODE: 'drawing_mode',
  ENVELOPE: 'envelope',
  EQUATION: 'equation',
  ERASER: 'eraser',
  EUROPEAN: 'european',
  EXCLAMATION_MARK: 'exclamation_mark',
  FACEBOOK: 'facebook',
  FILTERS: 'filters',
  FRIEND_ADD: 'friend_add',
  FRIEND_CHECKED: 'friend_checked',
  FRIEND_PENDING: 'friend_pending',
  FRIEND_REMOVE: 'friend_remove',
  FRIENDS: 'friends',
  FULLSCREEN: 'fullscreen',
  FUNNEL: 'funnel',
  GLOBE: 'globe',
  GOOGLE: 'google',
  GREEK: 'greek',
  HEADING: 'heading',
  HEART_OUTLINED: 'heart_outlined',
  HEART: 'heart',
  HIGHLIGHT: 'highlight',
  IMAGE: 'image',
  INFLUENCE: 'influence',
  INFO: 'info',
  INSTRAGRAM: 'instagram',
  ITALIC: 'italic',
  KEYBOARD: 'keyboard',
  LESS: 'less',
  LINE: 'line',
  LINKEDIN: 'linkedin',
  LOCK_WITH_PLAY: 'lock_with_play',
  LOGOUT: 'logout',
  MEDIUM: 'medium',
  MEGAPHONE: 'megaphone',
  MENU: 'menu',
  MESSAGES: 'messages',
  MIC: 'mic',
  MONEY_TRANSFER: 'money_transfer',
  MORE: 'more',
  MULTISELECT_CHECKED: 'multiselect_checked',
  MULTISELECT_UNCHECKED: 'multiselect_unchecked',
  NOTIFICATIONS: 'notifications',
  NUMBERED_LIST: 'numbered_list',
  OPEN_IN_NEW_TAB: 'open_in_new_tab',
  PADLOCK: 'padlock',
  PAUSE: 'pause',
  PENCIL: 'pencil',
  PI: 'pi',
  PLAY: 'play',
  PLUS: 'plus',
  POINTS: 'points',
  PROFILE_SETTINGS: 'profile_settings',
  PROFILE_VIEW: 'profile_view',
  PROFILE: 'profile',
  QUESTION: 'question',
  QUOTE: 'quote',
  RECENT_QUESTIONS: 'recent_questions',
  RECTANGLE: 'rectangle',
  RELOAD: 'reload',
  REPORT_FLAG_OUTLINED: 'report_flag_outlined',
  REPORT_FLAG: 'report_flag',
  ROTATE_90: 'rotate_90',
  ROTATE: 'rotate',
  SEARCH: 'search',
  SEEN: 'seen',
  SEND: 'send',
  SETTINGS: 'settings',
  SHARE: 'share',
  SHIELD: 'shield',
  SMS: 'sms',
  SPARK: 'spark',
  STAR_HALF_OUTLINED: 'star_half_outlined',
  STAR_HALF: 'star_half',
  STAR_OUTLINED: 'star_outlined',
  STAR: 'star',
  SUBTITLE: 'subtitle',
  SUP_SUB: 'sup_sub',
  SYMBOLS: 'symbols',
  TEXTBOOK: 'textbook',
  THUMB_DOWN_OUTLINED: 'thumb_down_outlined',
  THUMB_DOWN: 'thumb_down',
  THUMB_UP_OUTLINED: 'thumb_up_outlined',
  THUMB_UP: 'thumb_up',
  TITLE: 'title',
  TOUGHEST_QUESTIONS: 'toughest_questions',
  TRASH: 'trash',
  TRIANGLE: 'triangle',
  TWITTER: 'twitter',
  UNDERLINED: 'underlined',
  UNSEEN: 'unseen',
  VERIFIED: 'verified',
  WARNING: 'warning',
  YOUTUBE: 'youtube',
} = {
  ACADEMIC_CAP: 'academic_cap',
  ADD_MORE: 'add_more',
  ALL_QUESTIONS: 'all_questions',
  ANSWER_BUBBLE: 'answer_bubble',
  ANSWER: 'answer',
  ANSWERS: 'answers',
  APPLE: 'apple',
  ARROW_DOUBLE_RIGHT: 'arrow_double_right',
  ARROW_DOWN: 'arrow_down',
  ARROW_LEFT: 'arrow_left',
  ARROW_RIGHT: 'arrow_right',
  ARROW_TOP_RIGHT: 'arrow_top_right',
  ARROW_UP: 'arrow_up',
  ASK_BUBBLE: 'ask_bubble',
  ASK_PARENT_TO_PAY: 'ask_parent_to_pay',
  ATTACHMENT: 'attachment',
  BELL_CHECKED: 'bell_checked',
  BELL_OUTLINED: 'bell_outlined',
  BOLD: 'bold',
  BULB_CHECKED: 'bulb_checked',
  BULB: 'bulb',
  BULLETED_LIST: 'bulleted_list',
  CALENDAR: 'calendar',
  CAMERA: 'camera',
  CARET_DOWN: 'caret_down',
  CARET_UP: 'caret_up',
  CHAPTER: 'chapter',
  CHECK: 'check',
  CHEVRON_DOUBLE_DOWN: 'chevron_double_down',
  CHEVRON_DOUBLE_RIGHT: 'chevron_double_right',
  CHEVRON_DOWN: 'chevron_down',
  CHEVRON_LEFT: 'chevron_left',
  CHEVRON_RIGHT: 'chevron_right',
  CHEVRON_UP: 'chevron_up',
  CIRCLE: 'circle',
  CLEAR: 'clear',
  CLIPBOARD: 'clipboard',
  CLOSE: 'close',
  COLLAPSE: 'collapse',
  COMMENT_OUTLINED: 'comment_outlined',
  COMMENT: 'comment',
  COUNTER: 'counter',
  CREDIT_CARD: 'credit_card',
  CROP: 'crop',
  CROWN_OUTLINED: 'crown_outlined',
  CROWN: 'crown',
  CUP: 'cup',
  CURSOR_SELECT: 'cursor_select',
  CYRILLIC: 'cyrillic',
  DOT: 'dot',
  DRAW: 'draw',
  DRAWING_MODE: 'drawing_mode',
  ENVELOPE: 'envelope',
  EQUATION: 'equation',
  ERASER: 'eraser',
  EUROPEAN: 'european',
  EXCLAMATION_MARK: 'exclamation_mark',
  FACEBOOK: 'facebook',
  FILTERS: 'filters',
  FRIEND_ADD: 'friend_add',
  FRIEND_CHECKED: 'friend_checked',
  FRIEND_PENDING: 'friend_pending',
  FRIEND_REMOVE: 'friend_remove',
  FRIENDS: 'friends',
  FULLSCREEN: 'fullscreen',
  FUNNEL: 'funnel',
  GLOBE: 'globe',
  GOOGLE: 'google',
  GREEK: 'greek',
  HEADING: 'heading',
  HEART_OUTLINED: 'heart_outlined',
  HEART: 'heart',
  HIGHLIGHT: 'highlight',
  IMAGE: 'image',
  INFLUENCE: 'influence',
  INFO: 'info',
  INSTRAGRAM: 'instagram',
  ITALIC: 'italic',
  KEYBOARD: 'keyboard',
  LESS: 'less',
  LINE: 'line',
  LINKEDIN: 'linkedin',
  LOCK_WITH_PLAY: 'lock_with_play',
  LOGOUT: 'logout',
  MEDIUM: 'medium',
  MEGAPHONE: 'megaphone',
  MENU: 'menu',
  MESSAGES: 'messages',
  MIC: 'mic',
  MONEY_TRANSFER: 'money_transfer',
  MORE: 'more',
  MULTISELECT_CHECKED: 'multiselect_checked',
  MULTISELECT_UNCHECKED: 'multiselect_unchecked',
  NOTIFICATIONS: 'notifications',
  NUMBERED_LIST: 'numbered_list',
  OPEN_IN_NEW_TAB: 'open_in_new_tab',
  PADLOCK: 'padlock',
  PAUSE: 'pause',
  PENCIL: 'pencil',
  PI: 'pi',
  PLAY: 'play',
  PLUS: 'plus',
  POINTS: 'points',
  PROFILE_SETTINGS: 'profile_settings',
  PROFILE_VIEW: 'profile_view',
  PROFILE: 'profile',
  QUESTION: 'question',
  QUOTE: 'quote',
  RECENT_QUESTIONS: 'recent_questions',
  RECTANGLE: 'rectangle',
  RELOAD: 'reload',
  REPORT_FLAG_OUTLINED: 'report_flag_outlined',
  REPORT_FLAG: 'report_flag',
  ROTATE_90: 'rotate_90',
  ROTATE: 'rotate',
  SEARCH: 'search',
  SEEN: 'seen',
  SEND: 'send',
  SETTINGS: 'settings',
  SHARE: 'share',
  SHIELD: 'shield',
  SMS: 'sms',
  SPARK: 'spark',
  STAR_HALF_OUTLINED: 'star_half_outlined',
  STAR_HALF: 'star_half',
  STAR_OUTLINED: 'star_outlined',
  STAR: 'star',
  SUBTITLE: 'subtitle',
  SUP_SUB: 'sup_sub',
  SYMBOLS: 'symbols',
  TEXTBOOK: 'textbook',
  THUMB_DOWN_OUTLINED: 'thumb_down_outlined',
  THUMB_DOWN: 'thumb_down',
  THUMB_UP_OUTLINED: 'thumb_up_outlined',
  THUMB_UP: 'thumb_up',
  TITLE: 'title',
  TOUGHEST_QUESTIONS: 'toughest_questions',
  TRASH: 'trash',
  TRIANGLE: 'triangle',
  TWITTER: 'twitter',
  UNDERLINED: 'underlined',
  UNSEEN: 'unseen',
  VERIFIED: 'verified',
  WARNING: 'warning',
  YOUTUBE: 'youtube',
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
  return `${type}-${generateId()}`;
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
  const defaultTitle = String(type).replace(/_/g, ' ');
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
          <text id={titleId} hidden>
            {title || defaultTitle}
          </text>
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
