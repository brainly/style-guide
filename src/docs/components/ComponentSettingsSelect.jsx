import React from 'react';
import PropTypes from 'prop-types';
import Select from 'form-elements/Select';

const ComponentSettingsSelect = ({values, currentValue, onChange}) => {
  const allowedKeys = Object.keys(values);
  const selectedKey = allowedKeys.find(optionKey => values[optionKey] === currentValue);

  function inputChanged(e) {
    const target = e.target;
    const value = values[target.value];

    onChange(value);
  }

  const options = allowedKeys.map(optionKey => ({text: optionKey, value: optionKey}));

  return <Select onChange={inputChanged} value={selectedKey} options={options} />;
};

ComponentSettingsSelect.propTypes = {
  values: PropTypes.object.isRequired,
  currentValue: PropTypes.any,
  onChange: PropTypes.func.isRequired
};

export default ComponentSettingsSelect;
