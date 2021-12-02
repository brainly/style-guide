import * as React from 'react';
import Textarea, {TEXTAREA_COLOR, SIZE} from './Textarea';
import {
  StoryVariant,
  StoryVariantBorderBox,
  StoryVariantTable,
} from '../../_docs/utils';
import Headline, {TEXT_COLOR} from '../text/Headline';
import hex from '../colors/hex';

export default {
  title: 'Components/Textarea',
  parameters: {
    component: Textarea,
  },
  argTypes: {
    type: {
      control: {
        disable: true,
      },
    },
    value: {
      control: {
        type: 'text',
      },
    },
    errorMessage: {
      control: {
        type: 'text',
      },
    },
  },
  args: {
    value: '',
    placeholder: 'placeholder',
  },
};

export const Default = args => <Textarea {...args} />;

export const Colors = args => (
  <div>
    {Object.values(TEXTAREA_COLOR).map(color => (
      <StoryVariant label={`color - ${color}`} key={color}>
        {color === 'WHITE' ? (
          <div className="sg-story-variant-dark-box">
            <Textarea {...args} color={color} />
          </div>
        ) : (
          <Textarea {...args} color={color} />
        )}
      </StoryVariant>
    ))}
  </div>
);

export const Sizes = args => (
  <div>
    {Object.values(SIZE).map(size => (
      <StoryVariant label={`size - ${size}`} key={size}>
        <Textarea {...args} size={size} />
      </StoryVariant>
    ))}
  </div>
);

export const FullWidth = args => (
  <StoryVariantBorderBox>
    <Textarea {...args} fullWidth />
  </StoryVariantBorderBox>
);

export const Simple = args => <Textarea {...args} simple />;

export const NoPadding = args => <Textarea {...args} noPadding />;

export const AutoHeight = args => <Textarea {...args} autoHeight />;

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
            Filled state
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
          >
            default
          </Headline>
        </td>
        <td>
          <Textarea {...args} />
        </td>
        <td>
          <Textarea {...args} value="textarea example" />
        </td>
        <td>
          <Textarea {...args} disabled />
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
          >
            white
          </Headline>
        </td>
        <td>
          <Textarea {...args} color="white" />
        </td>
        <td>
          <Textarea {...args} color="white" value="textarea example" />
        </td>
        <td>
          <Textarea {...args} color="white" disabled />
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
            valid
          </Headline>
        </td>
        <td>
          <Textarea {...args} valid />
        </td>
        <td>
          <Textarea {...args} valid value="textarea example" />
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
            invalid
          </Headline>
        </td>
        <td>
          <Textarea {...args} invalid />
        </td>
        <td>
          <Textarea {...args} invalid value="textarea example" />
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
            invalid <br /> with message
          </Headline>
        </td>
        <td>
          <Textarea {...args} invalid errorMessage="Something went wrong" />
        </td>
        <td>
          <Textarea
            {...args}
            invalid
            errorMessage="Something went wrong"
            value="textarea example"
          />
        </td>
      </tr>
    </tbody>
  </StoryVariantTable>
);
