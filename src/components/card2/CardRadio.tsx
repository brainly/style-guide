import * as React from 'react';
import cx from 'classnames';
import Radio from '../form-elements/radio/Radio';
import generateRandomString from '../../js/generateRandomString';
import {useCardRadioGroupContext} from './CardRadioGroupContext';

export interface CardRadioPropsType
  extends React.AllHTMLAttributes<HTMLDivElement> {
  /**
   * Required string. Value of the CardRadio input.
   */
  value: string;

  /**
   * Optional boolean. Whether the Radio is required.
   * @default false
   */
  required?: boolean;

  /**
   * Optional boolean. Whether the Radio is disabled.
   * @default false
   */
  disabled?: boolean;

  /**
   * Optional boolean. Whether the Radio is invalid.
   * @default false
   */
  invalid?: boolean;

  /**
   * Optional string. ID of the Radio.
   */
  id?: string;

  /**
   * Optional string. Variant of the card. Default is 'outline'.
   */
  variant?: 'solid' | 'outline';

  /**
   * Optional string. Color of the card. Default is 'dark'.
   */
  color?: 'light' | 'dark';

  /**
   * Optional string. Additional class names.
   */
  className?: string;

  /**
   * Optional React.ReactNode. Children of the card. This is the place where label should be used and connected to the card.
   * @example <CardRadio>Card content</CardRadio>
   */
  children?: React.ReactNode;

  /**
   * Optional string. Width of the card.
   * @default auto
   * @example <CardRadio width="100px" />
   */
  width?: React.CSSProperties['width'];

  /**
   * Optional string. Height of the card.
   * @default auto
   * @example <CardRadio height="100px" />
   */
  height?: React.CSSProperties['height'];

  /**
   * Optional object. Inline styles.
   * @example <CardRadio style={--card-background-color: var(--green-20)} />
   */
  style?: React.CSSProperties;

  /**
   * Function called whenever the state of the Radio changes.
   */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;

  /**
   * Function called whenever the mouse enters the Radio.
   */
  onMouseEnter?: (e: React.MouseEvent<HTMLElement>) => void;

  /**
   * Function called whenever the mouse leaves the Radio.
   */
  onMouseLeave?: (e: React.MouseEvent<HTMLElement>) => void;
}

type CardRadioContextType = {
  checked: boolean;
  disabled: boolean;
};

export const CardRadioContext = React.createContext<CardRadioContextType>({
  checked: false,
  disabled: false,
});

const CardRadio = React.forwardRef<HTMLInputElement, CardRadioPropsType>(
  (
    {
      variant = 'outline',
      color = 'dark',
      className,
      children,
      width,
      height,
      style,

      // radio related props
      id,
      disabled,
      required = false,
      invalid = false,
      value = '',
      onChange,
      onMouseEnter,
      onMouseLeave,
      'aria-labelledby': ariaLabelledBy,
      'aria-describedby': ariaDescribedBy,
      ...props
    }: CardRadioPropsType,
    ref
  ) => {
    const context = useCardRadioGroupContext();

    const cardId = React.useMemo(() => id || generateRandomString(), [id]);
    const isChecked = context.value === value;
    const isRequired = context.required || required;
    const isDisabled = context.disabled || disabled;
    const isInvalid = context.invalid || invalid;

    const cssVariables = {
      '--card-width': width,
      '--card-height': height,
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (context.onChange) {
        context.onChange(e.target.value);
      }
    };

    return (
      <CardRadioContext.Provider
        value={{
          checked: isChecked,
          disabled,
        }}
      >
        <div
          className={cx('sg-card-new', className)}
          style={{...style, ...cssVariables}}
          data-variant={variant}
          data-color={color}
          data-checked={isChecked}
          data-invalid={isInvalid}
          data-disabled={isDisabled}
          {...props}
        >
          <input
            id={cardId}
            ref={ref}
            className="sg-card-new__input"
            type="Radio"
            checked={isChecked}
            disabled={isDisabled}
            name={context.name}
            onChange={handleInputChange}
            required={isRequired}
            value={value}
            aria-invalid={isInvalid}
            aria-labelledby={ariaLabelledBy || `label-${cardId}`}
            aria-describedby={ariaDescribedBy}
            suppressHydrationWarning
          />
          <label
            id={`label-${cardId}`}
            htmlFor={cardId}
            className="sg-card-new__background"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
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
  }
);

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

CardRadio.Indicator = CardRadioIndicator;

export default CardRadio;
