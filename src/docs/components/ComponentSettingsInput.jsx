import React from 'react';
import PropTypes from 'prop-types';
import TextInput from 'form-elements/TextInput';
import Checkbox from 'form-elements/Checkbox';

const ComponentSettingsInput = ({values, currentValue, onChange}) => {
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
    inputType = 'checkbox';

    return <Checkbox checked={checked} value={currentValue} onChange={inputChanged} />;
  } else if (values === Number) {
    dataType = 'number';
    inputType = 'number';
  } else if (values === String) {
    dataType = 'string';
    inputType = 'text';
  }

  return <TextInput type={inputType} value={currentValue} onChange={inputChanged}/>;
};

ComponentSettingsInput.propTypes = {
  values: PropTypes.oneOf([Boolean, Number, String]).isRequired,
  currentValue: PropTypes.any,
  onChange: PropTypes.func.isRequired
};

export default ComponentSettingsInput;
