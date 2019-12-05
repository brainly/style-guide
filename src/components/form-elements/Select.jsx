// @flow strict

import React from 'react';
import classnames from 'classnames';
import Icon from '../icons/Icon';

type OptionsPropsType = {
  value: string,
  text: string,
  ...
};

type SelectSizeType = 'small' | 'normal';

type SelectColorType = 'default' | 'white';

export const COLOR = Object.freeze({
  DEAFAULT: 'default',
  WHITE: 'white',
});

export const SIZE = Object.freeze({
  LARGE: 'large',
  NORMAL: 'normal',
});

export type SelectPropsType = {
  /**
   * Optional specification for select value
   * @example <Select value="Option1" options={[{value: 'option1', text: 'Option1'},{value: 'option2', text: 'Select selector'}]} />
   */
  value?: string,
  /**
   * Optional additional boolean to specified if it's valid
   * @example <Select valid options={[{value: 'option1', text: 'Option1'},{value: 'option2', text: 'Select selector'}]} />
   */
  valid?: boolean,
  /**
   * Optional additional boolean to specified if it's invalid
   * @example <Select invalid options={[{value: 'option1', text: 'Option1'},{value: 'option2', text: 'Select selector'}]} />
   */
  invalid?: boolean,
  /**
   * Optional additional boolean to specified if it's capitalized
   * @example <Select capitalized options={[{value: 'option1', text: 'Option1'},{value: 'option2', text: 'Select selector'}]} />
   */
  capitalized?: boolean,
  /**
   * There are two color variants for form elements, default does not have to be specified
   * @example <Select color="white" options={[{value: 'option1', text: 'Option1'},{value: 'option2', text: 'Select selector'}]} />
   * @see color="default" https://styleguide.brainly.com/latest/docs/interactive.html?color="default"#select
   * @see color="white" https://styleguide.brainly.com/latest/docs/interactive.html?color="white"#select
   */
  color?: ?SelectColorType,
  /**
   * There are two sizes options for most of the form elements
   * @example <Select size="normal" options={[{value: 'option1', text: 'Option1'},{value: 'option2', text: 'Select selector'}]} />
   * @see size="normal" https://styleguide.brainly.com/latest/docs/interactive.html?size="normal"#select
   * @see size="large" https://styleguide.brainly.com/latest/docs/interactive.html?size="large"#select
   */
  size?: ?SelectSizeType,
  /**
   * Optional additional boolean to specified if it's full width
   * @example <Select fullWidth placeholder="placeholder" />
   */
  fullWidth?: boolean,
  /**
   * Optional array of options of the select
   * @example <Select size="normal" options={[{value: 'option1', text: 'Option1'},{value: 'option2', text: 'Select selector'}]} />
   */
  options?: Array<OptionsPropsType>,
  /**
   * Additional class names
   */
  className?: string,
  ...
};

const Select = (props: SelectPropsType) => {
  const {
    valid,
    invalid,
    capitalized,
    fullWidth,
    value,
    size,
    color,
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
      [`sg-select--${String(color)}`]: color,
      [`sg-select--${String(size)}`]: size,
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
      <div className="sg-select__icon">
        <Icon type="arrow_down" color="gray-secondary" size={24} />
      </div>

      <select {...additionalProps} className="sg-select__element" value={value}>
        {optionsElements}
      </select>
    </div>
  );
};

export default Select;
