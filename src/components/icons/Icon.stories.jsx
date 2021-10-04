import * as React from 'react';
import Icon, {TYPE, ICON_TAG_TYPE, ICON_COLOR, SIZE} from './Icon';
import Flex from '../flex/Flex';
import Headline from '../text/Headline';
import classnames from 'classnames';

const systemIconTypes = [
  TYPE.ALL_QUESTIONS,
  TYPE.RECENT_QUESTIONS,
  TYPE.TOUGHEST_QUESTIONS,
  TYPE.POINTS,
  TYPE.PENCIL,
  TYPE.REPORT_FLAG,
  TYPE.PLAY,
  TYPE.SMS,
  TYPE.MONEY_TRANSFER,
  TYPE.COUNTER,
  TYPE.MESSAGES,
  TYPE.CREDIT_CARD,
  TYPE.VERIFIED,
  TYPE.HEART,
  TYPE.STAR_HALF,
  TYPE.EXCELLENT,
  TYPE.STAR,
  TYPE.SEEN,
  TYPE.UNSEEN,
  TYPE.PADLOCK,
  TYPE.QUESTION,
  TYPE.SETTINGS,
  TYPE.LOCK_WITH_PLAY,
  TYPE.LOGOUT,
  TYPE.RELOAD,
  TYPE.ANSWER,
  TYPE.ROTATE,
  TYPE.SEARCH,
  TYPE.SHARE,
  TYPE.ARROW_LEFT,
  TYPE.ARROW_RIGHT,
  TYPE.ARROW_UP,
  TYPE.ARROW_DOWN,
  TYPE.ARROW_DOUBLE_DOWN,
  TYPE.MENU,
  TYPE.CLOSE,
  TYPE.PLUS,
  TYPE.CHECK,
  TYPE.EXCLAMATION_MARK,
  TYPE.INFLUENCE,
  TYPE.NOTIFICATIONS,
  TYPE.PROFILE,
  TYPE.FRIENDS,
  TYPE.PROFILE_VIEW,
  TYPE.ASK_PARENT_TO_PAY,
  TYPE.OPEN_IN_NEW_TAB,
  TYPE.ACADEMIC_CAP,
  TYPE.CALENDAR,
  TYPE.FRIEND_PENDING,
  TYPE.FULLSCREEN,
];

const editorIconTypes = [
  TYPE.BOLD,
  TYPE.ITALIC,
  TYPE.UNDERLINED,
  TYPE.TITLE,
  TYPE.SUBTITLE,
  TYPE.HEADING,
  TYPE.NUMBERED_LIST,
  TYPE.BULLETED_LIST,
  TYPE.MIC,
  TYPE.ATTACHMENT,
  TYPE.IMAGE,
  TYPE.EQUATION,
  TYPE.SYMBOLS,
  TYPE.MORE,
  TYPE.LESS,
];

const socialMediaIconTypes = [
  TYPE.FACEBOOK,
  TYPE.INSTRAGRAM,
  TYPE.LINKEDIN,
  TYPE.MEDIUM,
  TYPE.TWITTER,
  TYPE.YOUTUBE,
];

