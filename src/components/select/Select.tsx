import * as React from 'react';
import classnames from 'classnames';
import {useFloating} from '@floating-ui/react';

import Icon from '../icons/Icon';
import {generateId, mergeRefs} from '../utils';

type SelectOptionElementPropsType = {
  option: SelectOptionType;
  isSelected?: boolean;
  onClick: (string) => unknown;
};

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

  onClick?: (arg0: React.MouseEvent<HTMLDivElement>) => unknown;

  onOptionChange: (string) => unknown;

  expanded?: boolean;

  /**
   * Additional class names
   */
  className?: string;
} & Omit<
  React.AllHTMLAttributes<HTMLElement>,
  'value' | 'valid' | 'invalid' | 'options' | 'className'
>;

const getOptionElement = ({
  option,
  isSelected,
  onClick,
}: SelectOptionElementPropsType) => {
  const {value, label} = option;

  const optionElement = classnames('sg-select__option', {
    'sg-select__option--selected': isSelected,
  });

  return (
    <div
      key={value}
      className={optionElement}
      onClick={() => onClick(value)}
      role="option"
      aria-selected={isSelected}
    >
      {label}
    </div>
  );
};

const Select = React.forwardRef<HTMLDivElement, SelectPropsType>(
  (props: SelectPropsType, ref) => {
    const {
      valid,
      invalid,
      value,
      className,
      options = [],
      expanded = false,
      onClick,
      onOptionChange,
      ...additionalProps
    } = props;
    const {current: id} = React.useRef<string>(`select-${generateId()}`);
    const {x, y, strategy, refs} = useFloating();

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
            {item.options.map(option =>
              getOptionElement({
                option,
                isSelected: option.value === value,
                onClick: onOptionChange,
              })
            )}
          </optgroup>
        );
      }

      if (item.label || item.value) {
        return getOptionElement({
          option: item,
          isSelected: item.value === value,
          onClick: onOptionChange,
        });
      }

      return null;
    });

    return (
      <div className={selectClass}>
        <div
          ref={mergeRefs(ref, refs.setReference)}
          id={id}
          className="sg-select__element"
          onClick={onClick}
          role="combobox"
          tabIndex={0}
          aria-controls={`${id}-listbox`}
          aria-expanded={expanded}
          aria-haspopup="listbox"
          {...additionalProps}
        >
          {value}
          <div className="sg-select__icon">
            <Icon type="caret_down" color="icon-gray-50" />
          </div>
        </div>
        {expanded && (
          <div
            ref={refs.setFloating}
            style={{
              position: strategy,
              top: y ?? 0,
              left: x ?? 0,
              width: 'max-content',
            }}
            role="listbox"
            id={`${id}-listbox`}
            tabIndex={-1}
          >
            {optionsElements}
          </div>
        )}
      </div>
    );
  }
);

Select.displayName = 'SelectNew';
export default Select;
