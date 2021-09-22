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
};

export const Default = args => <Avatar {...args} />;

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
            color="gray-secondary-light"
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
            color="gray-secondary-light"
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
            color="gray-secondary-light"
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
              color="gray-secondary-light"
              size="medium"
            >
              {size}
            </Headline>
          </td>
          <td>
            <Flex justifyContent="center">
              <Avatar key={size} {...args} size={size} />
            </Flex>
          </td>
          <td style={{backgroundColor: hex.graySecondaryLight}}>
            <Flex justifyContent="center">
              <Avatar key={size} {...args} size={size} border />
            </Flex>
          </td>
          <td>
            <Flex justifyContent="center">
              <Avatar
                key={size}
                {...args}
                size={size}
                imgSrc="https://source.unsplash.com/240x240/?cat"
              />
            </Flex>
          </td>
        </tr>
      ))}
    </tbody>
  </StoryVariantTable>
);
