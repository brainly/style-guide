import React from 'react';
import {StoryVariantBorderBox, StoryVariantTable} from '../../_docs/utils';
import hex from '../colors/hex';
import Headline, {TEXT_COLOR} from '../text/Headline';
import Input, {SIZE, COLOR} from './Input';

export default {
  title: 'Components/Form/Input',
  parameters: {
    component: Input,
  },
  argTypes: {
    value: {
      type: {name: 'string', required: false},
    },
    errorMessage: {
      type: {name: 'string', required: false},
    },
  },
  args: {value: 'Some input value', type: 'text', placeholder: 'placeholder'},
};

export const Default = args => <Input {...args} />;

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
            color="text-gray-40"
            size="medium"
            align="to-center"
          >
            default
          </Headline>
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
            <Input {...args} size={size} />
          </td>
        </tr>
      ))}
    </tbody>
  </StoryVariantTable>
);

export const StylesAndTypes = args => (
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
            align="to-center"
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
            align="to-center"
          >
            filled state
          </Headline>
        </td>
        <td>
          <Headline
            extraBold
            transform="uppercase"
            type="span"
            color="text-gray-40"
            size="medium"
            align="to-center"
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
            color="text-gray-40"
            size="medium"
            align="to-right"
          >
            default
          </Headline>
        </td>
        <td>
          <Input {...args} value="" />
        </td>
        <td>
          <Input {...args} />
        </td>
        <td>
          <Input {...args} disabled />
        </td>
      </tr>
      <tr style={{backgroundColor: hex.black}}>
        <td>
          <Headline
            extraBold
            transform="uppercase"
            type="span"
            color="text-gray-40"
            size="medium"
            align="to-right"
          >
            white
          </Headline>
        </td>
        <td>
          <Input {...args} value="" color={COLOR.WHITE} />
        </td>
        <td>
          <Input {...args} color={COLOR.WHITE} />
        </td>
        <td>
          <Input {...args} disabled color={COLOR.WHITE} />
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
            valid
          </Headline>
        </td>
        <td>
          <Input {...args} value="" valid />
        </td>
        <td>
          <Input {...args} valid />
        </td>
        <td />
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
            invalid
          </Headline>
        </td>
        <td>
          <Input {...args} value="" invalid />
        </td>
        <td>
          <Input {...args} invalid />
        </td>
        <td />
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
            invalid with message
          </Headline>
        </td>
        <td>
          <Input
            {...args}
            value=""
            invalid
            errorMessage="Something went wrong"
          />
        </td>
        <td>
          <Input {...args} invalid errorMessage="Something went wrong" />
        </td>
        <td />
      </tr>
    </tbody>
  </StoryVariantTable>
);

export const FullWidth = args => (
  <StoryVariantBorderBox>
    <Input {...args} />
  </StoryVariantBorderBox>
);

FullWidth.args = {
  value: 'Input takes full width of its container',
  fullWidth: true,
};
