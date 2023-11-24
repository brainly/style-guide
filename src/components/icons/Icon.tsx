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
  | 'archive'
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
  | 'best_answer'
  | 'block'
  | 'bold'
  | 'brainly_oval'
  | 'brainly_parallelogram'
  | 'bulb_checked'
  | 'bulb'
  | 'bulleted_list'
  | 'calendar'
  | 'camera'
  | 'caret_down'
  | 'caret_up'
  | 'chapter'
  | 'check'
  | 'check_circle'
  | 'chevron_double_down'
  | 'chevron_double_right'
  | 'chevron_down'
  | 'chevron_left'
  | 'chevron_right'
  | 'chevron_up'
  | 'chevrons_horizontal'
  | 'circle'
  | 'clear'
  | 'clipboard'
  | 'clipboard_outlined'
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
  | 'ginny'
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
  | 'message_new'
  | 'messages'
  | 'mic'
  | 'mic_muted'
  | 'minus_in_circle_outlined'
  | 'money_transfer'
  | 'more'
  | 'multiselect_checked'
  | 'multiselect_unchecked'
  | 'notifications'
  | 'numbered_list'
  | 'open_in_new_tab'
  | 'options'
  | 'padlock'
  | 'pause'
  | 'pencil'
  | 'pi'
  | 'play'
  | 'plus'
  | 'points'
  | 'printer'
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
  | 'search_add'
  | 'seen'
  | 'send'
  | 'settings'
  | 'share'
  | 'shield'
  | 'sidebar_left'
  | 'sidebar_right'
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
  | 'user_block'
  | 'verified'
  | 'warning'
  | 'youtube'
  | 'gift';

export type IconColorType =
  | 'adaptive'
  | 'icon-black'
  | 'icon-white'
  | 'icon-blue-50'
  | 'icon-blue-60'
  | 'icon-indigo-50'
  | 'icon-indigo-60'
  | 'icon-green-50'
  | 'icon-green-60'
  | 'icon-yellow-50'
  | 'icon-yellow-60'
  | 'icon-red-50'
  | 'icon-red-60'
  | 'icon-gray-70'
  | 'icon-gray-60'
  | 'icon-gray-50'
  | 'icon-gray-40';

export type IconAsType = 'div' | 'span';
export type IconSizeType = 16 | 24 | 32 | 40 | 56 | 80 | 104;

export const TYPE = {
  ACADEMIC_CAP: 'academic_cap',
  ADD_MORE: 'add_more',
  ALL_QUESTIONS: 'all_questions',
  ANSWER_BUBBLE: 'answer_bubble',
  ANSWER: 'answer',
  ANSWERS: 'answers',
  APPLE: 'apple',
  ARCHIVE: 'archive',
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
  BEST_ANSWER: 'best_answer',
  BLOCK: 'block',
  BOLD: 'bold',
  BRAINLY_OVAL: 'brainly_oval',
  BRAINLY_PARALLELOGRAM: 'brainly_parallelogram',
  BULB_CHECKED: 'bulb_checked',
  BULB: 'bulb',
  BULLETED_LIST: 'bulleted_list',
  CALENDAR: 'calendar',
  CAMERA: 'camera',
  CARET_DOWN: 'caret_down',
  CARET_UP: 'caret_up',
  CHAPTER: 'chapter',
  CHECK: 'check',
  CHECK_CIRCLE: 'check_circle',
  CHEVRON_DOUBLE_DOWN: 'chevron_double_down',
  CHEVRON_DOUBLE_RIGHT: 'chevron_double_right',
  CHEVRON_DOWN: 'chevron_down',
  CHEVRON_LEFT: 'chevron_left',
  CHEVRON_RIGHT: 'chevron_right',
  CHEVRON_UP: 'chevron_up',
  CHEVRONS_HORIZONTAL: 'chevrons_horizontal',
  CIRCLE: 'circle',
  CLEAR: 'clear',
  CLIPBOARD: 'clipboard',
  CLIPBOARD_OUTLINED: 'clipboard_outlined',
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
  GINNY: 'ginny',
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
  MESSAGE_NEW: 'message_new',
  MESSAGES: 'messages',
  MIC: 'mic',
  MIC_MUTED: 'mic_muted',
  MINUS_IN_CIRCLE_OUTLIEND: 'minus_in_circle_outlined',
  MONEY_TRANSFER: 'money_transfer',
  MORE: 'more',
  MULTISELECT_CHECKED: 'multiselect_checked',
  MULTISELECT_UNCHECKED: 'multiselect_unchecked',
  NOTIFICATIONS: 'notifications',
  NUMBERED_LIST: 'numbered_list',
  OPEN_IN_NEW_TAB: 'open_in_new_tab',
  OPTIONS: 'options',
  PADLOCK: 'padlock',
  PAUSE: 'pause',
  PENCIL: 'pencil',
  PI: 'pi',
  PLAY: 'play',
  PLUS: 'plus',
  POINTS: 'points',
  PRINTER: 'printer',
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
  SEARCH_ADD: 'search_add',
  SEEN: 'seen',
  SEND: 'send',
  SETTINGS: 'settings',
  SHARE: 'share',
  SHIELD: 'shield',
  SIDEBAR_LEFT: 'sidebar_left',
  SIDEBAR_RIGHT: 'sidebar_right',
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
  USER_BLOCK: 'user_block',
  VERIFIED: 'verified',
  WARNING: 'warning',
  YOUTUBE: 'youtube',
  GIFT: 'gift',
} as const;

