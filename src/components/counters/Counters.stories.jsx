import * as React from 'react';
import Counter, {COUNTER_SIZE} from './Counter';
import {TYPE as ICON_TYPE} from '../icons/Icon';
import Flex from '../flex/Flex';
import {StoryVariantTable} from '../../_docs/utils';
import Headline from '../text/Headline';
import Text, {TEXT_COLOR} from '../text/Text';

export default {
  title: 'Components/Counter',
  parameters: {
    component: Counter,
  },
  args: {
    children: '25',
    size: 'xs',
  },
  argTypes: {
    size: {control: {type: 'select', options: COUNTER_SIZE}},
    withAnimation: {control: 'boolean'},
    icon: {control: {type: 'select', options: Object.values(ICON_TYPE)}},
  },
};

export const Default = args => <Counter {...args} />;

export const SizesColorsAndTypes = args => (
  <div>
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
              blue
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
              with icon
            </Headline>
          </th>
        </tr>
      </thead>
      <tbody>
        {Object.values(COUNTER_SIZE).map(size => (
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
                <Counter key={size} {...args} size={size}>
                  2
                </Counter>
              </Flex>
            </td>
            <td>
              <Flex justifyContent="center">
                <Counter key={size} {...args} size={size} color="blue-900">
                  2
                </Counter>
              </Flex>
            </td>
            <td>
              <Flex justifyContent="center">
                <Counter
                  key={size}
                  {...args}
                  icon={ICON_TYPE.POINTS}
                  size={size}
                >
                  +15
                  <Text
                    type="span"
                    color="text-gray-60"
                    inherited
                  >
                    {size !== 'xxs' && ` pts`}{' '}
                  </Text>
                </Counter>
              </Flex>
            </td>
          </tr>
        ))}
      </tbody>
    </StoryVariantTable>
  </div>
);
