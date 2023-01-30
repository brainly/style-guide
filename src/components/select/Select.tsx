import * as React from 'react';
import classnames from 'classnames';

import Icon from '../icons/Icon';
import {mergeRefs} from '../utils';
import useSelect from './useSelect';
import useFloatingSelect from './useFloatingSelect';

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
   * Optional specification for select placeholder
   * @example <Select value="Option1" placeholder="Select an option" options={[{value: 'option1', label: 'Option1'},{value: 'option2', label: 'Select selector'}]} />
   */
  placeholder?: string;

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

  onToggle: (boolean) => unknown;

  expanded?: boolean;
  defaultExpanded?: boolean;

  /**
   * Additional class names
   */
  className?: string;
} & Omit<
  React.AllHTMLAttributes<HTMLElement>,
  'value' | 'valid' | 'invalid' | 'options' | 'className'
>;

const Select = React.forwardRef<HTMLDivElement, SelectPropsType>(
  (props: SelectPropsType, ref) => {
    const {
      valid,
      invalid,
      value,
      placeholder = 'Select...',
      className,
      options = [],
      expanded = undefined,
      defaultExpanded = undefined,
      onClick,
      onToggle,
      onOptionChange,
      ...additionalProps
    } = props;

    const {id, isExpanded, onOpenChange, handleOptionSelect} = useSelect({
      valid,
      invalid,
      expanded,
      defaultExpanded,
      onToggle,
      onOptionChange,
    });

    const floating = useFloatingSelect({
      isExpanded,
      onOpenChange,
    });

    const getOptionElement = ({
      option,
      isSelected,
    }: SelectOptionElementPropsType) => {
      const {value, label} = option;

      const optionElement = classnames('sg-select__option', {
        'sg-select__option--selected': isSelected,
      });

      return (
        <div
          key={value}
          className={optionElement}
          role="option"
          aria-selected={isSelected}
          {...floating.interactions.getItemProps({
            // Handle pointer select.
            onClick() {
              handleOptionSelect(value);
            },
            // Handle keyboard select.
            onKeyDown(event) {
              if (event.key === 'Enter') {
                event.preventDefault();
                handleOptionSelect(value);
              }

              // Only if not using typeahead.
              if (
                event.key === ' ' &&
                !floating.context.dataRef.current.typing
              ) {
                event.preventDefault();
                handleOptionSelect(value);
              }
            },
          })}
        >
          {label}
        </div>
      );
    };
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

    const selectClass = classnames(
      'sg-select',
      {
        'sg-select--selected': value,
        'sg-select--valid': valid,
        'sg-select--invalid': invalid,
      },
      className
    );

    return (
      <div className={selectClass}>
        <div
          ref={mergeRefs(ref, floating.refs.setReference)}
          id={id}
          className="sg-select__element"
          role="combobox"
          tabIndex={0}
          aria-controls={`${id}-listbox`}
          aria-expanded={isExpanded}
          aria-haspopup="listbox"
          {...floating.interactions.getReferenceProps({
            // Handle pointer
            onClick() {
              onOpenChange(isExpanded);
            },
            // Handle keyboard
            onKeyDown(event) {
              if (event.key === 'Enter') {
                event.preventDefault();
                onOpenChange(isExpanded);
              }
            },
          })}
          {...additionalProps}
        >
          {value || placeholder}
          <div className="sg-select__icon">
            <Icon type="caret_down" color="icon-gray-50" />
          </div>
        </div>
        {isExpanded && (
          <div
            ref={floating.refs.setFloating}
            style={{
              position: floating.props.strategy,
              top: floating.props.y ?? 0,
              left: floating.props.x ?? 0,
            }}
            role="listbox"
            id={`${id}-listbox`}
            tabIndex={-1}
            {...floating.interactions.getFloatingProps()}
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
