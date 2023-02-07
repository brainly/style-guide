import * as React from 'react';
import classnames from 'classnames';

import Icon from '../icons/Icon';
import type {IconTypeType} from '../subject-icons/SubjectIcon';
import {mergeRefs} from '../utils';
import useSelect from './useSelect';
import useFloatingSelect from './useFloatingSelect';
import SelectOption from './SelectOption';

export type SelectOptionType = {
  value: string;
  label: string;
  iconName?: IconTypeType;
};

export type SelectPropsType = {
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
   * @example <Select options={[{value: 'option1', label: 'Option1'},{value: 'option2', label: 'Select selector'}]} />
   */
  options?: ReadonlyArray<SelectOptionType>;
  selectedOptions?: ReadonlyArray<SelectOptionType>;

  onClick?: (arg0: React.MouseEvent<HTMLDivElement>) => unknown;

  onOptionChange: (SelectOptionType) => unknown;

  onToggle: (boolean) => unknown;

  multiSelect?: boolean;
  expanded?: boolean;
  defaultExpanded?: boolean;
  withIcons?: boolean;
  fullWidth?: boolean;

  /**
   * Additional class names
   */
  className?: string;
} & Omit<
  React.AllHTMLAttributes<HTMLElement>,
  'valid' | 'invalid' | 'options' | 'className'
>;

const Select = React.forwardRef<HTMLDivElement, SelectPropsType>(
  (props: SelectPropsType, ref) => {
    const {
      valid,
      invalid,
      selectedOptions = [],
      placeholder = 'Select...',
      className,
      options = [],
      expanded = undefined,
      defaultExpanded = undefined,
      withIcons = false,
      multiSelect = false,
      fullWidth = false,
      onClick,
      onToggle,
      onOptionChange,
      ...additionalProps
    } = props;

    const {
      id,
      isExpanded,
      onOpenChange,
      handleOptionSelect,
      selectDisplayValue,
    } = useSelect({
      valid,
      invalid,
      expanded,
      defaultExpanded,
      multiSelect,
      placeholder,
      withIcons,
      selectedOptions,
      onToggle,
      onOptionChange,
    });

    const floating = useFloatingSelect({
      isExpanded,
      onOpenChange,
    });

    const optionsElements = options.map((option, index) => {
      if (option.label || option.value) {
        const isSelected =
          selectedOptions.length &&
          !!selectedOptions.find(
            selectedOption => selectedOption.value === option.value
          );

        const optionInteractions = floating.interactions.getItemProps({
          // Handle pointer select.
          onClick() {
            handleOptionSelect(option);
          },
          // Handle keyboard select.
          onKeyDown(event) {
            if (event.key === 'Enter') {
              event.preventDefault();
              handleOptionSelect(option);
            }

            // Only if not using typeahead.
            if (event.key === ' ' && !floating.context.dataRef.current.typing) {
              event.preventDefault();
              handleOptionSelect(option);
            }
          },
        });

        return (
          <SelectOption
            key={option.value}
            ref={node => {
              floating.listRef.current[index] = node;
            }}
            option={option}
            isSelected={isSelected}
            multiSelect={multiSelect}
            withIcon={withIcons}
            interactions={optionInteractions}
          />
        );
      }
      return null;
    });

    const selectClass = classnames(
      'sg-select-new',
      {
        'sg-select-new--selected': selectedOptions.length,
        'sg-select-new--valid': valid,
        'sg-select-new--invalid': invalid,
        'sg-select-new--full-width': fullWidth,
      },
      className
    );

    return (
      <div className={selectClass}>
        <div
          ref={mergeRefs(ref, floating.refs.setReference)}
          id={id}
          className="sg-select-new__element"
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
          {selectDisplayValue}
          <div className="sg-select-new__element-icon">
            <Icon
              type={isExpanded ? 'caret_up' : 'caret_down'}
              color="icon-gray-50"
            />
          </div>
        </div>
        {isExpanded && (
          <div
            ref={floating.refs.setFloating}
            className="sg-select-new__options-wrapper"
            style={{
              position: floating.props.strategy,
              top: floating.props.y ?? 0,
              left: floating.props.x ?? 0,
              overflowY: 'auto',
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
