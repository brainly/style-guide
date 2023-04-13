import * as React from 'react';
import classNames from 'classnames';
import Text from '../text/Text';
import useChipContext from './useChipContext';
import ChipGroup from './ChipGroup';

export const SIZE: {
  M: 'm';
  S: 's';
} = {
  M: 'm',
  S: 's',
};

type ChipSizeType = 'm' | 's';

type StyleType = Partial<
  React.CSSProperties & {
    '--chipBorderColor'?: string;
    '--chipCheckedBorderColor'?: string;
  }
>;

const isCheckedWithinGroup = (
  groupValue?: string | Array<string>,
  value?: string
) => {
  if (!value) {
    return;
  }
  if (Array.isArray(groupValue)) {
    return groupValue.includes(value);
  }

  return groupValue === value;
};

export type ChipPropsType = {
  children: React.ReactNode;
  /**
   * Sets whether the chip is checked or unchecked.
   * @example <Chip checked />
   */
  checked?: boolean;

  /**
   * Sets whether the Chip is multi select or single select.
   * @example <Chip multiSelect />
   */
  multiSelect?: boolean;

  /**
   * Optional string. Additional classnames.
   */
  className?: string | null | undefined;

  /**
   * Sets whether the Chip is disabled.
   * @example <Chip disabled />
   */
  disabled?: boolean;

  /**
   * Sets whether the Chip is required.
   * @example <Chip required />
   */
  required?: boolean;

  /**
   * Sets size.
   * @example <Chip size="s" />
   * @default m
   */
  size?: ChipSizeType;

  /**
   * The name of the chip group.
   * @example <Chip name="subjects" />
   */
  name?: string;

  /**
   * Style applied to the container.
   * @example <Chip style={{ '--chipBorderColor': '#000' }} />
   */
  style?: StyleType;

  /**
   * Value of the input.
   * @example <Chip value="1" />
   */
  value: string;

  /**
   * You can render icon inside the chip on the left side
   * @example <Chip
   *           icon={<Icon variant="funnel" color="icon-white" size={16} />}
   *          >
   *            Math
   *          </Chip>
   */
  icon?: React.ReactNode;

  /**
   * Function called with an object containing the react synthetic event, whenever the state of the chip changes.
   */
  onChange?: (arg0: React.SyntheticEvent<HTMLInputElement>) => void;

  'aria-describedby'?: string;
} & Omit<
  React.AllHTMLAttributes<HTMLLabelElement>,
  | 'checked'
  | 'children'
  | 'size'
  | 'name'
  | 'onChange'
  | 'style'
  | 'value'
  | 'icon'
>;

const Chip = ({
  children,
  className,
  value,
  style,
  name,
  disabled,
  size = 'm',
  multiSelect,
  checked,
  required,
  icon,
  onChange,
  'aria-describedby': ariaDescribedBy,
  ...props
}: ChipPropsType) => {
  const chipClass = classNames('sg-chip', `sg-chip--${size}`, className);
  const inputClass = classNames('sg-chip__input');

  const chipGroupContext = useChipContext();
  const isWithinChipGroup = Boolean(
    chipGroupContext && Object.keys(chipGroupContext).length
  );

  const isCheckbox = multiSelect || chipGroupContext.multiSelect;
  const inputType = isCheckbox ? 'checkbox' : 'radio';
  const groupName = isWithinChipGroup ? chipGroupContext.name : name;
  const isRequired = isWithinChipGroup ? chipGroupContext.required : required;
  const isDisabled = isWithinChipGroup ? chipGroupContext.disabled : disabled;

  const isControlled = checked !== undefined || isWithinChipGroup;
  const isChecked = isControlled
    ? checked ?? isCheckedWithinGroup(chipGroupContext.groupValue, value)
    : undefined;

  const onInputChange = e => {
    if (isWithinChipGroup) {
      chipGroupContext.onChipChange(e, value);
    }

    if (onChange) {
      onChange(e);
    }
  };

  return (
    <label className={chipClass} {...props} style={style}>
      <input
        className={inputClass}
        type={inputType}
        disabled={isDisabled}
        required={isRequired}
        value={value}
        checked={isChecked}
        aria-describedby={ariaDescribedBy}
        onChange={onInputChange}
        name={groupName}
      />
      <div className="sg-chip__pill">
        {Boolean(icon) && <div className="sg-chip__icon">{icon}</div>}
        <Text
          color="text-black"
          size="small"
          weight="bold"
          className="sg-chip__text"
        >
          {children}
        </Text>
        {isCheckbox && (
          <div className="sg-chip__check-icon" aria-hidden>
            <div className="sg-chip__lines sg-chip__lines--vertical" />
            <div className="sg-chip__lines sg-chip__lines--horizontal" />
          </div>
        )}
      </div>
    </label>
  );
};

Chip.Group = ChipGroup;
export default Chip;
