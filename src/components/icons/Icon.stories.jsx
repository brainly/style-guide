import * as React from 'react';
import Icon, {TYPE, ICON_TAG_TYPE, ICON_COLOR, SIZE} from './Icon';
import Flex from '../flex/Flex';
import Headline from '../text/Headline';
import classnames from 'classnames';
import {getIconGroup} from './get-icon-group';

export default {
  title: 'Components/Icon',
  component: Icon,
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

const groups = Object.values(TYPE).reduce((acc, next) => {
  const groupName = getIconGroup(next);

  if (!acc[groupName]) {
    acc[groupName] = [];
  }

  acc[groupName].push(next);

  return acc;
}, {});

export const Default = args => <Icon {...args} />;

export const Types = args => (
  <div>
    <Headline
      extraBold
      transform="uppercase"
      type="span"
      color="text-gray-40"
      size="medium"
      style={{marginBottom: 10, marginLeft: 10}}
    >
      essential icons
    </Headline>
    <Flex wrap>
      {groups['Essential'].map(type => (
        <div className="sg-icon-story-variant" key={type}>
          <Icon key={type} {...args} type={type} />
        </div>
      ))}
    </Flex>
    <Headline
      extraBold
      transform="uppercase"
      type="span"
      color="text-gray-40"
      size="medium"
      style={{marginBottom: 10, marginLeft: 10, marginTop: 40}}
    >
      Editor and Media icons
    </Headline>
    <Flex wrap>
      {groups['Editor and Media'].map(type => (
        <div className="sg-icon-story-variant" key={type}>
          <Icon key={type} {...args} type={type} />
        </div>
      ))}
    </Flex>
    <Headline
      extraBold
      transform="uppercase"
      type="span"
      color="text-gray-40"
      size="medium"
      style={{marginBottom: 10, marginLeft: 10, marginTop: 40}}
    >
      social icons
    </Headline>
    <Flex wrap>
      {groups['Social'].map(type => (
        <div className="sg-icon-story-variant" key={type}>
          <Icon key={type} {...args} type={type} />
        </div>
      ))}
    </Flex>
    <Headline
      extraBold
      transform="uppercase"
      type="span"
      color="text-gray-40"
      size="medium"
      style={{marginBottom: 10, marginLeft: 10, marginTop: 40}}
    >
      social media icons
    </Headline>
    <Flex wrap>
      {groups['Social Media'].map(type => (
        <div className="sg-icon-story-variant" key={type}>
          <Icon key={type} {...args} type={type} />
        </div>
      ))}
    </Flex>
    <Headline
      extraBold
      transform="uppercase"
      type="span"
      color="text-gray-40"
      size="medium"
      style={{marginBottom: 10, marginLeft: 10, marginTop: 40}}
    >
      navigation icons
    </Headline>
    <Flex wrap>
      {groups['Navigation'].map(type =>
        type ? (
          <div className="sg-icon-story-variant" key={type}>
            <Icon key={type} {...args} type={type} />
          </div>
        ) : null
      )}
    </Flex>
  </div>
);

export const Colors = args => (
  <Flex wrap>
    {Object.values(ICON_COLOR).map(color => (
      <div
        key={color}
        className={classnames('sg-icon-story-variant', {
          'sg-story-variant-dark-box': color === ICON_COLOR['icon-white'],
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
