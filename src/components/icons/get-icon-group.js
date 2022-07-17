// @flow strict

const iconMap = {
  Essential: [
    'academic_cap',
    'all_questions',
    'answer',
    'answers',
    'answer_bubble',
    'ask_bubble',
    'bulb',
    'bulb_checked',
    'calendar',
    'chapter',
    'clipboard',
    'counter',
    'credit_card',
    'cursor_select',
    'envelope',
    'exclamation_mark',
    'hand_move',
    'lock_with_play',
    'money_transfer',
    'padlock',
    'question',
    'recent_questions',
    'seen',
    'send',
    'settings',
    'sms',
    'toughest_questions',
    'unseen',
    'warning',
    'spark',
    'dot',
    'chapter',
    'info',
    'funnel',
    'textbook',
    'shield',
    'globe',
    'multiselect_checked',
    'multiselect_unchecked',
  ],
  Social: [
    'ask_parent_to_pay',
    'bell_checked',
    'bell_outlined',
    'bookmark',
    'bookmark_outlined',
    'check',
    'comment',
    'comment_outlined',
    'crown',
    'crown_outlined',
    'friend_add',
    'friend_remove',
    'friend_pending',
    'friend_checked',
    'friends',
    'heart',
    'heart_outlined',
    'influence',
    'megaphone',
    'messages',
    'notifications',
    'points',
    'profile',
    'profile_view',
    'profile_settings',
    'report_flag',
    'report_flag_outlined',
    'share',
    'star',
    'star_half',
    'star_half_outlined',
    'star_outlined',
    'verified',
    'cup',
    'heart_outlined',
    'share_on_ios',
    'thumb_up',
    'thumb_up_outlined',
    'thumb_down',
    'thumb_down_outlined',
    'unbookmark',
  ],
  'Editor and Media': [
    'attachment',
    'bold',
    'bulleted_list',
    'camera',
    'circle_fill',
    'dashed_line',
    'draw',
    'equation',
    'heading',
    'hexagon',
    'image',
    'italic',
    'mic',
    'numbered_list',
    'pencil',
    'play',
    'rotate',
    'rotate_90',
    'send_back',
    'bring_front',
    'subtitle',
    'symbols',
    'title',
    'trash',
    'underlined',
    'arrow_top_right',
    'circle',
    'crop',
    'cyrillic',
    'drawing_mode',
    'european',
    'greek',
    'highlight',
    'line',
    'pause',
    'rectangle',
    'sup_sub',
    'triangle',
    'pi',
    'quote',
    'barcode_scanner',
    'flashlight_off',
    'flashlight_on',
    'keyboard',
    'text',
    'backward_5s',
    'backward_end',
    'forward_5s',
    'replay',
    'time_speed',
    'eraser',
  ],
  Navigation: [
    'arrow',
    'chevron_double_down',
    'chevron_down',
    'chevron_left',
    'chevron_right',
    'chevron_up',
    'close',
    'fullscreen',
    'less',
    'logout',
    'menu',
    'add_more',
    'open_in_new_tab',
    'plus',
    'reload',
    'search',
    'more',
    'clear',
    'options',
    'filters',
    'collapse',
    'caret_down',
    'caret_up',
    'arrow_double_right',
    'chevron_double_right',
  ],
  'Social Media': [
    'facebook',
    'instagram',
    'linkedin',
    'medium',
    'twitter',
    'youtube',
    'google',
    'apple',
  ],
};

const groups = Object.keys(iconMap);

export function getIconGroup(iconName: string): string {
  return groups.find(group => iconMap[group].includes(iconName)) || 'Misc';
}
