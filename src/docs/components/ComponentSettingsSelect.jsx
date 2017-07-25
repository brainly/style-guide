import React from 'react';
import PropTypes from 'prop-types';
import Select from 'form-elements/Select';

const ComponentSettingsSelect = ({values, currentValue, required, onChange}) => {
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

ComponentSettingsSelect.propTypes = {
  values: PropTypes.object.isRequired,
  currentValue: PropTypes.any,
  required: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired
};

export default ComponentSettingsSelect;
