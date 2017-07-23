import React from 'react';
import PropTypes from 'prop-types';

const ComponentSettingsSelect = ({values, currentValue, onChange}) => {
  const allowedKeys = Object.keys(values);
  const selectedKey = allowedKeys.find(optionKey => values[optionKey] === currentValue);

  function inputChanged(e) {
    const target = e.target;
    const value = values[target.value];

    onChange(value);
  }

  return <select onChange={inputChanged} value={selectedKey}>
    {allowedKeys.map(optionKey => <option key={optionKey} value={optionKey}>{optionKey}</option>)}
  </select>;
};

ComponentSettingsSelect.propTypes = {
  values: PropTypes.object.isRequired,
  currentValue: PropTypes.any,
  onChange: PropTypes.func.isRequired
};

export default ComponentSettingsSelect;
