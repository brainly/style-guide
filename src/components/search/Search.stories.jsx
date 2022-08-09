import * as React from 'react';
import {StoryVariantTable} from '../../docs/utils';
import hex from '../colors/hex';
import Flex from '../flex/Flex';
import Headline from '../text/Headline';
import Search, {SIZE, COLOR} from './Search';

export default {
  title: 'Components/Search',
  component: Search,
  argTypes: {
    className: {
      control: {
        type: 'text',
      },
    },
    fullWidth: {
      control: {
        type: 'boolean',
      },
    },
    size: {control: {type: 'select', options: SIZE}},
    color: {control: {type: 'select', options: COLOR}},
    placeholder: {control: {type: 'text'}},
  },
  args: {
    placeholder: 'Find all the answers...',
  },
};

export const Default = args => <Search {...args} />;

export const Sizes = args => (
  <StoryVariantTable>
    <tbody>
      <tr>
        <td />
        <td>
          <Flex justifyContent="center">
            <Headline
              extraBold
              transform="uppercase"
              type="span"
              color="text-gray-40"
              size="medium"
            >
              default
            </Headline>
          </Flex>
        </td>
        <td>
          <Flex justifyContent="center">
            <Headline
              extraBold
              transform="uppercase"
              type="span"
              color="text-gray-40"
              size="medium"
            >
              round button
            </Headline>
          </Flex>
        </td>
      </tr>
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
              <Search {...args} size={size} />
            </Flex>
          </td>
          <td>
            <Flex justifyContent="center">
              <Search {...args} size={size} withRoundButton />
            </Flex>
          </td>
        </tr>
      ))}
    </tbody>
  </StoryVariantTable>
);

export const StylesAndStates = args => (
  <StoryVariantTable>
    <tbody>
      <tr>
        <td />
        <td>
          <Flex justifyContent="center">
            <Headline
              extraBold
              transform="uppercase"
              type="span"
              color="text-gray-40"
              size="medium"
            >
              neutral state
            </Headline>
          </Flex>
        </td>
        <td>
          <Flex justifyContent="center">
            <Headline
              extraBold
              transform="uppercase"
              type="span"
              color="text-gray-40"
              size="medium"
            >
              filled state
            </Headline>
          </Flex>
        </td>
      </tr>
      <tr>
        <td>
          <Headline
            extraBold
            transform="uppercase"
            type="span"
            color="text-gray-40"
            size="medium"
          >
            default
          </Headline>
        </td>
        <td>
          <Flex justifyContent="center">
            <Search {...args} />
          </Flex>
        </td>
        <td>
          <Flex justifyContent="center">
            <Search {...args} value="some" />
          </Flex>
        </td>
      </tr>
      <tr
        style={{
          backgroundColor: hex.black,
        }}
      >
        <td>
          <Headline
            extraBold
            transform="uppercase"
            type="span"
            color="text-white"
            size="medium"
          >
            white
          </Headline>
        </td>
        <td>
          <Flex justifyContent="center">
            <Search {...args} />
          </Flex>
        </td>
        <td>
          <Flex justifyContent="center">
            <Search {...args} value="some" />
          </Flex>
        </td>
      </tr>
      <tr>
        <td>
          <Headline
            extraBold
            transform="uppercase"
            type="span"
            color="text-gray-40"
            size="medium"
          >
            round button
          </Headline>
        </td>
        <td>
          <Flex justifyContent="center">
            <Search {...args} withRoundButton />
          </Flex>
        </td>
        <td>
          <Flex justifyContent="center">
            <Search {...args} value="some" withRoundButton />
          </Flex>
        </td>
      </tr>
      <tr
        style={{
          backgroundColor: hex.black,
        }}
      >
        <td>
          <Headline
            extraBold
            transform="uppercase"
            type="span"
            color="text-white"
            size="medium"
          >
            white round button
          </Headline>
        </td>
        <td>
          <Flex justifyContent="center">
            <Search {...args} withRoundButton />
          </Flex>
        </td>
        <td>
          <Flex justifyContent="center">
            <Search {...args} value="some" withRoundButton />
          </Flex>
        </td>
      </tr>
    </tbody>
  </StoryVariantTable>
);
