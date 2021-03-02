import React from 'react';
import Input from './Input';

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
};

export const Default = args => <Input {...args} />;

Default.args = {value: 'Some input value'};

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

export const Password = args => <Input {...args} />;

Password.args = {
  value: 'Secret password',
  type: 'password',
};

export const FullWidth = args => (
  <div style={{width: '600px'}}>
    <Input {...args} />
  </div>
);

FullWidth.args = {
  value: 'Input takes full width of its container',
  type: 'text',
  fullWidth: true,
};
