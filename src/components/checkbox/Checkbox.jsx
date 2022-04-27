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
    <path d="M7.74651 0.405156L3.87975 4.27195L2.27694 2.66884C2.04115 2.43305 1.69748 2.34097 1.37539 2.42727C1.0533 2.51358 0.801722 2.76516 0.715418 3.08725C0.629114 3.40934 0.721199 3.75301 0.956985 3.9888L3.21953 6.25136C3.58504 6.61484 4.17423 6.61484 4.53895 6.25214L9.06533 1.726C9.42862 1.36044 9.42862 0.771583 9.06621 0.406913C8.7002 0.0427156 8.11121 0.0427156 7.74651 0.405156Z" />
  </svg>
);

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
  const checkboxClass = cx('sg-checkbox-new', className, {
    'sg-checkbox-new--disabled': disabled,
  });

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
          // This element is purely decorative so
          // we hide it for screen readers
          aria-hidden="true"
        >
          <CheckIcon />
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
