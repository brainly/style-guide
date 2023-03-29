import * as React from 'react';
import classnames from 'classnames';

import {OptionType} from './SelectMenu';
import type {IconTypeType as SubjectIconTypeType} from '../subject-icons/SubjectIcon';
import type {IconTypeType} from '../icons/Icon';

import SubjectIcon from '../subject-icons/SubjectIcon';
import Icon from '../icons/Icon';
import Checkbox from '../form-elements/checkbox/Checkbox';
import Text from '../text/Text';
import useSelectMenuContext from './useSelectMenuContext';

export type SelectOptionElementPropsType = {
  children: React.ReactNode;
  value: string;
  icon?: {
    name: IconTypeType | SubjectIconTypeType;
    isSubjectIcon?: boolean;
  };
  isSelected?: boolean;
  tabIndex: number;
};

const SelectMenuOption = React.forwardRef<
  HTMLDivElement,
  SelectOptionElementPropsType
>(
  (
    {children, value, icon, isSelected, tabIndex}: SelectOptionElementPropsType,
    ref
  ) => {
    const [isHovered, setIsHovered] = React.useState(false);

    const context = useSelectMenuContext();

    const classNames = classnames('sg-select-menu__option', {
      'sg-select-menu__option--selected': isSelected,
      'sg-select-menu__option--with-icon': context.withIcons,
      'sg-select-menu__option--multi-select': context.multiSelect,
    });

    const displayedIcon = React.useMemo(() => {
      const {name, isSubjectIcon = false} = icon || {};

      if (!context.withIcons || (context.withIcons && !name)) return null;
      if (isSubjectIcon) {
        const subjectIconName = name as SubjectIconTypeType;

        return (
          <SubjectIcon
            size="small"
            monoColor={isSelected || isHovered ? null : 'icon-gray-50'}
            type={subjectIconName}
          />
        );
      } else {
        const regularIconName = name as IconTypeType;

        return (
          <Icon
            size={24}
            color={isSelected || isHovered ? 'icon-black' : 'icon-gray-50'}
            type={regularIconName}
          />
        );
      }
    }, [isSelected, isHovered, context, icon]);

    const optionState = React.useMemo(() => {
      let optionState;

      if (context.multiSelect) {
        optionState = <Checkbox id={value} checked={isSelected} />;
      } else if (isSelected) {
        optionState = <Icon type="check" size={24} color="icon-black" />;
      }

      return <div className="sg-select-menu__option-state">{optionState}</div>;
    }, [isSelected, context, value]);

    const interactions = context.interactions.getItemProps({
      // Handle pointer select.
      onClick() {
        context.handleOptionSelect({value, icon, label: children});
      },
      // Handle keyboard select.
      onKeyDown(event) {
        if (event.key === 'Enter') {
          event.preventDefault();
          context.handleOptionSelect({value, icon, label: children});
        }

        // Only if not using typeahead.
        if (event.key === ' ') {
          event.preventDefault();
          context.handleOptionSelect({value, icon, label: children});
        }
      },
    });

    return (
      <div
        key={value}
        ref={ref}
        className={classNames}
        role="option"
        aria-selected={isSelected}
        tabIndex={tabIndex}
        {...interactions}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="sg-select-menu__option-label">
          {displayedIcon}
          <Text size="small" weight="bold" breakWords>
            {children}
          </Text>
        </div>
        {optionState}
      </div>
    );
  }
);

export default SelectMenuOption;
