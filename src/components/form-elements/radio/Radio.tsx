// eslint-disable-next-line import/no-duplicates
import * as React from 'react';
import {
  useRef,
  useMemo, // eslint-disable-next-line import/no-duplicates
} from 'react';
import classNames from 'classnames';
import Text from '../../text/Text';
import generateRandomString from '../../../js/generateRandomString';
import useRadioContext from './useRadioContext';
import {useFirstPaint} from '../../utils/useFirstPaint';

export type RadioColorType = 'light' | 'dark';
type RadioLabelSizeType = 'medium' | 'small';
type StyleType = Partial<
  React.CSSProperties & {
    '--radioColor'?: string;
    '--radioRingInsideColor'?: string;
    '--radioHoverColor'?: string;
    '--radioInvalidColor'?: string;
    '--radioInvalidHoverColor'?: string;
    '--radioLabelColor'?: string;
    '--radioDescriptionColor'?: string;
    '--radioBorderWidth'?: string;
    '--radioRingColor'?: string;
  }
>;

export type RadioPropsType = {
  /**
   * Sets whether the radio is checked or unchecked.
   * @example <Radio checked />
   */
  checked?: boolean;

  /**
   * To be displayed to the right of the radio as a label. The label is clickable radio element.
   * @example <Radio>Label</Radio>
   */
  children?: React.ReactNode;

  /**
   * Optional string. Additional classnames.
   */
  className?: string | null | undefined;

  /**
   * Specify color variant of the radio that you want to use.
   * @example <Radio color="dark" />
   */
  color?: RadioColorType | null | undefined;

  /**
   * To be displayed below radio and its label. The description is not clickable. You can either pass text or your own component with custom styling.
   * @example <Radio description="More detailed description about this element. You can use here even some formatting and links." />
   */
  description?: React.ReactNode | string;

  /**
   * Sets whether the radio is disabled.
   * @example <Radio disabled />
   */
  disabled?: boolean;

  /**
   * ID assigned to the radio input. If not provided, random id will be generated.
   * @example <Radio id="my-radio-1" />
   */
  id?: string;

  /**
   * Sets whether the radio marked as invalid.
   * @example <Radio invalid />
   */
  invalid?: boolean;

  /**
   * Sets label size.
   * @example <Radio labelSize="small" />
   * @default false
   */
  labelSize?: RadioLabelSizeType;

  /**
   * The name of the radio input.
   * @example <Radio name="name" />
   */
  name?: string;

  /**
   * Function called with an object containing the react synthetic event, whenever the state of the radio changes.
   */
  onChange?: (arg0: React.SyntheticEvent<HTMLInputElement>) => void;

  /**
   * Sets whether the radio input is marked as required. This doesn't affect radio style.
   * @example <Radio required />
   * @default false
   */
  required?: boolean;

  /**
   * Style applied to the container.
   * @example <Radio style={{ '--radioColor': '#000' }} />
   */
  style?: StyleType;

  /**
   * Value of the radio input.
   * @example <Radio value="1" />
   */
  value?: string | null | undefined;

  /**
   * ID of a custom label, that describes the radio input.
   * @example <Radio aria-labelledby="my-custom-label" />
   */
  'aria-labelledby'?: string;

  /**
   * ID of a custom text / section, that describes the radio input.
   * @example <Radio aria-describedby="my-custom-label" />
   */
  'aria-describedby'?: string;
} & Omit<
  React.AllHTMLAttributes<HTMLElement>,
  | 'checked'
  | 'children'
  | 'className'
  | 'color'
  | 'description'
  | 'disabled'
  | 'id'
  | 'invalid'
  | 'labelSize'
  | 'name'
  | 'onChange'
  | 'required'
  | 'style'
  | 'value'
  | 'undefined'
  | 'undefined'
>;

