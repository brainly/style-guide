import * as React from 'react';

import {generateId} from '../utils';
import type {SelectPropsType, SelectOptionType} from './Select';
import SubjectIcon from '../subject-icons/SubjectIcon';
import type {IconTypeType} from '../subject-icons/SubjectIcon';
import Text from '../text/Text';
type UseSelectPropsType = Pick<
  SelectPropsType,
  | 'valid'
  | 'invalid'
  | 'expanded'
  | 'defaultExpanded'
  | 'multiSelect'
  | 'placeholder'
  | 'withIcons'
  | 'selectedOptions'
  | 'onToggle'
  | 'onOptionChange'
>;

const useSelect = (props: UseSelectPropsType) => {
  const {
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
  } = props;

  const {current: id} = React.useRef<string>(`select-${generateId()}`);
  const [isExpanded, setIsExpanded] = React.useState(
    expanded || defaultExpanded || false
  );
  const isExpandedControlled = expanded !== undefined;

  // Handle expanded change when controlled
  React.useEffect(() => {
    if (isExpandedControlled) setIsExpanded(expanded);
  }, [isExpandedControlled, expanded]);

  if (valid === true && invalid === true) {
    throw {
      name: 'WrongValidation',
      message: 'Select can be either valid or invalid!',
    };
  }

  const handleOptionSelect = (option: SelectOptionType) => {
    onOptionChange(option);
    if (!multiSelect) onOpenChange(false);
  };

  const onOpenChange = (isOpen: boolean) => {
    if (isExpandedControlled) onToggle(isOpen);
    else setIsExpanded(isOpen);
  };

  const selectDisplayValue = React.useMemo(() => {
    if (!selectedOptions.length) return placeholder;

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

  return {
    id,
    isExpanded,
    handleOptionSelect,
    onOpenChange,
    selectDisplayValue,
  };
};

export default useSelect;
