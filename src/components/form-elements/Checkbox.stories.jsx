import * as React from 'react';
import {StoryVariantTable} from '../../_docs/utils';
import Flex from '../flex/Flex';
import Headline from '../text/Headline';
import Checkbox from './Checkbox';

export default {
  title: 'Components/Form/Checkbox',
  component: Checkbox,
};

export const Default = args => <Checkbox {...args} />;

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
            color="text-gray-40"
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
            color="text-gray-40"
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
            color="text-gray-40"
            size="medium"
            align="to-right"
          >
            default
          </Headline>
        </td>
        <td>
          <Flex justifyContent="center">
            <Checkbox {...args} />
          </Flex>
        </td>
        <td>
          <Flex justifyContent="center">
            <Checkbox {...args} checked />
          </Flex>
        </td>
      </tr>
    </tbody>
  </StoryVariantTable>
);
