// @flow

import React from 'react';
import Text from 'text/Text';
import ComponentSettingsInput from './ComponentSettingsInput';
import ComponentSettingsSelect from './ComponentSettingsSelect';

function isPlainObject(o) {
  return Object.getPrototypeOf(o) === Object.prototype;
}

type PropsType = {
  settings: Array<{
    name: string,
    values: any,
    required?: boolean,
    ...
  }>,
  values: {[string]: number | string | boolean, ...},
  onChange: (string, number | string | boolean) => mixed,
  ...
};

const ComponentSettings = ({settings, values, onChange}: PropsType) => {
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

    return (
      <label key={propName}>
        <Text>{propName}:</Text> {input}{' '}
      </label>
    );
  });

  return (
    <fieldset className="docs-active-block__component-settings">
      {content}
    </fieldset>
  );
};

export default ComponentSettings;
