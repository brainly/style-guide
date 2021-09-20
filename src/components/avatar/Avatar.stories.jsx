import * as React from 'react';
import Headline from '../text/Headline';
import Avatar, {SIZE} from './Avatar';
import {StoryVariantTable} from '../../_docs/utils';
import Flex from '../flex/Flex';

export default {
  title: 'Components/Avatar',
  parameters: {
    component: Avatar,
  },
  argTypes: {
    size: {control: {type: 'select', options: SIZE}},
    border: {control: 'boolean'},
    spaced: {control: 'boolean'},
    imgSrc: {
      control: {
        type: 'select',
        options: ['', 'https://source.unsplash.com/240x240/?cat'],
      },
    },
  },
};

export const Default = args => <Avatar {...args} />;

export const Sizes = args => (
  <StoryVariantTable>
    <tbody>
      {Object.values(SIZE).map(size => (
        <tr key={size}>
          <td>
            <Headline
              extraBold
              transform="uppercase"
              type="span"
              color="gray-secondary"
              size="small"
            >
              {size}
            </Headline>
          </td>
          <td>
            <Flex>
              <Avatar key={size} {...args} size={size} />
            </Flex>
          </td>
        </tr>
      ))}
    </tbody>
  </StoryVariantTable>
);

export const WithBorder = () => <Avatar size="l" border />;

WithBorder.parameters = {
  backgrounds: {default: 'gray-secondary-light'},
};

export const CustomImage = () => (
  <Avatar size="l" imgSrc="https://source.unsplash.com/240x240/?cat" />
);
