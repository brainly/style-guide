// @flow strict

import * as React from 'react';
import cx from 'classnames';

import generateRandomString from '../../../js/generateRandomString';
import {__DEV__, invariant} from '../../utils';
import Text from '../../text/Text';
import {CheckIcon, IndeterminateIcon} from './CheckboxIcon';
import ErrorMessage from '../ErrorMessage';

type CheckboxColorType = 'dark' | 'light';
type CheckboxLabelSizeType = 'medium' | 'small';

export type CheckboxPropsType = {
  /**
   * Sets whether the checkbox is checked or unchecked.
   * @example <Checkbox checked />
   */
  checked?: boolean,
  /**
   * To be displayed to the right of the checkbox as a label. The label is clickable checkbox element.
   * @example <Checkbox>Label</Checkbox>
   */
  children?: React.Node,
  /**
   * Optional string. Additional classnames.
   */
  className?: string,
  /**
   * Specify color variant of the checkbox that you want to use.
   * @example <Checkbox color="dark" />
   */
  color?: CheckboxColorType,
  /**
   * Sets whether the checkbox is initially checked.
   * @example <Checkbox defaultChecked />
   * @default false
   */
  defaultChecked?: boolean,
  /**
   * To be displayed below checkbox and its label. The description is not clickable. You can either pass text or your own component with custom styling.
   * @example <Checkbox description="More detailed description about this element. You can use here even some formatting and links." />
   */
  description?: React.Node | string,
  /**
   * Sets whether the checkbox is disabled.
   * @example <Checkbox disabled />
   * @default false
   */
  disabled?: boolean,
  /**
   * To be displayed below checkbox and its label. The error message is not clickable. Note: you have to set `invalid` prop as well, to render the error message.
   * @example <Checkbox invalid errorMessage="Error message">Label</Checkbox>
   */
  errorMessage?: string,
  /**
   * ID assigned to the checkbox input. If not provided, random id will be generated.
   * @example <Checkbox id="my-checkbox-1" />
   */
  id?: string,
  /**
   * Sets whether the checkbox is displayed as indeterminate. Note: this prop doesn't modify the `checked` property.
   * @example <Checkbox indeterminate />
   * @default false
   */
  indeterminate?: boolean,
  /**
   * Sets whether the checkbox marked as invalid.
   * @example <Checkbox invalid />
   * @default false
   */
  invalid?: boolean,
  /**
   * Sets label size.
   * @example <Checkbox labelSize="small" />
   * @default false
   */
  labelSize?: CheckboxLabelSizeType,
  /**
   * The name of the checkbox input.
   * @example <Checkbox name="name" />
   */
  name?: string,
  /**
   * Function called with an object containing the react synthetic event, whenever the state of the checkbox changes.
   */
  onChange?: (SyntheticInputEvent<HTMLInputElement>) => void,
  /**
   * Style applied to the container.
   * @example <Checkbox style={{ '--checkboxColor': '#000' }} />
   */
  style?: $Shape<CSSStyleDeclaration>,
  /**
   * Sets whether the checkbox input is marked as required. This doesn't affect checkbox style.
   * @example <Checkbox required />
   * @default false
   */
  required?: boolean,
  /**
   * Value of the checkbox input.
   * @example <Checkbox value="1" />
   */
  value?: string,
  /**
   * ID of a custom label, that describes the checkbox input.
   * @example <Checkbox aria-labelledby="my-custom-label" />
   */
  'aria-labelledby'?: string,
  ...
};

