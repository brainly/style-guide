import * as React from 'react';
import {StoryVariantTable} from '../../_docs/utils';
import Headline from '../text/Headline';
import Select, {SIZE} from './Select';
import hex from '../colors/hex';

export default {
  title: 'Components/Form/Select',
  parameters: {
    component: Select,
  },
  argTypes: {
    options: {
      control: {
        disable: true,
      },
    },
  },
  args: {
    fullWidth: true,
    options: [
      {
        value: '1',
        text: 'option 1',
      },
      {
        value: '2',
        text: 'option 2',
      },
    ],
  },
};

export const Default = args => <Select {...args} />;

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
              color="gray-secondary-light"
              size="medium"
            >
              {size}
            </Headline>
          </td>
          <td>
            <Select {...args} size={size} />
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
          <Headline
            extraBold
            transform="uppercase"
            type="span"
            color="gray-secondary-light"
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
            color="gray-secondary-light"
            size="medium"
          >
            disabled state
          </Headline>
        </td>
      </tr>
      <tr>
        <td>
          <Headline
            extraBold
            transform="uppercase"
            type="span"
            color="gray-secondary-light"
            size="medium"
          >
            default
          </Headline>
        </td>
        <td>
          <Select {...args} />
        </td>
        <td>
          <Select {...args} disabled />
        </td>
      </tr>
      <tr style={{backgroundColor: hex.black}}>
        <td>
          <Headline
            extraBold
            transform="uppercase"
            type="span"
            color="gray-secondary-light"
            size="medium"
          >
            white
          </Headline>
        </td>
        <td>
          <Select {...args} color="white" />
        </td>
        <td>
          <Select {...args} color="white" disabled />
        </td>
      </tr>
      <tr>
        <td>
          <Headline
            extraBold
            transform="uppercase"
            type="span"
            color="gray-secondary-light"
            size="medium"
          >
            valid
          </Headline>
        </td>
        <td>
          <Select {...args} valid />
        </td>
        <td>
          <Select {...args} valid disabled />
        </td>
      </tr>
      <tr>
        <td>
          <Headline
            extraBold
            transform="uppercase"
            type="span"
            color="gray-secondary-light"
            size="medium"
          >
            invalid
          </Headline>
        </td>
        <td>
          <Select {...args} invalid />
        </td>
        <td>
          <Select {...args} invalid disabled />
        </td>
      </tr>
      <tr>
        <td>
          <Headline
            extraBold
            transform="uppercase"
            type="span"
            color="gray-secondary-light"
            size="medium"
          >
            capitalized
          </Headline>
        </td>
        <td>
          <Select {...args} capitalized />
        </td>
        <td>
          <Select {...args} capitalized disabled />
        </td>
      </tr>
    </tbody>
  </StoryVariantTable>
);

export const WithValueChange = args => {
  const [value, setValue] = React.useState();

  return (
    <Select
      {...args}
      fullWidth={false}
      value={value}
      onChange={e => setValue(e.currentTarget.value)}
    />
  );
};
