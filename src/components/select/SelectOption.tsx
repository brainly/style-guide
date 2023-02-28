import * as React from 'react';
import classnames from 'classnames';

import {SelectOptionType} from './Select';
import SubjectIcon from '../subject-icons/SubjectIcon';
import Icon from '../icons/Icon';
import Checkbox from '../form-elements/checkbox/Checkbox';
import Text from '../text/Text';

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
    const [isHovered, setIsHovered] = React.useState(false);
    const {value, label, iconName} = option;

    const classNames = classnames('sg-select-new__option', {
      'sg-select-new__option--selected': isSelected,
      'sg-select-new__option--with-icon': withIcon,
      'sg-select-new__option--multi-select': multiSelect,
    });

    const icon = React.useMemo(() => {
      if (!withIcon || !iconName) return null;

      if (isSelected || isHovered)
        return <SubjectIcon size="small" type={iconName} />;
      else
        return (
          <SubjectIcon size="small" monoColor="icon-gray-50" type={iconName} />
        );
    }, [isSelected, isHovered, withIcon, iconName]);

    const optionState = React.useMemo(() => {
      let optionState;

      if (multiSelect) {
        optionState = <Checkbox id={option.value} checked={isSelected} />;
      } else if (isSelected) {
        optionState = <Icon type="check" size={24} color="icon-black" />;
      }

      return <div className="sg-select-new__option-state">{optionState}</div>;
    }, [isSelected, multiSelect, option.value]);

    return (
      <div
        key={value}
        ref={ref}
        className={classNames}
        role="option"
        aria-selected={isSelected}
        {...interactions}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="sg-select-new__option-label">
          {icon}
          <Text size="small" weight="bold" breakWords>
            {label}
          </Text>
        </div>
        {optionState}
      </div>
    );
  }
);

export default SelectOption;
