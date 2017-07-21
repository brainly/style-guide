import React from 'react';
import PropTypes from 'prop-types';

function isPlainObject(o) {
  return Object.getPrototypeOf(o) === Object.prototype;
}

const ComponentSettings = ({settings, values, onChange}) => {
  function inputChanged(values, e) {
    const target = e.target;
    const key = e.target.dataset.key;
    const type = e.target.dataset.valueType;
    let value = null;

    if (type === 'boolean') {
      value = Boolean(target.checked);
    } else if (type === 'number') {
      value = Number(target.value);
    } else if (type === 'object') {
      value = values[target.value];
    } else if (type === 'string') {
      value = target.value;
    }

    onChange(key, value);
  }

  const content = Object.keys(settings).map(key => {
    const allowedValues = settings[key];

    if (isPlainObject(allowedValues)) {
      const allowedKeys = Object.keys(allowedValues);
      const selectedKey = allowedKeys.find(optionKey => allowedValues[optionKey] === values[key]);

      return <label key={key}>{key}:
        <select
          data-key={key}
          data-value-type="object"
          onChange={inputChanged.bind(null, allowedValues)}
          value={selectedKey}
        >
          {allowedKeys.map(optionKey => <option key={optionKey} value={optionKey}>{optionKey}</option>)}
        </select>
      </label>;
    }

    let type;
    let inputType;
    const inputValue = values[key];
    const checked = Boolean(values[key]);

    if (allowedValues === Boolean) {
      type = 'boolean';
      inputType = 'checkbox';
    } else if (allowedValues === Number) {
      type = 'number';
      inputType = 'number';
    } else if (allowedValues === String) {
      type = 'string';
      inputType = 'text';
    } else {
      throw new Error('Unsupported value type.');
    }

    return <label key={key}>{key}:
      <input type={inputType}
        data-key={key}
        data-value-type={type}
        checked={checked}
        value={inputValue}
        onChange={inputChanged.bind(null, allowedValues)}/>
    </label>;
  });

  return <fieldset className="docs-active-block__settings">{content}</fieldset>;
};

ComponentSettings.propTypes = {
  settings: PropTypes.object.isRequired,
  values: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired
};

export default ComponentSettings;
