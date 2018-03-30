import React from 'react';
import PropTypes from 'prop-types';
import Text from 'text/Text';
import ComponentSettingsInput from './ComponentSettingsInput';
import ComponentSettingsSelect from './ComponentSettingsSelect';

function isPlainObject(o) {
  return Object.getPrototypeOf(o) === Object.prototype;
}

const ComponentSettings = ({settings, values, onChange}) => {
  const content = settings.map(propSettings => {
    const propName = propSettings.name;
    const allowedValues = propSettings.values;
    const isRequired = Boolean(propSettings.required);
    const currentValue = values[propName];
    const inputOnChange = value => onChange(propName, value);
    let input = null;

    if (isPlainObject(allowedValues)) {
      input = (
        <ComponentSettingsSelect
          key={propName}
          values={allowedValues}
          currentValue={currentValue}
          required={isRequired}
          // eslint-disable-next-line react/jsx-no-bind
          onChange={inputOnChange}
        />
      );
    } else {
      input = (
        <ComponentSettingsInput
          key={propName}
          values={allowedValues}
          currentValue={currentValue}
          // eslint-disable-next-line react/jsx-no-bind
          onChange={inputOnChange}
        />
      );
    }

    return <label key={propName}><Text>{propName}:</Text> {input} </label>;
  });

  return <fieldset className="docs-active-block__component-settings">{content}</fieldset>;
};

const propSettings = PropTypes.shape({
  name: PropTypes.string.isRequired,
  values: PropTypes.any.isRequired,
  required: PropTypes.bool
});

ComponentSettings.propTypes = {
  settings: PropTypes.arrayOf(propSettings),
  values: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired
};

export default ComponentSettings;
