// @flow strict

import * as React from 'react';
import cx from 'classnames';

import generateRandomString from '../../js/generateRandomString';
import Text from '../text/Text';

export type CheckboxPropsType = {
  checked?: boolean,
  children?: React.Node,
  className?: string,
  disabled?: boolean,
  errorMessage?: string,
  id?: string,
  required?: boolean,
  name?: string,
  onChange: any,
  ...
};

const Checkbox = ({
  checked,
  children,
  className,
  disabled,
  errorMessage,
  id = generateRandomString(),
  required = false,
  name,
  onChange,
  ...props
}: CheckboxPropsType) => {
  const checkboxClass = cx('sg-checkbox-new', className);

  return (
    <div className={checkboxClass}>
      <label
        className="sg-checkbox-new__wrapper"
        htmlFor={id}
        disabled={disabled}
      >
        <input
          className="sg-checkbox-new__element"
          id={id}
          type="checkbox"
          checked={checked}
          name={name}
          onChange={onChange}
          disabled={disabled}
          required={required}
          aria-required={required}
          aria-invalid={errorMessage ? true : undefined}
          aria-describedby={errorMessage ? `${id}-errorText` : undefined}
        />
        <span
          className="sg-checkbox-new__icon"
          checked={checked}
          // This element is purely decorative so
          // we hide it for screen readers
          aria-hidden="true"
        />
        {children && (
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
      {errorMessage && (
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
  );
};

export default Checkbox;
