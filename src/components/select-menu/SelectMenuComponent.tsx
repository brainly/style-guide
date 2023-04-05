import * as React from 'react';
import cx from 'classnames';
import {
  FloatingFocusManager,
  FloatingOverlay,
  useMergeRefs,
} from '@floating-ui/react';

import {isTouchScreen} from '../utils';
import Icon from '../icons/Icon';
import SubjectIcon from '../subject-icons/SubjectIcon';
import type {IconTypeType as SubjectIconTypeType} from '../subject-icons/SubjectIcon';
import type {IconTypeType} from '../icons/Icon';
import Text from '../text/Text';
import useSelectMenuContext from './useSelectMenuContext';

export type SelectMenuSizeType = 's' | 'm' | 'l';

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

export type SelectMenuColorType = 'default' | 'white';

export const COLOR = {
  DEFAULT: 'default',
  WHITE: 'white',
} as const;

export type SelectMenuPropsType = {
  /**
   * SelectMenu inner elements
   * @example <SelectMenu.Root><SelectMenu.Option value="option1">Option 1</SelectMenu.Option></SelectMenu.Root>
   */
  children?: React.ReactNode;

  /**
   * Optional string. Additional class names.
   */
  className?: string;
} & Omit<React.AllHTMLAttributes<HTMLElement>, 'children' | 'className'>;

const SelectMenuComponent = React.forwardRef<
  HTMLDivElement,
  SelectMenuPropsType
>((props: SelectMenuPropsType, ref) => {
  const {children, className, ...additionalProps} = props;

  const {
    id,
    ids,
    classNames,
    isExpanded,
    size,
    color,
    disabled,
    multiSelect,
    valid,
    invalid,
    floating,
    selectedOptions,
    placeholder,
    withIcons,
    onOpenChange,
    onClick,
  } = useSelectMenuContext();

  const selectDisplayValue = React.useMemo(() => {
    if (!selectedOptions.length)
      return (
        <Text
          className="sg-select-menu__placeholder"
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
          className="sg-select-menu__element-label"
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
              className="sg-select-menu__element-label-icon"
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
              className="sg-select-menu__element-label-icon"
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
          className="sg-select-menu__element-label"
          aria-label={labelString}
        >
          {labelString}
        </Text>
      );
    }
  }, [placeholder, withIcons, selectedOptions]);

  const selectClass = cx(
    'sg-select-menu',
    {
      'sg-select-menu--selected': selectedOptions.length,
      'sg-select-menu--valid': valid,
      'sg-select-menu--invalid': invalid,
      'sg-select-menu--disabled': disabled,
      [`sg-select-menu--${String(size)}`]: size && size !== DEFAULT_SIZE,
      [`sg-select-menu--${String(color)}`]: color,
    },
    className
  );

  const selectRef = useMergeRefs([ref, floating.refs.setReference]);

  // this is to not block clicking and hovering outside
  // when the exit animation plays
  const overlayPointerEvents =
    floating.status === 'open' || floating.status === 'initial'
      ? 'all'
      : 'none';

  return (
    <div id={ids.wrapperId} className={selectClass} onClick={onClick}>
      <div
        ref={selectRef}
        id={id}
        className={classNames.selectElementClassName}
        role="combobox"
        tabIndex={disabled ? -1 : 0}
        aria-disabled={disabled}
        aria-invalid={invalid ? true : undefined}
        aria-controls={`${id}-listbox`}
        aria-expanded={isExpanded}
        aria-haspopup="listbox"
        aria-multiselectable={multiSelect}
        data-status={floating.status}
        {...floating.interactions.getReferenceProps()}
        {...additionalProps}
      >
        {selectDisplayValue}
        <div className="sg-select-menu__element-icon">
          <Icon
            type="caret_down"
            size={ICON_SIZE_MAP[size]}
            color="icon-gray-70"
          />
        </div>
      </div>
      {floating.isMounted && (
        <FloatingOverlay
          lockScroll={!isTouchScreen()}
          style={{
            zIndex: 1,
            pointerEvents: overlayPointerEvents,
          }}
        >
          <FloatingFocusManager
            context={floating.context}
            modal={false}
            visuallyHiddenDismiss
          >
            <div
              ref={floating.refs.setFloating}
              className={classNames.floatingContainerClassName}
              style={{
                position: floating.floatingProps.strategy,
                top: floating.floatingProps.y ?? 0,
                left: floating.floatingProps.x ?? 0,
                minWidth: 120,
                width: 'max-content',
                maxWidth: 320,
                zIndex: 1,
              }}
              {...floating.interactions.getFloatingProps()}
              tabIndex={-1}
              data-placement={floating.floatingProps.placement}
            >
              <div
                className={classNames.popupClassName}
                data-placement={floating.floatingProps.placement}
                tabIndex={floating.activeIndex === null ? 0 : -1}
                role="presentation"
              >
                <div
                  className={classNames.popupContentClassName}
                  id={`${id}-listbox`}
                  role="presentation"
                >
                  {children}
                </div>
              </div>
            </div>
          </FloatingFocusManager>
        </FloatingOverlay>
      )}
    </div>
  );
});

SelectMenuComponent.displayName = 'SelectMenuComponent';

export default SelectMenuComponent;
