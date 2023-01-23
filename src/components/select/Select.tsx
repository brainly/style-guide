import * as React from 'react';
import classnames from 'classnames';
import Icon from '../icons/Icon';

type SelectOptionType = {
  value: string;
  label: string;
};

type SelectOptionsGroupType = {
  label: string;
  options: ReadonlyArray<SelectOptionType>;
};

export type SelectPropsType = {
  /**
   * Optional specification for select value
   * @example <Select value="Option1" options={[{value: 'option1', label: 'Option1'},{value: 'option2', label: 'Select selector'}]} />
   */
  value?: string;

  /**
   * Optional boolean to specified if it's valid
   * @example <Select valid options={[{value: 'option1', label: 'Option1'},{value: 'option2', label: 'Select selector'}]} />
   */
  valid?: boolean;

  /**
   * Optional boolean to specified if it's invalid
   * @example <Select invalid options={[{value: 'option1', label: 'Option1'},{value: 'option2', label: 'Select selector'}]} />
   */
  invalid?: boolean;

  /**
   * Optional array of options of the select
   * @example <Select options={[{value:"option1",label:"Option1"},{label:"Label title",options:[{value:"option1",label:"Option1"},{value:"option2",label:"Select selector"}]},{value:"option2",label:"Select selector"}]} />
   */
  options?: ReadonlyArray<SelectOptionsGroupType | SelectOptionType>;

  /**
   * Additional class names
   */
  className?: string;
} & Omit<
  React.AllHTMLAttributes<HTMLElement>,
  'value' | 'valid' | 'invalid' | 'options' | 'className'
>;

const getOptionElement = ({value, label}: SelectOptionType) => (
  <option key={value} value={value}>
    {label}
  </option>
);

const Select = React.forwardRef<HTMLSelectElement, SelectPropsType>(
  (props: SelectPropsType, ref) => {
    const {
      valid,
      invalid,
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
        'sg-select--selected': value,
        'sg-select--valid': valid,
        'sg-select--invalid': invalid,
      },
      className
    );
    const optionsElements = options.map((item, index) => {
      if ('options' in item) {
        return (
          <optgroup key={item.label + index} label={item.label}>
            {item.options.map(getOptionElement)}
          </optgroup>
        );
      }

      if (item.label || item.value) {
        return getOptionElement(item);
      }

      return null;
    });

    return (
      <div className={selectClass}>
        <div className="sg-select__icon">
          <Icon type="caret_down" color="icon-gray-50" />
        </div>

        <select
          {...additionalProps}
          className="sg-select__element"
          value={value}
          ref={ref}
        >
          {optionsElements}
        </select>
      </div>
    );
  }
);

Select.displayName = 'SelectNew';
export default Select;
