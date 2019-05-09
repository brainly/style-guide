// @flow
import React from 'react';
import Select from 'form-elements/Select';

type PropsType = {
  values: {[string]: number | string | boolean},
  required: boolean,
  onChange: string => mixed,
  currentValue?: number | string | boolean
};

const ComponentSettingsSelect = ({values, currentValue, required, onChange}: PropsType) => {
  const allowedKeys = Object.keys(values);
  const selectedKey = allowedKeys.find(optionKey => values[optionKey] === currentValue);

  function inputChanged(e) {
    const target = e.target;
    const value = values[target.value];

    onChange(value);
  }

  const options = allowedKeys.map(optionKey => ({text: optionKey, value: optionKey}));

  if (!required) {
    options.unshift({text: '(default)', value: ''});
  }

  return <Select onChange={inputChanged} value={selectedKey} options={options} />;
};

export default ComponentSettingsSelect;
