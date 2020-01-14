import React from 'react';
import Text from 'text/Text';
import ComponentSettingsInput from './ComponentSettingsInput';
import ComponentSettingsSelect from './ComponentSettingsSelect';

function isPlainObject(o) {
  return Object.getPrototypeOf(o) === Object.prototype;
}

var ComponentSettings = function ComponentSettings(_ref) {
  var settings = _ref.settings,
      values = _ref.values,
      onChange = _ref.onChange;
  var content = settings.map(function (propSettings) {
    var propName = propSettings.name;
    var allowedValues = propSettings.values;
    var isRequired = Boolean(propSettings.required);
    var currentValue = values[propName];

    var inputOnChange = function inputOnChange(value) {
      return onChange(propName, value);
    };

    var input = null;

    if (isPlainObject(allowedValues)) {
      input = React.createElement(ComponentSettingsSelect, {
        key: propName,
        values: allowedValues,
        currentValue: currentValue,
        required: isRequired // eslint-disable-next-line react/jsx-no-bind
        ,
        onChange: inputOnChange
      });
    } else {
      input = React.createElement(ComponentSettingsInput, {
        key: propName,
        values: allowedValues,
        currentValue: currentValue // eslint-disable-next-line react/jsx-no-bind
        ,
        onChange: inputOnChange
      });
    }

    return React.createElement("label", {
      key: propName
    }, React.createElement(Text, null, propName, ":"), " ", input, ' ');
  });
  return React.createElement("fieldset", {
    className: "docs-active-block__component-settings"
  }, content);
};

export default ComponentSettings;