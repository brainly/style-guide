import * as React from 'react';
import classnames from 'classnames';

import {SelectOptionType} from './Select';
import SubjectIcon from '../subject-icons/SubjectIcon';
import Checkbox from '../form-elements/checkbox/Checkbox';

export type SelectOptionElementPropsType = {
  option: SelectOptionType;
  isSelected?: boolean;
  withIcon?: boolean;
  multiSelect?: boolean;
  interactions: Record<string, unknown>;
};

const SelectOption = React.forwardRef<
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
    }: SelectOptionElementPropsType,
    ref
  ) => {
    const {value, label, iconName} = option;

    const classNames = classnames('sg-select__option', {
      'sg-select__option--selected': isSelected,
      'sg-select__option--with-icon': withIcon,
    });

    return (
      <div
        key={value}
        ref={ref}
        className={classNames}
        role="option"
        aria-selected={isSelected}
        {...interactions}
      >
        {withIcon && <SubjectIcon size="small" type={iconName} />}
        {label}
        {multiSelect && <Checkbox id={option.value} checked={isSelected} />}
      </div>
    );
  }
);

export default SelectOption;
