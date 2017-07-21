import React from 'react';
import PropTypes from 'prop-types';

const ComponentSettingsInput = ({values, currentValue, onChange}) => {
  let type;
  let inputType;
  const checked = Boolean(currentValue);

  function inputChanged(e) {
    const target = e.target;
    const type = e.target.dataset.valueType;
    let value = null;

    if (type === 'boolean') {
      value = Boolean(target.checked);
    } else if (type === 'number') {
      value = Number(target.value);
    } else if (type === 'string') {
      value = target.value;
    }

    onChange(value);
  }

  if (values === Boolean) {
    type = 'boolean';
    inputType = 'checkbox';
  } else if (values === Number) {
    type = 'number';
    inputType = 'number';
  } else if (values === String) {
    type = 'string';
    inputType = 'text';
  }

  return <input type={inputType}
                data-value-type={type}
                checked={checked}
                value={currentValue}
                onChange={inputChanged}/>;
};

ComponentSettingsInput.propTypes = {
  values: PropTypes.oneOf([Boolean, Number, String]).isRequired,
  currentValue: PropTypes.any,
  onChange: PropTypes.func.isRequired
};

export default ComponentSettingsInput;
