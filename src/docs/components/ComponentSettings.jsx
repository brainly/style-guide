import React from 'react';
import PropTypes from 'prop-types';
import Text from 'text/Text';
import ComponentSettingsInput from './ComponentSettingsInput';
import ComponentSettingsSelect from './ComponentSettingsSelect';

function isPlainObject(o) {
  return Object.getPrototypeOf(o) === Object.prototype;
}

const ComponentSettings = ({settings, values, onChange}) => {
  const content = Object.keys(settings).map(key => {
    const allowedValues = settings[key];
    const currentValue = values[key];
    let input = null;

    if (isPlainObject(allowedValues)) {
      input = <ComponentSettingsSelect key={key} values={allowedValues} currentValue={currentValue}
        onChange={value => onChange(key, value)}/>;
    } else {
      input = <ComponentSettingsInput key={key} values={allowedValues} currentValue={currentValue}
        onChange={value => onChange(key, value)}/>;
    }

    return <label key={key}><Text>{key}:</Text> {input} </label>;
  });

  return <fieldset className="docs-active-block__component-settings">{content}</fieldset>;
};

ComponentSettings.propTypes = {
  settings: PropTypes.object.isRequired,
  values: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired
};

export default ComponentSettings;
