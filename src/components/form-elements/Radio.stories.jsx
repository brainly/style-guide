import * as React from 'react';
import {StoryVariantTable} from '../../_docs/utils';
import Radio, {RADIO_SIZE} from './Radio';
import Headline, {TEXT_COLOR} from '../text/Headline';
import Flex from '../flex/Flex';

export default {
  title: 'Components/Form/Radio',
  parameters: {
    component: Radio,
  },
  args: {},
};

export const Default = args => <Radio {...args} />;

export const StylesAndStates = args => (
  <StoryVariantTable>
    <tbody>
      <tr>
        <td />
        <td>
          <Headline
            extraBold
            transform="uppercase"
            type="span"
            color={TEXT_COLOR['text-gray-40']}
            size="medium"
          >
            neutral state
          </Headline>
        </td>
        <td>
          <Headline
            extraBold
            transform="uppercase"
            type="span"
            color={TEXT_COLOR['text-gray-40']}
            size="medium"
          >
            checked state
          </Headline>
        </td>
      </tr>
      <tr>
        <td>
          <Headline
            extraBold
            transform="uppercase"
            type="span"
            color={TEXT_COLOR['text-gray-40']}
            size="medium"
            align="to-right"
          >
            default
          </Headline>
        </td>
        <td>
          <Flex justifyContent="center">
            <Radio {...args} />
          </Flex>
        </td>
        <td>
          <Flex justifyContent="center">
            <Radio {...args} checked />
          </Flex>
        </td>
      </tr>
    </tbody>
  </StoryVariantTable>
);

StylesAndStates.parameters = {
  pseudo: {active: true},
};

export const Sizes = args => (
  <StoryVariantTable>
    <tbody>
      <tr>
        <td />
        <td>
          <Headline
            extraBold
            transform="uppercase"
            type="span"
            color={TEXT_COLOR['text-gray-40']}
            size="medium"
          >
            neutral state
          </Headline>
        </td>
        <td>
          <Headline
            extraBold
            transform="uppercase"
            type="span"
            color={TEXT_COLOR['text-gray-40']}
            size="medium"
          >
            checked state
          </Headline>
        </td>
      </tr>
      {Object.values(RADIO_SIZE).map(size => (
        <tr key={size}>
          <td>
            <Headline
              extraBold
              transform="uppercase"
              type="span"
              color={TEXT_COLOR['text-gray-40']}
              size="medium"
              align="to-right"
            >
              {size}
            </Headline>
          </td>
          <td>
            <Flex justifyContent="center">
              <Radio {...args} size={size} />
            </Flex>
          </td>
          <td>
            <Flex justifyContent="center">
              <Radio {...args} size={size} checked />
            </Flex>
          </td>
        </tr>
      ))}
    </tbody>
  </StoryVariantTable>
);
