// @flow strict

import React from 'react';
import classnames from 'classnames';

type OptionsPropsType = {
  value: string,
  text: string,
};

export type SelectPropsType = {
  value?: string,
  valid?: boolean,
  invalid?: boolean,
  capitalized?: boolean,
  fullWidth?: boolean,
  options?: Array<OptionsPropsType>,
  className?: string,
};

const Select = (props: SelectPropsType) => {
  const {
    valid,
    invalid,
    capitalized,
    fullWidth,
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
    },
    className
  );
  const optionsElements = options.map(({value, text}) => (
    <option key={value} value={value}>
      {text}
    </option>
  ));

  return (
    <div className={selectClass}>
      <div className="sg-select__icon" />
      <select className="sg-select__element" value={value} {...additionalProps}>
        {optionsElements}
      </select>
    </div>
  );
};

export default Select;
