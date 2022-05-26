// @flow strict

import * as React from 'react';
import classNames from 'classnames';
import Text from '../text/Text';
import generateRandomString from '../../js/generateRandomString';
import {RadioContext} from './useRadioContext';

type RadioColorType = 'light' | 'dark';

export type RadioPropsType = {
  checked?: boolean,
  children?: React.Node,
  className?: ?string,
  color?: ?RadioColorType,
  disabled?: boolean,
  id?: string,
  invalid?: boolean,
  name?: string,
  onChange: (SyntheticInputEvent<HTMLInputElement>) => void,
  required?: boolean,
  value?: string,
  'aria-labelledby'?: string,
  ...
};

const Radio = ({
  checked,
  color = 'dark',
  children,
  className,
  disabled = false,
  id,
  invalid = false,
  required = false,
  value,
  'aria-labelledby': ariaLabelledBy,
  ...props
}: RadioPropsType) => {
  const {current: radioId} = React.useRef(
    id === undefined || id === '' ? generateRandomString() : id
  );

  const radioClass = classNames('sg-radio-new', className, {
    [`sg-radio-new--${String(color)}`]: color,
    'sg-radio-new--disabled': disabled,
  });
  const labelId = ariaLabelledBy || `${radioId}-label`;

  const {name, state} = React.useContext(RadioContext);
  const {selectedValue, setSelectedValue} = state || {};

  const isControlled = checked !== undefined || selectedValue;
  let isChecked = undefined;

  if (isControlled) {
    // Radio can either be directly set as checked, or be controlled by a RadioGroup
    isChecked = checked || (selectedValue && selectedValue === value);
  }

  const onChange = e => {
    if (isControlled) setSelectedValue(e.target.value);
  };

  return (
    <div className={radioClass}>
      <div className="sg-radio-new__element">
        <input
          className="sg-radio-new__input"
          type="radio"
          id={radioId}
          checked={isChecked}
          disabled={disabled}
          name={name}
          onChange={onChange}
          required={required}
          value={value}
          aria-labelledby={labelId}
          aria-invalid={invalid ? true : undefined}
          {...props}
        />
        <span
          className="sg-radio-new__circle"
          // This element is purely decorative so
          // we hide it for screen readers
          aria-hidden="true"
        />
      </div>
      {children !== undefined && children !== null && (
        <Text
          id={labelId}
          htmlFor={radioId}
          type="label"
          size="medium"
          weight="bold"
          className="sg-radio-new__label"
        >
          {children}
        </Text>
      )}
    </div>
  );
};

export default Radio;
