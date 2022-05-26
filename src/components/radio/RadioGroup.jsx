// @flow strict

import * as React from 'react';
import classNames from 'classnames';
import {RadioContext} from './useRadioContext';

type DirectionType = 'row' | 'column';

export type RadioGroupPropsType = {
  children?: React.Node,
  className?: ?string,
  direction?: DirectionType,
  disabled?: boolean,
  name?: string,
  onChange: (SyntheticInputEvent<HTMLInputElement>) => void,
  value?: string,
  ...
};

const RadioGroup = ({
  className,
  children,
  direction = 'column',
  disabled,
  name,
  value,
  onChange,
  ...props
}: RadioGroupPropsType) => {
  const [selectedValue, setSelectedValue] = React.useState(value);
  const [lastFocusedValue, setLastFocusedValue] = React.useState(null);
  const radioGroupClass = classNames('sg-radio-group', className, {
    [`sg-radio-group--items-direction-${String(direction)}`]: direction,
  });

  const updateValue = prop => {
    setSelectedValue(prop);
    if (onChange) onChange(prop);
  };

  return (
    <div
      className={radioGroupClass}
      role="radiogroup"
      name={name}
      disabled={disabled}
      onBlur={() => setLastFocusedValue(null)}
      {...props}
    >
      <RadioContext.Provider
        value={{
          name,
          disabled,
          state: {
            selectedValue,
            setSelectedValue: updateValue,
            lastFocusedValue,
            setLastFocusedValue,
          },
        }}
      >
        {children}
      </RadioContext.Provider>
    </div>
  );
};

export default RadioGroup;
