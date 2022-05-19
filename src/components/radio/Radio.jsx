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

  const radioClass = classNames('sg-radio-new', className);
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
      <input
        className="sg-radio-new__element"
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
      {children !== undefined && children !== null && (
        <label id={labelId} htmlFor={radioId}>
          <Text
            size="small"
            type="span"
            weight="bold"
            className="sg-radio-new__label"
          >
            {children}
          </Text>
        </label>
      )}
    </div>
  );
};

export default Radio;
