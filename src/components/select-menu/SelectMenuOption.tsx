import * as React from 'react';
import classnames from 'classnames';

import {SelectMenuOptionType} from './SelectMenu';
import type {IconTypeType as SubjectIconTypeType} from '../subject-icons/SubjectIcon';
import type {IconTypeType} from '../icons/Icon';

import SubjectIcon from '../subject-icons/SubjectIcon';
import Icon from '../icons/Icon';
import Checkbox from '../form-elements/checkbox/Checkbox';
import Text from '../text/Text';

export type SelectOptionElementPropsType = {
  option: SelectMenuOptionType;
  isSelected?: boolean;
  withIcon?: boolean;
  multiSelect?: boolean;
  interactions: Record<string, unknown>;
  tabIndex: number;
};

const SelectMenuOption = React.forwardRef<
  HTMLDivElement,
  SelectOptionElementPropsType
>(
  (
    {
      option,
      isSelected,
      withIcon = false,
      multiSelect = false,
      interactions,
      tabIndex,
    }: SelectOptionElementPropsType,
    ref
  ) => {
    const [isHovered, setIsHovered] = React.useState(false);
    const {value, label, icon} = option;

    const classNames = classnames('sg-select-menu__option', {
      'sg-select-menu__option--selected': isSelected,
      'sg-select-menu__option--with-icon': withIcon,
      'sg-select-menu__option--multi-select': multiSelect,
    });

    const displayedIcon = React.useMemo(() => {
      const {name, isSubjectIcon = false} = icon || {};

      if (!withIcon || (withIcon && !name)) return null;
      if (isSubjectIcon) {
        const subjectIconName = name as SubjectIconTypeType;

        return (
          <SubjectIcon
            size="small"
            // @ts-expect-error TS2322
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
    }, [isSelected, isHovered, withIcon, icon]);

    const optionState = React.useMemo(() => {
      let optionState;

      if (multiSelect) {
        optionState = <Checkbox id={option.value} checked={isSelected} />;
      } else if (isSelected) {
        optionState = <Icon type="check" size={24} color="icon-black" />;
      }

      return (
        <div className="sg-select-menu__option-state" aria-hidden>
          {optionState}
        </div>
      );
    }, [isSelected, multiSelect, option.value]);

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
            {label}
          </Text>
        </div>
        {optionState}
      </div>
    );
  }
);

export default SelectMenuOption;
