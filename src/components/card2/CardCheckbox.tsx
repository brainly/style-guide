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

const CardCheckbox = ({
  className,
  children,
  width,
  height,
  style,
  ...checkboxProps
}: CardCheckboxPropsType) => {
  const [hover, setHover] = React.useState(false);
  const cssVariables = {
    '--card-width': width,
    '--card-height': height,
  };

  const indicator = React.Children.toArray(children).find(
    child => (child as React.ReactElement).type === CardCheckboxIndicator
  );

  const defaultIndicator = (
    <CardCheckboxIndicator
      {...checkboxProps}
      className={indicator ? 'visually-hidden' : undefined}
    />
  );

  return (
    <label
      className={cx('sg-card-radio', className, {
        'sg-card-radio--hover': hover,
      })}
      style={{...style, ...cssVariables}}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {indicator || defaultIndicator}
      {children}
    </label>
  );
};

export interface CardCheckboxIndicatorPropsType extends CheckboxPropsType {
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

const CardCheckboxIndicator = ({
  slot = 'top-left',
  style,
  className,
  ...checkboxProps
}: CardCheckboxIndicatorPropsType) => {
  return (
    <div
      className={cx(
        'sg-card-checkbox__indicator',
        `sg-card-checkbox__indicator--${slot}`,
        className
      )}
      style={style}
    >
      <Checkbox {...checkboxProps} />
    </div>
  );
};

export default CardCheckbox;