export const ICON_COLOR = {
  ADAPTIVE: 'adaptive',
  'icon-black': 'icon-black',
  'icon-white': 'icon-white',
  'icon-blue-50': 'icon-blue-50',
  'icon-blue-60': 'icon-blue-60',
  'icon-indigo-50': 'icon-indigo-50',
  'icon-indigo-60': 'icon-indigo-60',
  'icon-green-50': 'icon-green-50',
  'icon-green-60': 'icon-green-60',
  'icon-yellow-50': 'icon-yellow-50',
  'icon-yellow-60': 'icon-yellow-60',
  'icon-red-50': 'icon-red-50',
  'icon-red-60': 'icon-red-60',
  'icon-gray-70': 'icon-gray-70',
  'icon-gray-60': 'icon-gray-60',
  'icon-gray-50': 'icon-gray-50',
  'icon-gray-40': 'icon-gray-40',
} as const;

export const ICON_TAG_TYPE = {
  DIV: 'div',
  SPAN: 'span',
} as const;

export const SIZE = [16, 24, 32, 40, 56, 80, 104];
export type IconPropsType =
  | ({
      /**
       * Additional class names
       */
      className?: string | null | undefined;

      /**
       * Icons colors example, see more in SG interactive
       * @example <Icon color="icon-black" type="answer" />
       * @see color="adaptive" https://styleguide.brainly.com/latest/docs/interactive.html?color=adaptive#icons
       */
      color?: IconColorType | null | undefined;

      /**
       * Icons size example, see more in SG interactive
       * @example <Icon size="24" type="answer" />
       * @see size="24" https://styleguide.brainly.com/latest/docs/interactive.html?size=24#icons
       */
      size?: IconSizeType | null | undefined;

      /**
       * Icons types example, see more in SG interactive
       * @example <Icon size="24" type="answer" />
       * @see type="heart" https://styleguide.brainly.com/latest/docs/interactive.html?type=heart#icons
       */
      type: IconTypeType;

      /**
  * Option to change tag to span, which allows correct HTML structure
  * @example  <Button
                variant="secondary"
              >
                Get +50
                <Icon
                  type={iconTypes.POINTS}
                  color="dark"
                  size={16}
                  as="span"
                />
              </Button>
  */
      as?: IconAsType;

      /**
       * An accessible, short-text description; defaults to `type`
       */
      title?: string;

      /**
       * An accessible, long-text description
       */
      description?: string;
    } & Omit<
      React.AllHTMLAttributes<HTMLElement>,
      'className' | 'color' | 'size' | 'type' | 'as' | 'title' | 'description'
    >)
  | ({
      /**
       * Children to be rendered inside Icon
       */
      children: React.ReactNode;

      /**
       * Additional class names
       */
      className?: string | null | undefined;

      /**
       * Icons colors example, see more in SG interactive
       * @example <Icon color="icon-black" type="answer" />
       * @see color="adaptive" https://styleguide.brainly.com/latest/docs/interactive.html?color=adaptive#icons
       */
      color?: IconColorType | null | undefined;

      /**
       * Icons size example, see more in SG interactive
       * @example <Icon size="24" type="answer" />
       * @see size="24" https://styleguide.brainly.com/latest/docs/interactive.html?size=24#icons
       */
      size?: IconSizeType | null | undefined;

      /**
  * Option to change tag to span, which allows correct HTML structure
  * @example  <Button
                variant="secondary"
              >
                Get +50
                <Icon
                  type={iconTypes.POINTS}
                  color="dark"
                  size={16}
                  as="span"
                />
              </Button>
  */
      as?: IconAsType;

      /**
       * An accessible, short-text description; defaults to `type`
       */
      title?: string;

      /**
       * An accessible, long-text description
       */
      description?: string;
    } & Omit<
      React.AllHTMLAttributes<HTMLElement>,
      | 'children'
      | 'className'
      | 'color'
      | 'size'
      | 'as'
      | 'title'
      | 'description'
    >);

function generateIdSuffix(type: string) {
  return `${type}-${generateId()}`;
}

const Icon = ({
  color = ICON_COLOR['icon-white'],
  size = 24,
  type,
  children,
  as = 'div',
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
  const Tag = as;
  const idSuffix = generateIdSuffix(type);
  const titleId = `title-${idSuffix}`;
  const defaultTitle = String(type).replace(/_/g, ' ');
  const descId = `desc-${idSuffix}`;
  const labelledBy = description ? `${titleId} ${descId}` : titleId;
  const ariaLabel = type
    ? undefined
    : [title, description].filter(Boolean).join(', ');

  // suppressHydrationWarning is used until 'useId' hook is available
  return (
    <Tag {...props} className={iconClass} aria-label={ariaLabel}>
      {type ? (
        <svg
          className="sg-icon__svg"
          role="img"
          aria-labelledby={labelledBy}
          focusable="false"
          // @ts-expect-error
          suppressHydrationWarning
        >
          <text
            id={titleId}
            visibility="hidden"
            /* @ts-expect-error */
            suppressHydrationWarning
          >
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
