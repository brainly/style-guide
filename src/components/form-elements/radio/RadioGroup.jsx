// @flow strict

import * as React from 'react';
import classNames from 'classnames';
import {RadioContext} from './useRadioContext';
import ErrorMessage from '../ErrorMessage';
import RadioColorType from './Radio';

type DirectionType = 'row' | 'column';

export type RadioGroupPropsType = {
  children?: React.Node,
  className?: ?string,
  color?: RadioColorType,
  direction?: DirectionType,
  disabled?: boolean,
  errorMessage?: string,
  invalid?: boolean,
  name?: string,
  onChange: (SyntheticInputEvent<HTMLInputElement>) => void,
  value?: string,
  ...
};

const RadioGroup = ({
  className,
  children,
  color,
  direction = 'column',
  disabled,
  errorMessage,
  invalid,
  name,
  value,
  onChange,
  ...props
}: RadioGroupPropsType) => {
  const [selectedValue, setSelectedValue] = React.useState(value);
  const [lastFocusedValue, setLastFocusedValue] = React.useState(null);
  const radioGroupClass = classNames('sg-radio-group', className);
  const radioGroupItemsClass = classNames('sg-radio-group__items', {
    [`sg-radio-group__items--direction-${String(direction)}`]: direction,
  });
  const errorTextId = `${name}-errorText`;

  const updateValue = prop => {
    setSelectedValue(prop);
    if (onChange) onChange(prop);
  };

  return (
    <div
      className={radioGroupClass}
      role="radiogroup"
      disabled={disabled}
      onBlur={() => setLastFocusedValue(null)}
      {...props}
    >
      <div className={radioGroupItemsClass}>
        <RadioContext.Provider
          value={{
            color,
            name,
            disabled,
            invalid,
            selectedValue,
            setSelectedValue: updateValue,
            lastFocusedValue,
            setLastFocusedValue,
          }}
        >
          {children}
        </RadioContext.Provider>
      </div>
      {invalid && errorMessage && (
        <ErrorMessage
          id={errorTextId}
          color={color === 'light' ? 'text-red-40' : undefined}
        >
          {errorMessage}
        </ErrorMessage>
      )}
    </div>
  );
};

export default RadioGroup;
