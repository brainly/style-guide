import * as React from 'react';
import cx from 'classnames';
import Checkbox, {CheckboxPropsType} from '../form-elements/checkbox/Checkbox';

export interface CardCheckboxPropsType extends CheckboxPropsType {
  /**
   * Optional string. Additional class names.
   */
  className?: string;

  children?: React.ReactNode;

  width?: React.CSSProperties['width'];
  height?: React.CSSProperties['height'];
  style?: React.CSSProperties;
}

// create context for CardCheckboxIndicator to use
export const CardCheckboxContext = React.createContext({
  checked: false,
  disabled: false,
});

const CardCheckbox = ({
  className,
  children,
  width,
  height,
  style,

  // list all input typed checkbox related props individually one by one
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
  ...props
}: CardCheckboxPropsType) => {
  const [hover, setHover] = React.useState(false);
  const isControlled = checked !== undefined;
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [isChecked, setIsChecked] = React.useState(
    isControlled ? checked : defaultChecked
  );

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

  return (
    <CardCheckboxContext.Provider
      value={{
        checked: isChecked,
        disabled,
      }}
    >
      <div
        className={cx('sg-card', className, {
          'sg-card--hover': hover,
        })}
        style={{...style, ...cssVariables}}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <input
          ref={inputRef}
          className="sg-card__input"
          type="checkbox"
          checked={isChecked}
          disabled={disabled}
          name={name}
          onChange={onInputChange}
          required={required}
          value={value}
          aria-checked={indeterminate ? 'mixed' : isChecked}
          aria-invalid={invalid ? true : undefined}
          {...props}
        />
        {children}
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
        'sg-card__indicator',
        `sg-card__card__indicator--${slot}`,
        className
      )}
      style={style}
    >
      <Checkbox checked={checked} disabled={disabled} />
    </div>
  );
};

export default CardCheckbox;
