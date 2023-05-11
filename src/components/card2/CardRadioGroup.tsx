import * as React from 'react';
import {generateId} from '../utils';
import cx from 'classnames';
import Flex from '../flex/Flex';
import {CardRadioGroupContext} from './CardRadioGroupContext';
import type {CardRadioGroupContextType} from './CardRadioGroupContext';

export interface CardRadioGroupPropsType {
  name?: string;
  required?: boolean;
  disabled?: boolean;
  invalid?: boolean;
  direction?: 'row' | 'column';
  children: React.ReactNode;
  className?: string;
  'aria-labelledby'?: string;
  'aria-describedby'?: string;
  'aria-label'?: string;
  defaultValue?: string;
  value?: string;
  onChange?: (value: string) => void;
}

const CardRadioGroup = React.forwardRef<
  HTMLDivElement,
  CardRadioGroupPropsType
>((props, ref) => {
  const {
    name,
    required = false,
    disabled = false,
    invalid,
    direction = 'row',
    children,
    className,
    defaultValue = '',
    value: controlledValue,
    onChange,
    ...other
  } = props;

  const [internalValue, setInternalValue] = React.useState<string | undefined>(
    defaultValue
  );

  const isControlled = controlledValue !== undefined;

  const value = isControlled ? controlledValue : internalValue;

  const handleChange = (newValue: string) => {
    if (!isControlled) {
      setInternalValue(newValue);
    }

    if (onChange) {
      onChange(newValue);
    }
  };

  const contextValue: CardRadioGroupContextType = {
    name: name || `card-radio-group-${generateId()}`,
    required,
    disabled,
    invalid,
    value,
    onChange: handleChange,
  };

  return (
    <CardRadioGroupContext.Provider value={contextValue}>
      <Flex
        ref={ref}
        gap="s"
        className={cx('card-radio-group', className)}
        role="radiogroup"
        dir={direction}
        aria-disabled={disabled}
        {...other}
      >
        {children}
      </Flex>
    </CardRadioGroupContext.Provider>
  );
});

export {CardRadioGroup, CardRadioGroupContext};
