import * as React from 'react';
// eslint-disable-next-line import/no-duplicates
import {useRef} from 'react';
import classNames from 'classnames';
import {ChipContext} from './useChipContex';
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
   * The name of Chip inputs.
   * @example <ChipGroup name="name" />
   */
  name?: string;

  /**
   * Function called with an object containing the react synthetic event, whenever selected radio input changes.
   */
  onChange: (arg0: React.SyntheticEvent<HTMLInputElement>) => void;

  /**
   * Sets whether the Chip is multi select or single select.
   * @example <Chip multiSelect />
   */
  multiSelect?: boolean;

  /**
   * Currently selected radio input.
   * @example <ChipGroup value="1"><Chip value="1">Label</Chip></ChipGroup>
   */
  value: string | null | undefined | Array<string>;
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
  const {current: groupName} = useRef<string>(
    name || `ChipGroup_${generateId()}`
  );

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
            value,
            multiSelect,
          }}
        >
          {children}
        </ChipContext.Provider>
      </Flex>
    </div>
  );
};

export default ChipGroup;
