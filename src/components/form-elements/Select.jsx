// @flow strict

import React from 'react';
import classnames from 'classnames';

type OptionsPropsType = {
  value: string,
  text: string,
  ...
};

type SelectSizeType = 'normal' | 'tall' | 'xtall';

export const SIZE = {
  NORMAL: 'normal',
  TALL: 'tall',
  XTALL: 'xtall',
};

export type SelectPropsType = {
  value?: string | Array<string>,
  valid?: boolean,
  invalid?: boolean,
  capitalized?: boolean,
  fullWidth?: boolean,
  multiple?: boolean,
  size?: ?SelectSizeType,
  options?: Array<OptionsPropsType>,
  className?: string,
  ...
};

const Select = (props: SelectPropsType) => {
  const {
    valid,
    invalid,
    capitalized,
    fullWidth,
    multiple,
    size = SIZE.NORMAL,
    value,
    className,
    options = [],
    ...additionalProps
  } = props;

  if (valid === true && invalid === true) {
    throw {
      name: 'WrongValidation',
      message: 'Select can be either valid or invalid!',
    };
  }

  const selectClass = classnames(
    'sg-select',
    {
      'sg-select--valid': valid,
      'sg-select--invalid': invalid,
      'sg-select--capitalized': capitalized,
      'sg-select--full-width': fullWidth,
      'sg-select--multiple': multiple,
      [`sg-select--${String(size)}`]: multiple === true && size !== SIZE.NORMAL,
    },
    className
  );
  const optionsElements = options.map(({value, text}) => (
    <option key={value} value={value}>
      {text}
    </option>
  ));

  let ico;
  let _value = value;

  if (multiple === undefined || multiple === false) {
    ico = <div className="sg-select__icon" />;
    _value = String(value);
  } else if (typeof value === 'string') {
    _value = [value];
  }

  return (
    <div className={selectClass}>
      {ico}
      <select
        className="sg-select__element"
        value={_value}
        multiple={multiple}
        {...additionalProps}
      >
        {optionsElements}
      </select>
    </div>
  );
};

export default Select;
