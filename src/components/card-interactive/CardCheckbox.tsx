import * as React from 'react';
import cx from 'classnames';
import Checkbox from '../form-elements/checkbox/Checkbox';
import generateRandomString from '../../js/generateRandomString';

export interface CardCheckboxPropsType
  extends Omit<React.ComponentPropsWithoutRef<'label'>, 'onChange'> {
  /**
   * Optional string. Variant of the card. Default is 'outline'.
   */
  variant?: 'solid' | 'outline';

  color?: 'light' | 'dark';

  /**
   * Optional string. Additional class names.
   */
  className?: string;

  /**
   * Optional React.ReactNode. Children of the card. This is the place where label should be used and connected to the card.
   * @example <CardCheckbox>Card content</Card.Checkbox>
   */
  children?: React.ReactNode;

  /**
   * Optional string. Width of the card.
   * @example <CardCheckbox width="100px" />
   **/
  width?: React.CSSProperties['width'];

  /**
   * Optional string. Height of the card.
   * @example <CardCheckbox height="100px" />
   */
  height?: React.CSSProperties['height'];

  /**
   * Optional object. Inline styles.
   * @example <CardCheckbox style={--card-background-color: var(--green-20)} />
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
   * @example  <CardCheckbox indeterminate />
   * @default false
   */
  indeterminate?: boolean;

  /**
   * Optional boolean. Whether the checkbox is invalid.
   * @default <CardCheckbox invalid />
   */
  invalid?: boolean;

  /**
   * Optional boolean. Whether the checkbox is required.
   * @default <CardCheckbox required />
   */
  required?: boolean;

  /**
   * Value of the Card.Checkbox input.
   * @example <CardCheckbox value="1" />
   */
  value?: string;

  /**
   * Name of the Card.Checkbox input.
   * @example <CardCheckbox name="checkbox" />
   */
  name?: string;

  /**
   * Function called whenever the state of the checkbox changes.
   */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;

  /**
   * Optional string. ID of the element that labels the Radio.
   * @example <CardCheckbox aria-labelledby="label-id" />
   **/
  'aria-labelledby'?: string;

  /**
   * Optional string. ID of the element that describes the Radio.
   * @example <CardCheckbox aria-describedby="description-id" />
   **/
  'aria-describedby'?: string;
}

type CardCheckboxContextType = {
  checked: boolean;
  disabled: boolean;
  indeterminate: boolean;
};

export const CardCheckboxContext = React.createContext<CardCheckboxContextType>(
  {
    checked: false,
    disabled: false,
    indeterminate: false,
  }
);

export const CardCheckboxRoot = React.forwardRef<
  HTMLInputElement,
  CardCheckboxPropsType
>(
  (
    {
      variant = 'outline',
      color = 'dark',
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
      'aria-labelledby': ariaLabelledBy,
      'aria-describedby': ariaDescribedBy,
      ...props
    }: CardCheckboxPropsType,
    ref
  ) => {
    const isControlled = checked !== undefined;
    const [isChecked, setIsChecked] = React.useState(
      isControlled ? checked : defaultChecked
    );

    const cardId = React.useMemo(() => id || generateRandomString(), [id]);

    const cssVariables = {
      '--card-width': width,
      '--card-height': height,
    };

    const onInputChange = React.useCallback(
      // @ts-ignore TS7006
      e => {
        if (!isControlled) {
          setIsChecked(val => !val);
        }

        if (onChange) onChange(e);
      },
      [onChange, isControlled]
    );

    React.useEffect(() => {
      if (isControlled) {
        setIsChecked(checked);
      }
    }, [checked, isControlled]);

    return (
      <CardCheckboxContext.Provider
        value={{
          checked: isChecked,
          // @ts-ignore TS2322
          indeterminate,
          // @ts-ignore TS2322
          disabled,
        }}
      >
        <label
          className={cx('sg-card-interactive', className)}
          style={{...style, ...cssVariables}}
          data-variant={variant}
          data-color={color}
          data-checked={indeterminate ? 'mixed' : isChecked}
          data-invalid={invalid}
          data-disabled={disabled}
          id={`label-${cardId}`}
          htmlFor={cardId}
          // On iOS the :active pseudo state is triggered only when there is a touch event set on the HTML element
          // and we use active pseudo class to provide press feedback.
          onTouchStart={() => null}
          suppressHydrationWarning
          {...props}
        >
          <input
            id={cardId}
            ref={ref}
            className="sg-card-interactive__input"
            type="checkbox"
            checked={isChecked}
            disabled={disabled}
            name={name}
            onChange={onInputChange}
            required={required}
            value={value}
            aria-checked={indeterminate ? 'mixed' : isChecked}
            aria-invalid={invalid ? true : undefined}
            aria-labelledby={ariaLabelledBy || `label-${cardId}`}
            aria-describedby={ariaDescribedBy}
            suppressHydrationWarning
          />
          <div className="sg-card-interactive__border">
            <div className="sg-card-interactive__background">{children}</div>
          </div>
        </label>
      </CardCheckboxContext.Provider>
    );
  }
);

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
  const {checked, disabled, indeterminate} =
    React.useContext(CardCheckboxContext);

  return (
    <div
      className={cx(
        'sg-card-interactive__indicator',
        `sg-card-interactive__indicator--${slot}`,
        className
      )}
      style={style}
    >
      <Checkbox
        checked={checked}
        disabled={disabled}
        indeterminate={indeterminate}
      />
    </div>
  );
};

const CardCheckbox = Object.assign(CardCheckboxRoot, {
  Indicator: CardCheckboxIndicator,
});

CardCheckbox.displayName = 'CardCheckbox';
CardCheckboxIndicator.displayName = 'CardCheckbox.Indicator';

export default CardCheckbox;
