import * as React from 'react';
import cx from 'classnames';
import Checkbox from '../form-elements/checkbox/Checkbox';
import generateRandomString from '../../js/generateRandomString';

export interface CardCheckboxPropsType {
  /**
   * Optional string. Variant of the card. Default is 'outline'.
   */
  variant?: 'solid' | 'outline';

  /**
   * Optional string. Additional class names.
   */
  className?: string;

  /**
   * Optional React.ReactNode. Children of the card. This is the place where label should be used and connected to the card.
   * @example <Card.Checkbox>Card content</Card.Checkbox>
   */
  children?: React.ReactNode;

  /**
   * Optional string. Width of the card.
   * @default auto
   * @example <Card.Checkbox width="100px" />
   **/
  width?: React.CSSProperties['width'];

  /**
   * Optional string. Height of the card.
   * @default auto
   * @example <Card.Checkbox height="100px" />
   */
  height?: React.CSSProperties['height'];

  /**
   * Optional object. Inline styles.
   * @example <Card.Checkbox style={--card-background-color: var(--green-20)} />
   */
  style?: React.CSSProperties;

  /**
   * Optional boolean. Whether the checkbox is checked.
   */
  checked?: boolean;

  /**
   * Optional boolean. Whether the checkbox is checked by default. Only works when `checked` is not defined.
   */
  defaultChecked?: boolean;

  /**
   * Optional boolean. Whether the checkbox is disabled.
   */
  disabled?: boolean;

  /**
   * Optional string. ID of the checkbox.
   */
  id?: string;

  /**
   * Sets whether the checkbox is displayed as indeterminate. Note: this prop doesn't modify the `checked` property.
   * @example  <Card.Checkbox indeterminate />
   * @default false
   */
  indeterminate?: boolean;

  /**
   * Optional boolean. Whether the checkbox is invalid.
   * @default <Card.Checkbox invalid />
   */
  invalid?: boolean;

  /**
   * Optional boolean. Whether the checkbox is required.
   * @default <Card.Checkbox required />
   */
  required?: boolean;

  /**
   * Value of the Card.Checkbox input.
   * @example <Checkbox value="1" />
   */
  value?: string;

  /**
   * Name of the Card.Checkbox input.
   * @example <Checkbox name="checkbox" />
   */
  name?: string;

  /**
   * Function called whenever the state of the checkbox changes.
   */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;

  /**
   * Function called whenever the mouse enters the checkbox.
   */
  onMouseEnter?: (e: React.MouseEvent<HTMLDivElement>) => void;

  /**
   * Function called whenever the mouse leaves the checkbox.
   */
  onMouseLeave?: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export const CardCheckboxContext = React.createContext({
  checked: false,
  disabled: false,
  indeterminate: false,
  hover: false,
});

const CardCheckbox = ({
  variant = 'outline',
  className,
  children,
  width,
  height,
  style,

  // checkbox related props
  checked,
  defaultChecked = false,
  disabled,
  id,
  indeterminate,
  invalid = false,
  required = false,
  value,
  name,
  onChange,
  onMouseEnter,
  onMouseLeave,
  ...props
}: CardCheckboxPropsType) => {
  const [hover, setHover] = React.useState(false);
  const isControlled = checked !== undefined;
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [isChecked, setIsChecked] = React.useState(
    isControlled ? checked : defaultChecked
  );

  const cardId = React.useMemo(() => id || generateRandomString(), [id]);

  const cssVariables = {
    '--card-width': width,
    '--card-height': height,
  };

  const onInputChange = React.useCallback(
    e => {
      if (!isControlled) {
        setIsChecked(val => !val);
      }

      if (onChange) onChange(e);
    },
    [onChange, isControlled]
  );

  // handle onmouseenter and onmouseleave
  const handleMouseEnter = React.useCallback(
    e => {
      onMouseEnter?.(e);
      setHover(true);
    },
    [onMouseEnter]
  );

  const handleMouseLeave = React.useCallback(
    e => {
      onMouseLeave?.(e);
      setHover(false);
    },
    [onMouseLeave]
  );

  return (
    <CardCheckboxContext.Provider
      value={{
        checked: isChecked,
        indeterminate,
        hover,
        disabled,
      }}
    >
      <div
        className={cx('sg-card-new', className, {
          'sg-card-new--hover': hover,
          [`sg-card-new--variant-${variant}`]: variant,
        })}
        style={{...style, ...cssVariables}}
        data-variant={variant}
        data-hover={hover}
        data-checked={indeterminate ? 'mixed' : isChecked}
        data-invalid={invalid}
        data-disabled={disabled}
      >
        <input
          aria-labelledby={`label-${cardId}`}
          id={cardId}
          ref={inputRef}
          className="sg-card-new__input"
          type="checkbox"
          checked={isChecked}
          disabled={disabled}
          name={name}
          onChange={onInputChange}
          required={required}
          value={value}
          aria-checked={indeterminate ? 'mixed' : isChecked}
          aria-invalid={invalid ? true : undefined}
          suppressHydrationWarning
          {...props}
        />
        <label
          id={`label-${cardId}`}
          htmlFor={cardId}
          className="sg-card-new__label"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          // On iOS the :active pseudo state is triggered only when there is a touch event set on the HTML element
          // and we use active pseudo class to provide press feedback.
          onTouchStart={() => null}
          suppressHydrationWarning
        >
          {children}
        </label>
      </div>
    </CardCheckboxContext.Provider>
  );
};

export interface CardCheckboxIndicatorPropsType {
  slot?:
    | 'top-left'
    | 'center-left'
    | 'bottom-left'
    | 'top-right'
    | 'center-right'
    | 'bottom-right';
  style?: React.CSSProperties;
  className?: string;
}

export const CardCheckboxIndicator = ({
  slot = 'top-left',
  style,
  className,
}: CardCheckboxIndicatorPropsType) => {
  const {checked, disabled} = React.useContext(CardCheckboxContext);

  return (
    <div
      className={cx(
        'sg-card-new__indicator',
        `sg-card-new__indicator--${slot}`,
        className
      )}
      style={style}
    >
      <Checkbox checked={checked} disabled={disabled} />
    </div>
  );
};

export default CardCheckbox;
