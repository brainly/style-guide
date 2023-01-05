// @flow strict

import * as React from 'react';
import classNames from 'classnames';
import {RadioContext} from './useRadioContext';
import ErrorMessage from '../ErrorMessage';
import type {RadioColorType} from './Radio';

type DirectionType = 'row' | 'column';

export type RadioGroupPropsType = {
  /**
   * Radiogroup inner elements
   * @example <RadioGroup><Radio>Label</Radio></RadioGroup>
   */
  children?: React.Node,
  /**
   * Optional string. Additional classnames.
   */
  className?: ?string,
  /**
   * Specify color variant of the Radios that you want to use.
   * @example <RadioGroup color="light" />
   */
  color?: RadioColorType,
  /**
   * Specify items display direction.
   * @example <RadioGroup direction="row" />
   * @default "column"
   */
  direction?: DirectionType,
  /**
   * Sets whether the radio is disabled.
   * @example <RadioGroup disabled />
   */
  disabled?: boolean,
  /**
   * To be displayed below RadioGroup. The error message is not clickable. Note: you have to set `invalid` prop as well, to render the error message.
   * @example <RadioGroup invalid errorMessage="Error message"><Radio>Label</Radio></RadioGroup>
   */
  errorMessage?: string,
  /**
   * Sets whether Radios are marked as invalid.
   * @example <RadioGroup invalid />
   */
  invalid?: boolean,
  /**
   * Sets whether the RadioGroup is marked as required. This has no effect on the style.
   * @example <RadioGroup required />
   */
  required?: boolean,
  /**
   * The name of Radio inputs.
   * @example <RadioGroup name="name" />
   */
  name?: string,
  /**
   * Function called with an object containing the react synthetic event, whenever selected radio input changes.
   */
  onChange: (SyntheticInputEvent<HTMLInputElement>) => void,
  /**
   * Currently selected radio input.
   * @example <RadioGroup value="1"><Radio value="1">Label</Radio></RadioGroup>
   */
  value?: ?string,
  /**
   * ID of a custom label, that describes the radio group.
   * @example <RadioGroup aria-labelledby="my-custom-label" />
   */
  'aria-labelledby'?: string,
  /**
   * ID of a custom text / section, that describes the radio group.
   * @example <RadioGroup aria-describedby="my-custom-label" />
   */
  'aria-describedby'?: string,
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
  required,
  value,
  onChange,
  'aria-labelledby': ariaLabelledBy,
  'aria-describedby': ariaDescribedBy,
  ...props
}: RadioGroupPropsType) => {
  const [selectedValue, setSelectedValue] = React.useState(value || null);
  const [lastFocusedValue, setLastFocusedValue] = React.useState(null);
  const radioGroupClass = classNames('sg-radio-group', className);
  const radioGroupItemsClass = classNames('sg-radio-group__items', {
    [`sg-radio-group__items--direction-${String(direction)}`]: direction,
  });
  const errorTextId = name ? `${name}-errorText` : undefined;

  const updateValue = (event, value) => {
    setSelectedValue(value);
    if (onChange) onChange(event);
  };

  const describedbyIds = React.useMemo(() => {
    const ids = [];

    if (invalid && errorMessage) {
      ids.push(errorTextId);
    }
    if (ariaDescribedBy) {
      ids.push(ariaDescribedBy);
    }
    return ids.join(' ');
  }, [errorTextId, invalid, errorMessage, ariaDescribedBy]);

  return (
    <div
      {...props}
      className={radioGroupClass}
      role="radiogroup"
      disabled={disabled}
      onBlur={() => setLastFocusedValue(null)}
      aria-required={required}
      aria-labelledby={ariaLabelledBy}
      aria-describedby={describedbyIds.length ? describedbyIds : undefined}
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
