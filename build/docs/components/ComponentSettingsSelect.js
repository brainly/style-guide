import React from 'react';
import Select from 'form-elements/Select';

var ComponentSettingsSelect = function ComponentSettingsSelect(_ref) {
  var values = _ref.values,
      currentValue = _ref.currentValue,
      required = _ref.required,
      onChange = _ref.onChange;
  var allowedKeys = Object.keys(values);
  var selectedKey = allowedKeys.find(function (optionKey) {
    return values[optionKey] === currentValue;
  });

  function inputChanged(e) {
    var target = e.target;
    var value = values[target.value];
    onChange(value);
  }

  var options = allowedKeys.map(function (optionKey) {
    return {
      text: optionKey,
      value: optionKey
    };
  });

  if (!required) {
    options.unshift({
      text: '(default)',
      value: ''
    });
  }

  return React.createElement(Select, {
    onChange: inputChanged,
    value: selectedKey,
    options: options
  });
};

export default ComponentSettingsSelect;