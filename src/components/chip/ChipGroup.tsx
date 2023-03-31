import * as React from 'react';
import classNames from 'classnames';
import {ChipContext} from './useChipContext';
import {generateId} from '../utils';
import Flex from '../flex/Flex';

type DirectionType = 'row' | 'column';

export type ChipGroupPropsType = {
  /**
   * Chip group inner elements
   * @example <ChipGroup><Chip>Label</Chip></ChipGroup>
   */
  children?: React.ReactNode;

  /**
   * Optional string. Additional classnames.
   */
  className?: string | null | undefined;

  /**
   * Specify items display direction.
   * @example <ChipGroup direction="column" />
   * @default "row"
   */
  direction?: DirectionType;

  /**
   * Sets whether the group is disabled.
   * @example <ChipGroup disabled />
   */
  disabled?: boolean;

  /**
   * Sets whether the group is required.
   * @example <ChipGroup required />
   */
  required?: boolean;

  /**
   * The name of Chip inputs.
   * @example <ChipGroup name="name" />
   */
  name?: string;

  /**
   * Function called with an object containing the react synthetic event, whenever selected radio input changes.
   */
  onChange?: (
    event: React.SyntheticEvent<HTMLInputElement>,
    value: string | null | undefined
  ) => void;

  /**
   * Sets whether the Chip is multi select or single select.
   * @example <Chip multiSelect />
   */
  multiSelect?: boolean;

  /**
   * Currently selected radio input.
   * @example <ChipGroup value="1"><Chip value="1">Label</Chip></ChipGroup>
   */
  value?: string | null | undefined | Array<string>;
} & Omit<
  React.AllHTMLAttributes<HTMLElement>,
  | 'children'
  | 'className'
  | 'direction'
  | 'disabled'
  | 'name'
  | 'onChange'
  | 'value'
  | 'multiSelect'
>;

const getGroupValue = (
  currentValue: string | null | undefined | Array<string>,
  toggledValue: string | null | undefined,
  multiSelect?: boolean
) => {
  if (multiSelect) {
    if (Array.isArray(currentValue)) {
      return currentValue.includes(toggledValue)
        ? currentValue.filter(v => v !== toggledValue)
        : [...currentValue, toggledValue];
    }
    return currentValue === toggledValue ? null : [toggledValue];
  }
  return currentValue === toggledValue ? null : toggledValue;
};

const ChipGroup = ({
  className,
  children,
  direction = 'row',
  disabled,
  name,
  required,
  value,
  onChange,
  multiSelect,
  ...props
}: ChipGroupPropsType) => {
  const chipGroupClass = classNames(
    'sg-chip-group',
    `sg-chip-group--${direction}`,
    className
  );
  const groupRole = multiSelect ? 'group' : 'radiogroup';
  const {current: groupName} = React.useRef<string>(
    name || `ChipGroup_${generateId()}`
  );

  const [selectedValue, setSelectedValue] = React.useState(value || null);

  React.useEffect(() => {
    setSelectedValue(value);
  }, [value]);

  const setValue = (event, chipValue) => {
    setSelectedValue(getGroupValue(selectedValue, chipValue, multiSelect));
    if (onChange) onChange(event, chipValue);
  };

  return (
    <div
      {...props}
      className={chipGroupClass}
      role={groupRole}
      aria-disabled={disabled}
    >
      <Flex gap="s">
        <ChipContext.Provider
          value={{
            name: groupName,
            disabled,
            required,
            groupValue: selectedValue,
            multiSelect,
            onChipChange: setValue,
          }}
        >
          {children}
        </ChipContext.Provider>
      </Flex>
    </div>
  );
};

export default ChipGroup;
