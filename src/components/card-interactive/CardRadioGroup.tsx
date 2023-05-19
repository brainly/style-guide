import * as React from 'react';
import {generateId} from '../utils';
import cx from 'classnames';
import Flex from '../flex/Flex';
import {CardRadioGroupContext} from './CardRadioGroupContext';
import type {CardRadioGroupContextType} from './CardRadioGroupContext';
import {CardRadio, CardRadioIndicator} from './CardRadio';
import type {FlexPropsType} from '../flex/Flex';

export interface CardRadioGroupPropsType {
  /**
   * The name of the radio group and the form data when submitting the form.
   */
  name?: string;

  /**
   * Optional boolean. Whether the CardRadioGroup is required.
   * @default false
   */
  required?: boolean;

  /**
   * Optional boolean. Whether the CardRadioGroup is disabled.
   * @default false
   */
  disabled?: boolean;

  /**
   * Optional boolean. Whether the CardRadioGroup is invalid.
   * @default false
   **/
  invalid?: boolean;

  /**
   * Optional string. The direction of the CardRadioGroup.
   * @default 'row'
   **/
  direction?: FlexPropsType['direction'];

  /**
   * CardRadioGroup  inner elements
   * @example
   * <CardRadioGroup>
   *  <CardRadioGroup.Item value="1">1</CardRadioGroup.Item>
   *  <CardRadioGroup.Item value="2">2</CardRadioGroup.Item>
   * </CardRadioGroup>
   *
   **/
  children: React.ReactNode;

  /**
   * Optional string. The className of the CardRadioGroup.
   * @default undefined
   **/
  className?: string;

  'aria-labelledby'?: string;
  'aria-describedby'?: string;
  'aria-label'?: string;

  /**
   * Optional string. The default value of the CardRadioGroup.
   * @default ''
   **/
  defaultValue?: string;

  /**
   * Optional string. Currently selected value of the CardRadioGroup.Item.
   **/
  value?: string;

  /**
   * Optional function. The callback function that is triggered when the value of the CardRadioGroup changes.
   **/
  onChange?: (value: string) => void;
}

const CardRadioGroupRoot = React.forwardRef<
  HTMLDivElement,
  CardRadioGroupPropsType
>((props, ref) => {
  const {
    name,
    required = false,
    disabled = false,
    invalid = false,
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
        direction={direction}
        aria-disabled={disabled}
        {...other}
      >
        {children}
      </Flex>
    </CardRadioGroupContext.Provider>
  );
});

const CardRadioGroup = Object.assign(CardRadioGroupRoot, {
  Item: CardRadio,
  Indicator: CardRadioIndicator,
});

CardRadioGroup.displayName = 'CardRadioGroup';
CardRadio.displayName = 'CardRadioGroup.Item';
CardRadioIndicator.displayName = 'CardRadioGroup.Indicator';

export default CardRadioGroup;
