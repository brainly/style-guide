// @flow

import React from 'react';
import Input from 'form-elements/Input';
import Checkbox from 'form-elements/Checkbox';

type PropsType = {
  // eslint-disable-next-line flowtype/no-primitive-constructor-types
  values: Boolean | Number | String,
  onChange: (boolean | string | number) => mixed,
  currentValue?: number | string | boolean,
};

const ComponentSettingsInput = ({
  values,
  currentValue,
  onChange,
}: PropsType) => {
  let dataType;
  let inputType;
  const checked = Boolean(currentValue);

  function inputChanged(e) {
    const target = e.target;
    let value = target.value;

    if (dataType === 'boolean') {
      value = Boolean(target.checked);
    } else if (dataType === 'number') {
      value = Number(value);
    }

    onChange(value);
  }

  if (values === Boolean) {
    dataType = 'boolean';

    return <Checkbox checked={checked} onChange={inputChanged} />;
  } else if (values === Number) {
    dataType = 'number';
    inputType = 'number';
  } else if (values === String) {
    dataType = 'string';
    inputType = 'text';
  }
  return (
    // $FlowFixMe
    <Input type={inputType} value={currentValue} onChange={inputChanged} />
  );
};

export default ComponentSettingsInput;
