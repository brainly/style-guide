import * as React from 'react';
import Headline from '../text/Headline';
import Avatar, {SIZE} from './Avatar';
import {StoryVariantTable} from '../../_docs/utils';
import Flex from '../flex/Flex';
import hex from '../colors/hex';

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
  args: {
    imgSrc: '/cat.jpeg',
    link: '#',
  },
};

export const Default = args => <Avatar {...args} />;

Default.args = {
  imgSrc: null,
};

export const SizeBorderImage = args => (
  <StoryVariantTable>
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
            no border
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
            image
          </Headline>
        </th>
      </tr>
    </thead>
    <tbody>
      {Object.values(SIZE).map(size => (
        <tr key={size}>
          <td>
            <Headline
              extraBold
              transform="uppercase"
              type="span"
              color="text-gray-40"
              size="medium"
            >
              {size}
            </Headline>
          </td>
          <td>
            <Flex justifyContent="center">
              <Avatar key={size} {...args} size={size} imgSrc={null} />
            </Flex>
          </td>
          <td style={{backgroundColor: hex['gray-40']}}>
            <Flex justifyContent="center">
              <Avatar key={size} {...args} size={size} border imgSrc={null} />
            </Flex>
          </td>
          <td>
            <Flex justifyContent="center">
              <Avatar key={size} {...args} size={size} />
            </Flex>
          </td>
        </tr>
      ))}
    </tbody>
  </StoryVariantTable>
);
