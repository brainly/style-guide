import * as React from 'react';
import classnames from 'classnames';
import {
  FloatingFocusManager,
  FloatingOverlay,
  useMergeRefs,
} from '@floating-ui/react';

import {isTouchScreen, __DEV__, invariant, generateId} from '../utils';
import Icon from '../icons/Icon';
import SubjectIcon from '../subject-icons/SubjectIcon';
import type {IconTypeType as SubjectIconTypeType} from '../subject-icons/SubjectIcon';
import type {IconTypeType} from '../icons/Icon';
import Text from '../text/Text';
import useSelect from './useSelect';
import useFloatingSelect from './useFloatingSelect';
import useSelectAnimations from './useSelectAnimations';
import SelectOption from './SelectOption';

export type SelectOptionType = {
  value: string;
  label: string;
  icon?: {
    name: IconTypeType | SubjectIconTypeType;
    isSubjectIcon?: boolean;
  };
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

type SelectColorType = 'default' | 'white';

export const COLOR = {
  DEFAULT: 'default',
  WHITE: 'white',
} as const;

export type SelectPropsType = {
  /**
   * Optional string. Additional class names.
   */
  className?: string;

  /**
   * Optional string. Select placeholder text.
   * @example <Select placeholder="Select an option" options={[{value: 'option1', label: 'Option1'},{value: 'option2', label: 'Select selector'}]} />
   * @default 'Select...'
   */
  placeholder?: string;

  /**
   * Optional boolean. Set to true if select is valid.
   * @example <Select valid options={[{value: 'option1', label: 'Option1'},{value: 'option2', label: 'Select selector'}]} />
   * @default false
   * */
  valid?: boolean;

  /**
   * Optional boolean. Set to true if select is invalid.
   * @example <Select invalid options={[{value: 'option1', label: 'Option1'},{value: 'option2', label: 'Select selector'}]} />
   * @default false
   */
  invalid?: boolean;

  /**
   * Optional array. Select options.
   * @example <Select options={[{value: 'option1', label: 'Option1'},{value: 'option2', label: 'Select selector'}]} />
   * @default []
   */
  options?: ReadonlyArray<SelectOptionType>;

  /**
   * Optional array. Select selected options.
   * @example <Select options={[{value: 'option1', label: 'Option1'},{value: 'option2', label: 'Select selector'}]} selectedOptions={[{value: 'option1', label: 'Option1'}]} />
   * @default []
   */
  selectedOptions?: ReadonlyArray<SelectOptionType>;

  /**
   * Optional boolean. Set to true, if user can select multiple options.
   * @example <Select multiSelect options={[{value: 'option1', label: 'Option1'},{value: 'option2', label: 'Select selector'}]} />
   */
  multiSelect?: boolean;

  /**
   * Optional boolean. Set when you want to manually controll select popup menu appearance. If not set, the component will manage it itself.
   * @example <Select expanded={false} options={[{value: 'option1', label: 'Option1'},{value: 'option2', label: 'Select selector'}]} selectedOptions={[{value: 'option1', label: 'Option1'}]} />
   * @default undefined
   */
  expanded?: boolean;

  /**
   * Optional boolean. Set when you want to display select popup menu on first render, but you want the component manage it's expanded state itself.
   * @example <Select defaultExpanded options={[{value: 'option1', label: 'Option1'},{value: 'option2', label: 'Select selector'}]} selectedOptions={[{value: 'option1', label: 'Option1'}]} />
   * @default undefined
   */
  defaultExpanded?: boolean;

  /**
   * Optional boolean. Set to `true` when you want to display option icon (if it has any).
   * @example <Select withIcons options={[{value: 'option1', label: 'Option1', iconName: 'physics'},{value: 'option2', label: 'Select selector', iconName: 'chemistry'}]} selectedOptions={[{value: 'option1', label: 'Option1'}]} />
   * @default false
   */
  withIcons?: boolean;

  /**
   * Optional boolean. Set to `true` if you want to disable select.
   * @example <Select disabled />
   */
  disabled?: boolean;

  /**
   * Set to change the Select size. There are three sizes options: `s`, `m` and `l`.
   * @example <Select size="s" options={[{value: 'option1', text: 'Option1'},{value: 'option2', text: 'Select selector'}]} />
   * @default "m"
   */
  size?: SelectSizeType;

  /**
   * There are two color variants, `default` and `white`. The default does not have to be specified.
   * @example <Select color="white" options={[{value: 'option1', label: 'Option1'},{value: 'option2', label: 'Select selector'}]} />
   */
  color?: SelectColorType | null | undefined;

  /**
   * Optional callback. Called by clicking on the any part of the Select component.
   * @example <Select
   *           onClick={(e) => console.log(e.target)}
   *           options={[{value: 'option1', label: 'Option1'},{value: 'option2', label: 'Select selector'}]}
   *          />
   */
  onClick?: (arg0: React.MouseEvent<HTMLDivElement>) => unknown;

  /**
   * Callback. Called by selecting an option.
   * @example <Select
   *           onOptionChange={({value, label, iconName}) => {
   *              // update component selected options array
   *           }}
   *           options={[{value: 'option1', label: 'Option1'},{value: 'option2', label: 'Select selector'}]}
   *          />
   */
  onOptionChange: (SelectOptionType) => unknown;

  /**
   * Callback. Called only when expanded state is controlled, called when component informs the expanded state should change.
   * @example <Select
   *           onToggle={(isOpen) => {
   *              // set component expanded state to isOpen state
   *           }}
   *           options={[{value: 'option1', label: 'Option1'},{value: 'option2', label: 'Select selector'}]}
   *          />
   */
  onToggle?: (boolean) => unknown;
} & Omit<
  React.AllHTMLAttributes<HTMLElement>,
  | 'className'
  | 'placeholder'
  | 'valid'
  | 'invalid'
  | 'options'
  | 'selectedOptions'
  | 'multiSelect'
  | 'expanded'
  | 'defaultExpanded'
  | 'withIcons'
  | 'disabled'
  | 'size'
  | 'color'
  | 'onClick'
  | 'onOptionChange'
  | 'onToggle'
>;

const Select = React.forwardRef<HTMLDivElement, SelectPropsType>(
  (props: SelectPropsType, ref) => {
    const {
      className,
      valid,
      invalid,
      disabled,
      color,
      selectedOptions = [],
      placeholder = 'Select...',
      options = [],
      expanded = undefined,
      defaultExpanded = undefined,
      withIcons = false,
      multiSelect = false,
      size = DEFAULT_SIZE,
      onClick,
      onToggle,
      onOptionChange,
      ...additionalProps
    } = props;

    const {current: id} = React.useRef<string>(`select-${generateId()}`);

    if (__DEV__) {
      invariant(
        !(valid && invalid),
        `Select cannot be valid and invalid at the same time.`
      );
    }
    const wrapperId = `${id}-wrapper`;
    const popupClassName = 'sg-select-new__popup';
    const popupContentClassName = 'sg-select-new__options-wrapper';
    const selectElementClassName = 'sg-select-new__element';
    const selectElementIconClassName = 'sg-select-new__element-icon';
    const floatingContainerClassName =
      'sg-select-new__options-floating-container';

    const {animateEntry, animateExit} = useSelectAnimations({
      selectId: wrapperId,
      floatingContainerClassName,
      popupClassName,
      popupContentClassName,
      selectElementClassName,
      selectElementIconClassName,
    });

    const {isExpanded, onOpenChange, handleOptionSelect} = useSelect({
      id,
      valid,
      invalid,
      expanded,
      defaultExpanded,
      disabled,
      multiSelect,
      onEntry: animateEntry,
      onExit: animateExit,
      onToggle,
      onOptionChange,
    });

    const {
      interactions,
      floatingProps,
      refs,
      listRef,
      context,
      isMounted,
      activeIndex,
    } = useFloatingSelect({
      isExpanded,
      onOpenChange,
    });

    const optionsElements = options.map((option, index) => {
      if (option.label || option.value) {
        const isSelected = Boolean(
          selectedOptions.length &&
            !!selectedOptions.find(
              selectedOption => selectedOption.value === option.value
            )
        );

        const optionInteractions = interactions.getItemProps({
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
            if (event.key === ' ' && !context.dataRef.current.typing) {
              event.preventDefault();
              handleOptionSelect(option);
            }
          },
        });

        return (
          <SelectOption
            key={option.value}
            ref={node => {
              listRef.current[index] = node;
            }}
            option={option}
            isSelected={isSelected}
            multiSelect={multiSelect}
            withIcon={withIcons}
            interactions={optionInteractions}
            tabIndex={index === activeIndex ? 0 : -1}
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
            color="text-gray-60"
          >
            {placeholder}
          </Text>
        );

      if (selectedOptions.length === 1) {
        const {label, icon} = selectedOptions[0] || {};

        const displayLabel = (
          <Text
            size="small"
            className="sg-select-new__element-label"
            aria-label={label}
          >
            {label}
          </Text>
        );

        if (withIcons && icon?.name) {
          const {name, isSubjectIcon = false} = icon || {};

          let displayedIcon;

          if (isSubjectIcon) {
            const iconName = name as SubjectIconTypeType;

            // Add an icon name key so only icon different
            // from the previous one will have opacity animation
            displayedIcon = (
              <SubjectIcon
                key={iconName}
                className="sg-select-new__element-label-icon"
                size="small"
                type={iconName}
              />
            );
          } else {
            const iconName = name as IconTypeType;

            // Add an icon name key so only icon different
            // from the previous one will have opacity animation
            displayedIcon = (
              <Icon
                key={iconName}
                className="sg-select-new__element-label-icon"
                size={24}
                color="icon-black"
                type={iconName}
              />
            );
          }
          return (
            <>
              {displayedIcon}
              {displayLabel}
            </>
          );
        }

        return displayLabel;
      } else {
        const label = [];

        selectedOptions.map(option => label.push(option.label));
        const labelString = label.join(', ');

        return (
          <Text
            size="small"
            className="sg-select-new__element-label"
            aria-label={labelString}
          >
            {labelString}
          </Text>
        );
      }
    }, [placeholder, withIcons, selectedOptions]);

    const selectClass = classnames(
      'sg-select-new',
      {
        'sg-select-new--selected': selectedOptions.length,
        'sg-select-new--valid': valid,
        'sg-select-new--invalid': invalid,
        'sg-select-new--disabled': disabled,
        [`sg-select-new--${String(size)}`]: size && size !== DEFAULT_SIZE,
        [`sg-select-new--${String(color)}`]: color,
      },
      className
    );

    const selectRef = useMergeRefs([ref, refs.setReference]);

    return (
      <div id={wrapperId} className={selectClass} onClick={onClick}>
        <div
          ref={selectRef}
          id={id}
          className={selectElementClassName}
          role="combobox"
          tabIndex={disabled ? -1 : 0}
          aria-disabled={disabled}
          aria-invalid={invalid ? true : undefined}
          aria-controls={`${id}-listbox`}
          aria-expanded={isExpanded}
          aria-haspopup="listbox"
          aria-multiselectable={multiSelect}
          {...interactions.getReferenceProps({
            // Handle pointer
            onClick() {
              if (!disabled) onOpenChange(!isExpanded);
            },
            // Handle keyboard
            onKeyDown(event) {
              if (event.key === 'Enter' && !disabled) {
                event.preventDefault();
                onOpenChange(!isExpanded);
              }
            },
          })}
          {...additionalProps}
        >
          {selectDisplayValue}
          <div className={selectElementIconClassName}>
            <Icon
              type="caret_down"
              size={ICON_SIZE_MAP[size]}
              color="icon-gray-70"
            />
          </div>
        </div>
        {isMounted && (
          <FloatingOverlay lockScroll={!isTouchScreen()} style={{zIndex: 1}}>
            <FloatingFocusManager
              context={context}
              modal={false}
              visuallyHiddenDismiss
            >
              <div
                ref={refs.setFloating}
                className={floatingContainerClassName}
                style={{
                  position: floatingProps.strategy,
                  top: floatingProps.y ?? 0,
                  left: floatingProps.x ?? 0,
                  minWidth: 120,
                  width: 'max-content',
                  maxWidth: 320,
                }}
                {...interactions.getFloatingProps()}
                tabIndex={-1}
                data-placement={floatingProps.placement}
              >
                <div
                  className={popupClassName}
                  data-placement={floatingProps.placement}
                  tabIndex={activeIndex === null ? 0 : -1}
                  role="presentation"
                >
                  <div
                    className={popupContentClassName}
                    id={`${id}-listbox`}
                    role="presentation"
                  >
                    {optionsElements}
                  </div>
                </div>
              </div>
            </FloatingFocusManager>
          </FloatingOverlay>
        )}
      </div>
    );
  }
);

Select.displayName = 'SelectNew';
export default Select;
