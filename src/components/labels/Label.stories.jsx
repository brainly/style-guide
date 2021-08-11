import * as React from 'react';
import Label, {ICON_TYPE, LABEL_COLORS_SET, LABEL_TYPE} from './Label';

export default {
  title: 'Components/Label',
  parameters: {
    component: Label,
  },
};

export const Default = args => {
  const {children} = args;

  return <Label {...args}>{children}</Label>;
};

Default.args = {
  iconType: 'heart',
  color: 'blue',
  type: 'default',
  children: 'label',
};

Default.argTypes = {
  iconType: {control: {type: 'select', options: ICON_TYPE}},
  color: {control: {type: 'select', options: LABEL_COLORS_SET}},
  type: {control: {type: 'select', options: LABEL_TYPE}},
  onClose: {control: null},
};

export const LongText = args => {
  const {children} = args;

  return (
    <div>
      <div
        style={{
          width: '300px',
          background: 'lightgray',
          padding: '20px',
        }}
      >
        <Label {...args}>{children}</Label>
      </div>

      <div
        style={{
          width: '200px',
          background: 'lightgray',
          padding: '20px',
          marginTop: '10px',
        }}
      >
        <Label {...args}>{children}</Label>
      </div>
    </div>
  );
};

// eslint-disable-next-line
const onCloseMock = () => {};

LongText.args = {
  ...Default.args,
  title: 'Long long long text',
  children: 'Very very long label',
  onClose: {control: onCloseMock},
};

LongText.argTypes = Default.argTypes;
