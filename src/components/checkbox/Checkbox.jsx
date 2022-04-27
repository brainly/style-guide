// @flow strict

import * as React from 'react';
import cx from 'classnames';

import generateRandomString from '../../js/generateRandomString';
import Text from '../text/Text';

const CheckIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M11.0629 5.27161L7.19615 9.1384L5.59334 7.5353C5.35756 7.29951 5.01389 7.20742 4.6918 7.29373C4.36971 7.38003 4.11813 7.63162 4.03182 7.95371C3.94552 8.2758 4.03761 8.61946 4.27339 8.85525L6.53594 11.1178C6.90145 11.4813 7.49064 11.4813 7.85536 11.1186L12.3817 6.59245C12.745 6.22689 12.745 5.63804 12.3826 5.27337C12.0166 4.90917 11.4276 4.90917 11.0629 5.27161Z" />
  </svg>
);

const IndeterminateIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M3 8C3 7.44772 3.44772 7 4 7H12C12.5523 7 13 7.44772 13 8C13 8.55228 12.5523 9 12 9H4C3.44772 9 3 8.55228 3 8Z"
    />
  </svg>
);

export type CheckboxPropsType = {
  checked?: boolean,
  children?: React.Node,
  className?: string,
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
  disabled = false,
  errorMessage,
  id = generateRandomString(),
  indeterminate = false,
  required = false,
  name,
  onChange,
  ...props
}: CheckboxPropsType) => {
  const inputRef = React.useRef(null);

  const checkboxClass = cx('sg-checkbox-new', className, {
    'sg-checkbox-new--disabled': disabled,
  });

  const getIcon = (indeterminate, checked) => {
    if (indeterminate) return <IndeterminateIcon />;
    if (checked) return <CheckIcon />;

    return null;
  };

  const checkboxIcon = React.useMemo(
    () => getIcon(indeterminate, checked),
    [indeterminate, checked]
  );

  React.useEffect(() => {
    if (inputRef.current) {
      inputRef.current.indeterminate = indeterminate;
    }
  }, [inputRef, indeterminate]);

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
          checked={checked}
          name={name}
          onChange={onChange}
          disabled={disabled}
          required={required}
          aria-checked={indeterminate ? 'mixed' : checked}
          aria-required={required}
          aria-invalid={errorMessage ? true : undefined}
          aria-describedby={errorMessage ? `${id}-errorText` : undefined}
        />
        <span
          className="sg-checkbox-new__icon"
          // This element is purely decorative so
          // we hide it for screen readers
          aria-hidden="true"
        >
          {checkboxIcon}
        </span>
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