const Radio = ({
  checked,
  color = 'dark',
  children,
  className,
  description,
  disabled,
  id,
  invalid,
  labelSize = 'medium',
  name,
  onChange,
  required = false,
  style,
  value,
  'aria-labelledby': ariaLabelledBy,
  'aria-describedby': ariaDescribedBy,
  ...props
}: RadioPropsType) => {
  const circleRef = React.useRef<HTMLSpanElement>();
  const {current: radioId} = useRef(
    id === undefined || id === '' ? generateRandomString() : id
  );
  const radioGroupContext = useRadioContext();
  const isWithinRadioGroup = Boolean(
    radioGroupContext && Object.keys(radioGroupContext).length
  );
  const shouldAnimateRef = React.useRef(false);
  const isControlled = checked !== undefined || isWithinRadioGroup;
  let isChecked: boolean | undefined = undefined;

  useFirstPaint(() => {
    shouldAnimateRef.current = true;
  });

  if (isControlled) {
    // Radio can either be directly set as checked, or be controlled by a RadioGroup
    isChecked =
      checked !== undefined
        ? checked
        : Boolean(radioGroupContext.selectedValue) &&
          radioGroupContext.selectedValue === value;

    if (shouldAnimateRef.current && circleRef.current) {
      circleRef.current.classList.add('sg-radio__circle--with-animation');
    }
  }

  const colorName = radioGroupContext.color || color;
  const isDisabled =
    disabled !== undefined ? disabled : radioGroupContext.disabled;
  const hasLabel = children !== undefined && children !== null;
  const isInputOnly = !hasLabel && !description;
  const descriptionId = useMemo(() => {
    if (ariaDescribedBy) return ariaDescribedBy;
    if (description) return `${radioId}-description`;
    return null;
  }, [radioId, ariaDescribedBy, description]);
  const radioClass = classNames('sg-radio', className, {
    [`sg-radio--${String(colorName)}`]: colorName,
    'sg-radio--disabled': isDisabled,
    'sg-radio--with-label': !!hasLabel,
    'sg-radio--with-description': !!descriptionId,
    'sg-radio--with-padding': !isInputOnly,
  });
  const labelClass = classNames('sg-radio__label', {
    'sg-radio__label--with-padding-bottom': description,
    [`sg-radio__label--${String(labelSize)}`]: labelSize,
  });
  const circleClass = classNames('sg-radio__circle');
  const labelId = ariaLabelledBy || `${radioId}-label`;
  const isInvalid = invalid !== undefined ? invalid : radioGroupContext.invalid;

  // @ts-ignore TS7006
  const onInputChange = e => {
    if (isWithinRadioGroup) {
      radioGroupContext.setLastFocusedValue(value);
      radioGroupContext.setSelectedValue(e, value);
    }

    if (onChange) {
      onChange(e);
    }

    if (circleRef.current && shouldAnimateRef.current) {
      circleRef.current.classList.add('sg-radio__circle--with-animation');
    }
  };

  return (
    <div className={radioClass} style={style}>
      <div className="sg-radio__wrapper">
        <div className="sg-radio__element">
          <input
            {...props}
            className="sg-radio__input"
            type="radio"
            id={radioId}
            checked={isChecked}
            disabled={isDisabled}
            name={name || radioGroupContext.name}
            onChange={onInputChange}
            required={required}
            // @ts-ignore TS2322
            value={value}
            aria-labelledby={labelId}
            aria-describedby={descriptionId}
            aria-invalid={isInvalid ? true : undefined}
          />
          <span
            // @ts-ignore TS2322
            ref={circleRef}
            className={circleClass} // This element is purely decorative so
            // we hide it for screen readers
            aria-hidden="true"
          />
        </div>
        {hasLabel && (
          <Text
            id={labelId}
            htmlFor={radioId}
            as="label"
            size={labelSize}
            weight="bold"
            className={labelClass}
          >
            {children}
          </Text>
        )}
      </div>
      {description && (
        <Text
          // @ts-ignore TS2322
          id={descriptionId}
          className="sg-radio__description"
          size="small"
          as="span"
          breakWords
        >
          {description}
        </Text>
      )}
    </div>
  );
};

export default Radio;
