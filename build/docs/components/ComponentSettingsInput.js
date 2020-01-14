import React from 'react';
import Input from 'form-elements/Input';
import Checkbox from 'form-elements/Checkbox';

var ComponentSettingsInput = function ComponentSettingsInput(_ref) {
  var values = _ref.values,
      currentValue = _ref.currentValue,
      onChange = _ref.onChange;
  var dataType;
  var inputType;
  var checked = Boolean(currentValue);

  function inputChanged(e) {
    var target = e.target;
    var value = target.value;

    if (dataType === 'boolean') {
      value = Boolean(target.checked);
    } else if (dataType === 'number') {
      value = Number(value);
    }

    onChange(value);
  }

  if (values === Boolean) {
    dataType = 'boolean';
    return React.createElement(Checkbox, {
      checked: checked,
      onChange: inputChanged
    });
  } else if (values === Number) {
    dataType = 'number';
    inputType = 'number';
  } else if (values === String) {
    dataType = 'string';
    inputType = 'text';
  }

  return (// $FlowFixMe
    React.createElement(Input, {
      type: inputType,
      value: currentValue,
      onChange: inputChanged
    })
  );
};

export default ComponentSettingsInput;