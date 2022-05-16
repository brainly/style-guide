// @flow strict

import * as React from 'react';
import classNames from 'classnames';
import Text from '../text/Text';
import generateRandomString from '../../js/generateRandomString';

type RadioColorType = 'light' | 'dark';

export type RadioPropsType = {
  checked?: boolean,
  children?: React.Node,
  className?: ?string,
  color?: ?RadioColorType,
  disabled?: boolean,
  id?: string,
  invalid?: boolean,
  customLabelId?: string,
  name?: string,
  onChange: (SyntheticInputEvent<HTMLInputElement>) => void,
  required?: boolean,
  value?: string,
  ...
};

const Radio = ({
  checked = false,
  color = 'dark',
  children,
  className,
  disabled = false,
  id,
  invalid = false,
  customLabelId,
  name,
  onChange,
  required = false,
  value,
  ...props
}: RadioPropsType) => {
  const {current: radioId} = React.useRef(
    id === undefined || id === '' ? generateRandomString() : id
  );

  const radioClass = classNames('sg-radio-new', className);
  const labelId = customLabelId || `${radioId}-label`;

  return (
    <div className={radioClass}>
      <input
        className="sg-radio-new__element"
        type="radio"
        id={radioId}
        checked={checked}
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
