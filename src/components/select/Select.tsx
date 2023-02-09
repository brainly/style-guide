import * as React from 'react';
import classnames from 'classnames';

import Icon from '../icons/Icon';
import type {IconTypeType} from '../subject-icons/SubjectIcon';
import {mergeRefs} from '../utils';
import useSelect from './useSelect';
import useFloatingSelect from './useFloatingSelect';
import SelectOption from './SelectOption';
import SubjectIcon from '../subject-icons/SubjectIcon';
import Text from '../text/Text';

export type SelectOptionType = {
  value: string;
  label: string;
  iconName?: IconTypeType;
};

export type SelectSizeType = 's' | 'm' | 'l';

export const SIZE = {
  S: 's',
  M: 'm',
  L: 'l',
} as const;

const DEFAULT_SIZE = SIZE.M;

const ICON_SIZE_MAP = {
  [SIZE.L]: 32,
  [SIZE.M]: 24,
  [SIZE.S]: 16,
} as const;

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
   * There are two sizes options for most of the form elements
   * @example <Select size="m" options={[{value: 'option1', text: 'Option1'},{value: 'option2', text: 'Select selector'}]} />
   * @see size="m" https://styleguide.brainly.com/latest/docs/interactive.html?size="m"#select
   * @see size="l" https://styleguide.brainly.com/latest/docs/interactive.html?size="l"#select
   */
  size?: SelectSizeType;

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
      size = DEFAULT_SIZE,
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
      multiSelect,
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

    const selectDisplayValue = React.useMemo(() => {
      if (!selectedOptions.length)
        return (
          <Text
            className="sg-select-new__placeholder"
            size="small"
            color="text-gray-50"
          >
            {placeholder}
          </Text>
        );

      if (selectedOptions.length === 1) {
        const {label, iconName} = selectedOptions[0] || {};

        if (label) {
          const displayLabel = (
            <Text size="small" className="sg-select-new__element-label">
              {label}
            </Text>
          );

          if (withIcons) {
            return (
              <>
                <SubjectIcon size="small" type={iconName} />
                {displayLabel}
              </>
            );
          }

          return displayLabel;
        }
      } else {
        const label = [];

        selectedOptions.map(option => label.push(option.label));
        return label.join(', ');
      }
    }, [placeholder, withIcons, selectedOptions]);

    const selectClass = classnames(
      'sg-select-new',
      {
        'sg-select-new--selected': selectedOptions.length,
        'sg-select-new--valid': valid,
        'sg-select-new--invalid': invalid,
        'sg-select-new--full-width': fullWidth,
        [`sg-select-new--${String(size)}`]: size && size !== DEFAULT_SIZE,
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
              size={ICON_SIZE_MAP[size]}
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
              borderRadius: '16px',
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
