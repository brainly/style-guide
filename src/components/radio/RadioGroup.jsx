// @flow strict

import * as React from 'react';
import classNames from 'classnames';
import {RadioContext} from './useRadioContext';

export type RadioGroupPropsType = {
  value?: string,
  ...
};

const RadioGroup = ({
  className,
  children,
  name,
  value,
  onChange,
  ...props
}: RadioGroupPropsType) => {
  const [selectedValue, setSelectedValue] = React.useState(value);
  const radioGroupClass = classNames('sg-radio-group', className);

  const updateValue = prop => {
    setSelectedValue(prop);
    if (onChange) onChange(prop);
  };

  return (
    <div className={radioGroupClass} role="radiogroup" name={name} {...props}>
      <RadioContext.Provider
        value={{
          name,
          state: {selectedValue, setSelectedValue: updateValue},
        }}
      >
        {children}
      </RadioContext.Provider>
    </div>
  );
};

export default RadioGroup;
