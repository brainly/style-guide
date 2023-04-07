import * as React from 'react';
import cx from 'classnames';
import Radio from '../form-elements/radio/Radio';
import generateRandomString from '../../js/generateRandomString';

export interface CardRadioPropsType {
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
   * @example <Card.Radio>Card content</Card.Radio>
   */
  children?: React.ReactNode;

  /**
   * Optional string. Width of the card.
   * @default auto
   * @example <Card.Radio width="100px" />
   **/
  width?: React.CSSProperties['width'];

  /**
   * Optional string. Height of the card.
   * @default auto
   * @example <Card.Radio height="100px" />
   */
  height?: React.CSSProperties['height'];

  /**
   * Optional object. Inline styles.
   * @example <Card.Radio style={--card-background-color: var(--green-20)} />
   */
  style?: React.CSSProperties;

  /**
   * Optional boolean. Whether the Radio is checked.
   */
  checked?: boolean;

  /**
   * Optional boolean. Whether the Radio is checked by default. Only works when `checked` is not defined.
   */
  defaultChecked?: boolean;

  /**
   * Optional boolean. Whether the Radio is disabled.
   */
  disabled?: boolean;

  /**
   * Optional string. ID of the Radio.
   */
  id?: string;

  /**
   * Optional boolean. Whether the Radio is invalid.
   * @default <Card.Radio invalid />
   */
  invalid?: boolean;

  /**
   * Optional boolean. Whether the Radio is required.
   * @default <Card.Radio required />
   */
  required?: boolean;

  /**
   * Value of the Card.Radio input.
   * @example <Card.Radio value="1" />
   */
  value?: string;

  /**
   * Name of the Card.Radio input.
   * @example <Card.Radio name="radio" />
   */
  name?: string;

  /**
   * Function called whenever the state of the Radio changes.
   */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;

  /**
   * Function called whenever the mouse enters the Radio.
   */
  onMouseEnter?: (e: React.MouseEvent<HTMLDivElement>) => void;

  /**
   * Function called whenever the mouse leaves the Radio.
   */
  onMouseLeave?: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export const CardRadioContext = React.createContext({
  checked: false,
  disabled: false,
  hover: false,
});

const CardRadio = ({
  variant = 'outline',
  className,
  children,
  width,
  height,
  style,

  // radio related props
  checked,
  defaultChecked = false,
  disabled,
  id,
  invalid = false,
  required = false,
  value,
  name,
  onChange,
  onMouseEnter,
  onMouseLeave,
  ...props
}: CardRadioPropsType) => {
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
    <CardRadioContext.Provider
      value={{
        checked: isChecked,
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
        data-checked={isChecked}
        data-invalid={invalid}
        data-disabled={disabled}
      >
        <input
          aria-labelledby={`label-${cardId}`}
          id={cardId}
          ref={inputRef}
          className="sg-card-new__input"
          type="Radio"
          checked={isChecked}
          disabled={disabled}
          name={name}
          onChange={onInputChange}
          required={required}
          value={value}
          aria-checked={isChecked}
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
    </CardRadioContext.Provider>
  );
};

export interface CardRadioIndicatorPropsType {
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

export const CardRadioIndicator = ({
  slot = 'top-left',
  style,
  className,
}: CardRadioIndicatorPropsType) => {
  const {checked, disabled} = React.useContext(CardRadioContext);

  return (
    <div
      className={cx(
        'sg-card-new__indicator',
        `sg-card-new__indicator--${slot}`,
        className
      )}
      style={style}
    >
      <Radio checked={checked} disabled={disabled} />
    </div>
  );
};

export default CardRadio;
