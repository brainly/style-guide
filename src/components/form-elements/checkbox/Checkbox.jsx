// @flow strict

import * as React from 'react';
import cx from 'classnames';

import generateRandomString from '../../../js/generateRandomString';
import {__DEV__, invariant} from '../../utils';
import Text from '../../text/Text';
import CheckboxIcon from './CheckboxIcon';
import ErrorMessage from '../ErrorMessage';

type CheckboxColorType = 'dark' | 'light';

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
   */
  indeterminate?: boolean,
  /**
   * Sets whether the checkbox marked as invalid.
   * @example <Checkbox invalid />
   */
  invalid?: boolean,
  /**
   * ID of a custom label, that describes the checkbox input.
   * @example <Checkbox customLabelId="my-custom-label" />
   */
  customLabelId?: string,
  /**
   * The name of the checkbox input.
   * @example <Checkbox name="name" />
   */
  name?: string,
  /**
   * Function called with an object containing the react synthetic event, whenever the state of the checkbox changes.
   */
  onChange: (SyntheticInputEvent<HTMLInputElement>) => void,
  /**
   * Sets whether the checkbox input is marked as required. This doesn't affect checkbox style.
   * @example <Checkbox required />
   */
  required?: boolean,
  /**
   * Value of the checkbox input.
   * @example <Checkbox value="1" />
   */
  value?: number | string,
  ...
};

const Checkbox = ({
  checked,
  children,
  className,
  color = 'dark',
  defaultChecked,
  description,
  disabled = false,
  errorMessage,
  id,
  indeterminate = false,
  invalid = false,
  customLabelId,
  required = false,
  name,
  onChange,
  value,
  ...props
}: CheckboxPropsType) => {
  const {current: checkboxId} = React.useRef(
    id === undefined || id === '' ? generateRandomString() : id
  );

  const [isChecked, setIsChecked] = React.useState(
    checked !== undefined ? checked : defaultChecked
  );
  const inputRef = React.useRef(null);

  React.useEffect(() => {
    if (inputRef.current) {
      inputRef.current.indeterminate = indeterminate;
    }
  }, [inputRef, indeterminate]);

  React.useEffect(() => {
    setIsChecked(checked);
  }, [checked]);

  const onInputChange = React.useCallback(
    e => {
      setIsChecked(e.target.checked);
      if (onChange) {
        onChange(e);
      }
    },
    [onChange]
  );

  const checkboxClass = cx('sg-checkbox', className, {
    'sg-checkbox--disabled': disabled,
    [`sg-checkbox--${String(color)}`]: color,
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

  return (
    <div {...props} className={checkboxClass}>
      <div className="sg-checkbox__wrapper">
        <div className="sg-checkbox__element">
          <input
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
            aria-required={required}
            aria-invalid={invalid ? true : undefined}
            aria-describedby={describedbyIds}
            aria-labelledBy={customLabelId}
          />
          <CheckboxIcon checked={isChecked} indeterminate={indeterminate} />
        </div>
        {!customLabelId && children !== undefined && children !== null && (
          <label htmlFor={checkboxId} disabled={disabled}>
            <Text
              size="medium"
              type="span"
              weight="bold"
              className="sg-checkbox__label"
            >
              {children}
            </Text>
          </label>
        )}
      </div>
      <div className="sg-checkbox__content">
        {description && (
          <Text
            id={descriptionId}
            className="sg-checkbox__description"
            size="small"
            type="span"
            color="text-black"
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
    </div>
  );
};

export default Checkbox;