const Checkbox = ({
  checked,
  children,
  className,
  color = 'dark',
  defaultChecked = false,
  description,
  disabled = false,
  errorMessage,
  id,
  indeterminate = false,
  invalid = false,
  labelSize = 'medium',
  required = false,
  name,
  onChange,
  style,
  value,
  'aria-labelledby': ariaLabelledBy,
  ...props
}: CheckboxPropsType) => {
  const {current: checkboxId} = React.useRef(
    id === undefined || id === '' ? generateRandomString() : id
  );
  const isControlled = checked !== undefined;
  const [isChecked, setIsChecked] = React.useState(
    isControlled ? checked : defaultChecked
  );
  const [shouldIconAnimate, setShouldIconAnimate] = React.useState(false);
  const [wasInteractedWith, setWasInteractedWith] = React.useState(false);
  const inputRef = React.useRef(null);

  React.useEffect(() => {
    if (inputRef.current) inputRef.current.indeterminate = indeterminate;
  }, [inputRef, indeterminate]);

  React.useEffect(() => {
    if (isControlled) setIsChecked(checked);
  }, [checked, isControlled]);

  React.useEffect(() => {
    requestAnimationFrame(() => {
      setShouldIconAnimate(isChecked || indeterminate);
    });
  }, [isChecked, indeterminate]);

  const onInputChange = React.useCallback(
    e => {
      if (!isControlled) setIsChecked(val => !val);

      if (onChange) onChange(e);
    },
    [onChange, isControlled]
  );

  const hasContent = description || (invalid && errorMessage);
  const hasLabel = children !== undefined && children !== null;
  const isInputOnly = !hasLabel && !hasContent;

  const checkboxClass = cx('sg-checkbox', className, {
    'sg-checkbox--disabled': disabled,
    [`sg-checkbox--${String(color)}`]: color,
    [`sg-checkbox--with-padding`]: !isInputOnly,
  });

  const labelClass = cx('sg-checkbox__label', {
    'sg-checkbox__label--with-padding-bottom': description || errorMessage,
    [`sg-checkbox__label--${String(labelSize)}`]: labelSize,
  });

  const iconClass = cx('sg-checkbox__icon', {
    'sg-checkbox__icon--animate': wasInteractedWith && shouldIconAnimate,
    'sg-checkbox__icon--with-animation': wasInteractedWith,
  });

  if (__DEV__) {
    invariant(
      !(errorMessage && !invalid),
      `Using 'errorMessage' property has no effect when 'invalid' property is not set.`
    );
    invariant(
      !(errorMessage && !children),
      `Using 'errorMessage' property should be used along with 'children' property (label).`
    );
  }

  const errorTextId = `${checkboxId}-errorText`;
  const descriptionId = `${checkboxId}-description`;

  const describedbyIds = React.useMemo(() => {
    const ids = [];

    if (invalid && errorMessage) {
      ids.push(errorTextId);
    }
    if (description) {
      ids.push(descriptionId);
    }
    return ids.join(' ');
  }, [errorTextId, descriptionId, invalid, errorMessage, description]);

  let checkboxIcon = null;

  if (isChecked) checkboxIcon = <CheckIcon />;

  if (indeterminate) checkboxIcon = <IndeterminateIcon />;

  return (
    <div className={checkboxClass} style={style}>
      <div className="sg-checkbox__wrapper">
        <div
          className="sg-checkbox__element"
          onClick={() => setWasInteractedWith(true)}
        >
          <input
            {...props}
            ref={inputRef}
            className="sg-checkbox__input"
            id={checkboxId}
            type="checkbox"
            checked={isChecked}
            disabled={disabled}
            name={name}
            onChange={onInputChange}
            required={required}
            value={value}
            aria-checked={indeterminate ? 'mixed' : isChecked}
            aria-invalid={invalid ? true : undefined}
            aria-describedby={describedbyIds}
            aria-labelledby={ariaLabelledBy}
          />
          <span
            className={iconClass}
            // This element is purely decorative so
            // we hide it for screen readers
            aria-hidden="true"
          >
            {checkboxIcon}
          </span>
        </div>
        {!ariaLabelledBy && hasLabel && (
          <Text
            htmlFor={checkboxId}
            type="label"
            size={labelSize}
            weight="bold"
            className={labelClass}
          >
            {children}
            {required && <span aria-hidden="true">&nbsp;*</span>}
          </Text>
        )}
      </div>
      {hasContent && (
        <div className="sg-checkbox__content">
          {description && (
            <Text
              id={descriptionId}
              className="sg-checkbox__description"
              size="small"
              type="span"
              breakWords
            >
              {description}
            </Text>
          )}
          {invalid && errorMessage && (
            <ErrorMessage
              id={errorTextId}
              color={color === 'light' ? 'text-red-40' : undefined}
            >
              {errorMessage}
            </ErrorMessage>
          )}
        </div>
      )}
    </div>
  );
};

export default Checkbox;
