import * as React from 'react';
import IconAsButton, {SIZE, ICON_COLOR} from './IconAsButton';
import Flex from '../flex/Flex';
import {TYPE as ICON_TYPES} from 'icons/Icon';
import {StoryVariantTable} from '../../_docs/utils';
import Headline from '../text/Headline';
import {getIconGroup} from 'icons/get-icon-group';
import classnames from 'classnames';

export default {
  title: 'Components/IconAsButton',
  component: IconAsButton,
  argTypes: {
    type: {control: {type: 'select', options: ICON_TYPES}},
    size: {control: {type: 'select', options: SIZE}},
    color: {control: {type: 'select', options: ICON_COLOR}},
    border: {control: {type: 'boolean'}},
    action: {control: {type: 'boolean'}},
    transparent: {control: {type: 'boolean'}},
    active: {control: {type: 'boolean'}},
  },
  args: {
    type: ICON_TYPES.ACADEMIC_CAP,
    color: ICON_COLOR.ADAPTIVE,
    size: SIZE.NORMAL,
  },
};

const groups = Object.values(ICON_TYPES).reduce((acc, next) => {
  const groupName = getIconGroup(next);

  if (!acc[groupName]) {
    acc[groupName] = [];
  }

  acc[groupName].push(next);

  return acc;
}, {});

export const Default = args => <IconAsButton {...args} />;

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
          <IconAsButton key={type} {...args} type={type} />
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
          <IconAsButton key={type} {...args} type={type} />
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
          <IconAsButton key={type} {...args} type={type} />
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
          <IconAsButton key={type} {...args} type={type} />
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
            <IconAsButton key={type} {...args} type={type} />
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
        <IconAsButton {...args} color={color} />
      </div>
    ))}
  </Flex>
);

export const Sizes = args => (
  <StoryVariantTable>
    <tbody>
      <tr>
        <td>
          <StoryVariantTable>
            <tbody>
              {Object.values(SIZE).map(size => (
                <tr key={size}>
                  <td>
                    <Headline
                      extraBold
                      transform="uppercase"
                      type="span"
                      color="text-gray-40"
                      size="normal"
                    >
                      {size}
                    </Headline>
                  </td>
                  <td style={{width: '100px', 'text-align': 'center'}}>
                    <IconAsButton {...args} size={size} border />
                  </td>
                </tr>
              ))}
            </tbody>
          </StoryVariantTable>
        </td>
      </tr>
    </tbody>
  </StoryVariantTable>
);
