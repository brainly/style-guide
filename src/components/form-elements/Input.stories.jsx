import React from 'react';
import {StoryVariant, StoryVariantBorderBox} from '../../../.storybook/utils';
import Input, {SIZE, COLOR, TYPE} from './Input';

const ARGS_PER_TYPE = {
  BUTTON: {
    value: 'button',
  },
  COLOR: {
    value: '#e66465',
  },
  DATE: {
    value: '2000-01-01',
  },
  DATETIME_LOCAL: {
    value: '2018-06-12T19:30',
  },
  EMAIL: {
    value: 'user@brainly.pl',
  },
  FILE: {
    value: '',
  },
  HIDDEN: {
    value: '',
  },
  IMAGE: {
    src: 'https://source.unsplash.com/240x240/?cat',
  },
  MONTH: {
    value: '2018-05',
  },
  NUMBER: {
    value: '123123',
  },
  PASSWORD: {
    value: 'password',
  },
  RANGE: {
    value: 90,
    min: 0,
    max: 100,
    step: 10,
  },
  RESET: {
    value: 'reset form',
  },
  SEARCH: {
    value: 'search',
  },
  SUBMIT: {
    value: 'submit',
  },
  TEL: {
    value: '+123097786',
  },
  TEXT: {
    value: 'text',
  },
  TIME: {
    value: '16:00',
    min: '9:00',
    max: '18:00',
  },
  URL: {
    value: 'http://brainly.com',
  },
  WEEK: {
    value: '2018-W18',
    min: '2018-W18',
    max: '2018-W26',
  },
};

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
  args: {value: 'Some input value', type: 'text'},
};

export const Default = args => <Input {...args} />;

export const Types = args => (
  <div>
    {Object.values(TYPE).map(type => (
      <StoryVariant label={`type - ${type}`} key={type}>
        <Input {...args} type={type} {...ARGS_PER_TYPE} />
      </StoryVariant>
    ))}
  </div>
);

export const Sizes = args => (
  <div>
    {Object.values(SIZE).map(size => (
      <StoryVariant label={`size - ${size}`} key={size}>
        <Input {...args} size={size} />
      </StoryVariant>
    ))}
  </div>
);

export const Colors = args => (
  <div>
    {Object.values(COLOR).map(color => (
      <StoryVariant key={color}>
        {color === 'WHITE' ? (
          <div className="sg-story-variant-dark-box">
            <Input {...args} color={color} />
          </div>
        ) : (
          <Input {...args} color={color} />
        )}
      </StoryVariant>
    ))}
  </div>
);

export const Invalid = args => <Input {...args} />;

Invalid.args = {
  value: 'Invalid input',
  errorMessage: 'Some error',
  invalid: true,
};

export const Valid = args => <Input {...args} />;

Valid.args = {
  value: 'Valid input',
  valid: true,
};

export const FullWidth = args => (
  <StoryVariantBorderBox>
    <Input {...args} />
  </StoryVariantBorderBox>
);

FullWidth.args = {
  value: 'Input takes full width of its container',
  fullWidth: true,
};
