// @flow strict

import * as React from 'react';
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
  return (
    <div>
      <label htmlFor={id} disabled={disabled}>
        <input
          id={id}
          type="checkbox"
          checked={checked}
          name={name}
          onChange={onChange}
          disabled={disabled}
          required={required}
          aria-required={required}
          aria-invalid={!!errorMessage}
          aria-describedby={!!errorMessage && `${id}-errorText`}
        />
        {children && (
          <Text
            size="medium"
            type="span"
            weight="bold"
            className="sg-checkbox__label"
          >
            {children}
          </Text>
        )}
      </label>
      {errorMessage && (
        <Text
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
