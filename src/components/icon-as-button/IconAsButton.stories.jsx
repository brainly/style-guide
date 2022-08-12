import * as React from 'react';
import IconAsButton, {SIZE, ICON_COLOR} from './IconAsButton';
import Flex from '../flex/Flex';
import {TYPE as ICON_TYPES} from 'icons/Icon';
import {StoryVariantTable} from '../../docs/utils';
import Headline from '../text/Headline';
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
    color: ICON_COLOR['icon-black'],
    size: SIZE.NORMAL,
  },
};

export const Default = args => <IconAsButton {...args} />;

export const Types = args => (
  <StoryVariantTable className="sg-button-stories-table">
    <thead>
      <tr>
        <th />
        <th>
          <Headline
            extraBold
            transform="uppercase"
            type="span"
            color="text-gray-40"
            size="medium"
          >
            default
          </Headline>
        </th>
        <th>
          <Headline
            extraBold
            transform="uppercase"
            type="span"
            color="text-gray-40"
            size="medium"
          >
            border
          </Headline>
        </th>
        <th>
          <Headline
            extraBold
            transform="uppercase"
            type="span"
            color="text-gray-40"
            size="medium"
          >
            action
          </Headline>
        </th>
        <th>
          <Headline
            extraBold
            transform="uppercase"
            type="span"
            color="text-gray-40"
            size="medium"
          >
            transparent
          </Headline>
        </th>
      </tr>
    </thead>
    <tbody>
      {Object.values(SIZE).map(size => (
        <tr key={size}>
          <td>
            <div
              style={{
                height: 40,
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Headline
                extraBold
                transform="uppercase"
                type="span"
                color="text-gray-40"
                size="medium"
              >
                {size.toLowerCase()}
              </Headline>
            </div>
          </td>
          <td>
            <div>
              <IconAsButton {...args} size={size} />
            </div>
          </td>
          <td>
            <IconAsButton {...args} size={size} border />
          </td>
          <td>
            <IconAsButton {...args} size={size} action />
          </td>
          <td>
            <IconAsButton {...args} size={size} transparent />
          </td>
        </tr>
      ))}
    </tbody>
  </StoryVariantTable>
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
