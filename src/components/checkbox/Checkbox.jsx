// @flow strict

import * as React from 'react';
import cx from 'classnames';

import generateRandomString from '../../js/generateRandomString';
import Text from '../text/Text';
import CheckboxIcon from './CheckboxIcon';

export type CheckboxPropsType = {
  checked?: boolean,
  children?: React.Node,
  className?: string,
  defaultChecked?: boolean,
  disabled?: boolean,
  errorMessage?: string,
  id?: string,
  indeterminate?: boolean,
  required?: boolean,
  name?: string,
  onChange: any,
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
  required = false,
  name,
  onChange,
  ...props
}: CheckboxPropsType) => {
  const [isChecked, setIsChecked] = React.useState(
    checked !== undefined ? checked : defaultChecked
  );
  const inputRef = React.useRef(null);

  const checkboxClass = cx('sg-checkbox-new', className, {
    'sg-checkbox-new--disabled': disabled,
  });

  React.useEffect(() => {
    if (inputRef.current) {
      inputRef.current.indeterminate = indeterminate;
    }
  }, [inputRef, indeterminate]);

  const onInputChange = React.useCallback(
    e => {
      setIsChecked(e.target.checked);
      if (onChange) {
        onChange(e);
      }
    },
    [onChange]
  );

  return (
    <div className={checkboxClass}>
      <label
        className="sg-checkbox-new__wrapper"
        htmlFor={id}
        disabled={disabled}
      >
        <input
          ref={inputRef}
          className="sg-checkbox-new__element"
          id={id}
          type="checkbox"
          checked={isChecked}
          name={name}
          onChange={onInputChange}
          disabled={disabled}
          required={required}
          aria-checked={indeterminate ? 'mixed' : isChecked}
          aria-required={required}
          aria-invalid={errorMessage ? true : undefined}
          aria-describedby={errorMessage ? `${id}-errorText` : undefined}
        />
        <CheckboxIcon checked={isChecked} indeterminate={indeterminate} />
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
