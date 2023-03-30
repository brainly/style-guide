import * as React from 'react';
import classNames from 'classnames';
import Text from '../text/Text';
import useChipContext from './useChipContext';

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
  name: string;

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
  onChange?: (arg0: React.SyntheticEvent<HTMLLabelElement>) => void;

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
  icon,
  onChange,
  'aria-describedby': ariaDescribedBy,
  ...props
}: ChipPropsType) => {
  const chipClass = classNames('sg-chip', `sg-chip--${size}`, className);
  const inputClass = classNames('sg-visually-hidden', 'sg-chip__input');

  const chipGroupContext = useChipContext();
  const isWithinChipGroup = Boolean(
    chipGroupContext && Object.keys(chipGroupContext).length
  );

  const isCheckbox = multiSelect || chipGroupContext.multiSelect;
  const inputType = isCheckbox ? 'checkbox' : 'radio';

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
    <label {...props} className={chipClass}>
      <input
        className={inputClass}
        type={inputType}
        disabled={disabled ?? chipGroupContext.disabled}
        value={value}
        checked={isChecked}
        aria-describedby={ariaDescribedBy}
        onChange={onInputChange}
        name={name}
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
          <svg
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            className="sg-chip__check-icon"
            aria-hidden
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.457 4.29289C13.8475 4.6834 13.8475 5.31657 13.457 5.7071L7.41707 11.7472C7.22953 11.9347 6.97517 12.0401 6.70995 12.0401C6.44473 12.0401 6.19037 11.9347 6.00284 11.7472L2.9929 8.73718C2.60238 8.34665 2.60239 7.71348 2.99291 7.32296C3.38344 6.93245 4.01661 6.93245 4.40713 7.32298L6.70995 9.62587L12.0428 4.2929C12.4333 3.90237 13.0665 3.90237 13.457 4.29289Z"
            />
            <path d="M9 3.5C9 2.94772 8.55228 2.5 8 2.5C7.44772 2.5 7 2.94772 7 3.5V7H3.5C2.94772 7 2.5 7.44772 2.5 8C2.5 8.55228 2.94772 9 3.5 9H7V12.5C7 13.0523 7.44772 13.5 8 13.5C8.55228 13.5 9 13.0523 9 12.5V9H12.5C13.0523 9 13.5 8.55228 13.5 8C13.5 7.44772 13.0523 7 12.5 7H9V3.5Z" />
          </svg>
        )}
      </div>
    </label>
  );
};

export default Chip;