const otherIcons = [
  TYPE.ASK_BUBBLE,
  TYPE.BELL_CHECKED,
  TYPE.BELL_OUTLINED,
  TYPE.CAMERA,
  TYPE.CHAPTER,
  TYPE.CLIPBOARD,
  TYPE.COMMENT,
  TYPE.COMMENT_OUTLINED,
  TYPE.CROWN_OUTLINED,
  TYPE.CUP,
  TYPE.FILTERS,
  TYPE.FRIEND_ADD,
  TYPE.FRIEND_REMOVE,
  TYPE.FRIEND_CHECKED,
  TYPE.FUNNEL,
  TYPE.HEART_OUTLINED,
  TYPE.ADD_MORE,
  TYPE.REPORT_FLAG_OUTLINED,
  TYPE.ROTATE_90,
  TYPE.SEND,
  TYPE.SHIELD,
  TYPE.STAR_HALF_OUTLINED,
  TYPE.STAR_OUTLINED,
  TYPE.TEXTBOOK,
  TYPE.THUMB_DOWN,
  TYPE.THUMB_DOWN_OUTLINED,
  TYPE.THUMB_UP,
  TYPE.THUMB_UP_OUTLINED,
  TYPE.TRASH,
  TYPE.WARNING,
  TYPE.ARROW_TOP_RIGHT,
  TYPE.CIRCLE,
  TYPE.CROP,
  TYPE.CYRILLIC,
  TYPE.DRAW,
  TYPE.DRAWING_MODE,
  TYPE.EUROPEAN,
  TYPE.GREEK,
  TYPE.HIGHLIGHT,
  TYPE.LINE,
  TYPE.PAUSE,
  TYPE.RECTANGLE,
  TYPE.SUP_SUB,
  TYPE.TRIANGLE,
  TYPE.PI,
  TYPE.QUOTE,
  TYPE.SPARK,
  TYPE.DOT,
  TYPE.CLEAR,
];

export default {
  title: 'Components/Icon',
  parameters: {
    component: Icon,
  },
  argTypes: {
    type: {control: {type: 'select', options: TYPE}},
    tagType: {control: {type: 'select', options: ICON_TAG_TYPE}},
    size: {control: {type: 'select', options: SIZE}},
    color: {control: {type: 'select', options: ICON_COLOR}},
    className: {control: {type: 'text'}},
  },
  args: {
    type: TYPE.ACADEMIC_CAP,
    color: ICON_COLOR.ADAPTIVE,
    size: 32,
  },
};

export const Default = args => <Icon {...args} />;

export const Types = args => (
  <div>
    <Headline
      extraBold
      transform="uppercase"
      type="span"
      color="gray-secondary-light"
      size="medium"
      style={{marginBottom: 10, marginLeft: 10}}
    >
      system icons
    </Headline>
    <Flex wrap>
      {systemIconTypes.map(type => (
        <div className="sg-icon-story-variant" key={type}>
          <Icon key={type} {...args} type={type} />
        </div>
      ))}
    </Flex>
    <Headline
      extraBold
      transform="uppercase"
      type="span"
      color="gray-secondary-light"
      size="medium"
      style={{marginBottom: 10, marginLeft: 10, marginTop: 40}}
    >
      editor icons
    </Headline>
    <Flex wrap>
      {editorIconTypes.map(type => (
        <div className="sg-icon-story-variant" key={type}>
          <Icon key={type} {...args} type={type} />
        </div>
      ))}
    </Flex>
    <Headline
      extraBold
      transform="uppercase"
      type="span"
      color="gray-secondary-light"
      size="medium"
      style={{marginBottom: 10, marginLeft: 10, marginTop: 40}}
    >
      social media icons
    </Headline>
    <Flex wrap>
      {socialMediaIconTypes.map(type => (
        <div className="sg-icon-story-variant" key={type}>
          <Icon key={type} {...args} type={type} />
        </div>
      ))}
    </Flex>
    <Headline
      extraBold
      transform="uppercase"
      type="span"
      color="gray-secondary-light"
      size="medium"
      style={{marginBottom: 10, marginLeft: 10, marginTop: 40}}
    >
      other icons
    </Headline>
    <Flex wrap>
      {otherIcons.map(type => (
        <div className="sg-icon-story-variant" key={type}>
          <Icon key={type} {...args} type={type} />
        </div>
      ))}
    </Flex>
  </div>
);

export const Colors = args => (
  <Flex wrap>
    {Object.values(ICON_COLOR).map(color => (
      <div
        key={color}
        className={classnames('sg-icon-story-variant', {
          'sg-story-variant-dark-box': color === ICON_COLOR.LIGHT,
        })}
        style={{padding: 10}}
      >
        <Icon {...args} color={color} />
      </div>
    ))}
  </Flex>
);

export const Sizes = args => (
  <Flex alignItems="center">
    {Object.values(SIZE).map(size => (
      <div className="sg-icon-story-variant" key={size}>
        <Icon {...args} size={size} />
      </div>
    ))}
  </Flex>
);
