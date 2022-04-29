// @flow strict

import * as React from 'react';
import cx from 'classnames';

import generateRandomString from '../../js/generateRandomString';
import {__DEV__, invariant} from '../utils';
import Text from '../text/Text';
import CheckboxIcon from './CheckboxIcon';

type CheckboxType = 'default' | 'light';

export type CheckboxPropsType = {
  checked?: boolean,
  children?: React.Node,
  className?: string,
  defaultChecked?: boolean,
  disabled?: boolean,
  errorMessage?: string,
  id?: string,
  indeterminate?: boolean,
  invalid?: boolean,
  required?: boolean,
  name?: string,
  onChange: any,
  type: CheckboxType,
  ...
};

const Checkbox = ({
  checked,
  children,
  className,
  defaultChecked,
  disabled = false,
  errorMessage,
  id = generateRandomString(),
  indeterminate = false,
  invalid = false,
  required = false,
  name,
  onChange,
  type = 'default',
  ...props
}: CheckboxPropsType) => {
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

  const checkboxClass = cx('sg-checkbox-new', className, {
    'sg-checkbox-new--disabled': disabled,
    [`sg-checkbox-new--${String(type)}`]: type,
  });

  if (__DEV__) {
    invariant(
      !(errorMessage && !invalid),
      `Using 'errorMessage' property has no effect when 'invalid' property is not set.`
    );
  }

  return (
    <div className={checkboxClass}>
      <div className="sg-checkbox-new__element">
        <input
          ref={inputRef}
          className="sg-checkbox-new__input"
          id={id}
          type="checkbox"
          checked={isChecked}
          name={name}
          onChange={onInputChange}
          disabled={disabled}
          required={required}
          aria-checked={indeterminate ? 'mixed' : isChecked}
          aria-required={required}
          aria-invalid={invalid ? true : undefined}
          aria-describedby={invalid ? `${id}-errorText` : undefined}
        />
        <CheckboxIcon checked={isChecked} indeterminate={indeterminate} />
      </div>
      <div className="sg-checkbox-new__content">
        <label
          className="sg-checkbox-new__wrapper"
          htmlFor={id}
          disabled={disabled}
        >
          {children !== undefined && children !== null && (
            <Text
              size="medium"
              type="span"
              weight="bold"
              className="sg-checkbox-new__label"
            >
              {children}
            </Text>
          )}
        </label>
        {invalid && errorMessage && (
          <Text
            className="sg-error-message"
            id={`${id}-errorText`}
            size="small"
            type="span"
            weight="bold"
            color="text-red-60"
          >
            {errorMessage}
          </Text>
        )}
      </div>
    </div>
  );
};

export default Checkbox;
